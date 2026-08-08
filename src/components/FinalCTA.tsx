import { businessInfo, getWhatsAppHref } from "../config/business";
import { ButtonLink } from "./ui/Button";
import { SectionReveal } from "./ui/SectionReveal";

export function FinalCTA() {
  return (
    <section className="relative isolate overflow-hidden bg-[#242124] px-5 py-20 sm:px-8 lg:py-28">
      <img src={businessInfo.images.finalCta} alt="Elegant fashion image placeholder for final appointment call to action." className="absolute inset-0 h-full w-full object-cover opacity-42" loading="lazy" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,33,36,0.9),rgba(107,38,56,0.68),rgba(36,33,36,0.32))]" />
      <SectionReveal className="relative z-10 mx-auto max-w-4xl text-center text-white">
        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#E6C5C5]">Begin Here</p>
        <h2 className="mt-4 font-serif text-5xl font-semibold leading-[0.9] tracking-[-0.06em] sm:text-6xl lg:text-7xl">Your Perfect Fit Starts Here.</h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/78">Bring your outfit, your idea, or simply your inspiration. We'll take it from there.</p>
        <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href="#booking">Book an Appointment</ButtonLink>
          <ButtonLink href={getWhatsAppHref()} variant="secondary" showArrow={false}>Chat on WhatsApp</ButtonLink>
        </div>
      </SectionReveal>
    </section>
  );
}
