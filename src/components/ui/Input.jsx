import React from 'react';

const Input = ({ className = '', ...props }) => {
  return (
    <input
      className={`border border-[var(--alice-blue)] p-2 rounded w-full mb-2 focus:outline-none focus:border-[var(--powder-blue)] ${className}`}
      {...props}
    />
  );
};

export default Input;