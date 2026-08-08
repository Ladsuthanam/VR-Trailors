import { motion, useReducedMotion } from "framer-motion";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

const steps = [
  { number: "01", title: "Bring Your Outfit", text: "Bring your dress, blouse, gown or fabric." },
  { number: "02", title: "Discuss Your Fit", text: "We understand what you want changed or created." },
  { number: "03", title: "Measurements & Stitching", text: "Your measurements and requirements are carefully considered." },
  { number: "04", title: "Final Fitting", text: "We make the finishing adjustments so everything feels right." },
];

export function HowItWorks() {
  const reduceMotion = useReducedMotion();

  return (
    <section id="process" className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading eyebrow="How It Works" title="A Calm, Clear Fitting Process" description="From the first conversation to the final fitting, each step is simple and personal." />
        </SectionReveal>

        <div className="relative mt-14 grid gap-6 md:grid-cols-4">
          <div className="absolute left-0 right-0 top-9 hidden h-px bg-[#6B2638]/15 md:block" aria-hidden="true" />
          {steps.map((step, index) => (
            <motion.article
              key={step.number}
              className="relative"
              initial={reduceMotion ? false : { opacity: 0, y: 24 }}
              whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
            >
              <div className="flex items-start gap-5 md:block">
                <div className="grid h-18 w-18 shrink-0 place-items-center rounded-full bg-[#6B2638] font-serif text-2xl font-semibold text-white shadow-[0_18px_45px_rgba(107,38,56,0.22)] ring-8 ring-[#FCFAF7]">
                  {step.number}
                </div>
                <div className="md:mt-7">
                  <h3 className="font-serif text-3xl font-semibold tracking-[-0.04em] text-[#242124]">{step.title}</h3>
                  <p className="mt-3 leading-7 text-[#5D5557]">{step.text}</p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
