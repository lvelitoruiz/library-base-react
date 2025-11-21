import React from 'react';
import { SearchBarProps } from './types';
import { cn } from '@/lib/utils';

export const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  className,
  ...props
}) => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && onSearch) {
      onSearch(e.currentTarget.value);
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="search"
        className={cn(
          'w-full px-4 py-2 pl-10 bg-white border border-[var(--color-neutral-300)] rounded-[var(--radius-lg)] focus:outline-none focus:ring-2 focus:ring-[var(--color-primary-500)]',
          className
        )}
        onKeyDown={handleKeyDown}
        {...props}
      />
      <span className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-neutral-400)]">
        🔍
      </span>
    </div>
  );
};
