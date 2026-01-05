import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
  children: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  className = "",
  children,
  ...props
}) => {
  const base =
    "px-8 py-4 rounded-full text-lg font-semibold transition-all duration-300 transform hover:scale-105 whitespace-nowrap cursor-pointer";
  const variants = {
    primary: "bg-emerald-600 hover:bg-emerald-700 text-white",
    secondary:
      "border-2 border-white text-white hover:bg-white hover:text-gray-900",
  };
  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;