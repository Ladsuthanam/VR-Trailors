import { CircleCheck, Gem, Heart, Ruler, Scissors, Sparkles } from "lucide-react";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

const benefits = [
  { title: "Personal Attention", text: "Every customer gets individual attention.", icon: Heart },
  { title: "Precise Fitting", text: "Measurements and adjustments are handled carefully.", icon: Ruler },
  { title: "Custom Designs", text: "Your preferred style, neckline, sleeves and details.", icon: Sparkles },
  { title: "Quality Finishing", text: "Neat stitching and careful finishing.", icon: Gem },
  { title: "Flexible Alterations", text: "Existing outfits can be adjusted to improve comfort and fit.", icon: Scissors },
  { title: "Occasion Ready", text: "Perfect for weddings, parties, functions and everyday wear.", icon: CircleCheck },
];

export function WhyChooseUs() {
  return (
    <section className="bg-[#F8F3ED] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading eyebrow="Why Choose Us" title="Detail You Can Feel" description="A local tailoring experience shaped around fit, comfort and thoughtful communication." />
        </SectionReveal>

        <div className="mt-12 grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <SectionReveal key={benefit.title} delay={index * 0.04} className="flex gap-5">
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[#FCFAF7] text-[#6B2638] shadow-[0_12px_35px_rgba(36,33,36,0.08)]">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="font-serif text-3xl font-semibold tracking-[-0.04em] text-[#242124]">{benefit.title}</h3>
                  <p className="mt-2 leading-7 text-[#5D5557]">{benefit.text}</p>
                </div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
