import { useState, useEffect } from 'react';
import { getContactSubmissions, ContactSubmission, supabase } from '../lib/supabase';
import { handleAPIError } from '../lib/api';

export const useContactSubmissions = () => {
  const [submissions, setSubmissions] = useState<ContactSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        setLoading(true);
        setError(null);
        
        if (!supabase) {
          setError('Database not configured');
          return;
        }
        
        const data = await getContactSubmissions();
        setSubmissions(data || []);
      } catch (err) {
        setError(handleAPIError(err));
        console.error('Error fetching contact submissions:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();

    // Set up real-time subscription for contact submissions
    if (supabase) {
      const subscription = supabase
        .channel('contact_submissions')
        .on('postgres_changes', 
          { event: '*', schema: 'public', table: 'contact_submissions' },
          (payload) => {
            console.log('Real-time update:', payload);
            fetchSubmissions(); // Refetch data on changes
          }
        )
        .subscribe();

      return () => {
        subscription.unsubscribe();
      };
    }
  }, []);

  return { submissions, loading, error, refetch: () => fetchSubmissions() };
};