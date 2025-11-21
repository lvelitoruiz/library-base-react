import React, { useState } from 'react';
import { DropdownProps } from './types';
import { cn } from '@/lib/utils';

export const Dropdown: React.FC<DropdownProps> = ({ trigger, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <div onClick={() => setIsOpen(!isOpen)}>{trigger}</div>
      {isOpen && (
        <div className="absolute z-50 mt-2 bg-white border border-[var(--color-neutral-300)] rounded-[var(--radius-lg)] shadow-lg min-w-[200px]">
          {children}
        </div>
      )}
    </div>
  );
};
