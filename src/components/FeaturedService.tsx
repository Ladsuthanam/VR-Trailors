import { Check } from "lucide-react";
import { businessInfo } from "../config/business";
import { ButtonLink } from "./ui/Button";
import { SectionReveal } from "./ui/SectionReveal";

const points = ["Personal measurements", "Style consultation", "Detailed fitting", "Finishing adjustments"];

export function FeaturedService() {
  return (
    <section className="bg-[#F8F3ED] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <SectionReveal className="overflow-hidden rounded-[2.4rem] shadow-[0_28px_90px_rgba(36,33,36,0.14)]">
          <img src={businessInfo.images.featured} alt="Tailor measuring a dress for precise fitting." className="h-full min-h-[420px] w-full object-cover" loading="lazy" />
        </SectionReveal>
        <SectionReveal delay={0.1} className="lg:pl-8">
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#B89455]">Precision Fitting</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[0.96] tracking-[-0.04em] text-[#242124] sm:text-5xl lg:text-6xl">
            Because the right fit changes everything.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-[#5D5557]">
            Tailoring is not simply about sewing fabric. It is about understanding measurements, body shape, comfort and personal style so your outfit feels as good as it looks.
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-3 font-semibold text-[#242124]">
                <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[#6B2638] text-white">
                  <Check className="h-4 w-4" aria-hidden="true" />
                </span>
                {point}
              </li>
            ))}
          </ul>
          <ButtonLink href="#booking" className="mt-9">Book a Fitting</ButtonLink>
        </SectionReveal>
      </div>
    </section>
  );
}
