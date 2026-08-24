import React from 'react';
import { cn } from '../../lib/utils';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className,
  children,
  icon,
  iconPosition = 'left',
  disabled,
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-primary-500/50 disabled:opacity-50 disabled:cursor-not-allowed select-none';

  const sizeStyles = {
    sm: 'text-xs px-3 py-1.5 gap-1.5',
    md: 'text-sm px-4 py-2 gap-2',
    lg: 'text-base px-5 py-2.5 gap-2.5',
  };

  const variantStyles = {
    primary: 'bg-primary-600 hover:bg-primary-500 text-white shadow-sm hover:shadow-primary-500/20 active:translate-y-px',
    secondary: 'bg-slate-800 hover:bg-slate-700 text-slate-100 border border-slate-700/80 dark:bg-slate-900/90 dark:hover:bg-slate-800 dark:border-slate-700/70',
    outline: 'border border-slate-700/80 hover:border-slate-500 text-slate-300 hover:text-white bg-transparent dark:border-slate-800 dark:hover:border-slate-600',
    ghost: 'text-slate-400 hover:text-slate-100 hover:bg-slate-800/50 dark:hover:bg-slate-800/40',
    danger: 'bg-rose-600 hover:bg-rose-500 text-white',
  };

  return (
    <button
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      disabled={disabled}
      {...props}
    >
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </button>
  );
};
