import React from 'react';
import { Crown } from 'lucide-react';

export const PremiumBadge = ({ className = '' }) => {
  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-full shadow-sm ${className}`}>
      <Crown size={12} className="animate-pulse" />
      <span>PREMIUM</span>
    </div>
  );
};