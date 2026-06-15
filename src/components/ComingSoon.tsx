import Image from "next/image";
import Link from "next/link";
import Bubble from "./Bubble";

const CONTACT_EMAIL = "info@dexena.com";

// Frame 9 gradient family (#855CED → #FF7049), deepened for text contrast.
const BG_GRADIENT =
  "linear-gradient(125deg, #2A2048 0%, #3B2C6E 22%, #5B3AAE 46%, #8B4FB8 66%, #C25C84 84%, #FF7049 118%)";

export default function ComingSoon() {
  return (
    <section
      className="relative flex min-h-screen w-full flex-col overflow-hidden"
      style={{ background: BG_GRADIENT }}
    >
      {/* Soft depth glow behind the headline area for extra contrast */}
      <div
        className="pointer-events-none absolute -z-0"
        style={{
          width: "70vw",
          height: "70vw",
          left: "50%",
          top: "42%",
          transform: "translate(-50%, -50%)",
          background:
            "radial-gradient(circle, rgba(42,32,72,0.55) 0%, rgba(42,32,72,0) 62%)",
        }}
      />

      {/* ===========================================
          FLOATING GRID-BALL BUBBLES (texture)
          =========================================== */}
      <Bubble size="min(52vw,680px)" left="-14%" top="-12%" rotation={-28} strokeColor="rgba(255,255,255,0.22)" floatSpeed={15} />
      <Bubble size="min(40vw,520px)" left="70%" top="48%" rotation={20} strokeColor="rgba(255,255,255,0.18)" followMouse floatSpeed={11} />
      <Bubble size="min(20vw,260px)" left="20%" top="68%" rotation={-14} strokeColor="rgba(205,185,255,0.4)" floatSpeed={9} />
      <Bubble size="min(12vw,170px)" left="60%" top="10%" rotation={24} strokeColor="rgba(255,255,255,0.32)" followMouse floatSpeed={7} />

      {/* ===========================================
          HEADER — logo + tagline (white)
          =========================================== */}
      <header className="relative z-30 w-full">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-[var(--l)] py-[var(--l)]">
          <Image
            src="/images/dexena-logo-white.svg"
            alt="Dexena"
            width={168}
            height={40}
            priority
          />
          <p className="hidden text-h6 text-white lg:block">
            <span className="font-bold font-semi-condensed">Digital. </span>
            <span className="font-light font-semi-condensed">Durch und durch.</span>
          </p>
        </div>
      </header>

      {/* ===========================================
          CENTER — eyebrow + headline + subline + CTA
          =========================================== */}
      <main className="relative z-20 flex w-full min-w-0 flex-1 flex-col items-center justify-center px-[var(--l)] text-center">
        <p
          className="animate-fade-up text-h6 mb-[var(--m)] uppercase tracking-[0.2em]"
          style={{ animationDelay: "0.05s", color: "rgba(255,255,255,0.92)" }}
        >
          Website im Aufbau
        </p>

        <h1
          className="animate-fade-up text-h1 whitespace-nowrap text-white"
          style={{ fontSize: "clamp(30px, 8vw, 128px)", animationDelay: "0.15s" }}
        >
          Build. Brand.
          <br />
          <span className="inline-block pl-[0.5em]">Growth.</span>
        </h1>

        <p
          className="animate-fade-up text-p1 mt-[var(--l)] w-full max-w-[46ch]"
          style={{ color: "rgba(255,255,255,0.92)", animationDelay: "0.3s" }}
        >
          Wir gestalten gerade unseren neuen Auftritt. Bald gibt es hier mehr zu
          entdecken — bleiben Sie gespannt.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="animate-fade-up text-h6 mt-[var(--xl)] inline-flex items-center rounded-full px-[var(--l)] py-[var(--m)] uppercase tracking-[0.06em] transition-transform duration-300 hover:scale-[1.04]"
          style={{
            backgroundColor: "var(--orange)",
            color: "#342854",
            animationDelay: "0.45s",
          }}
        >
          Kontakt aufnehmen
        </a>
      </main>

      {/* ===========================================
          FOOTER — legal links (light)
          =========================================== */}
      <footer
        className="relative z-20 flex flex-wrap items-center justify-center gap-x-[var(--s)] gap-y-[var(--xs)] px-[var(--l)] pb-[var(--l)] pt-[var(--m)]"
        style={{ fontSize: "clamp(12px, 3.4vw, 16px)", color: "rgba(255,255,255,0.85)" }}
      >
        <span>© 2026 dexena GmbH</span>
        <span aria-hidden className="opacity-50">·</span>
        <Link href="/impressum" className="transition-colors hover:text-white">
          Impressum
        </Link>
        <span aria-hidden className="opacity-50">·</span>
        <Link href="/datenschutz" className="transition-colors hover:text-white">
          Datenschutz
        </Link>
      </footer>
    </section>
  );
}
