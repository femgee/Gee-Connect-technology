import { useState, useEffect } from 'react';
import { getServices, Service, supabase } from '../lib/supabase';

export const useServices = () => {
  const [services, setServices] = useState<Service[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        setLoading(true);
        if (!supabase) {
          // Use fallback data when Supabase is not configured
          setServices([
            {
              id: '1',
              title: 'Strategic Planning',
              description: 'Comprehensive business strategy development to achieve your goals and maximize growth potential.',
              icon: 'Target',
              is_active: true
            },
            {
              id: '2', 
              title: 'Team Development',
              description: 'Building high-performance teams through training, coaching, and organizational development.',
              icon: 'Users',
              is_active: true
            },
            {
              id: '3',
              title: 'Quality Assurance', 
              description: 'Ensuring excellence in every aspect of your business operations and customer experience.',
              icon: 'Award',
              is_active: true
            }
          ]);
          setLoading(false);
          return;
        }
        const data = await getServices();
        setServices(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch services');
        console.error('Error fetching services:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return { services, loading, error };
};