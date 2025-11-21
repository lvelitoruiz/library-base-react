import React, { useState } from 'react';
import { TabsProps } from './types';
import { cn } from '@/lib/utils';

export const Tabs: React.FC<TabsProps> = ({ items, defaultIndex = 0 }) => {
  const [activeIndex, setActiveIndex] = useState(defaultIndex);

  return (
    <div className="w-full">
      <div className="flex gap-2 border-b border-border">
        {items.map((item, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={cn(
              'px-4 py-2 font-medium transition-colors',
              activeIndex === index
                ? 'text-primary border-b-2 border-primary'
                : 'text-muted-foreground hover:text-foreground'
            )}
          >
            {item.label}
          </button>
        ))}
      </div>
      <div className="mt-4">{items[activeIndex]?.content}</div>
    </div>
  );
};
