import React from 'react';

interface NeoButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'accent';
  fullWidth?: boolean;
}

export const NeoButton: React.FC<NeoButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  className = '',
  ...props 
}) => {
  let bgClass = 'bg-white';
  if (variant === 'primary') bgClass = 'bg-[#A3E635]'; // Lime
  if (variant === 'secondary') bgClass = 'bg-[#60A5FA]'; // Blue
  if (variant === 'accent') bgClass = 'bg-[#F472B6]'; // Pink

  return (
    <button
      className={`
        ${fullWidth ? 'w-full' : ''}
        ${bgClass} 
        text-black font-bold border-4 border-black 
        px-6 py-3 text-lg uppercase tracking-wider
        neo-shadow transition-all duration-200
        active:translate-x-[4px] active:translate-y-[4px] active:shadow-none
        disabled:opacity-50 disabled:cursor-not-allowed
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};