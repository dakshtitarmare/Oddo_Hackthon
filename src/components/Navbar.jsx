import React from 'react';
import useAuth from '../hooks/useAuth';
import Button from './ui/Button';

const Navbar = () => {
  const { user, handleLogout } = useAuth();

  return (
    <header className="bg-[var(--powder-blue)] p-4 flex justify-between items-center shadow-md">
      <h1 className="h4 text-white">IMS</h1>
      {user && <Button variant="secondary" onClick={handleLogout}>Logout</Button>}
    </header>
  );
};

export default Navbar;