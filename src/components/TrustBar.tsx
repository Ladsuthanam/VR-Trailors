import { CircleCheck, Gem, Ruler, Sparkles } from "lucide-react";

const items = [
  { label: "Custom Made", icon: Sparkles },
  { label: "Perfect Fit", icon: Ruler },
  { label: "Quality Finish", icon: Gem },
  { label: "Personal Service", icon: CircleCheck },
];

export function TrustBar() {
  return (
    <section id="trust" aria-label="Studio highlights" className="border-y border-[#6B2638]/10 bg-[#F8F3ED]">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 py-4 sm:px-8 md:grid-cols-4">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <div key={item.label} className="flex items-center justify-center gap-2 py-2 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#6B2638] sm:text-sm">
              <Icon className="h-4 w-4 text-[#B89455]" aria-hidden="true" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
