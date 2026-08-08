import { Clock, MapPin, MessageCircle, Phone } from "lucide-react";
import { businessInfo, getWhatsAppHref, isConfigured } from "../config/business";
import { ButtonLink } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

const contactItems = [
  { label: "Visit Us", value: businessInfo.address, href: businessInfo.locationUrl, icon: MapPin },
  { label: "Call Us", value: businessInfo.phone, icon: Phone },
  { label: "WhatsApp", value: businessInfo.whatsappNumber, icon: MessageCircle },
  { label: "Opening Hours", value: businessInfo.openingHours, icon: Clock },
];

export function Contact() {
  return (
    <section id="contact" className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading eyebrow="Contact" title="Visit, Call or Message Us" description="Reach VR Tailors for stitching, fitting, alterations and appointment enquiries." />
        </SectionReveal>

        <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <SectionReveal className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {contactItems.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 rounded-[1.5rem] bg-[#F8F3ED] p-5">
                  <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-[#6B2638] text-white">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="font-bold text-[#242124]">{item.label}</h3>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noreferrer" className="mt-1 inline-flex leading-7 text-[#5D5557] underline decoration-[#B89455]/50 underline-offset-4 transition hover:text-[#6B2638] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]">
                        {item.value}
                      </a>
                    ) : (
                      <p className="mt-1 leading-7 text-[#5D5557]">{item.value}</p>
                    )}
                  </div>
                </div>
              );
            })}
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
              <ButtonLink href={isConfigured(businessInfo.phone) ? `tel:${businessInfo.phone}` : "#booking"} className="w-full" showArrow={false}>Call Now</ButtonLink>
              <ButtonLink href={getWhatsAppHref()} className="w-full" variant="secondary" showArrow={false}>Chat on WhatsApp</ButtonLink>
            </div>
          </SectionReveal>

          <SectionReveal delay={0.1} className="min-h-[430px] overflow-hidden rounded-[2.5rem] bg-[#242124] shadow-[0_28px_90px_rgba(36,33,36,0.14)]">
            <div className="grid h-full min-h-[430px] place-items-center bg-[radial-gradient(circle_at_30%_20%,rgba(217,166,166,0.2),transparent_32%),linear-gradient(135deg,#2C2528,#6B2638)] p-8 text-center text-white">
              <div>
                <MapPin className="mx-auto h-12 w-12 text-[#D9A6A6]" aria-hidden="true" />
                <h3 className="mt-5 font-serif text-4xl font-semibold tracking-[-0.04em]">VR Tailors Location</h3>
                <p className="mx-auto mt-4 max-w-md text-white/72">Open the saved Google location for directions and nearby street view details.</p>
                <ButtonLink href={businessInfo.locationUrl} target="_blank" rel="noreferrer" className="mt-7" variant="secondary">
                  Open Location
                </ButtonLink>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
