import React from 'react';
import { cn } from '@/lib/utils';

export interface IconProps extends React.SVGAttributes<SVGElement> {
  size?: number;
  children: React.ReactNode;
}

export const Icon: React.FC<IconProps> = ({ 
  size = 24, 
  children, 
  className,
  ...props 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn('inline-block', className)}
      {...props}
    >
      {children}
    </svg>
  );
};
