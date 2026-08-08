import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqItems } from "../data/faq";
import { cn } from "../utils/cn";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#F8F3ED] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-4xl">
        <SectionReveal>
          <SectionHeading eyebrow="FAQ" title="Helpful Questions" description="Short answers for the most common tailoring and alteration questions." />
        </SectionReveal>

        <SectionReveal className="mt-10 divide-y divide-[#6B2638]/12 rounded-[2rem] bg-[#FCFAF7] shadow-[0_24px_80px_rgba(36,33,36,0.08)] ring-1 ring-[#6B2638]/8">
          {faqItems.map((item, index) => {
            const isOpen = openIndex === index;
            const id = `faq-panel-${index}`;
            return (
              <div key={item.question}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left font-serif text-2xl font-semibold tracking-[-0.03em] text-[#242124] transition hover:text-[#6B2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-[#B89455] sm:px-7"
                  aria-expanded={isOpen}
                  aria-controls={id}
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                >
                  {item.question}
                  <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform", isOpen && "rotate-180")} aria-hidden="true" />
                </button>
                <div id={id} role="region" className={cn("grid transition-all duration-300", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                  <div className="overflow-hidden">
                    <p className="px-5 pb-6 leading-7 text-[#5D5557] sm:px-7">{item.answer}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </SectionReveal>
      </div>
    </section>
  );
}
