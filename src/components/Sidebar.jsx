import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation();
  const [open, setOpen] = useState(true);

  const menus = [
    { label: "Dashboard", path: "/app/dashboard", icon: "📊" },
    { label: "Inventory", path: "/app/inventory", icon: "📦" },
    { label: "Profile", path: "/app/profile", icon: "👤" },
    { label: "Checkout", path: "/app/checkout", icon: "🛒" },
  ];

  return (
    <aside
      className={`
        bg-powder-petal h-screen border-r border-parchment 
        transition-all duration-300 flex flex-col
        ${open ? "w-64" : "w-20"}
      `}
    >
      {/* Sidebar Header */}
      <div className="flex items-center justify-between p-4 border-b border-parchment">
        <h1 className={`text-h3 text-powder-blue font-bold transition ${!open && "hidden"}`}>
          IMS
        </h1>
        <button
          onClick={() => setOpen(!open)}
          className="text-powder-blue text-xl"
        >
          {open ? "◀" : "▶"}
        </button>
      </div>

      {/* Menu Items */}
      <nav className="mt-4 flex-1 flex flex-col gap-1">
        {menus.map((m, i) => (
          <Link
            key={i}
            to={m.path}
            className={`
              flex items-center gap-3 px-4 py-3 text-body rounded-md mx-2
              transition cursor-pointer
              ${location.pathname === m.path 
                ? "bg-powder-blue text-white shadow" 
                : "text-powder-blue hover:bg-soft-blush"}
            `}
          >
            <span className="text-xl">{m.icon}</span>
            {open && <span>{m.label}</span>}
          </Link>
        ))}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-parchment">
        <button className="w-full px-4 py-2 rounded-md bg-red-500 text-white hover:bg-red-600">
          Logout
        </button>
      </div>
    </aside>
  );
}
