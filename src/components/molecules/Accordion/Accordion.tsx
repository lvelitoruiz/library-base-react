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
          className="border-b border-[var(--color-neutral-300)] last:border-b-0"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full px-4 py-3 text-left font-medium hover:bg-[var(--color-neutral-50)] transition-colors flex justify-between items-center"
          >
            <span>{item.title}</span>
            <span className={cn('transition-transform', openIndex === index && 'rotate-180')}>
              ▼
            </span>
          </button>
          {openIndex === index && (
            <div className="px-4 py-3 bg-[var(--color-neutral-50)]">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
