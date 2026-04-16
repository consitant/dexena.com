"use client";

import Link from "next/link";
import Bubble from "./Bubble";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Über Uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function HeroSection() {
  return (
    <section
      className="relative w-full overflow-hidden bg-white"
      style={{ height: "clamp(600px, 43.6vw, 837px)" }}
    >
      {/* ==========================================
          BIG BALL — purple gradient circle
          Figma: left=1066.5, top=-725, 1808x1808
          ========================================== */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "calc(94.2vw)",
          maxWidth: 1808,
          aspectRatio: "1",
          left: "55.5%",
          top: "-86.6%",
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

      {/* ==========================================
          BUBBLES — outside BIG BALL (light purple strokes)
          Positions from Figma hero frame (1920x837)
          ========================================== */}

      {/* Large bottom-left bubble (1111px, partially off-screen) */}
      <Bubble
        size={1111}
        left={-124}
        top={436}
        rotation={-36}
        strokeColor="#CDB9FF"
        floatSpeed={12}
      />

      {/* Medium upper-left bubble (338px) */}
      <Bubble
        size={338}
        left={404}
        top={167}
        rotation={-15}
        strokeColor="#CDB9FF"
        followMouse
        floatSpeed={7}
      />

      {/* Small center-right bubble (314px) */}
      <Bubble
        size={314}
        left={1024}
        top={328}
        rotation={-15}
        strokeColor="#CDB9FF"
        followMouse
        floatSpeed={5}
      />

      {/* Tiny center bubble (147px) */}
      <Bubble
        size={147}
        left={798}
        top={473}
        rotation={23}
        strokeColor="#CDB9FF"
        floatSpeed={8}
      />

      {/* ==========================================
          BUBBLES — inside BIG BALL (white strokes, clipped)
          ========================================== */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: "calc(94.2vw)",
          maxWidth: 1808,
          aspectRatio: "1",
          left: "55.5%",
          top: "-86.6%",
          clipPath: "circle(50% at 50% 50%)",
        }}
      >
        {/* Inner bubble — upper left in ball */}
        <Bubble
          size={338}
          left={349}
          top={1114}
          rotation={-15}
          strokeColor="rgba(255,255,255,0.5)"
          floatSpeed={7}
        />

        {/* Inner bubble — center */}
        <Bubble
          size={243}
          left={703}
          top={1509}
          rotation={23}
          strokeColor="rgba(255,255,255,0.5)"
          floatSpeed={9}
        />

        {/* Large inner globe */}
        <Bubble
          size={940}
          left={1169}
          top={255}
          rotation={42}
          strokeColor="rgba(255,255,255,0.3)"
          floatSpeed={14}
        />

        {/* Right bubble */}
        <Bubble
          size={314}
          left={1024}
          top={1053}
          rotation={-15}
          strokeColor="rgba(255,255,255,0.5)"
          floatSpeed={6}
        />

        {/* Bottom-right bubble */}
        <Bubble
          size={295}
          left={1578}
          top={1232}
          rotation={-60}
          strokeColor="rgba(255,255,255,0.4)"
          floatSpeed={8}
        />

        {/* Small far-right bubble */}
        <Bubble
          size={127}
          left={1908}
          top={1059}
          rotation={15}
          strokeColor="rgba(255,255,255,0.5)"
          floatSpeed={5}
        />
      </div>

      {/* ==========================================
          HERO TITLE
          Figma: centered, top=248px
          ========================================== */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-[var(--l)]">
        <div className="relative" style={{ marginTop: "-10%" }}>
          <h1 className="text-h1 text-black-purple whitespace-nowrap">
            Build. Brand.
            <br />
            &nbsp;&nbsp;Growth.
          </h1>

          {/* White text layer — visible where Big Ball overlaps */}
          <h1
            className="text-h1 text-white absolute inset-0 whitespace-nowrap pointer-events-none"
            aria-hidden="true"
            style={{
              clipPath:
                "ellipse(50% 50% at calc(100% + 100px) 50%)",
            }}
          >
            Build. Brand.
            <br />
            &nbsp;&nbsp;Growth.
          </h1>
        </div>
      </div>

      {/* ==========================================
          NAVIGATION PILL
          Figma: centered, top=697px (near bottom of 837px hero)
          ========================================== */}
      <nav
        className="absolute left-1/2 -translate-x-1/2 z-20"
        style={{ top: "clamp(400px, 83.3%, 697px)" }}
      >
        <div className="bg-black-purple rounded-full px-[var(--l)] py-[var(--m)] flex items-center gap-[var(--l)] relative overflow-hidden">
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
      </nav>
    </section>
  );
}
