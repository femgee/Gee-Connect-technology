// Analytics and monitoring utilities
interface AnalyticsEvent {
  event: string;
  properties?: Record<string, any>;
  timestamp?: Date;
}

class Analytics {
  private events: AnalyticsEvent[] = [];
  
  track(event: string, properties?: Record<string, any>) {
    const analyticsEvent: AnalyticsEvent = {
      event,
      properties,
      timestamp: new Date()
    };
    
    this.events.push(analyticsEvent);
    
    // In a real application, you would send this to your analytics service
    console.log('Analytics Event:', analyticsEvent);
    
    // Keep only last 100 events in memory
    if (this.events.length > 100) {
      this.events = this.events.slice(-100);
    }
  }
  
  getEvents(): AnalyticsEvent[] {
    return [...this.events];
  }
  
  // Track common business events
  trackContactFormSubmission(success: boolean, error?: string) {
    this.track('contact_form_submission', {
      success,
      error,
      page: window.location.pathname
    });
  }
  
  trackPageView(page: string) {
    this.track('page_view', {
      page,
      referrer: document.referrer,
      timestamp: new Date()
    });
  }
  
  trackServiceView(serviceId: string, serviceName: string) {
    this.track('service_view', {
      serviceId,
      serviceName
    });
  }
}

export const analytics = new Analytics();

// Performance monitoring
export const performanceMonitor = {
  measurePageLoad: () => {
    if (typeof window !== 'undefined' && window.performance) {
      const navigation = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
      return {
        domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
        loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
        totalTime: navigation.loadEventEnd - navigation.fetchStart
      };
    }
    return null;
  },
  
  measureApiCall: async <T>(name: string, apiCall: () => Promise<T>): Promise<T> => {
    const start = performance.now();
    try {
      const result = await apiCall();
      const duration = performance.now() - start;
      analytics.track('api_call', {
        name,
        duration,
        success: true
      });
      return result;
    } catch (error) {
      const duration = performance.now() - start;
      analytics.track('api_call', {
        name,
        duration,
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      });
      throw error;
    }
  }
};