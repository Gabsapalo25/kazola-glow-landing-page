// src/components/ui/LivingNumberField.tsx
import { useEffect, useState } from "react";

// Posições fixas (evita problemas de hidratação)
const NUMBERS = [
  { n: 13, top: "12%", left: "8%", size: 34, delay: 0 },
  { n: 47, top: "22%", left: "85%", size: 28, delay: 1.2 },
  { n: 5, top: "68%", left: "12%", size: 30, delay: 2.4 },
  { n: 72, top: "8%", left: "55%", size: 26, delay: 0.6 },
  { n: 30, top: "78%", left: "70%", size: 32, delay: 1.8 },
  { n: 61, top: "40%", left: "92%", size: 24, delay: 3 },
  { n: 19, top: "55%", left: "3%", size: 28, delay: 2.1 },
  { n: 84, top: "85%", left: "40%", size: 30, delay: 0.9 },
  { n: 9, top: "15%", left: "35%", size: 22, delay: 3.6 },
  { n: 56, top: "60%", left: "55%", size: 26, delay: 1.5 },
  { n: 41, top: "45%", left: "15%", size: 20, delay: 2.8 },
  { n: 76, top: "32%", left: "70%", size: 24, delay: 0.3 },
  { n: 3, top: "90%", left: "25%", size: 22, delay: 3.2 },
  { n: 68, top: "48%", left: "78%", size: 28, delay: 1.0 },
  { n: 22, top: "18%", left: "45%", size: 20, delay: 2.5 },
];

export function LivingNumberField() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setActiveIndex((i) => (i + 1) % NUMBERS.length);
    }, 2500);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      aria-hidden="true"
    >
      {NUMBERS.map((item, i) => {
        const active = i === activeIndex;
        return (
          <div
            key={item.n}
            className="absolute rounded-full border flex items-center justify-center font-bold motion-safe:animate-[drift_9s_ease-in-out_infinite] transition-colors duration-700"
            style={{
              top: item.top,
              left: item.left,
              width: item.size,
              height: item.size,
              fontSize: item.size * 0.4,
              animationDelay: `${item.delay}s`,
              borderColor: active ? "#f5c44d" : "rgba(0,240,168,0.25)",
              color: active ? "#f5c44d" : "rgba(0,240,168,0.35)",
              boxShadow: active
                ? "0 0 18px rgba(245,196,77,0.45)"
                : "0 0 0 rgba(0,0,0,0)",
              transform: active ? "scale(1.1)" : "scale(1)",
            }}
          >
            {String(item.n).padStart(2, "0")}
          </div>
        );
      })}

      <style>{`
        @keyframes drift {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          25% { transform: translate(8px, -6px) rotate(2deg); }
          50% { transform: translate(-4px, -12px) rotate(-1deg); }
          75% { transform: translate(6px, -4px) rotate(3deg); }
        }
      `}</style>
    </div>
  );
}