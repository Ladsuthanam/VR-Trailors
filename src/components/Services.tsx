import { ArrowRight } from "lucide-react";
import { services } from "../data/services";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

export function Services() {
  return (
    <section id="services" className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading
            eyebrow="Services"
            title="Tailored for Every Occasion"
            description="From everyday adjustments to statement pieces, every garment is finished with care."
          />
        </SectionReveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <SectionReveal key={service.title} delay={index * 0.04}>
                <article className="group h-full overflow-hidden rounded-[2rem] bg-white shadow-[0_22px_70px_rgba(36,33,36,0.08)] ring-1 ring-[#6B2638]/7 transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_90px_rgba(107,38,56,0.13)]">
                  <div className="relative aspect-[4/3] overflow-hidden bg-[#F8F3ED]">
                    <img src={service.image} alt={`${service.title} placeholder image`} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full bg-[#FCFAF7]/90 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.16em] text-[#6B2638] backdrop-blur">
                      <Icon className="h-3.5 w-3.5 text-[#B89455]" aria-hidden="true" />
                      {service.category}
                    </div>
                  </div>
                  <div className="p-6 sm:p-7">
                    <h3 className="font-serif text-3xl font-semibold tracking-[-0.04em] text-[#242124]">{service.title}</h3>
                    <p className="mt-3 leading-7 text-[#5D5557]">{service.description}</p>
                    <a href="#booking" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#6B2638] transition hover:text-[#552033] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-4">
                      Learn More
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </a>
                  </div>
                </article>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
