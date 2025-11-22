import React from "react";

const styles = {
  base: "px-4 py-2 rounded-md font-medium transition-all duration-200 text-body",

  primary:
    "bg-powder-blue hover:bg-pale-sky text-white shadow-md hover:shadow-lg",

  secondary:
    "bg-soft-blush text-powder-blue hover:bg-powder-petal shadow",

  outline:
    "border-2 border-powder-blue text-powder-blue hover:bg-powder-blue hover:text-white",

  danger:
    "bg-red-500 text-white hover:bg-red-600",

  disabled:
    "opacity-50 cursor-not-allowed",

  full: "w-full",
};

export default function Button({
  children,
  variant = "primary",
  full = false,
  loading = false,
  disabled = false,
  className = "",
  ...props
}) {
  return (
    <button
      disabled={disabled || loading}
      className={`
        ${styles.base}
        ${styles[variant]}
        ${full ? styles.full : ""}
        ${(disabled || loading) ? styles.disabled : ""}
        ${className}
      `}
      {...props}
    >
      {loading ? "Loading..." : children}
    </button>
  );
}
