import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseStyle = 'py-2 px-4 rounded font-medium transition-colors';
  const variants = {
    primary: 'bg-[var(--powder-blue)] text-white hover:bg-[var(--pale-sky)]',
    secondary: 'bg-[var(--linen)] text-black hover:bg-[var(--soft-blush)]',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button className={`${baseStyle} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;