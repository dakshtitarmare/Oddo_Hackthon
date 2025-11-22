import React from "react";

export default function Card({
  children,
  className = "",
  header,
  footer,
  padding = "p-4",
  shadow = true,
}) {
  return (
    <div
      className={`
        bg-white rounded-xl border border-powder-petal
        ${shadow ? "shadow-md hover:shadow-lg transition" : ""}
        ${padding}
        ${className}
      `}
    >
      {/* Header */}
      {header && (
        <div className="mb-2 pb-2 border-b border-parchment text-h4 text-powder-blue">
          {header}
        </div>
      )}

      {/* Content */}
      <div>{children}</div>

      {/* Footer */}
      {footer && (
        <div className="mt-3 pt-3 border-t border-parchment text-body-sm">
          {footer}
        </div>
      )}
    </div>
  );
}
