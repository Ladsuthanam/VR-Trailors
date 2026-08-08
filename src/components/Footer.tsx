import { Camera, Globe, MessageCircle, Scissors } from "lucide-react";
import { businessInfo, getWhatsAppHref } from "../config/business";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Our Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#1D191B] px-5 py-12 text-white sm:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[1fr_0.8fr_1fr]">
        <div>
          <a href="#home" className="inline-flex items-center gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-2 focus-visible:ring-offset-[#1D191B]">
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#6B2638] text-white">
              <Scissors className="h-5 w-5" aria-hidden="true" />
            </span>
            <span className="font-serif text-3xl font-semibold tracking-[-0.04em]">{businessInfo.shopName}</span>
          </a>
          <p className="mt-4 max-w-sm text-white/68">{businessInfo.tagline}</p>
        </div>

        <nav aria-label="Footer navigation" className="grid gap-3">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="text-white/68 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]">
              {link.label}
            </a>
          ))}
        </nav>

        <div>
          <div className="flex gap-3">
            <a href={businessInfo.socialLinks.instagram} aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-full bg-white/8 text-white transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]">
              <Camera className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href={businessInfo.socialLinks.facebook} aria-label="Facebook" className="grid h-11 w-11 place-items-center rounded-full bg-white/8 text-white transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]">
              <Globe className="h-5 w-5" aria-hidden="true" />
            </a>
            <a href={getWhatsAppHref()} aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-full bg-white/8 text-white transition hover:bg-white/14 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]">
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
            </a>
          </div>
          <dl className="mt-6 grid gap-3 text-sm text-white/68">
            <div><dt className="font-bold text-white">Phone</dt><dd>{businessInfo.phone}</dd></div>
            <div>
              <dt className="font-bold text-white">Address</dt>
              <dd>
                <a href={businessInfo.locationUrl} target="_blank" rel="noreferrer" className="underline decoration-[#B89455]/50 underline-offset-4 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]">
                  {businessInfo.address}
                </a>
              </dd>
            </div>
            <div><dt className="font-bold text-white">Opening Hours</dt><dd>{businessInfo.openingHours}</dd></div>
          </dl>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6 text-sm text-white/48">
        Copyright 2026 {businessInfo.shopName}. All rights reserved.
      </div>
    </footer>
  );
}
