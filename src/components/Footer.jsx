import React from "react";

export default function Footer() {
  return (
    <footer className="bg-powder-petal border-t border-parchment py-4 text-center text-caption text-powder-blue">
      &copy; {new Date().getFullYear()} IMS. All rights reserved.
    </footer>
  );
}
