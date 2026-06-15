import Image from "next/image";
import Link from "next/link";
import Bubble from "./Bubble";

const CONTACT_EMAIL = "info@dexena.com";

export default function ComingSoon() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">
      {/* ===========================================
          BACKGROUND — animated purple gradient
          (matches Hero Big-Ball gradient #855CED → #342854)
          =========================================== */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(125deg, #2a2046 0%, #342854 35%, #5a3fb0 75%, #855CED 100%)",
          backgroundSize: "200% 200%",
          animation: "gradient-shift 18s ease-in-out infinite",
        }}
      />

      {/* Soft glow accents */}
      <div
        className="absolute -z-10 rounded-full blur-[120px]"
        style={{
          width: 640,
          height: 640,
          top: "-12%",
          right: "-8%",
          background: "radial-gradient(circle, rgba(133,92,237,0.55) 0%, transparent 70%)",
          animation: "pulse-soft 9s ease-in-out infinite",
        }}
      />
      <div
        className="absolute -z-10 rounded-full blur-[140px]"
        style={{
          width: 560,
          height: 560,
          bottom: "-14%",
          left: "-10%",
          background: "radial-gradient(circle, rgba(255,112,73,0.28) 0%, transparent 70%)",
          animation: "pulse-soft 11s ease-in-out infinite",
        }}
      />

      {/* ===========================================
          FLOATING BUBBLES
          =========================================== */}
      <Bubble size="720px" left="-12%" top="-10%" rotation={-28} strokeColor="rgba(205,185,255,0.30)" floatSpeed={16} />
      <Bubble size="360px" left="68%" top="6%" rotation={18} strokeColor="rgba(205,185,255,0.35)" followMouse floatSpeed={9} />
      <Bubble size="220px" left="8%" top="62%" rotation={-12} strokeColor="rgba(255,255,255,0.22)" floatSpeed={11} />
      <Bubble size="150px" left="80%" top="68%" rotation={24} strokeColor="rgba(255,255,255,0.25)" followMouse floatSpeed={7} />
      <Bubble size="110px" left="46%" top="80%" rotation={-40} strokeColor="rgba(255,112,73,0.30)" floatSpeed={8} />

      {/* ===========================================
          CONTENT
          =========================================== */}
      <main className="relative z-10 flex flex-1 flex-col items-center justify-center px-[var(--l)] text-center">
        <Image
          src="/images/dexena-logo.svg"
          alt="Dexena"
          width={210}
          height={50}
          priority
          className="animate-fade-up"
          style={{ filter: "brightness(0) invert(1)", animationDelay: "0.05s" }}
        />

        <p
          className="animate-fade-up text-h6 mt-[var(--l)] uppercase tracking-[0.12em] text-light-purple"
          style={{ color: "var(--light-purple)", animationDelay: "0.15s" }}
        >
          Digital. Durch und durch.
        </p>

        <h1
          className="animate-fade-up text-h2 mt-[var(--m)] max-w-[14ch] text-white"
          style={{ animationDelay: "0.25s" }}
        >
          Website im Aufbau
        </h1>

        <p
          className="animate-fade-up text-h3 mt-[var(--s)] font-semi-expanded"
          style={{ animationDelay: "0.35s" }}
        >
          <span className="text-white">Build. Brand. </span>
          <span style={{ color: "var(--orange)" }}>Growth.</span>
        </p>

        <p
          className="animate-fade-up text-p1 mt-[var(--l)] max-w-[44ch]"
          style={{ color: "rgba(240,236,248,0.78)", animationDelay: "0.45s" }}
        >
          Wir gestalten gerade unseren neuen Auftritt. Bald gibt es hier mehr zu
          entdecken — bleiben Sie gespannt.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="animate-fade-up text-h6 mt-[var(--xl)] inline-flex items-center gap-[var(--xs)] rounded-full px-[var(--l)] py-[var(--m)] uppercase tracking-[0.06em] text-white transition-transform duration-300 hover:scale-[1.04]"
          style={{ backgroundColor: "var(--orange)", animationDelay: "0.55s" }}
        >
          Kontakt aufnehmen
        </a>
      </main>

      {/* ===========================================
          FOOTER — legal links
          =========================================== */}
      <footer
        className="animate-fade-up text-p2 relative z-10 flex flex-wrap items-center justify-center gap-x-[var(--m)] gap-y-[var(--xs)] px-[var(--l)] pb-[var(--l)] pt-[var(--m)]"
        style={{ color: "rgba(240,236,248,0.6)", animationDelay: "0.7s" }}
      >
        <span>© 2026 dexena GmbH</span>
        <span aria-hidden className="opacity-40">·</span>
        <Link href="/impressum" className="transition-colors hover:text-white">
          Impressum
        </Link>
        <span aria-hidden className="opacity-40">·</span>
        <Link href="/datenschutz" className="transition-colors hover:text-white">
          Datenschutz
        </Link>
      </footer>
    </section>
  );
}
