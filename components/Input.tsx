// Input component using the design system
import React from "react";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  variant?: "default" | "compact";
}

export const Input: React.FC<InputProps> = ({
  label,
  error,
  helperText,
  variant = "default",
  className = "",
  id,
  ...props
}) => {
  const inputId = id || `input-${Math.random().toString(36).substring(2, 9)}`;
  const inputClasses = `input ${error ? "input-error" : ""} ${className}`;

  return (
    <div className={variant === "compact" ? "space-y-1" : "space-y-2"}>
      {label && (
        <div className=" flex justify-between flex-row items-center">
          <label
            htmlFor={inputId}
            className={`block text-xs font-semibold uppercase tracking-tight ${
              error ? "text-error" : "text-neutral-900"
            }`}
          >
            {label}
          </label>

          {error && (
            <p
              id={`${inputId}-error`}
              className="block text-xs text-error font-medium tracking-tight"
              role="alert"
            >
              {error}
            </p>
          )}
        </div>
      )}
      <input
        id={inputId}
        className={inputClasses}
        {...props}
        aria-invalid={error ? "true" : "false"}
        aria-describedby={
          error
            ? `${inputId}-error`
            : helperText
            ? `${inputId}-help`
            : undefined
        }
      />

      {helperText && !error && (
        <p
          id={`${inputId}-help`}
          className="text-xs text-neutral-600 font-medium"
        >
          {helperText}
        </p>
      )}
    </div>
  );
};

export default Input;
