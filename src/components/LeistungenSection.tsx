"use client";

import { useState } from "react";
import Link from "next/link";

interface ServiceItem {
  number: string;
  title: string;
  description: string;
  links: { label: string; href: string }[];
  ctaLabel: string;
  ctaHref: string;
}

const services: ServiceItem[] = [
  {
    number: "01",
    title: "Entwicklung",
    description:
      "Digitale Lösungen, die funktionieren: Wir entwickeln performante Websites, intuitive Mobile Apps und automatisieren Prozesse, damit dein Business effizienter wächst. Von der Idee bis zum Launch – sauberer Code, durchdachte Architektur und Lösungen, die langfristig skalieren.",
    links: [
      { label: "Mobile Apps", href: "/leistungen/mobile-apps" },
      { label: "Websites", href: "/leistungen/websites" },
      { label: "Automatisierung", href: "/leistungen/automatisierung" },
    ],
    ctaLabel: "Mehr erfahren",
    ctaHref: "/leistungen/entwicklung",
  },
  {
    number: "02",
    title: "Marketing",
    description:
      "Sichtbarkeit, die zählt: Wir entwickeln datengetriebene Marketingstrategien, die deine Zielgruppe erreichen. Von SEO über Content Marketing bis hin zu Performance Ads – alles aus einer Hand.",
    links: [
      { label: "SEO", href: "/leistungen/seo" },
      { label: "Content Marketing", href: "/leistungen/content-marketing" },
      { label: "Performance Ads", href: "/leistungen/performance-ads" },
    ],
    ctaLabel: "Mehr erfahren",
    ctaHref: "/leistungen/marketing",
  },
  {
    number: "03",
    title: "Design",
    description:
      "Design, das überzeugt: Wir gestalten Markenidentitäten, User Interfaces und digitale Erlebnisse, die im Gedächtnis bleiben. Visuell stark, funktional durchdacht und perfekt auf deine Marke abgestimmt.",
    links: [
      { label: "UI/UX Design", href: "/leistungen/ui-ux-design" },
      { label: "Branding", href: "/leistungen/branding" },
      { label: "Grafikdesign", href: "/leistungen/grafikdesign" },
    ],
    ctaLabel: "Mehr erfahren",
    ctaHref: "/leistungen/design",
  },
];

function ArrowIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" rx="16" fill="#CDB9FF" />
      <path
        d="M16 24H32M32 24L26 18M32 24L26 30"
        stroke="#342854"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowIconWhite({ className = "" }: { className?: string }) {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect width="48" height="48" rx="16" fill="rgba(255,255,255,0.2)" />
      <path
        d="M16 24H32M32 24L26 18M32 24L26 30"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function PlusIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="16" fill="#CDB9FF" />
      <path
        d="M24 16V32M16 24H32"
        stroke="#342854"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CustomServiceIcon() {
  return (
    <svg
      width="56"
      height="56"
      viewBox="0 0 56 56"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="28" cy="20" r="8" stroke="white" strokeWidth="2" fill="none" />
      <path
        d="M16 44C16 37.373 21.373 32 28 32C34.627 32 40 37.373 40 44"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

export default function LeistungenSection() {
  const [expandedIndex, setExpandedIndex] = useState<number>(0);

  const toggleAccordion = (index: number) => {
    setExpandedIndex(expandedIndex === index ? -1 : index);
  };

  return (
    <section id="leistungen" className="w-full bg-white">
      <div
        className="mx-auto flex flex-col w-full"
        style={{
          maxWidth: 1600,
          padding: `var(--xxl) var(--xl)`,
          gap: "var(--xl)",
        }}
      >
        {/* Title */}
        <h2 className="text-h2 text-black-purple">
          Unsere
          <br />
          Leistungen
        </h2>

        {/* Accordion + CTA cards */}
        <div className="flex flex-col" style={{ gap: "var(--l)" }}>
          {/* Accordion items */}
          {services.map((service, index) => {
            const isExpanded = expandedIndex === index;

            return (
              <div
                key={service.number}
                className="w-full rounded-[40px] transition-all duration-300"
                style={{
                  backgroundColor: "#f0ecf8",
                  padding: "var(--l)",
                }}
              >
                {isExpanded ? (
                  /* Expanded state */
                  <div className="flex items-center" style={{ gap: "var(--l)" }}>
                    {/* Left content */}
                    <div
                      className="flex-1 flex flex-col min-w-0"
                      style={{ gap: "var(--m)" }}
                    >
                      {/* Number + Title row */}
                      <button
                        onClick={() => toggleAccordion(index)}
                        className="flex items-center w-full text-left bg-transparent border-none cursor-pointer p-0"
                        style={{ gap: "var(--s)" }}
                      >
                        <span
                          className="font-semi-condensed font-light text-black-purple text-center flex items-center justify-center shrink-0"
                          style={{
                            fontSize: 48,
                            lineHeight: 1.18,
                            letterSpacing: "1.92px",
                            width: 56,
                            height: 56,
                          }}
                        >
                          {service.number}
                        </span>
                        <span
                          className="text-h3 text-black-purple whitespace-nowrap"
                          style={{
                            fontSize: 48,
                            letterSpacing: "1.92px",
                          }}
                        >
                          {service.title}
                        </span>
                      </button>

                      {/* Description */}
                      <p className="text-p1 text-black-purple">
                        {service.description}
                      </p>

                      {/* CTA button */}
                      <Link
                        href={service.ctaHref}
                        className="inline-flex items-center justify-center rounded-[16px] text-white no-underline uppercase text-h6 tracking-[1.6px] transition-opacity hover:opacity-90 shrink-0 self-start"
                        style={{
                          backgroundColor: "#855CED",
                          padding: "var(--m)",
                        }}
                      >
                        {service.ctaLabel}
                      </Link>
                    </div>

                    {/* Right side: arrow links with divider */}
                    <div className="flex items-center self-stretch">
                      <div
                        className="flex items-center h-full"
                        style={{ gap: 40 }}
                      >
                        {/* Vertical divider */}
                        <div
                          className="h-full"
                          style={{
                            width: 1,
                            backgroundColor: "#CDB9FF",
                          }}
                        />

                        {/* Links */}
                        <div
                          className="flex flex-col items-end"
                          style={{ gap: "var(--m)" }}
                        >
                          {service.links.map((link) => (
                            <Link
                              key={link.label}
                              href={link.href}
                              className="flex items-center no-underline transition-opacity hover:opacity-80"
                              style={{ gap: "var(--m)" }}
                            >
                              <span className="text-h5 text-black-purple whitespace-nowrap text-right tracking-[0.72px]">
                                {link.label}
                              </span>
                              <ArrowIcon />
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  /* Collapsed state */
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="flex items-center justify-between w-full bg-transparent border-none cursor-pointer p-0"
                  >
                    <div
                      className="flex items-center"
                      style={{ gap: "var(--s)" }}
                    >
                      <span
                        className="font-semi-condensed font-light text-black-purple text-center flex items-center justify-center shrink-0"
                        style={{
                          fontSize: 48,
                          lineHeight: 1.18,
                          letterSpacing: "1.92px",
                          width: 56,
                          height: 56,
                        }}
                      >
                        {service.number}
                      </span>
                      <span
                        className="text-h3 text-black-purple whitespace-nowrap"
                        style={{
                          fontSize: 48,
                          letterSpacing: "1.92px",
                        }}
                      >
                        {service.title}
                      </span>
                    </div>
                    <PlusIcon />
                  </button>
                )}
              </div>
            );
          })}

          {/* Purple gradient CTA card */}
          <div
            className="w-full rounded-[40px] flex flex-col"
            style={{
              backgroundImage:
                "linear-gradient(218deg, #855CED 44%, #FF7049 162%)",
              padding: "var(--l)",
              gap: "var(--l)",
            }}
          >
            <div className="flex flex-col" style={{ gap: "var(--m)" }}>
              {/* Icon + Title */}
              <div className="flex items-center" style={{ gap: "var(--s)" }}>
                <CustomServiceIcon />
                <span
                  className="text-h3 text-white whitespace-nowrap font-semi-condensed"
                  style={{
                    fontSize: 48,
                    letterSpacing: "1.92px",
                  }}
                >
                  Leistung nach Maß
                </span>
              </div>

              {/* Description */}
              <p className="text-p1 text-white">
                Nicht sicher, welche Lösung die richtige ist – oder nichts
                Passendes gefunden? Kein Problem. Wir schauen uns dein Vorhaben
                gemeinsam an und entwickeln eine Lösung, die wirklich zu dir
                passt. Unkompliziert, ehrlich und auf dein Projekt zugeschnitten.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex items-start" style={{ gap: 24 }}>
              <Link
                href="#termin"
                className="inline-flex items-center justify-center rounded-[16px] bg-white text-black-purple no-underline uppercase text-h6 tracking-[1.6px] transition-opacity hover:opacity-90"
                style={{ padding: "var(--m)" }}
              >
                Termin vereinbaren
              </Link>
              <Link
                href="#kontakt"
                className="inline-flex items-center justify-center rounded-[16px] text-white no-underline uppercase text-h6 tracking-[1.6px] border-2 border-white transition-opacity hover:opacity-90"
                style={{ padding: "var(--m)" }}
              >
                Kontaktformular
              </Link>
            </div>
          </div>

          {/* Bottom overview link */}
          <div
            className="w-full rounded-[40px] flex items-center justify-end"
            style={{
              backgroundColor: "#f0ecf8",
              padding: "var(--l)",
              gap: "var(--m)",
            }}
          >
            <Link
              href="/leistungen"
              className="flex items-center no-underline transition-opacity hover:opacity-80"
              style={{ gap: "var(--m)" }}
            >
              <span
                className="font-semi-condensed text-black-purple"
                style={{
                  fontSize: 32,
                  lineHeight: 1.18,
                  letterSpacing: "1.28px",
                }}
              >
                Zur Übersicht{" "}
                <span className="font-bold">Leistungen</span>
              </span>
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
