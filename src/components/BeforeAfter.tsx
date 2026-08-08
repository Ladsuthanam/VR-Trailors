import { useState } from "react";
import { businessInfo } from "../config/business";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

export function BeforeAfter() {
  const [position, setPosition] = useState(52);

  return (
    <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Alterations"
            title="A Better Fit Makes All the Difference."
            description="Small adjustments can completely transform how a dress looks and feels. Drag the slider to compare the placeholder visuals."
          />
        </SectionReveal>

        <SectionReveal className="mx-auto mt-12 max-w-5xl">
          <div className="relative overflow-hidden rounded-[2.2rem] bg-[#242124] shadow-[0_30px_100px_rgba(36,33,36,0.18)]">
            <div className="relative aspect-[4/5] sm:aspect-[16/9]">
              <img src={businessInfo.images.before} alt="Before alteration placeholder showing a measurement process." className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
                <img src={businessInfo.images.after} alt="After alteration placeholder showing a polished fitted outfit." className="h-full w-full object-cover" loading="lazy" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#242124]/40 via-transparent to-transparent" />

              <span className="absolute left-5 top-5 rounded-full bg-[#FCFAF7]/90 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#6B2638] backdrop-blur">After</span>
              <span className="absolute right-5 top-5 rounded-full bg-[#242124]/65 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-white backdrop-blur">Before</span>

              <div className="absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_999px_rgba(0,0,0,0.0)]" style={{ left: `${position}%` }} aria-hidden="true">
                <span className="absolute left-1/2 top-1/2 grid h-12 w-12 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white text-[#6B2638] shadow-xl">
                  <span className="h-5 w-1 rounded-full bg-[#6B2638]/35" />
                </span>
              </div>

              <input
                type="range"
                min="12"
                max="88"
                value={position}
                onChange={(event) => setPosition(Number(event.target.value))}
                aria-label="Compare before and after alteration images"
                className="before-after-range absolute inset-0 h-full w-full cursor-ew-resize opacity-0"
              />
            </div>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
