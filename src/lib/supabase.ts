import { createClient } from '@supabase/supabase-js';
import { validateContactForm, sanitizeInput } from './validation';
import { APIError, rateLimiter } from './api';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const supabase = supabaseUrl && supabaseAnonKey 
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

// Types
export interface ContactSubmission {
  id?: string;
  name: string;
  email: string;
  message: string;
  status?: 'new' | 'in_progress' | 'resolved';
  created_at?: string;
}

export interface Service {
  id?: string;
  title: string;
  description: string;
  icon: string;
  is_active?: boolean;
  created_at?: string;
  updated_at?: string;
}

// Contact form functions
export const submitContactForm = async (data: ContactSubmission) => {
  // Rate limiting
  if (!rateLimiter.isAllowed('contact-form', 3, 300000)) { // 3 attempts per 5 minutes
    throw new APIError('Too many submissions. Please wait before trying again.', 429);
  }

  // Validation
  const validation = validateContactForm(data);
  if (!validation.isValid) {
    throw new APIError(validation.errors.join(', '), 400);
  }

  // Sanitize inputs
  const sanitizedData = {
    name: sanitizeInput(data.name),
    email: sanitizeInput(data.email),
    message: sanitizeInput(data.message),
    status: 'new' as const
  };

  if (!supabase) {
    throw new APIError('Database not configured. Please set up Supabase to enable contact form submissions.', 503);
  }
  
  const { error } = await supabase
    .from('contact_submissions')
    .insert([sanitizedData]);
  
  if (error) {
    console.error('Database error:', error);
    throw new APIError('Failed to submit contact form. Please try again later.', 500);
  }
};

export const getContactSubmissions = async () => {
  if (!supabase) {
    throw new Error('Database not configured');
  }
  const { data, error } = await supabase
    .from('contact_submissions')
    .select('*')
    .order('created_at', { ascending: false });
  
  if (error) throw error;
  return data;
};

// Services functions
export const getServices = async () => {
  if (!supabase) {
    throw new Error('Database not configured');
  }
  const { data, error } = await supabase
    .from('services')
    .select('*')
    .eq('is_active', true)
    .order('created_at', { ascending: true });
  
  if (error) throw error;
  return data;
};

export const createService = async (service: Service) => {
  if (!supabase) {
    throw new Error('Database not configured');
  }
  const { data, error } = await supabase
    .from('services')
    .insert([service])
    .select()
    .single();
  
  if (error) throw error;
  return data;
};

export const updateService = async (id: string, updates: Partial<Service>) => {
  if (!supabase) {
    throw new Error('Database not configured');
  }
  const { data, error } = await supabase
    .from('services')
    .update({ ...updates, updated_at: new Date().toISOString() })
    .eq('id', id)
    .select()
    .single();
  
  if (error) throw error;
  return data;
};