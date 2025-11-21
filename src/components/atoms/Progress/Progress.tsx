import React from 'react';
import { ProgressProps } from './types';
import { cn } from '@/lib/utils';

export const Progress: React.FC<ProgressProps> = ({
  value,
  max = 100,
  className,
  ...props
}) => {
  const percentage = Math.min(Math.max((value / max) * 100, 0), 100);

  return (
    <div
      className={cn(
        'w-full h-2 bg-[var(--color-neutral-200)] rounded-full overflow-hidden',
        className
      )}
      {...props}
    >
      <div
        className="h-full bg-[var(--color-primary-500)] transition-all duration-300"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
