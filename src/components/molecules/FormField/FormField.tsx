import React from 'react';
import { Input } from '../../atoms/Input';
import { FormFieldProps } from './types';
import { cn } from '@/lib/utils';

export const FormField = React.forwardRef<HTMLInputElement, FormFieldProps>(
  ({ label, id, error, helperText, required, className, ...inputProps }, ref) => {
    return (
      <div className={cn('flex flex-col gap-1.5', className)}>
        <label
          htmlFor={id}
          className="text-[var(--font-size-sm)] font-medium text-[var(--color-neutral-700)]"
        >
          {label}
          {required && <span className="text-[var(--color-error-500)] ml-1">*</span>}
        </label>
        <Input
          ref={ref}
          id={id}
          error={error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...inputProps}
        />
        {error && (
          <p
            id={`${id}-error`}
            className="text-[var(--font-size-sm)] text-[var(--color-error-500)]"
          >
            {error}
          </p>
        )}
        {!error && helperText && (
          <p
            id={`${id}-helper`}
            className="text-[var(--font-size-sm)] text-[var(--color-neutral-500)]"
          >
            {helperText}
          </p>
        )}
      </div>
    );
  }
);

FormField.displayName = 'FormField';
