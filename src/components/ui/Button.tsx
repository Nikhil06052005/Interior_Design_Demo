import { type ButtonHTMLAttributes, type ReactNode } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  href?: string;
  children: ReactNode;
}

const variants: Record<ButtonVariant, string> = {
  primary:
    "bg-mankuu-red text-white hover:bg-[#a8181d] shadow-lg shadow-mankuu-red/20",
  secondary:
    "bg-mankuu-gold text-mankuu-charcoal hover:bg-[#c08f14] shadow-lg shadow-mankuu-gold/20",
  outline:
    "border-2 border-mankuu-charcoal/20 text-mankuu-charcoal hover:border-mankuu-red hover:text-mankuu-red bg-transparent",
  ghost: "text-mankuu-charcoal hover:text-mankuu-red bg-transparent",
};

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-sm font-semibold tracking-wide transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-mankuu-red";

export function Button({
  variant = "primary",
  href,
  children,
  className = "",
  ...props
}: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
