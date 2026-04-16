"use client";

import { useState } from "react";

// --- Data ---

interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Die Zusammenarbeit mit Dexena hat unsere digitale Transformation entscheidend beschleunigt. Professionell, schnell und immer mit einem klaren Blick für unsere Bedürfnisse.",
    name: "Anna Müller",
    role: "CTO",
    company: "TechVision GmbH",
  },
  {
    quote:
      "Dexena hat unsere App-Idee in Rekordzeit umgesetzt. Die Qualität und das Engagement des Teams haben unsere Erwartungen übertroffen.",
    name: "Simon Rothermel",
    role: "CEO",
    company: "Dexena GmbH",
  },
  {
    quote:
      "Von der Beratung bis zur Umsetzung war alles aus einem Guss. Dexena versteht es, komplexe Anforderungen in elegante Lösungen zu übersetzen.",
    name: "Laura Schmidt",
    role: "Head of Product",
    company: "InnoWare AG",
  },
  {
    quote:
      "Wir haben mit Dexena einen Partner gefunden, der unsere IoT-Infrastruktur zuverlässig und skalierbar aufgebaut hat. Absolute Empfehlung.",
    name: "Markus Weber",
    role: "Geschäftsführer",
    company: "SensorTech Solutions",
  },
  {
    quote:
      "Das Team von Dexena bringt nicht nur technisches Know-how mit, sondern denkt auch strategisch mit. Ein echter Mehrwert für jedes Projekt.",
    name: "Julia Fischer",
    role: "VP Engineering",
    company: "CloudScale GmbH",
  },
];

// --- Component ---

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const cardWidth = 960;
  const gap = 40;

  const goTo = (index: number) => {
    if (index < 0 || index >= testimonials.length) return;
    setActiveIndex(index);
  };

  // Calculate translate so that the active card is centered.
  // Center position of active card: activeIndex * (cardWidth + gap) + cardWidth / 2
  // We want that centered in the viewport, so translate = -(above) + 50vw
  // Using calc() for the CSS value.
  const translateX = `calc(50vw - ${activeIndex * (cardWidth + gap) + cardWidth / 2}px)`;

  return (
    <section className="bg-[#f0ecf8] py-[var(--xxl)] px-[var(--xl)] overflow-hidden">
      <div className="mx-auto max-w-[1600px] flex flex-col items-center gap-[var(--xl)]">
        {/* Title */}
        <h2 className="text-h2 text-black-purple w-full">Testimonials</h2>

        {/* Carousel + Controls wrapper */}
        <div className="flex flex-col gap-[var(--l)] items-center w-full">
          {/* Cards track — full width overflow */}
          <div className="w-full overflow-visible">
            <div
              className="flex gap-[var(--l)] transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(${translateX})` }}
            >
              {testimonials.map((t, i) => (
                <div
                  key={i}
                  className={`
                    bg-white rounded-[40px] p-[var(--l)] flex flex-col gap-[var(--m)]
                    w-[960px] min-w-[960px]
                    transition-opacity duration-500
                    ${i === activeIndex ? "opacity-100" : "opacity-60"}
                  `}
                >
                  {/* Quote */}
                  <p className="text-black-purple" style={{ fontSize: 32, fontWeight: 300, fontVariationSettings: "'wdth' 87.5", lineHeight: 1.36, letterSpacing: "0.04em" }}>
                    {t.quote}
                  </p>

                  {/* Author */}
                  <p className="text-p1 text-black-purple">
                    <span className="font-bold">{t.name} </span>
                    <span>{t.role}, {t.company}</span>
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between w-full">
            {/* Left arrow */}
            <button
              onClick={() => goTo(activeIndex - 1)}
              disabled={activeIndex === 0}
              className="w-12 h-12 rounded-full bg-[#855ced] flex items-center justify-center
                         text-white transition-opacity disabled:opacity-30 hover:opacity-80
                         cursor-pointer disabled:cursor-default"
              aria-label="Vorheriges Testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12.5 15L7.5 10L12.5 5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>

            {/* Pagination dots */}
            <div className="flex items-center gap-[var(--xs)]">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => goTo(i)}
                  className={`
                    h-4 rounded-full transition-all duration-300 cursor-pointer
                    ${i === activeIndex
                      ? "w-20 bg-[#855ced]"
                      : "w-4 bg-[#cdb9ff]"
                    }
                  `}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>

            {/* Right arrow */}
            <button
              onClick={() => goTo(activeIndex + 1)}
              disabled={activeIndex === testimonials.length - 1}
              className="w-12 h-12 rounded-full bg-[#855ced] flex items-center justify-center
                         text-white transition-opacity disabled:opacity-30 hover:opacity-80
                         cursor-pointer disabled:cursor-default"
              aria-label="Nächstes Testimonial"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.5 5L12.5 10L7.5 15"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
