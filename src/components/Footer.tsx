import React from 'react';
import { Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 dark:bg-slate-950 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-slate-400 mb-4">
            &copy; 2025 Bharanitharan. All rights reserved.
          </p>
          <p className="text-slate-500 text-sm flex items-center justify-center gap-1">
            Built with <Heart size={16} className="text-red-500" /> using React 
          </p>
        </div>
      </div>
    </footer>
  );
};