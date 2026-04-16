import Link from "next/link";

// --- Data ---

type CardSize = "small" | "large";

interface CaseStudy {
  id: string;
  company: string;
  category: string;
  bg: string;
  size: CardSize;
  gradient?: string;
}

const column1: CaseStudy[] = [
  {
    id: "alea-school",
    company: "ALEA School",
    category: "Entwicklung Mobile App",
    bg: "bg-[#855ced]",
    size: "small",
  },
  {
    id: "carbonify",
    company: "carbonify",
    category: "Plattform Entwicklung",
    bg: "bg-black-purple",
    size: "large",
  },
  {
    id: "stadtwerke",
    company: "Stadtwerke Fulda",
    category: "IoT & Sensorik",
    bg: "bg-orange",
    size: "small",
  },
];

const column2: CaseStudy[] = [
  {
    id: "strauss",
    company: "STRAUSS",
    category: "Automatisierung",
    bg: "bg-black-purple",
    size: "large",
  },
  {
    id: "sportverein",
    company: "Sportverein App",
    category: "Entwicklung Mobile App",
    bg: "bg-orange",
    size: "small",
  },
  {
    id: "analytics",
    company: "DataVault",
    category: "Data Analytics",
    bg: "bg-black-purple",
    size: "small",
  },
];

const column3: CaseStudy[] = [
  {
    id: "euro2024",
    company: "UEFA EURO 2024",
    category: "Event Plattform",
    bg: "bg-orange",
    size: "small",
  },
  {
    id: "gutberlet",
    company: "Gutberlet",
    category: "Energiekonzepte Portal",
    bg: "bg-[#855ced]",
    size: "large",
  },
  {
    id: "dexena-plus",
    company: "Dein Projekt",
    category: "Lass uns starten",
    bg: "",
    size: "small",
    gradient:
      "linear-gradient(231deg, #855ced 37%, #ff7049 164%)",
  },
];

// --- Arrow icon (inline SVG matching the Figma circle-arrow) ---

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
      <circle cx="24" cy="24" r="23" stroke="currentColor" strokeWidth="2" />
      <path
        d="M18 24h12m0 0l-5-5m5 5l-5 5"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// --- Plus icon for the CTA card ---

function PlusIcon() {
  return (
    <svg
      width="80"
      height="80"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="40" cy="40" r="38" stroke="white" strokeWidth="3" />
      <path
        d="M40 20v40M20 40h40"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

// --- Card component ---

function CaseStudyCard({ study }: { study: CaseStudy }) {
  const heightClass = study.size === "large" ? "h-[600px]" : "h-[400px]";
  const isCta = !!study.gradient;

  return (
    <div
      className={`relative flex flex-col items-start justify-between overflow-hidden rounded-[32px] p-[var(--m,24px)] ${heightClass} ${study.bg}`}
      style={study.gradient ? { backgroundImage: study.gradient } : undefined}
    >
      {/* Company logo placeholder */}
      {!isCta && (
        <div className="relative z-[3] flex h-[48px] w-[160px] items-center">
          <span className="text-h6 text-white">{study.company}</span>
        </div>
      )}

      {/* CTA card: dashed border placeholder + plus icon */}
      {isCta && (
        <>
          <div className="relative z-[3] h-[32px] w-[94px] rounded-[12px] border-2 border-dashed border-white" />
          <div className="relative z-[2] flex w-full items-center justify-center py-[10px]">
            <PlusIcon />
          </div>
        </>
      )}

      {/* Bottom bar */}
      <div className="relative z-[2] flex w-full items-end justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-p2 mb-0 text-white/80 leading-[1.18]">
            {study.category}
          </p>
          <p className="text-h6 text-white leading-[1.18]">
            {study.company}
          </p>
        </div>
        <ArrowIcon className="shrink-0 text-white" />
      </div>

      {/* Background image placeholder (gradient overlay) */}
      {!isCta && (
        <div
          className="absolute inset-0 z-[1] opacity-30"
          style={{
            backgroundImage:
              "radial-gradient(ellipse at 60% 50%, rgba(255,255,255,0.25) 0%, transparent 70%)",
          }}
        />
      )}
    </div>
  );
}

// --- Section ---

export default function CaseStudiesSection() {
  return (
    <section
      id="case-studies"
      className="flex w-full justify-center bg-[#f0ecf8] px-[var(--xl,80px)] py-[var(--xxl,120px)]"
    >
      <div className="flex w-full max-w-[1600px] flex-col gap-[80px]">
        {/* Heading */}
        <h2 className="text-h2 text-black-purple">
          Case
          <br />
          Studies
        </h2>

        {/* Grid + CTA */}
        <div className="flex flex-col gap-[var(--l,40px)]">
          {/* 3-column masonry-style grid */}
          <div className="grid grid-cols-3 gap-[var(--l,40px)]">
            {/* Column 1 */}
            <div className="flex flex-col gap-[var(--l,40px)]">
              {column1.map((s) => (
                <CaseStudyCard key={s.id} study={s} />
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-[var(--l,40px)]">
              {column2.map((s) => (
                <CaseStudyCard key={s.id} study={s} />
              ))}
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-[var(--l,40px)]">
              {column3.map((s) => (
                <CaseStudyCard key={s.id} study={s} />
              ))}
            </div>
          </div>

          {/* "Zur Ubersicht Case Studies" link bar */}
          <div className="flex w-full items-center justify-end rounded-[40px] bg-white p-[var(--l,40px)]">
            <Link
              href="/case-studies"
              className="flex items-center gap-[var(--m,24px)] text-black-purple no-underline"
            >
              <span className="text-h4 font-light whitespace-nowrap">
                Zur Übersicht{" "}
                <span className="font-bold">Case Studies</span>
              </span>
              <ArrowIcon className="shrink-0 text-black-purple" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
