"use client";

import { useEffect, useRef } from "react";

interface BubbleProps {
  size: string;
  left: string;
  top: string;
  rotation?: number;
  strokeColor?: string;
  followMouse?: boolean;
  floatSpeed?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function Bubble({
  size,
  left,
  top,
  rotation = 0,
  strokeColor = "#CDB9FF",
  followMouse = false,
  floatSpeed = 6,
  className = "",
  style = {},
}: BubbleProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!followMouse) return;

    const onMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const section = ref.current.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();
      const dx = ((e.clientX - rect.left) / rect.width - 0.5) * 50;
      const dy = ((e.clientY - rect.top) / rect.height - 0.5) * 30;
      ref.current.style.setProperty("--mx", `${dx}px`);
      ref.current.style.setProperty("--my", `${dy}px`);
    };

    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [followMouse]);

  const viewBox = 256;
  const r = viewBox / 2 - 1;
  const n = 16;

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      style={{
        left,
        top,
        width: size,
        height: size,
        transform: `rotate(${rotation}deg) translate(var(--mx, 0px), var(--my, 0px))`,
        transition: followMouse ? "transform 0.4s ease-out" : undefined,
        animation: `bubble-float ${floatSpeed}s ease-in-out infinite`,
        animationDelay: `${Math.abs(rotation) % 5}s`,
        ...style,
      }}
    >
      <svg
        viewBox={`0 0 ${viewBox} ${viewBox}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {Array.from({ length: n }, (_, i) => (
          <ellipse
            key={i}
            cx={viewBox / 2}
            cy={viewBox / 2}
            rx={r * (1 - (i / n) * 0.9)}
            ry={r}
            stroke={strokeColor}
            strokeWidth={1.2}
            opacity={0.4 + i * 0.035}
          />
        ))}
      </svg>
    </div>
  );
}
