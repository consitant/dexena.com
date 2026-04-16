import Link from "next/link";

const contactItems = [
  {
    label: "E-Mail",
    value: "hallo@dexena.com",
    href: "mailto:hallo@dexena.com",
  },
  {
    label: "Telefon",
    value: "+49 172 28 737 81",
    href: "tel:+491722873781",
  },
  {
    label: "Kalendar",
    value: "Termin machen",
    href: "#termin",
  },
];

export default function LetsTalkSection() {
  return (
    <section
      className="w-full"
      style={{
        backgroundImage:
          "linear-gradient(228deg, #855CED 44%, #FF7049 162%)",
      }}
    >
      <div
        className="mx-auto flex flex-col w-full"
        style={{
          maxWidth: 1600,
          padding: `var(--xxl) var(--xl)`,
          gap: "var(--xl)",
        }}
      >
        {/* Title */}
        <h2 className="text-h1 text-white">Let&rsquo;s talk</h2>

        {/* Description + Contact row */}
        <div
          className="flex flex-col w-full"
          style={{ gap: "var(--xl)" }}
        >
          {/* Subtitle */}
          <p
            className="text-white font-light"
            style={{
              fontSize: 32,
              lineHeight: 1.36,
              letterSpacing: "0.04em",
              fontVariationSettings: "'wdth' 87.5",
            }}
          >
            Lorem ipsum dolor sit amet faucibus consequat risus fames
            hendrerit velit phasellus nisi facilisi a.
          </p>

          {/* Contact items row */}
          <div
            className="flex w-full"
            style={{ gap: "var(--l)" }}
          >
            {contactItems.map((item) => (
              <div
                key={item.label}
                className="flex-1 flex flex-col min-w-0"
                style={{ gap: "var(--m)" }}
              >
                <span
                  className="text-h6 uppercase"
                  style={{
                    color: "#f0ecf8",
                    letterSpacing: "1.6px",
                  }}
                >
                  {item.label}
                </span>
                <Link
                  href={item.href}
                  className="text-white font-bold no-underline transition-opacity hover:opacity-80"
                  style={{
                    fontSize: 32,
                    lineHeight: 1.36,
                    letterSpacing: "1.28px",
                    fontVariationSettings: "'wdth' 87.5",
                  }}
                >
                  {item.value}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
