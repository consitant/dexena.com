const PARTNERS = [
  { name: "STRAUSS", file: "strauss.svg" },
  { name: "EURO2024", file: "euro2024-strauss.svg" },
  { name: "ALEA SCHOOL", file: "alea-school.svg" },
  { name: "carbonify", file: "carbonify.svg" },
  { name: "GUTBERLET ENERGIE KONZEPTE", file: "gutberlet.svg" },
  { name: "ALEA RESORT", file: "alea-resort.svg" },
];

export default function PartnerLogos() {
  return (
    <section
      className="relative overflow-hidden"
      style={{
        background:
          "linear-gradient(210deg, #855CED 44%, var(--orange) 162%)",
        height: 346,
      }}
    >
      {/* Marquee track */}
      <div className="absolute inset-0 flex items-center">
        <div className="partner-marquee flex items-center" style={{ animation: "partner-scroll 20s linear infinite" }}>
          {/* Two identical sets for seamless loop */}
          {[0, 1].map((setIndex) => (
            <div
              key={setIndex}
              className="flex items-center shrink-0"
              style={{ gap: "var(--xxl)" }}
              aria-hidden={setIndex === 1 ? true : undefined}
            >
              {PARTNERS.map((partner) => (
                <span
                  key={`${setIndex}-${partner.name}`}
                  className="shrink-0 flex items-center justify-center select-none"
                  style={{
                    width: 164,
                    height: 106,
                  }}
                >
                  <img
                    src={`/images/partners/${partner.file}`}
                    alt={partner.name}
                    style={{
                      width: 148,
                      height: 96,
                      filter: "brightness(0) invert(1)",
                    }}
                  />
                </span>
              ))}
              {/* Spacer after each set to maintain gap rhythm */}
              <span
                className="shrink-0"
                style={{ width: "var(--xxl)" }}
                aria-hidden
              />
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
