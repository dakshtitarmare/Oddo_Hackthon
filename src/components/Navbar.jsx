import React from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const pageTitle = pathname.split("/").pop();

  return (
    <header className="h-16 bg-white border-b border-parchment flex items-center justify-between px-6">
      <h2 className="text-h3 text-powder-blue capitalize">{pageTitle}</h2>

      {/* Right Section */}
      <div className="flex items-center gap-4">
        <span className="text-body text-powder-blue">Welcome, User</span>
        <div className="w-10 h-10 rounded-full bg-powder-blue flex items-center justify-center text-white text-xl">
          👤
        </div>
      </div>
    </header>
  );
}
