import { businessInfo } from "../config/business";
import { SectionReveal } from "./ui/SectionReveal";

export function TailorProfile() {
  return (
    <section className="bg-[#F8F3ED] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <article className="grid overflow-hidden rounded-[2.5rem] bg-[#FCFAF7] shadow-[0_28px_90px_rgba(36,33,36,0.12)] ring-1 ring-[#6B2638]/8 md:grid-cols-[0.85fr_1.15fr]">
            <img src={businessInfo.tailor.portrait} alt="Founder and tailor portrait placeholder." className="h-full min-h-[360px] w-full object-cover" loading="lazy" />
            <div className="p-8 sm:p-10 lg:p-14">
              <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#B89455]">Meet the Tailor</p>
              <h2 className="mt-4 font-serif text-5xl font-semibold tracking-[-0.05em] text-[#242124]">{businessInfo.tailor.name}</h2>
              <p className="mt-2 font-bold text-[#6B2638]">{businessInfo.tailor.role}</p>
              <p className="mt-6 max-w-xl text-lg leading-8 text-[#5D5557]">{businessInfo.tailor.intro}</p>
              <p className="mt-8 font-serif text-5xl italic tracking-[-0.06em] text-[#6B2638]">{businessInfo.tailor.signature}</p>
            </div>
          </article>
        </SectionReveal>
      </div>
    </section>
  );
}
