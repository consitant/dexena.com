"use client";

import Bubble from "./Bubble";

export default function HeroSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white">
      {/* Big Ball — purple gradient circle */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 1808,
          height: 1808,
          right: "-20%",
          top: "-60%",
        }}
      >
        <svg
          viewBox="0 0 1808 1808"
          fill="none"
          className="w-full h-full"
        >
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

      {/* Bubbles */}
      <Bubble
        size={260}
        x={30}
        y={20}
        rotation={-15}
        followMouse
        floatSpeed={6}
        floatAmplitude={15}
      />
      <Bubble
        size={320}
        x={55}
        y={15}
        rotation={-15}
        followMouse
        floatSpeed={5}
      />
      <Bubble
        size={140}
        x={48}
        y={55}
        rotation={23}
        floatSpeed={7}
        floatAmplitude={10}
      />
      <Bubble
        size={800}
        x={-5}
        y={45}
        rotation={-36}
        floatSpeed={10}
        floatAmplitude={8}
      />

      {/* Bubbles inside BIG BALL (clipped) */}
      <div
        className="absolute pointer-events-none"
        style={{
          width: 1808,
          height: 1808,
          right: "-20%",
          top: "-60%",
          clipPath: "circle(904px at 904px 904px)",
        }}
      >
        <Bubble
          size={280}
          x={15}
          y={55}
          rotation={-15}
          strokeColor="#ffffff"
          floatSpeed={6}
        />
        <Bubble
          size={240}
          x={40}
          y={70}
          rotation={23}
          strokeColor="#ffffff"
          floatSpeed={8}
        />
        <Bubble
          size={660}
          x={55}
          y={25}
          rotation={42}
          strokeColor="#ffffff"
          floatSpeed={12}
          floatAmplitude={5}
        />
        <Bubble
          size={260}
          x={60}
          y={60}
          rotation={-15}
          strokeColor="#ffffff"
          floatSpeed={7}
        />
        <Bubble
          size={300}
          x={80}
          y={55}
          rotation={-60}
          strokeColor="#ffffff"
          floatSpeed={9}
        />
        <Bubble
          size={130}
          x={90}
          y={45}
          rotation={15}
          strokeColor="#ffffff"
          floatSpeed={5}
        />
      </div>

      {/* Hero Title */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-[var(--l)]">
        <h1 className="text-h1 text-black-purple text-center relative">
          <span className="relative z-10">Build. Brand.</span>
          <br />
          <span className="relative z-10">&nbsp;&nbsp;Growth.</span>

          {/* White text overlay (visible over purple) */}
          <span
            className="absolute inset-0 text-white pointer-events-none"
            style={{
              clipPath: "circle(904px at calc(100% + 200px) 50%)",
            }}
            aria-hidden="true"
          >
            Build. Brand.
            <br />
            &nbsp;&nbsp;Growth.
          </span>
        </h1>
      </div>
    </section>
  );
}
