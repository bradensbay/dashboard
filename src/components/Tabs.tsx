import React from 'react';
import { cn } from '../lib/utils';

interface TabProps {
  label: string;
  isActive: boolean;
  onClick: () => void;
  icon?: React.ReactNode;
}

export const Tab: React.FC<TabProps> = ({ label, isActive, onClick, icon }) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-2 px-6 py-3 text-sm font-medium rounded-lg transition-colors",
        isActive
          ? "bg-blue-100 text-blue-700 border border-blue-200"
          : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
      )}
    >
      {icon}
      {label}
    </button>
  );
};

interface TabsProps {
  children: React.ReactNode;
}

export const Tabs: React.FC<TabsProps> = ({ children }) => {
  return (
    <div className="flex gap-2 border-b border-gray-200 mb-6">
      {children}
    </div>
  );
};
