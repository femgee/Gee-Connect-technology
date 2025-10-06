import React, { useState } from 'react';
import { submitContactForm } from '../lib/supabase';
import { handleAPIError } from '../lib/api';
import { analytics } from '../lib/analytics';
import { DatabaseStatus } from './DatabaseStatus';
import { CheckCircle, AlertCircle, Loader2 } from 'lucide-react';

interface ContactFormProps {
  className?: string;
}

export const ContactForm: React.FC<ContactFormProps> = ({ className = '' }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    

    try {
      setStatus('loading');
      await submitContactForm(formData);
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
     analytics.trackContactFormSubmission(true);
      
      // Reset success message after 5 seconds
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(handleAPIError(error));
     analytics.trackContactFormSubmission(false, handleAPIError(error));
    }
  };

  if (status === 'success') {
    return (
      <div className={`bg-emerald-50 border border-emerald-200 rounded-lg p-6 text-center ${className}`}>
        <CheckCircle className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
        <h3 className="text-lg font-semibold text-emerald-800 mb-2">Message Sent Successfully!</h3>
        <p className="text-emerald-700">Thank you for contacting us. We'll get back to you soon.</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <DatabaseStatus />
      
      {status === 'error' && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center">
          <AlertCircle className="h-5 w-5 text-red-600 mr-3" />
          <span className="text-red-700">{errorMessage}</span>
        </div>
      )}
      
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Your full name"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          disabled={status === 'loading'}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="your@email.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          disabled={status === 'loading'}
          rows={4}
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          placeholder="Tell us about your project..."
          required
        />
      </div>
      
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-blue-700 text-white py-3 px-6 rounded-lg font-medium hover:bg-blue-800 transition-colors duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
      >
        {status === 'loading' ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin mr-2" />
            Sending...
          </>
        ) : (
          'Send Message'
        )}
      </button>
    </form>
  );
};