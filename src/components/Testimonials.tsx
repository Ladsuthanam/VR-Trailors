import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "../data/testimonials";
import { cn } from "../utils/cn";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

export function Testimonials() {
  const [active, setActive] = useState(0);
  const testimonial = testimonials[active];

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((index) => (index + 1) % testimonials.length);
    }, 6200);
    return () => window.clearInterval(id);
  }, []);

  return (
    <section className="bg-[#242124] px-5 py-20 text-white sm:px-8 lg:py-28">
      <div className="mx-auto max-w-5xl">
        <SectionReveal>
          <SectionHeading light eyebrow="Testimonials" title="Loved by Our Customers" description="Sample review placeholders are ready to be replaced with real customer feedback." />
        </SectionReveal>

        <SectionReveal className="mt-12 overflow-hidden rounded-[2.5rem] bg-white/[0.06] p-7 shadow-[0_28px_90px_rgba(0,0,0,0.22)] ring-1 ring-white/10 backdrop-blur sm:p-10 lg:p-12">
          <div className="flex gap-1 text-[#B89455]" aria-label="Five star rating placeholder">
            {Array.from({ length: 5 }).map((_, index) => (
              <Star key={index} className="h-5 w-5 fill-current" aria-hidden="true" />
            ))}
          </div>
          <blockquote className="mt-7 font-serif text-3xl leading-tight tracking-[-0.035em] text-[#F8F3ED] sm:text-4xl lg:text-5xl">
            "{testimonial.quote}"
          </blockquote>
          <div className="mt-8 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="font-bold text-white"> {testimonial.name}</p>
              <p className="mt-1 text-sm text-white/55">{testimonial.label}</p>
            </div>
            <div className="flex items-center gap-3">
              <button type="button" onClick={() => setActive((index) => (index - 1 + testimonials.length) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#242124] transition hover:bg-[#F8F3ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]" aria-label="Previous testimonial">
                <ChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>
              <button type="button" onClick={() => setActive((index) => (index + 1) % testimonials.length)} className="grid h-11 w-11 place-items-center rounded-full bg-white text-[#242124] transition hover:bg-[#F8F3ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]" aria-label="Next testimonial">
                <ChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </div>
          <div className="mt-8 flex gap-2" aria-label="Testimonial slides">
            {testimonials.map((item, index) => (
              <button key={item.quote} type="button" onClick={() => setActive(index)} className={cn("h-2 rounded-full transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]", active === index ? "w-9 bg-[#D9A6A6]" : "w-2 bg-white/28")} aria-label={`Show testimonial ${index + 1}`} />
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}
