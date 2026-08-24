import React from 'react';
import { cn } from '../../lib/utils';

interface SectionHeaderProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({
  label,
  title,
  description,
  align = 'left',
  className,
}) => {
  return (
    <div className={cn('mb-8 md:mb-12', align === 'center' ? 'text-center' : 'text-left', className)}>
      {label && (
        <span className="inline-block text-xs font-mono font-semibold tracking-wider text-primary-400 uppercase mb-2">
          // {label}
        </span>
      )}
      <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-2 text-sm md:text-base text-slate-400 dark:text-slate-400 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
};
