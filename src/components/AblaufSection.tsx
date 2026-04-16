const steps = [
  { number: "01", label: "Erstgespräch vereinbaren", width: "100%", opacity: 1, fontSize: 32, radius: 40 },
  { number: "02", label: "Evaluierung eurer Needs", width: "85%", opacity: 0.6, fontSize: 32, radius: 40 },
  { number: "03", label: "Individuelles Angebot", width: "72%", opacity: 0.4, fontSize: 29, radius: 37 },
  { number: "04", label: "Design & Umsetzung", width: "57%", opacity: 0.2, fontSize: 27, radius: 34 },
  { number: "05", label: "Langfristige Begleitung", width: "43%", opacity: 0.1, fontSize: 25, radius: 31 },
];

export default function AblaufSection() {
  return (
    <section id="ablauf" className="bg-black-purple w-full px-[var(--xl)] py-[var(--xxl)] flex flex-col items-center">
      <div className="w-full max-w-[1600px] flex flex-col gap-[var(--xl)]">
        {/* Title */}
        <h2 className="text-h2 text-white">Ablauf</h2>

        {/* Two-column layout */}
        <div className="flex gap-[var(--xl)] items-start">
          {/* Left column: description + CTA */}
          <div className="flex flex-col gap-[var(--l)] shrink-0">
            <p className="text-p1 text-white w-[420px]">
              Lorem ipsum dolor sit amet dictumst gravida porta tempus vitae
              cursus pharetra. Eiusmod nisl purus posuere aliqua etiam molestie
              eleifend.
            </p>
            <a
              href="#kontakt"
              className="text-h6 uppercase tracking-[1.6px] text-black-purple bg-white rounded-[16px] px-[32px] py-[24px] inline-flex items-center justify-center self-start whitespace-nowrap"
            >
              Termin vereinbaren
            </a>
          </div>

          {/* Right column: process steps */}
          <div className="flex flex-col gap-[var(--l)] flex-1 min-w-0 items-start justify-center">
            {steps.map((step) => (
              <div
                key={step.number}
                className="flex items-center gap-[var(--s)] text-white p-[var(--l)]"
                style={{
                  width: step.width,
                  opacity: step.opacity,
                  borderRadius: `${step.radius}px`,
                  backgroundImage:
                    "linear-gradient(204deg, #855CED 44%, #FF7049 162%)",
                  fontSize: `${step.fontSize}px`,
                }}
              >
                <span className="font-light font-semi-condensed leading-[1.18] shrink-0">
                  {step.number}
                </span>
                <span className="font-bold font-semi-condensed leading-[1.18]">
                  {step.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
