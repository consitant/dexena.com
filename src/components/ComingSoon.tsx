"use client";

import { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Bubble from "./Bubble";

const CONTACT_EMAIL = "info@dexena.com";

export default function ComingSoon() {
  const ballRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const [ballClip, setBallClip] = useState("");

  // Measure the gradient ball relative to the headline so the white
  // copy of the title is clipped exactly to the ball circle (design signature).
  useLayoutEffect(() => {
    const measure = () => {
      if (!ballRef.current || !titleRef.current) return;
      const ball = ballRef.current.getBoundingClientRect();
      const title = titleRef.current.getBoundingClientRect();
      const r = ball.width / 2;
      const cx = ball.left - title.left + r;
      const cy = ball.top - title.top + r;
      setBallClip(`circle(${r}px at ${cx}px ${cy}px)`);
    };

    requestAnimationFrame(measure);
    const observer = new ResizeObserver(measure);
    if (ballRef.current?.closest("section")) {
      observer.observe(ballRef.current.closest("section")!);
    }
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  const Title = ({ white }: { white?: boolean }) => (
    <h1
      className={`text-h1 whitespace-nowrap ${white ? "text-white" : "text-black-purple"}`}
      aria-hidden={white || undefined}
      style={{
        fontSize: "clamp(30px, 8vw, 128px)",
        ...(white ? { clipPath: ballClip || "circle(0 at 0 0)" } : {}),
      }}
    >
      Build. Brand.
      <br />
      <span className="inline-block pl-[0.5em]">Growth.</span>
    </h1>
  );

  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden bg-white">
      {/* ===========================================
          BIG BALL — purple gradient, anchored top-right
          =========================================== */}
      <div
        ref={ballRef}
        className="absolute pointer-events-none aspect-square w-[88vw] min-w-[680px] max-w-[1180px] right-[-14%] top-[-26%]"
      >
        <div
          className="h-full w-full rounded-full"
          style={{ background: "linear-gradient(to top right, #855CED, #342854)" }}
        />
      </div>

      {/* Bubbles inside the ball (white, clipped) */}
      <div
        className="absolute pointer-events-none aspect-square w-[88vw] min-w-[680px] max-w-[1180px] right-[-14%] top-[-26%] overflow-hidden rounded-full"
      >
        <Bubble size="62%" left="6%" top="14%" rotation={42} strokeColor="rgba(255,255,255,0.22)" floatSpeed={14} />
        <Bubble size="30%" left="-3%" top="56%" rotation={-15} strokeColor="rgba(255,255,255,0.45)" floatSpeed={6} />
        <Bubble size="22%" left="44%" top="62%" rotation={15} strokeColor="rgba(255,255,255,0.5)" floatSpeed={5} />
        <Bubble size="34%" left="58%" top="20%" rotation={-30} strokeColor="rgba(255,255,255,0.3)" floatSpeed={9} />
      </div>

      {/* Bubbles outside the ball (purple stroke) */}
      <Bubble size="min(46vw,620px)" left="-12%" top="42%" rotation={-32} strokeColor="#CDB9FF" floatSpeed={13} />
      <Bubble size="min(18vw,240px)" left="22%" top="14%" rotation={-15} strokeColor="#CDB9FF" followMouse floatSpeed={7} />
      <Bubble size="min(10vw,150px)" left="60%" top="72%" rotation={23} strokeColor="#CDB9FF" floatSpeed={8} />

      {/* ===========================================
          HEADER — logo + tagline
          =========================================== */}
      <header className="relative z-30 w-full">
        <div className="mx-auto flex max-w-[1600px] items-center justify-between px-[var(--l)] py-[var(--l)]">
          <Image
            src="/images/dexena-logo.svg"
            alt="Dexena"
            width={168}
            height={40}
            priority
          />
          <p className="hidden text-h6 text-black-purple lg:block">
            <span className="font-bold font-semi-condensed">Digital. </span>
            <span className="font-light font-semi-condensed">Durch und durch.</span>
          </p>
        </div>
      </header>

      {/* ===========================================
          CENTER — headline + status + CTA
          =========================================== */}
      <main className="relative z-20 flex w-full min-w-0 flex-1 flex-col items-center justify-center px-[var(--l)] text-center">
        <p
          className="animate-fade-up text-h6 mb-[var(--m)] uppercase tracking-[0.18em]"
          style={{ color: "var(--orange)", animationDelay: "0.05s" }}
        >
          Website im Aufbau
        </p>

        {/* Masked headline: dark base + white copy clipped to the ball */}
        <div className="relative">
          <div ref={titleRef} className="relative">
            <Title />
            {ballClip && (
              <div className="pointer-events-none absolute inset-0">
                <Title white />
              </div>
            )}
          </div>
        </div>

        <p
          className="animate-fade-up text-p1 mt-[var(--l)] w-full max-w-[46ch] text-mid-grey"
          style={{ animationDelay: "0.3s" }}
        >
          Wir gestalten gerade unseren neuen Auftritt. Bald gibt es hier mehr zu
          entdecken — bleiben Sie gespannt.
        </p>

        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="animate-fade-up text-h6 mt-[var(--xl)] inline-flex items-center rounded-full px-[var(--l)] py-[var(--m)] uppercase tracking-[0.06em] text-white transition-transform duration-300 hover:scale-[1.04]"
          style={{ backgroundColor: "var(--orange)", animationDelay: "0.45s" }}
        >
          Kontakt aufnehmen
        </a>
      </main>

      {/* ===========================================
          FOOTER — legal links
          =========================================== */}
      <footer
        className="relative z-20 flex flex-wrap items-center justify-center gap-x-[var(--s)] gap-y-[var(--xs)] px-[var(--l)] pb-[var(--l)] pt-[var(--m)] text-mid-grey"
        style={{ fontSize: "clamp(12px, 3.4vw, 16px)" }}
      >
        <span>© 2026 dexena GmbH</span>
        <span aria-hidden className="opacity-40">·</span>
        <Link href="/impressum" className="transition-colors hover:text-black-purple">
          Impressum
        </Link>
        <span aria-hidden className="opacity-40">·</span>
        <Link href="/datenschutz" className="transition-colors hover:text-black-purple">
          Datenschutz
        </Link>
      </footer>
    </section>
  );
}
