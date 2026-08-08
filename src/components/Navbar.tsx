import { useEffect, useState } from "react";
import { Menu, Scissors, X } from "lucide-react";
import { businessInfo } from "../config/business";
import { ButtonLink } from "./ui/Button";
import { cn } from "../utils/cn";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "How It Works", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.querySelector(link.href))
      .filter((section): section is Element => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { rootMargin: "-35% 0px -55% 0px", threshold: 0.01 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <nav
        aria-label="Primary navigation"
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 transition-all duration-300 sm:px-5",
          isScrolled
            ? "border-white/55 bg-[#FCFAF7]/82 py-2 shadow-[0_16px_60px_rgba(36,33,36,0.12)] backdrop-blur-xl"
            : "border-white/20 bg-[#FCFAF7]/12 py-3 text-white backdrop-blur-md",
        )}
      >
        <a href="#home" className="group flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-2" onClick={() => setIsOpen(false)}>
          <span className={cn("grid h-10 w-10 place-items-center rounded-full transition", isScrolled ? "bg-[#6B2638] text-white" : "bg-white/16 text-white ring-1 ring-white/20")}>
            <Scissors className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-none">
            <span className={cn("block font-serif text-xl font-semibold tracking-[-0.03em]", isScrolled ? "text-[#242124]" : "text-white")}>{businessInfo.shopName}</span>
            <span className={cn("mt-1 hidden text-[10px] font-bold uppercase tracking-[0.25em] sm:block", isScrolled ? "text-[#6B2638]" : "text-white/70")}>Ladies Atelier</span>
          </span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={cn(
                "relative rounded-full px-3 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-2",
                isScrolled ? "text-[#463E40] hover:text-[#6B2638]" : "text-white/82 hover:text-white",
              )}
              aria-current={active === link.href.slice(1) ? "page" : undefined}
            >
              {link.label}
              <span
                className={cn(
                  "absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 transition-transform duration-300",
                  isScrolled ? "bg-[#6B2638]" : "bg-white",
                  active === link.href.slice(1) && "scale-x-100",
                )}
              />
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ButtonLink href="#booking" className="hidden min-h-10 px-4 py-2 text-xs sm:inline-flex" showArrow={false} variant={isScrolled ? "primary" : "secondary"}>
            Book an Appointment
          </ButtonLink>
          <button
            type="button"
            className={cn("grid h-11 w-11 place-items-center rounded-full transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-2 lg:hidden", isScrolled ? "bg-[#6B2638] text-white" : "bg-white/14 text-white ring-1 ring-white/25")}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((value) => !value)}
          >
            {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <div
        className={cn(
          "mx-3 mt-3 overflow-hidden rounded-[2rem] bg-[#FCFAF7] shadow-[0_28px_80px_rgba(36,33,36,0.2)] transition-all duration-300 lg:hidden",
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="grid gap-1 p-4">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="rounded-2xl px-4 py-3 text-base font-semibold text-[#242124] transition hover:bg-[#F8F3ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]"
            >
              {link.label}
            </a>
          ))}
          <ButtonLink href="#booking" className="mt-2 w-full" onClick={() => setIsOpen(false)}>
            Book an Appointment
          </ButtonLink>
        </div>
      </div>
    </header>
  );
}
