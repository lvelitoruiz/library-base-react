import React from 'react';
import { BadgeProps } from './types';
import { cn } from '@/lib/utils';

const badgeVariants = {
  primary: 'bg-[var(--color-primary-500)] text-white',
  secondary: 'bg-[var(--color-neutral-200)] text-[var(--color-neutral-800)]',
  success: 'bg-[var(--color-success-500)] text-white',
  warning: 'bg-[var(--color-warning-500)] text-white',
  error: 'bg-[var(--color-error-500)] text-white',
};

export const Badge: React.FC<BadgeProps> = ({
  variant = 'primary',
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-1 rounded-full text-xs font-medium',
        badgeVariants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
};
