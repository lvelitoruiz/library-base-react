import React from 'react';
import { AvatarProps } from './types';
import { cn } from '@/lib/utils';

const avatarSizes = {
  sm: 'w-8 h-8 text-xs',
  md: 'w-10 h-10 text-sm',
  lg: 'w-12 h-12 text-base',
};

export const Avatar: React.FC<AvatarProps> = ({
  src,
  alt = 'Avatar',
  size = 'md',
  fallback,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        'inline-flex items-center justify-center rounded-full bg-[var(--color-neutral-300)] overflow-hidden',
        avatarSizes[size],
        className
      )}
      {...props}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <span className="font-medium text-[var(--color-neutral-700)]">
          {fallback || alt.charAt(0).toUpperCase()}
        </span>
      )}
    </div>
  );
};
