import React, { useState } from 'react';
import { AccordionProps } from './types';
import { cn } from '@/lib/utils';

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className="border-b border-border last:border-b-0"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 text-left font-medium text-foreground hover:bg-accent transition-colors flex justify-between items-center"
          >
            <span>{item.title}</span>
            <span className={cn('transition-transform', openIndex === index && 'rotate-180')}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-muted text-foreground">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
