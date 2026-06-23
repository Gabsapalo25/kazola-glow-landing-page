// src/components/ui/PrimaryButton.tsx
import { ROUTES } from "../../config/routes.config";

interface PrimaryButtonProps {
  children: string;
  href?: string;
  onClick?: () => void;
  className?: string;
}

export function PrimaryButton({ 
  children, 
  href = ROUTES.register, 
  onClick, 
  className = "" 
}: PrimaryButtonProps) {
  const baseClasses = `kazola-glow-pulse inline-flex items-center justify-center rounded-full bg-[#00f0a8] px-6 py-3 text-sm font-black text-black transition hover:-translate-y-0.5 hover:shadow-[0_0_34px_rgba(0,240,168,0.42)] focus:outline-none focus:ring-2 focus:ring-[#00f0a8] focus:ring-offset-2 focus:ring-offset-[#0a0f1a] ${className}`;
  
  if (onClick) {
    return (
      <button onClick={onClick} className={baseClasses}>
        {children}
      </button>
    );
  }
  
  return (
    <a href={href} className={baseClasses} target="_blank" rel="noopener noreferrer">
      {children}
    </a>
  );
}