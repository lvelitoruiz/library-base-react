import React from 'react';
import { AlertProps } from './types';
import { cn } from '@/lib/utils';

const alertVariants = {
  info: 'bg-[var(--color-info-50)] border-[var(--color-info-500)] text-[var(--color-info-700)] dark:bg-[var(--color-info-50)] dark:text-[var(--color-info-700)] dark:border-[var(--color-info-500)]',
  success: 'bg-[var(--color-success-50)] border-[var(--color-success-500)] text-[var(--color-success-700)] dark:bg-[var(--color-success-50)] dark:text-[var(--color-success-700)] dark:border-[var(--color-success-500)]',
  warning: 'bg-[var(--color-warning-50)] border-[var(--color-warning-500)] text-[var(--color-warning-700)] dark:bg-[var(--color-warning-50)] dark:text-[var(--color-warning-700)] dark:border-[var(--color-warning-500)]',
  error: 'bg-[var(--color-error-50)] border-[var(--color-error-500)] text-[var(--color-error-700)] dark:bg-[var(--color-error-50)] dark:text-[var(--color-error-700)] dark:border-[var(--color-error-500)]',
};

export const Alert: React.FC<AlertProps> = ({
  variant = 'info',
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'px-4 py-3 rounded-[var(--radius-lg)] border',
        alertVariants[variant],
        className
      )}
      role="alert"
      {...props}
    >
      {children}
    </div>
  );
};
