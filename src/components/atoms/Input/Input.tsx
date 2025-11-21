import React from 'react';
import { InputProps } from './types';
import { cn } from '@/lib/utils';

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ error, className, disabled, ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={cn(
          'w-full px-3 py-2 text-[var(--font-size-base)] font-[var(--font-family-sans)] bg-background text-foreground border rounded-[var(--radius-lg)] transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-0',
          error
            ? 'border-[var(--color-error-500)] focus:ring-[var(--color-error-500)] focus:border-[var(--color-error-500)]'
            : 'border-input focus:ring-ring focus:border-ring',
          disabled && 'bg-muted cursor-not-allowed opacity-60',
          className
        )}
        disabled={disabled}
        aria-invalid={!!error}
        {...props}
      />
    );
  }
);

Input.displayName = 'Input';
