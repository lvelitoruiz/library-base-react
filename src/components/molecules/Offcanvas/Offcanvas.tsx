import React from 'react';
import { OffcanvasProps } from './types';

export const Offcanvas: React.FC<OffcanvasProps> = ({ 
  isOpen,
  onClose,
  position = 'right',
  title,
  children,
  className = '',
  ...props 
}) => {
  if (!isOpen) return null;

  const positionClasses = {
    left: 'left-0 top-0 h-full',
    right: 'right-0 top-0 h-full',
    top: 'top-0 left-0 w-full',
    bottom: 'bottom-0 left-0 w-full',
  };

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
      />
      
      {/* Offcanvas */}
      <div
        className={`fixed ${positionClasses[position]} bg-background border-border shadow-xl z-50 ${
          position === 'left' || position === 'right' ? 'w-80' : 'h-80'
        } ${className}`}
        {...props}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <button
            onClick={onClose}
            className="text-muted-foreground hover:text-foreground"
            aria-label="Close"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div className="p-4">
          {children}
        </div>
      </div>
    </>
  );
};
