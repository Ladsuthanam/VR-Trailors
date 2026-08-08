import { cn } from "../../utils/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("mx-auto max-w-3xl", align === "center" ? "text-center" : "mx-0 text-left", className)}>
      {eyebrow ? (
        <p className={cn("mb-3 text-xs font-bold uppercase tracking-[0.28em]", light ? "text-[#E6C5C5]" : "text-[#B89455]")}>{eyebrow}</p>
      ) : null}
      <h2 className={cn("font-serif text-4xl font-semibold leading-[0.96] tracking-[-0.04em] sm:text-5xl lg:text-6xl", light ? "text-white" : "text-[#242124]")}>{title}</h2>
      {description ? (
        <p className={cn("mt-5 text-base leading-7 sm:text-lg", light ? "text-white/76" : "text-[#5D5557]")}>{description}</p>
      ) : null}
    </div>
  );
}
