// src/components/ui/useCountUp.ts
import { useEffect, useState } from "react";

export function useCountUp(target: number, durationMs: number = 1500) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const start = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - start) / durationMs, 1);
      // Ease out cubic para desacelerar no final
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(eased * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };
    const rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, durationMs]);

  return value;
}