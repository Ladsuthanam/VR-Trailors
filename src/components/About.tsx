import { businessInfo } from "../config/business";
import { SectionReveal } from "./ui/SectionReveal";

export function About() {
  return (
    <section id="about" className="overflow-hidden bg-[#242124] px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <SectionReveal className="relative">
          <div className="absolute -left-10 -top-10 h-48 w-48 rounded-full bg-[#D9A6A6]/20 blur-3xl" aria-hidden="true" />
          <img src={businessInfo.images.about} alt="Tailoring studio workspace placeholder with fabric and tools." className="relative h-full min-h-[430px] w-full rounded-[2.5rem] object-cover shadow-[0_30px_100px_rgba(0,0,0,0.28)]" loading="lazy" />
        </SectionReveal>
        <SectionReveal delay={0.1}>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#D9A6A6]">About Us</p>
          <h2 className="mt-4 font-serif text-4xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            More Than Tailoring. It's Personal.
          </h2>
          <div className="mt-7 max-w-2xl space-y-5 text-lg leading-8 text-white/76">
            <p>
              We believe a well-fitted outfit should feel comfortable, flattering and truly yours. Each consultation begins with listening: the occasion, the fabric, the fit you want and the details that matter to you.
            </p>
            <p>
              From saree blouses and gowns to everyday dress alterations, the focus stays on careful measurements, thoughtful finishing and a warm customer experience.
            </p>
          </div>
          <blockquote className="mt-8 border-l-2 border-[#B89455] pl-6 font-serif text-3xl leading-tight text-[#F8F3ED]">
            Every outfit has a story. We simply help it fit beautifully.
          </blockquote>
        </SectionReveal>
      </div>
    </section>
  );
}
