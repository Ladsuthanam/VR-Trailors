import { MessageCircle } from "lucide-react";
import { getWhatsAppHref } from "../config/business";

export function WhatsAppButton() {
  return (
    <a
      href={getWhatsAppHref()}
      className="fixed bottom-4 right-4 z-50 inline-flex min-h-12 items-center gap-2 rounded-full bg-[#1F8F4D] px-4 py-3 text-sm font-bold text-white shadow-[0_18px_50px_rgba(31,143,77,0.32)] transition hover:-translate-y-0.5 hover:bg-[#167C40] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-2 sm:bottom-6 sm:right-6"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-5 w-5" aria-hidden="true" />
      <span>Chat on WhatsApp</span>
    </a>
  );
}
