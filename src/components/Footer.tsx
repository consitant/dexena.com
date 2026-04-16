import Image from "next/image";
import Link from "next/link";

const footerNav = [
  {
    heading: "Entwicklung",
    links: [
      { label: "Mobile Apps", href: "/entwicklung/mobile-apps" },
      { label: "Websites", href: "/entwicklung/websites" },
      { label: "Automatisierung", href: "/entwicklung/automatisierung" },
    ],
  },
  {
    heading: "Marketing",
    links: [
      { label: "SEA", href: "/marketing/sea" },
      { label: "SEO", href: "/marketing/seo" },
    ],
  },
  {
    heading: "Design",
    links: [
      { label: "UX/UI", href: "/design/ux-ui" },
      { label: "Webdesign", href: "/design/webdesign" },
      { label: "Videos", href: "/design/videos" },
    ],
  },
  {
    heading: "Case Studies",
    links: [],
    href: "/case-studies",
  },
  {
    heading: "Über Uns",
    links: [
      { label: "Simon Rothermel", href: "/ueber-uns/simon-rothermel" },
      { label: "Sabrina Krämer", href: "/ueber-uns/sabrina-kraemer" },
      { label: "Artur Schröder", href: "/ueber-uns/artur-schroeder" },
      { label: "Karriere", href: "/karriere" },
    ],
  },
  {
    heading: "Kontakt",
    links: [],
    href: "/kontakt",
  },
];

function LinkedInIcon() {
  return (
    <svg
      width="34"
      height="34"
      viewBox="0 0 34 34"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="LinkedIn"
    >
      <path
        d="M7.65 2.83C7.65 4.39 6.39 5.66 4.82 5.66C3.26 5.66 2 4.39 2 2.83C2 1.27 3.26 0 4.82 0C6.39 0 7.65 1.27 7.65 2.83ZM7.67 7.87H1.97V24H7.67V7.87ZM13.56 7.87H7.89V24H13.56V15.52C13.56 10.77 19.68 10.37 19.68 15.52V24H25.37V13.69C25.37 5.27 15.73 5.57 13.56 9.75V7.87Z"
        fill="white"
        transform="translate(4, 5)"
      />
    </svg>
  );
}

function DecorativeLines() {
  return (
    <svg
      className="absolute bottom-0 left-1/2 -translate-x-1/3 pointer-events-none"
      width="800"
      height="200"
      viewBox="0 0 800 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
        <ellipse
          key={i}
          cx="400"
          cy={200 + i * 30}
          rx={350 - i * 15}
          ry={150 - i * 10}
          stroke={i < 4 ? "#FF7049" : "#FF704980"}
          strokeWidth={2 - i * 0.15}
          fill="none"
          transform={`rotate(-8, 400, 300)`}
        />
      ))}
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="relative bg-black-purple w-full overflow-hidden">
      <div
        className="relative z-10 mx-auto flex flex-col items-center"
        style={{
          maxWidth: 1600,
          padding: "var(--xxl) var(--xl)",
          gap: "var(--xl)",
        }}
      >
        {/* Navigation columns */}
        <nav className="flex w-full justify-between items-start">
          {footerNav.map((col) => {
            const isKontakt = col.heading === "Kontakt";

            return (
              <div
                key={col.heading}
                className={`flex flex-col ${isKontakt ? "items-end justify-between self-stretch" : ""}`}
                style={{ gap: isKontakt ? undefined : "var(--m)" }}
              >
                {col.href ? (
                  <Link
                    href={col.href}
                    className="text-h5 text-white uppercase font-semi-condensed"
                  >
                    {col.heading}
                  </Link>
                ) : (
                  <span className="text-h5 text-white uppercase font-semi-condensed">
                    {col.heading}
                  </span>
                )}
                {col.links.map((link) => (
                  <Link
                    key={link.label}
                    href={link.href}
                    className="text-p1 text-white font-semi-condensed hover:opacity-80 transition-opacity"
                  >
                    {link.label}
                  </Link>
                ))}
                {isKontakt && (
                  <a
                    href="https://www.linkedin.com/company/dexena"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:opacity-80 transition-opacity"
                    aria-label="LinkedIn"
                  >
                    <LinkedInIcon />
                  </a>
                )}
              </div>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="w-full h-px bg-white/20" />

        {/* Bottom section */}
        <div className="flex w-full items-center justify-between">
          {/* Logo + copyright */}
          <div className="flex flex-col" style={{ gap: "var(--m)" }}>
            <Image
              src="/images/dexena-logo.svg"
              alt="Dexena"
              width={221}
              height={53}
            />
            <p
              className="text-p2 font-semi-condensed uppercase tracking-[1.6px]"
              style={{ color: "#cdb9ff" }}
            >
              &copy; 2026 Dexena GmbH
            </p>
          </div>

          {/* Legal links */}
          <div
            className="flex items-start"
            style={{ gap: "var(--xl)" }}
          >
            <Link
              href="/impressum"
              className="text-p2 font-bold font-semi-condensed uppercase tracking-[1.6px] hover:text-white transition-colors"
              style={{ color: "#cdb9ff" }}
            >
              Impressum
            </Link>
            <Link
              href="/datenschutz"
              className="text-p2 font-bold font-semi-condensed uppercase tracking-[1.6px] hover:text-white transition-colors"
              style={{ color: "#cdb9ff" }}
            >
              Datenschutz
            </Link>
          </div>
        </div>
      </div>

      {/* Decorative curved lines */}
      <DecorativeLines />
    </footer>
  );
}
