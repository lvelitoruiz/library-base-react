import React from 'react';
import { SwitchProps } from './types';
import { cn } from '@/lib/utils';

export const Switch = React.forwardRef<HTMLInputElement, SwitchProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <label className="inline-flex items-center gap-2 cursor-pointer">
        <div className="relative">
          <input
            ref={ref}
            type="checkbox"
            className="sr-only peer"
            {...props}
          />
          <div className={cn(
            'w-11 h-6 bg-input border-2 border-border rounded-full peer peer-checked:bg-primary peer-checked:border-primary transition-colors',
            className
          )}></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-background border border-border rounded-full transition-transform peer-checked:translate-x-5 peer-checked:border-primary-foreground peer-checked:bg-primary-foreground"></div>
        </div>
        {label && <span className="text-[var(--font-size-base)]">{label}</span>}
      </label>
    );
  }
);

Switch.displayName = 'Switch';
