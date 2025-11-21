import React from 'react';
import { CheckboxProps } from './types';
import { cn } from '@/lib/utils';

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <input
          ref={ref}
          type="checkbox"
          className={cn(
            'w-4 h-4 rounded border-[var(--color-neutral-300)] text-[var(--color-primary-500)] focus:ring-2 focus:ring-[var(--color-primary-500)] focus:ring-offset-0',
            className
          )}
          {...props}
        />
        {label && <span className="text-[var(--font-size-base)]">{label}</span>}
      </label>
    );
  }
);

Checkbox.displayName = 'Checkbox';
