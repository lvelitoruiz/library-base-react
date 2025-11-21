import React from 'react';
import { CardProps } from './types';
import { cn } from '@/lib/utils';

export const Card: React.FC<CardProps> = ({ className, children, ...props }) => {
  return (
    <div
      className={cn(
        'bg-white border border-[var(--color-neutral-300)] rounded-[var(--radius-lg)] p-4 shadow-sm',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
};
