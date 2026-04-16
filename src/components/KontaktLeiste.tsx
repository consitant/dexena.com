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

export default function KontaktLeiste() {
  return (
    <section id="kontakt" className="w-full bg-black-purple">
      <div
        className="mx-auto flex flex-col w-full"
        style={{
          maxWidth: 1600,
          padding: `var(--xxl) var(--xl)`,
          gap: "var(--xl)",
        }}
      >
        {/* Decorative dots + intro text */}
        <div className="flex flex-col" style={{ gap: "var(--xl)" }}>
          {/* Two colored dots */}
          <div className="flex items-center gap-[8px]">
            <span
              className="block rounded-full"
              style={{
                width: 24,
                height: 24,
                backgroundColor: "#855CED",
              }}
            />
            <span
              className="block rounded-full bg-orange"
              style={{ width: 24, height: 24 }}
            />
          </div>

          {/* Intro paragraph */}
          <p className="text-white text-h4">
            <span className="font-bold">
              Lorem ipsum dolor sit amet{" "}
            </span>
            <span className="font-light">
              faucibus consequat risus fames hendrerit velit phasellus nisi
              facilisi a. Nulla tristique do dictum eros id nec diam. Vitae quis
              eleifend platea purus pretium aliquam orci id cursus tellus
              porttitor malesuada fermentum.
            </span>
          </p>
        </div>

        {/* Contact items row */}
        <div className="flex gap-[32px] w-full">
          {contactItems.map((item) => (
            <div
              key={item.label}
              className="flex-1 flex flex-col min-w-0"
              style={{ gap: "var(--l)" }}
            >
              <span className="text-h6 text-white uppercase tracking-[1.6px]">
                {item.label}
              </span>
              <Link
                href={item.href}
                className="text-h4 font-bold no-underline transition-opacity hover:opacity-80"
                style={{
                  backgroundImage:
                    "linear-gradient(81deg, rgb(255, 151, 123) 6%, rgb(167, 137, 242) 85%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {item.value}
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
