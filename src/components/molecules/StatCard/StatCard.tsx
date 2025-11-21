import React from 'react';
import { StatCardProps } from './types';

export const StatCard: React.FC<StatCardProps> = ({ 
  title,
  value,
  description,
  icon,
  trend,
  className = '',
  ...props 
}) => {
  return (
    <div
      className={`bg-card border border-border rounded-lg p-6 shadow-sm ${className}`}
      {...props}
    >
      <div className="flex items-center justify-between mb-2">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        {icon && <div className="text-muted-foreground">{icon}</div>}
      </div>
      <p className="text-3xl font-bold text-card-foreground mb-1">{value}</p>
      {description && (
        <p className="text-sm text-muted-foreground">{description}</p>
      )}
      {trend && (
        <div className={`text-sm mt-2 ${trend.direction === 'up' ? 'text-green-600' : 'text-red-600'}`}>
          {trend.direction === 'up' ? '↑' : '↓'} {trend.value}
        </div>
      )}
    </div>
  );
};
