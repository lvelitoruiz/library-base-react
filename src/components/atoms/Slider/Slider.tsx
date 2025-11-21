import React from 'react';
import { SliderProps } from './types';
import { cn } from '@/lib/utils';

export const Slider = React.forwardRef<HTMLInputElement, SliderProps>(
  ({ label, className, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && <label className="block text-[var(--font-size-base)] mb-2">{label}</label>}
        <input
          ref={ref}
          type="range"
          className={cn(
            'w-full h-2 bg-[var(--color-neutral-300)] rounded-lg appearance-none cursor-pointer accent-[var(--color-primary-500)]',
            className
          )}
          {...props}
        />
      </div>
    );
  }
);

Slider.displayName = 'Slider';
