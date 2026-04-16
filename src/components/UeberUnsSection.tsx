"use client";

import { useRef, useState, useEffect } from "react";

const teamMembers = [
  {
    name: "Sabrina Kramer",
    role: "SEA Expertin",
    description:
      "Lorem ipsum dolor sit amet dictumst gravida porta tempus vitae cursus pharetra. Eiusmod nisl purus posuere aliqua etiam molestie eleifend. Lorem ipsum dolor sit amet dictumst gravida porta tempus vitae cursus pharetra.",
  },
  {
    name: "Simon Rothermel",
    role: "CEO",
    description:
      "Lorem ipsum dolor sit amet dictumst gravida porta tempus vitae cursus pharetra. Eiusmod nisl purus posuere aliqua etiam molestie eleifend. Lorem ipsum dolor sit amet dictumst gravida porta tempus vitae cursus pharetra.",
  },
  {
    name: "Arthur Schröder",
    role: "Entwickler",
    description:
      "Lorem ipsum dolor sit amet dictumst gravida porta tempus vitae cursus pharetra. Eiusmod nisl purus posuere aliqua etiam molestie eleifend. Lorem ipsum dolor sit amet dictumst gravida porta tempus vitae cursus pharetra.",
  },
];

function ArrowLeftIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30 12L18 24L30 36"
        stroke="#342854"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 12L30 24L18 36"
        stroke="#342854"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function UeberUnsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const totalSlides = teamMembers.length;
  const cardWidth = 960;
  const gap = 40;

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const handleScroll = () => {
      const scrollLeft = container.scrollLeft;
      const index = Math.round(scrollLeft / (cardWidth + gap));
      setActiveIndex(Math.min(index, totalSlides - 1));
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    return () => container.removeEventListener("scroll", handleScroll);
  }, [totalSlides]);

  const scrollTo = (direction: "prev" | "next") => {
    const container = scrollRef.current;
    if (!container) return;
    const newIndex =
      direction === "prev"
        ? Math.max(0, activeIndex - 1)
        : Math.min(totalSlides - 1, activeIndex + 1);
    container.scrollTo({
      left: newIndex * (cardWidth + gap),
      behavior: "smooth",
    });
  };

  return (
    <section id="ueber-uns" className="w-full bg-white px-[var(--xl)] py-[var(--xxl)] flex flex-col items-center">
      <div className="w-full flex flex-col gap-[var(--xl)]">
        {/* Header */}
        <div className="flex flex-col gap-[var(--l)] text-black-purple">
          <h2 className="text-h2">Über Uns</h2>
          <p className="text-p1">
            Lorem ipsum dolor sit amet dictumst gravida porta tempus vitae cursus
            pharetra. Eiusmod nisl purus posuere aliqua etiam molestie eleifend
            nunc volutpat curabitur viverra eros egestas curabitur. Lorem ipsum
            dolor sit amet velit odio fringilla facilisi tincidunt eget luctus.
            Cursus pharetra.
          </p>
        </div>

        {/* Cards + Navigation */}
        <div className="flex flex-col gap-[var(--l)] items-center">
          {/* Scrollable card row */}
          <div
            ref={scrollRef}
            className="flex gap-[var(--l)] overflow-x-auto w-full scroll-smooth px-[var(--l)] hide-scrollbar"
            style={{
              scrollSnapType: "x mandatory",
            }}
          >
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="bg-[#f0ecf8] flex h-[572px] items-center overflow-hidden rounded-[40px] shrink-0 w-[960px]"
                style={{ scrollSnapAlign: "start" }}
              >
                {/* Photo placeholder */}
                <div className="flex flex-1 h-full items-end justify-center overflow-hidden pt-[40px] min-w-0">
                  <div className="flex-1 max-w-[502px] aspect-[521/581] max-h-[560px] bg-[#d9d3e8] rounded-t-[20px] min-w-0" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col gap-[var(--l)] h-full items-start min-w-0 p-[var(--l)] rounded-[40px]">
                  <div className="flex flex-1 flex-col gap-[var(--m)] items-start min-h-0 w-full">
                    {/* Name + Role */}
                    <div className="w-full">
                      <h3 className="text-h3 text-black-purple">{member.name}</h3>
                      <p className="text-[48px] font-light font-semi-condensed leading-[1.18] tracking-[1.92px] text-black-purple">
                        {member.role}
                      </p>
                    </div>
                    {/* Description */}
                    <p className="text-p1 text-black-purple">{member.description}</p>
                  </div>

                  {/* CTA Button */}
                  <button className="text-h6 uppercase tracking-[1.6px] text-black-purple border-2 border-black-purple rounded-[16px] px-[32px] py-[24px] whitespace-nowrap">
                    Mehr erfahren
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation: Arrows + Dots */}
          <div className="flex items-center justify-between w-full">
            {/* Left arrow */}
            <button
              onClick={() => scrollTo("prev")}
              className="shrink-0 rotate-0"
              aria-label="Vorheriges Teammitglied"
            >
              <ArrowLeftIcon />
            </button>

            {/* Dot indicators */}
            <div className="flex gap-[var(--xs)] items-center">
              {teamMembers.map((_, index) => (
                <div
                  key={index}
                  className={`h-[16px] rounded-[24px] transition-all duration-300 ${
                    index === activeIndex
                      ? "w-[80px] bg-[#855ced]"
                      : "w-[16px] bg-[#cdb9ff]"
                  }`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => scrollTo("next")}
              className="shrink-0"
              aria-label="Nächstes Teammitglied"
            >
              <ArrowRightIcon />
            </button>
          </div>

          {/* Bottom link bar */}
          <div className="bg-[#f0ecf8] flex items-center justify-end gap-[var(--m)] p-[var(--l)] rounded-[40px] w-full">
            <span className="text-[32px] font-light font-semi-condensed leading-[1.18] tracking-[1.28px] text-black-purple whitespace-nowrap">
              Zur Übersicht{" "}
              <span className="font-bold">Über Uns</span>
            </span>
            <ArrowRightIcon />
          </div>
        </div>
      </div>

    </section>
  );
}
