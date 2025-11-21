import React from 'react';
import { BreadcrumbsProps } from './types';

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ items }) => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {item.href ? (
            <a
              href={item.href}
              className="text-[var(--color-primary-500)] hover:underline"
            >
              {item.label}
            </a>
          ) : (
            <span className="text-[var(--color-neutral-600)]">{item.label}</span>
          )}
          {index < items.length - 1 && (
            <span className="text-[var(--color-neutral-400)]">/</span>
          )}
        </React.Fragment>
      ))}
    </nav>
  );
};
