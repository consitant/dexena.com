"use client";

import Image from "next/image";
import Link from "next/link";

const navItems = [
  { label: "Leistungen", href: "#leistungen" },
  { label: "Case Studies", href: "#case-studies" },
  { label: "Über Uns", href: "#ueber-uns" },
  { label: "Kontakt", href: "#kontakt" },
];

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="mx-auto flex items-center justify-between px-[var(--l)] py-[var(--l)]" style={{ maxWidth: 1920 }}>
        <Link href="/">
          <Image
            src="/images/dexena-logo.svg"
            alt="Dexena"
            width={168}
            height={40}
            priority
          />
        </Link>

        <p className="hidden lg:block text-h6 text-white tracking-[0.96px] text-right">
          <span className="font-bold font-semi-condensed">Digital. </span>
          <span className="font-light font-semi-condensed">Durch und durch.</span>
        </p>
      </div>

      {/* Navigation Pill */}
      <nav className="absolute left-1/2 -translate-x-1/2 top-[697px] max-[1024px]:top-[500px] max-[720px]:top-[400px]">
        <div className="bg-black-purple rounded-full px-[var(--l)] py-[var(--m)] flex items-center gap-[var(--l)] overflow-hidden relative">
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
    </header>
  );
}
