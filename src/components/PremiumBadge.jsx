import React from 'react';
import { Crown } from 'lucide-react';
import { CgNametag } from 'react-icons/cg';

export const PremiumBadge = ({ className = '', name }) => {
  return (
    <div className={`inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gradient-to-r from-amber-500 to-yellow-400 text-white rounded-full shadow-sm ${className}`}>
      <Crown size={12} className="animate-pulse" />
      <span>{name}</span>
    </div>
  );
};