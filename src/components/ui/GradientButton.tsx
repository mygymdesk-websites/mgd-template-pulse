import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GradientButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  variant?: "filled" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
}

const GradientButton = ({ 
  children, 
  onClick, 
  className = "", 
  variant = "filled",
  size = "md",
  href
}: GradientButtonProps) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const baseClasses = `
    font-display font-semibold rounded-lg
    inline-flex items-center justify-center gap-2
    transition-all duration-300 relative overflow-hidden
    ${sizeClasses[size]}
  `;

  const filledClasses = `
    bg-gradient-pulse text-white
    hover:shadow-glow-gradient hover:scale-105
    active:scale-[0.98]
  `;

  const outlineClasses = `
    bg-transparent border-2 border-pulse-blue text-pulse-blue
    hover:bg-pulse-blue/10 hover:border-pulse-magenta hover:text-pulse-magenta
    hover:scale-105 active:scale-[0.98]
  `;

  const Component = href ? motion.a : motion.button;

  return (
    <Component
      href={href}
      onClick={onClick}
      className={`${baseClasses} ${variant === "filled" ? filledClasses : outlineClasses} ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {variant === "filled" && (
        <motion.div
          className="absolute inset-0 bg-gradient-pulse-reverse opacity-0"
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
      <span className="relative z-10">{children}</span>
    </Component>
  );
};

export default GradientButton;
