"use client";

import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div
        className="mx-auto flex items-center justify-between"
        style={{ maxWidth: 1600, padding: "var(--l) var(--l)" }}
      >
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
          <span className="font-light font-semi-condensed">
            Durch und durch.
          </span>
        </p>
      </div>
    </header>
  );
}
