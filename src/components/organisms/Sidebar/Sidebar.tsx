import React from 'react';
import { SidebarProps } from './types';
import { cn } from '@/lib/utils';

export const Sidebar: React.FC<SidebarProps> = ({ children, isOpen = true }) => {
  return (
    <aside
      className={cn(
        'h-full bg-white border-r border-[var(--color-neutral-300)] transition-all duration-300',
        isOpen ? 'w-64' : 'w-0 overflow-hidden'
      )}
    >
      <div className="p-4">{children}</div>
    </aside>
  );
};
