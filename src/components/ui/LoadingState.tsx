import React from 'react';
import { Loader2, AlertCircle } from 'lucide-react';
import { Button } from './Button';

interface LoadingStateProps {
  message?: string;
}

export const LoadingState: React.FC<LoadingStateProps> = ({ message = 'Loading content...' }) => {
  return (
    <div className="flex flex-col items-center justify-center p-12 text-slate-400">
      <Loader2 className="w-6 h-6 animate-spin text-primary-500 mb-3" />
      <span className="text-sm font-mono">{message}</span>
    </div>
  );
};

interface EmptyStateProps {
  title: string;
  description: string;
  actionText?: string;
  onAction?: () => void;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  title,
  description,
  actionText,
  onAction,
}) => {
  return (
    <div className="flex flex-col items-center justify-center text-center p-12 border border-dashed border-slate-800 rounded-xl bg-slate-900/20">
      <div className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 mb-3">
        <AlertCircle className="w-5 h-5" />
      </div>
      <h3 className="text-base font-semibold text-slate-200">{title}</h3>
      <p className="text-sm text-slate-400 max-w-sm mt-1 mb-4">{description}</p>
      {actionText && onAction && (
        <Button size="sm" variant="outline" onClick={onAction}>
          {actionText}
        </Button>
      )}
    </div>
  );
};
