// src/components/ui/TiltPanel.tsx
import { useRef } from "react";

interface TiltPanelProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export function TiltPanel({ 
  children, 
  className = "", 
  glowColor = "rgba(0,240,168,0.15)" 
}: TiltPanelProps) {
  const ref = useRef<HTMLDivElement>(null);

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    el.style.transform = `perspective(900px) rotateX(${-y * 6}deg) rotateY(${x * 6}deg) scale(1.02)`;
    el.style.boxShadow = `0 0 40px ${glowColor}`;
  };

  const reset = () => {
    if (ref.current) {
      ref.current.style.transform = "perspective(900px) rotateX(0) rotateY(0) scale(1)";
      ref.current.style.boxShadow = "0 0 0 rgba(0,0,0,0)";
    }
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className={`motion-safe:transition-transform motion-safe:duration-200 rounded-2xl border border-[#1e293b] bg-[#0a0f1a]/80 ${className}`}
    >
      {children}
    </div>
  );
}