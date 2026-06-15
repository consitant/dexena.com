import Image from "next/image";
import Link from "next/link";

export default function LegalPage({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      {/* Header bar */}
      <header
        className="w-full"
        style={{ background: "linear-gradient(125deg, #342854 0%, #855CED 100%)" }}
      >
        <div
          className="mx-auto flex items-center justify-between"
          style={{ maxWidth: 1600, padding: "var(--l)" }}
        >
          <Link href="/">
            <Image
              src="/images/dexena-logo-white.svg"
              alt="Dexena"
              width={168}
              height={40}
            />
          </Link>
          <Link
            href="/"
            className="text-h6 uppercase tracking-[0.06em] text-white transition-colors hover:text-orange"
          >
            ← Zurück
          </Link>
        </div>
      </header>

      {/* Content */}
      <main
        className="mx-auto"
        style={{ maxWidth: 800, padding: "var(--xl) var(--l)" }}
      >
        <h1 className="text-h2 text-black-purple">{title}</h1>
        <div className="legal-body mt-[var(--l)] flex flex-col gap-[var(--m)]">
          {children}
        </div>
      </main>
    </div>
  );
}
