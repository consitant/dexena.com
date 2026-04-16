"use client";

import { useEffect, useRef } from "react";

interface BubbleProps {
  size: number;
  x: number;
  y: number;
  rotation?: number;
  strokeColor?: string;
  className?: string;
  followMouse?: boolean;
  floatAmplitude?: number;
  floatSpeed?: number;
}

export default function Bubble({
  size,
  x,
  y,
  rotation = 0,
  strokeColor = "#CDB9FF",
  className = "",
  followMouse = false,
  floatAmplitude = 20,
  floatSpeed = 4,
}: BubbleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseOffset = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!followMouse) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.closest("section")?.getBoundingClientRect();
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / rect.width;
      const dy = (e.clientY - centerY) / rect.height;

      mouseOffset.current = { x: dx * 40, y: dy * 30 };
      ref.current.style.transform = `translate(${mouseOffset.current.x}px, ${mouseOffset.current.y}px) rotate(${rotation}deg)`;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followMouse, rotation]);

  const ellipseCount = 16;
  const ellipses = Array.from({ length: ellipseCount }, (_, i) => {
    const ratio = 1 - (i / ellipseCount) * 0.9;
    return ratio;
  });

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      style={{
        left: `${x}%`,
        top: `${y}%`,
        width: size,
        height: size,
        transform: `rotate(${rotation}deg)`,
        animation: `bubble-float ${floatSpeed}s ease-in-out infinite`,
        animationDelay: `${Math.random() * floatSpeed}s`,
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
      >
        {ellipses.map((rx, i) => (
          <ellipse
            key={i}
            cx={size / 2}
            cy={size / 2}
            rx={(size / 2 - 1) * rx}
            ry={size / 2 - 1}
            stroke={strokeColor}
            strokeWidth={1.5}
            opacity={0.6 + i * 0.025}
          />
        ))}
      </svg>
    </div>
  );
}
