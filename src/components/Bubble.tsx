"use client";

import { useEffect, useRef } from "react";

interface BubbleProps {
  /** Bubble diameter in px (Figma reference at 1920px) */
  size: number;
  /** Left position in px from Figma (1920px canvas) */
  left: number;
  /** Top position in px from Figma (837px hero) */
  top: number;
  /** Rotation in degrees */
  rotation?: number;
  /** Stroke color for the wireframe ellipses */
  strokeColor?: string;
  /** Enable mouse-follow behavior */
  followMouse?: boolean;
  /** Float animation duration in seconds */
  floatSpeed?: number;
  className?: string;
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
}: BubbleProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!followMouse) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!ref.current) return;
      const section = ref.current.closest("section");
      if (!section) return;
      const rect = section.getBoundingClientRect();

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const dx = (e.clientX - centerX) / rect.width;
      const dy = (e.clientY - centerY) / rect.height;

      ref.current.style.setProperty("--mouse-x", `${dx * 50}px`);
      ref.current.style.setProperty("--mouse-y", `${dy * 35}px`);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [followMouse]);

  const ellipseCount = 16;
  const r = size / 2 - 1;

  return (
    <div
      ref={ref}
      className={`absolute pointer-events-none ${className}`}
      style={{
        /* Scale positions proportionally to viewport */
        left: `calc(${(left / 1920) * 100}%)`,
        top: `calc(${(top / 837) * 100}%)`,
        width: `calc(${(size / 1920) * 100}vw)`,
        height: `calc(${(size / 1920) * 100}vw)`,
        maxWidth: size,
        maxHeight: size,
        transform: `rotate(${rotation}deg) translate(var(--mouse-x, 0px), var(--mouse-y, 0px))`,
        transition: followMouse ? "transform 0.3s ease-out" : undefined,
        animation: `bubble-float ${floatSpeed}s ease-in-out infinite`,
        animationDelay: `${(left * 7 + top * 3) % 5}s`,
      }}
    >
      <svg
        viewBox={`0 0 ${size} ${size}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-full"
        style={{ overflow: "visible" }}
      >
        {Array.from({ length: ellipseCount }, (_, i) => {
          const rxRatio = 1 - (i / ellipseCount) * 0.9;
          return (
            <ellipse
              key={i}
              cx={size / 2}
              cy={size / 2}
              rx={r * rxRatio}
              ry={r}
              stroke={strokeColor}
              strokeWidth={1.5}
              opacity={0.5 + i * 0.03}
            />
          );
        })}
      </svg>
    </div>
  );
}
