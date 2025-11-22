import React, { useState } from "react";

export default function Input({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  success,
  leftIcon,
  rightIcon,
  full = true,
  className = "",
  ...props
}) {
  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === "password";

  return (
    <div className={`flex flex-col gap-1 ${full ? "w-full" : ""}`}>
      {/* Label */}
      {label && (
        <label className="text-body text-powder-blue font-semibold">
          {label}
        </label>
      )}

      {/* Input wrapper */}
      <div
        className={`
          flex items-center gap-2 px-3 py-2 rounded-md border bg-white 
          transition shadow-sm
          ${error ? "border-red-500" : "border-powder-blue"}
          ${success ? "border-green-500" : ""}
        `}
      >
        {/* Left Icon */}
        {leftIcon && (
          <span className="text-pale-sky text-lg">
            {leftIcon}
          </span>
        )}

        {/* Input field */}
        <input
          type={isPassword && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          className={`outline-none flex-1 text-body`}
          {...props}
        />

        {/* Password Toggle */}
        {isPassword && (
          <span
            className="cursor-pointer text-powder-blue"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? "🙈" : "👁️"}
          </span>
        )}

        {/* Right Icon */}
        {rightIcon && (
          <span className="text-pale-sky text-lg">
            {rightIcon}
          </span>
        )}
      </div>

      {/* Error Message */}
      {error && <p className="text-caption text-red-500">{error}</p>}

      {/* Success Message */}
      {success && <p className="text-caption text-green-600">{success}</p>}
    </div>
  );
}
