import React from 'react';
import { TextareaProps } from './types';
import { cn } from '@/lib/utils';

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ 
    error, 
    className, 
    disabled,
    invalid,
    fullWidth = false,
    rows = 4,
    onChange,
    ...props 
  }, ref) => {
    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      // Call onChange with the string value for new API compatibility
      onChange?.(e.target.value as any);
    };

    return (
      <textarea
        ref={ref}
        rows={rows}
        className={cn(
          'rounded-lg border border-input bg-card px-3 py-2 text-sm text-card-foreground shadow-sm transition-all duration-200',
          'placeholder:text-muted-foreground',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:border-primary',
          'hover:border-primary/50',
          'disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:border-input',
          'resize-y min-h-[80px]',
          (error || invalid) && 'border-destructive focus-visible:ring-destructive focus-visible:border-destructive hover:border-destructive',
          fullWidth && 'w-full',
          className
        )}
        disabled={disabled}
        onChange={handleChange}
        role="textbox"
        aria-multiline="true"
        aria-invalid={!!(error || invalid)}
        aria-disabled={disabled}
        {...props}
      />
    );
  }
);

Textarea.displayName = 'Textarea';
