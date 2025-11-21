import React from 'react';
import { NavbarProps } from './types';
import { cn } from '@/lib/utils';

export const Navbar: React.FC<NavbarProps> = ({ children, logo, className }) => {
  return (
    <nav
      className={cn(
        'w-full px-6 py-4 bg-white border-b border-[var(--color-neutral-200)] shadow-[var(--shadow-sm)]',
        className
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {logo && <div className="flex items-center">{logo}</div>}
        {children && <div className="flex items-center gap-4">{children}</div>}
      </div>
    </nav>
  );
};
