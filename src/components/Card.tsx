import React from 'react';
import { cn } from '../lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  title?: string;
  description?: string;
  actions?: React.ReactNode;
}

export const Card: React.FC<CardProps> = ({ 
  children, 
  className, 
  title, 
  description, 
  actions 
}) => {
  return (
    <div className={cn(
      "bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow",
      className
    )}>
      {(title || description || actions) && (
        <div className="flex items-center justify-between p-6 border-b border-gray-100">
          <div>
            {title && <h3 className="text-lg font-semibold text-gray-900">{title}</h3>}
            {description && <p className="text-sm text-gray-600 mt-1">{description}</p>}
          </div>
          {actions && <div className="flex items-center gap-2">{actions}</div>}
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
