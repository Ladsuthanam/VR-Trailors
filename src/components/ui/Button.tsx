import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "../../utils/cn";

type Variant = "primary" | "secondary" | "ghost";

const baseClasses =
  "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60";

const variants: Record<Variant, string> = {
  primary:
    "bg-[#6B2638] text-white shadow-[0_18px_45px_rgba(107,38,56,0.24)] hover:bg-[#552033] hover:shadow-[0_22px_55px_rgba(107,38,56,0.32)]",
  secondary:
    "bg-[#FCFAF7]/90 text-[#6B2638] ring-1 ring-[#6B2638]/15 hover:bg-white hover:ring-[#6B2638]/30",
  ghost: "text-[#6B2638] hover:bg-[#6B2638]/7",
};

type ButtonLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  showArrow?: boolean;
  children: ReactNode;
};

export function ButtonLink({
  variant = "primary",
  showArrow = true,
  className,
  children,
  ...props
}: ButtonLinkProps) {
  return (
    <a className={cn(baseClasses, variants[variant], className)} {...props}>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      ) : null}
    </a>
  );
}

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: Variant;
  showArrow?: boolean;
  children: ReactNode;
};

export function Button({ variant = "primary", showArrow = true, className, children, ...props }: ButtonProps) {
  return (
    <button className={cn(baseClasses, variants[variant], className)} {...props}>
      <span>{children}</span>
      {showArrow ? (
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
      ) : null}
    </button>
  );
}
