import React from 'react';
import { ListItemProps } from './types';
import { cn } from '@/lib/utils';

export const ListItem: React.FC<ListItemProps> = ({
  className,
  children,
  ...props
}) => {
  return (
    <li
      className={cn(
        'px-4 py-2 hover:bg-[var(--color-neutral-100)] cursor-pointer transition-colors',
        className
      )}
      {...props}
    >
      {children}
    </li>
  );
};
