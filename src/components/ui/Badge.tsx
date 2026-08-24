import React from 'react';
import { cn } from '../../lib/utils';

interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: 'default' | 'primary' | 'outline' | 'success' | 'accent' | 'subtle';
  size?: 'sm' | 'md';
  children: React.ReactNode;
}

export const Badge: React.FC<BadgeProps> = ({
  variant = 'default',
  size = 'sm',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center font-mono font-medium rounded-full transition-colors';
  
  const sizeStyles = {
    sm: 'text-xs px-2.5 py-0.5',
    md: 'text-xs px-3 py-1',
  };

  const variantStyles = {
    default: 'bg-slate-800 text-slate-200 border border-slate-700/60 dark:bg-slate-800/80 dark:text-slate-300 dark:border-slate-700/60',
    primary: 'bg-primary-950/60 text-primary-400 border border-primary-800/60 dark:bg-primary-950/80 dark:text-primary-300 dark:border-primary-700/60',
    outline: 'bg-transparent text-slate-400 border border-slate-700/80 dark:text-slate-400 dark:border-slate-800',
    success: 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/60 dark:bg-emerald-950/80 dark:text-emerald-300 dark:border-emerald-700/60',
    accent: 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/60 dark:bg-cyan-950/80 dark:text-cyan-300 dark:border-cyan-700/60',
    subtle: 'bg-slate-100 text-slate-700 border border-slate-200 dark:bg-slate-900/60 dark:text-slate-400 dark:border-slate-800',
  };

  return (
    <span
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
    </span>
  );
};
