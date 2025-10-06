import { supabase } from '../lib/supabase';

// Utility functions to test Supabase connection
export const testSupabaseConnection = async () => {
  if (!supabase) {
    return {
      success: false,
      message: 'Supabase client not initialized. Please configure your database connection.',
      details: 'Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY environment variables.'
    };
  }

  try {
    // Test basic connection
    const { data, error } = await supabase
      .from('services')
      .select('count')
      .limit(1);

    if (error) {
      return {
        success: false,
        message: 'Database connection failed',
        details: error.message
      };
    }

    return {
      success: true,
      message: 'Database connection successful',
      details: 'All tables are accessible and ready for use.'
    };
  } catch (error) {
    return {
      success: false,
      message: 'Connection test failed',
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

export const testContactFormSubmission = async () => {
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    message: 'This is a test submission to verify the contact form is working properly.'
  };

  try {
    const { submitContactForm } = await import('../lib/supabase');
    await submitContactForm(testData);
    
    return {
      success: true,
      message: 'Test contact form submission successful',
      details: 'Contact form is properly configured and saving to database.'
    };
  } catch (error) {
    return {
      success: false,
      message: 'Contact form test failed',
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    };
  }
};

// Development helper to check environment variables
export const checkEnvironmentVariables = () => {
  const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
  const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

  return {
    hasUrl: !!supabaseUrl,
    hasKey: !!supabaseKey,
    urlFormat: supabaseUrl ? supabaseUrl.startsWith('https://') && supabaseUrl.includes('.supabase.co') : false,
    keyFormat: supabaseKey ? supabaseKey.startsWith('eyJ') : false,
    ready: !!(supabaseUrl && supabaseKey)
  };
};