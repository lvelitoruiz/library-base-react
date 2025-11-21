import React from 'react';
import { RadioProps } from './types';
import { cn } from '@/lib/utils';

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <input
          ref={ref}
          type="radio"
          className={cn(
            'w-4 h-4 border-[var(--color-neutral-300)] text-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-0',
            className
          )}
          {...props}
        />
        {label && <span className="text-[var(--font-size-base)]">{label}</span>}
      </label>
    );
  }
);

Radio.displayName = 'Radio';
