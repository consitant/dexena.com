"use client";

import { useRef, useState, useLayoutEffect } from "react";
import Link from "next/link";
import Bubble from "./Bubble";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Über Uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

/*
  Left-position formula from Figma breakpoints (1920px & 1280px):
  left = calc(92.5vw + (figmaLeft - 1776)px)
  Sizes and top positions stay fixed in px.
*/
function heroLeft(figmaLeft: number): string {
  return `calc(92.5vw + ${figmaLeft - 1776}px)`;
}

const BALL_RADIUS = 904;
const BALL_SIZE = 1808;

export default function HeroSection() {
  const ballRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

  const [ballClip, setBallClip] = useState("");
  const [navOffset, setNavOffset] = useState({ left: 0, top: 0 });

  useLayoutEffect(() => {
    const measure = () => {
      if (!ballRef.current || !titleRef.current || !navRef.current) return;

      const ballRect = ballRef.current.getBoundingClientRect();
      const titleRect = titleRef.current.getBoundingClientRect();
      const navRect = navRef.current.getBoundingClientRect();

      // Ball center relative to title element
      const cx = ballRect.left - titleRect.left + BALL_RADIUS;
      const cy = ballRect.top - titleRect.top + BALL_RADIUS;
      setBallClip(`circle(${BALL_RADIUS}px at ${cx}px ${cy}px)`);

      // Ball position relative to nav element
      setNavOffset({
        left: ballRect.left - navRect.left,
        top: ballRect.top - navRect.top,
      });
    };

    // Measure after first paint
    requestAnimationFrame(measure);

    // Re-measure on resize
    const observer = new ResizeObserver(measure);
    const section = ballRef.current?.closest("section");
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-white h-[837px] max-[720px]:h-[600px]">
      {/* ===========================================
          BIG BALL — purple gradient
          Figma: left=1066.5, top=-725, 1808x1808
          =========================================== */}
      <div
        ref={ballRef}
        className="absolute pointer-events-none"
        style={{
          width: BALL_SIZE,
          height: BALL_SIZE,
          left: heroLeft(1066.5),
          top: -725,
        }}
      >
        <svg viewBox="0 0 1808 1808" fill="none" className="w-full h-full">
          <defs>
            <linearGradient
              id="bigBallGradient"
              x1="317.5"
              y1="1152"
              x2="1561.5"
              y2="324.5"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#855CED" />
              <stop offset="1" stopColor="#342854" />
            </linearGradient>
          </defs>
          <circle cx="904" cy="904" r="904" fill="url(#bigBallGradient)" />
        </svg>
      </div>

      {/* ===========================================
          BUBBLES — outside Big Ball
          =========================================== */}

      {/* Large bottom-left (1111px) */}
      <Bubble
        size="1111px"
        left={heroLeft(-124)}
        top="436px"
        rotation={-36}
        strokeColor="#CDB9FF"
        floatSpeed={12}
      />

      {/* Medium upper-left (338px) */}
      <Bubble
        size="338px"
        left={heroLeft(404)}
        top="167px"
        rotation={-15}
        strokeColor="#CDB9FF"
        followMouse
        floatSpeed={7}
      />

      {/* Center-right (314px) — between text and Big Ball */}
      <Bubble
        size="314px"
        left={heroLeft(1024)}
        top="328px"
        rotation={-15}
        strokeColor="#CDB9FF"
        followMouse
        floatSpeed={5}
        className="z-[2]"
      />

      {/* Tiny center (147px) */}
      <Bubble
        size="147px"
        left={heroLeft(798)}
        top="473px"
        rotation={23}
        strokeColor="#CDB9FF"
        floatSpeed={8}
      />

      {/* ===========================================
          BUBBLES — inside Big Ball (white, clipped)
          =========================================== */}
      <div
        className="absolute pointer-events-none overflow-hidden rounded-full"
        style={{
          width: BALL_SIZE,
          height: BALL_SIZE,
          left: heroLeft(1066.5),
          top: -725,
        }}
      >
        {/* Large upper bubble (940px) — Figma: (102, 255) in ball coords */}
        <Bubble
          size="940px"
          left="5.6%"
          top="14.1%"
          rotation={42}
          strokeColor="rgba(255,255,255,0.2)"
          floatSpeed={14}
        />
        {/* Lower-left (314px) — Figma: (-43, 1053), partially visible */}
        <Bubble
          size="314px"
          left="-2.4%"
          top="58.2%"
          rotation={-15}
          strokeColor="rgba(255,255,255,0.45)"
          floatSpeed={6}
        />
        {/* Lower-center (295px) — Figma: (511, 1232) */}
        <Bubble
          size="295px"
          left="28.3%"
          top="68.1%"
          rotation={-60}
          strokeColor="rgba(255,255,255,0.35)"
          floatSpeed={8}
        />
        {/* Center-right (127px) — Figma: (841.5, 1059) */}
        <Bubble
          size="127px"
          left="46.5%"
          top="58.6%"
          rotation={15}
          strokeColor="rgba(255,255,255,0.5)"
          floatSpeed={5}
        />
        {/* Far-left (338px) — Figma: (-718, 1114), edge visible */}
        <Bubble
          size="338px"
          left="-39.7%"
          top="61.6%"
          rotation={-15}
          strokeColor="rgba(255,255,255,0.45)"
          floatSpeed={7}
        />
        {/* Far lower-left (243px) — Figma: (-364, 1509) */}
        <Bubble
          size="243px"
          left="-20.1%"
          top="83.5%"
          rotation={23}
          strokeColor="rgba(255,255,255,0.4)"
          floatSpeed={9}
        />
      </div>

      {/* ===========================================
          HERO TITLE
          Figma: centered, top≈260px
          =========================================== */}
      {/* Dark purple text (base layer) */}
      <div className="absolute left-1/2 -translate-x-1/2 z-[3] top-[248px] max-[720px]:top-[180px]">
        <div ref={titleRef} className="relative">
          <h1 className="text-h1 text-black-purple whitespace-nowrap">
            Build. Brand.
            <br />
            <span className="inline-block pl-[0.5em]">Growth.</span>
          </h1>
        </div>
      </div>

      {/* White text — clipped to Big Ball circle, above center-right bubble */}
      {ballClip && (
        <div className="absolute left-1/2 -translate-x-1/2 z-[6] top-[248px] max-[720px]:top-[180px] pointer-events-none">
          <h1
            className="text-h1 text-white whitespace-nowrap"
            aria-hidden="true"
            style={{ clipPath: ballClip }}
          >
            Build. Brand.
            <br />
            <span className="inline-block pl-[0.5em]">Growth.</span>
          </h1>
        </div>
      )}

      {/* ===========================================
          NAVIGATION PILL
          Figma: centered, top=697px
          =========================================== */}
      <nav className="absolute left-1/2 -translate-x-1/2 z-20 top-[697px] max-[720px]:top-[480px]">
        <div ref={navRef} className="relative rounded-full overflow-hidden">
          <div className="absolute inset-0 bg-black-purple" />

          {/* Gradient overlay — position measured from DOM */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: BALL_SIZE,
              height: BALL_SIZE,
              left: navOffset.left,
              top: navOffset.top,
            }}
          >
            <svg viewBox="0 0 1808 1808" fill="none" className="w-full h-full">
              <circle
                cx="904"
                cy="904"
                r="904"
                fill="url(#bigBallGradient)"
              />
            </svg>
          </div>

          <div className="relative flex items-center gap-[var(--l)] px-[var(--l)] py-[var(--m)]">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-h6 text-white uppercase whitespace-nowrap hover:text-orange transition-colors"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </nav>
    </section>
  );
}
