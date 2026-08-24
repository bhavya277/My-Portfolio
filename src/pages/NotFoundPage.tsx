import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../components/ui/Button';
import { ArrowLeft, Terminal } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-flex p-3 rounded-2xl bg-slate-900 border border-slate-800 text-primary-400">
          <Terminal className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <span className="text-xs font-mono text-primary-400 uppercase tracking-widest">
            // ERROR 404: ROUTE_NOT_FOUND
          </span>
          <h1 className="text-3xl font-extrabold text-white tracking-tight">
            Looks like this page went off-script.
          </h1>
          <p className="text-xs text-slate-400 font-mono max-w-sm mx-auto">
            The requested URI does not map to any registered route in this portfolio system.
          </p>
        </div>

        <div className="pt-2">
          <Link to="/">
            <Button variant="primary" size="md" icon={<ArrowLeft className="w-4 h-4" />}>
              Return to Homepage
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
