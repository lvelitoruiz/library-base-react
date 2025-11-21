import React from 'react';
import { TagProps } from './types';
import { cn } from '@/lib/utils';

export const Tag: React.FC<TagProps> = ({
  onRemove,
  className,
  children,
  ...props
}) => {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[var(--color-neutral-200)] text-[var(--color-neutral-800)] text-sm',
        className
      )}
      {...props}
    >
      {children}
      {onRemove && (
        <button
          onClick={onRemove}
          className="ml-1 hover:text-[var(--color-error-500)]"
          type="button"
        >
          ×
        </button>
      )}
    </span>
  );
};
