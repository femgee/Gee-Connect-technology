import React from 'react';
import { CheckCircle, AlertCircle, Database, ExternalLink } from 'lucide-react';
import { supabase } from '../lib/supabase';

export const DatabaseStatus: React.FC = () => {
  const isConnected = !!supabase;
  
  if (isConnected) {
    return (
      <div className="bg-emerald-50 border border-emerald-200 rounded-lg p-4 mb-6">
        <div className="flex items-center">
          <CheckCircle className="h-5 w-5 text-emerald-600 mr-3" />
          <div>
            <h3 className="text-sm font-medium text-emerald-800">Database Connected</h3>
            <p className="text-sm text-emerald-700">
              Supabase is connected and ready. Contact forms will be saved to your database.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-6">
      <div className="flex items-start">
        <AlertCircle className="h-5 w-5 text-amber-600 mr-3 mt-0.5" />
        <div className="flex-1">
          <h3 className="text-sm font-medium text-amber-800 mb-2">Database Not Connected</h3>
          <p className="text-sm text-amber-700 mb-3">
            Connect your Supabase database to enable contact form submissions and data management.
          </p>
          <div className="flex items-center space-x-4">
            <button
              onClick={() => {
                // This would typically open the Supabase settings modal
                alert('Click the ⚙️ settings icon at the top of the preview and select "Supabase"');
              }}
              className="inline-flex items-center text-sm bg-amber-100 text-amber-800 px-3 py-1 rounded-md hover:bg-amber-200 transition-colors"
            >
              <Database className="h-4 w-4 mr-1" />
              Connect Database
            </button>
            <a
              href="https://supabase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-sm text-amber-700 hover:text-amber-800"
            >
              Create Supabase Account
              <ExternalLink className="h-3 w-3 ml-1" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};