import React from 'react';
import { AlertProps } from './types';
import { cn } from '@/lib/utils';

const alertVariants = {
  info: 'bg-blue-50 border-blue-200 text-blue-800',
  success: 'bg-green-50 border-green-200 text-green-800',
  warning: 'bg-yellow-50 border-yellow-200 text-yellow-800',
  error: 'bg-red-50 border-red-200 text-red-800',
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
