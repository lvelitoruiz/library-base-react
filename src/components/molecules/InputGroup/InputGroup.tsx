import React from 'react';
import { InputGroupProps } from './types';
import { cn } from '@/lib/utils';

export const InputGroup: React.FC<InputGroupProps> = ({
  prefix,
  suffix,
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn('flex items-center gap-2 w-full', className)}
      {...props}
    >
      {prefix && <div className="flex-shrink-0">{prefix}</div>}
      <div className="flex-1">{children}</div>
      {suffix && <div className="flex-shrink-0">{suffix}</div>}
    </div>
  );
};
