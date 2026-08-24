import React from 'react';
import { cn } from '../../lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'interactive' | 'flat' | 'highlight';
  children: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({
  variant = 'default',
  className,
  children,
  ...props
}) => {
  const baseStyles = 'rounded-xl transition-all duration-200';

  const variantStyles = {
    default: 'bg-background-card border border-border-dark dark:bg-background-card dark:border-border-dark',
    interactive: 'bg-background-card border border-border-dark hover:border-border-darkHover hover:bg-background-cardHover hover:shadow-lg hover:shadow-black/20 dark:bg-background-card dark:border-border-dark dark:hover:border-border-darkHover',
    flat: 'bg-slate-900/40 border border-slate-850 dark:bg-slate-900/40 dark:border-slate-800/60',
    highlight: 'bg-background-card border border-primary-500/30 shadow-sm shadow-primary-500/10 dark:bg-background-card dark:border-primary-500/30',
  };

  return (
    <div className={cn(baseStyles, variantStyles[variant], className)} {...props}>
      {children}
    </div>
  );
};
