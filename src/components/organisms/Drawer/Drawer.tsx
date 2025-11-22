import React, { useEffect } from 'react';
import { DrawerProps } from './types';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';
import { Icon } from '@/components/atoms/Icon';

export const Drawer: React.FC<DrawerProps> = ({
  open,
  onClose,
  title,
  position = "right",
  children,
  footer,
  closeButton = true,
  size = "md",
  className
}) => {
  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && open) {
        onClose();
      }
    };

    if (open) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [open, onClose]);

  // Don't render if not open
  if (!open) return null;

  // Size classes (only for left/right positions)
  const sizeClasses = {
    sm: 'w-64',
    md: 'w-80',
    lg: 'w-[28rem]',
  };

  // Position-specific classes
  const positionClasses = {
    right: cn(
      'right-0 top-0 h-screen',
      sizeClasses[size],
      'transition-transform duration-300',
    ),
    left: cn(
      'left-0 top-0 h-screen',
      sizeClasses[size],
      'transition-transform duration-300',
    ),
    top: cn(
      'top-0 left-0 w-full max-h-[50vh]',
      'transition-transform duration-300',
    ),
    bottom: cn(
      'bottom-0 left-0 w-full max-h-[50vh]',
      'transition-transform duration-300',
    ),
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={cn(
          'fixed inset-0 bg-black/40 backdrop-blur-sm z-40',
          'transition-opacity duration-300',
          open ? 'opacity-100' : 'opacity-0'
        )}
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Drawer panel */}
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={title ? 'drawer-title' : undefined}
        className={cn(
          'fixed z-50',
          'bg-[hsl(var(--card))]',
          'shadow-xl',
          'border border-[hsl(var(--border))]',
          'overflow-y-auto',
          'flex flex-col',
          positionClasses[position],
          open ? 'translate-x-0 translate-y-0' : (
            position === 'right' ? 'translate-x-full' :
            position === 'left' ? '-translate-x-full' :
            position === 'top' ? '-translate-y-full' :
            'translate-y-full'
          ),
          className
        )}
      >
        {/* Header */}
        {(title || closeButton) && (
          <div className="px-6 py-4 border-b border-[hsl(var(--border))] flex items-center justify-between flex-shrink-0">
            {title && (
              <h2
                id="drawer-title"
                className="text-lg font-semibold text-[hsl(var(--foreground))]"
              >
                {title}
              </h2>
            )}
            {closeButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Close drawer"
                className={cn(
                  'p-2',
                  'rounded-md',
                  'hover:bg-[hsl(var(--accent))]',
                  'transition-colors duration-200',
                  'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))]',
                  !title && 'ml-auto'
                )}
              >
                <Icon size={20}>
                  <X className="w-full h-full" />
                </Icon>
              </button>
            )}
          </div>
        )}

        {/* Body */}
        <div className="px-6 py-4 text-[hsl(var(--foreground))] flex-1 overflow-y-auto">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-[hsl(var(--border))] flex justify-end gap-2 flex-shrink-0">
            {footer}
          </div>
        )}
      </div>
    </>
  );
};
