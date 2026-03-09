import React from "react";
import { cn } from "../../lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  children: React.ReactNode;
}

const Button = ({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}: ButtonProps) => {
  const variants = {
    primary: "bg-gold text-white hover:bg-gold/90 border-gold",
    secondary:
      "bg-onyx-black text-white hover:bg-onyx-black/90 border-onyx-black",
    outline:
      "border border-charcoal-grey text-charcoal-grey hover:bg-charcoal-grey hover:text-white bg-transparent",
    ghost: "bg-transparent hover:bg-ghost-cream text-charcoal-grey border-none",
  };

  const sizes = {
    sm: "px-4 py-2 text-[10px] tracking-[0.2em] font-medium",
    md: "px-6 py-3 text-xs tracking-[0.25em] font-medium",
    lg: "px-8 py-4 text-sm tracking-[0.3em] font-medium",
    icon: "p-2",
  };

  return (
    <button
      className={cn(
        "relative uppercase transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed",
        variants[variant],
        sizes[size],
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
