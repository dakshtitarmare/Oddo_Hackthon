import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-[var(--mint-cream)] h-full p-4 shadow-md">
      <nav>
        <ul className="space-y-4">
          <li><Link to="/" className="block text-[var(--powder-blue)] hover:underline">Dashboard</Link></li>
          <li><Link to="/inventory" className="block text-[var(--powder-blue)] hover:underline">Inventory</Link></li>
          <li><Link to="/checkout" className="block text-[var(--powder-blue)] hover:underline">Checkout</Link></li>
          <li><Link to="/profile" className="block text-[var(--powder-blue)] hover:underline">Profile</Link></li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;