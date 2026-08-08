import { useEffect } from "react";
import { About } from "./components/About";
import { BeforeAfter } from "./components/BeforeAfter";
import { BookingForm } from "./components/BookingForm";
import { Contact } from "./components/Contact";
import { FAQ } from "./components/FAQ";
import { FeaturedService } from "./components/FeaturedService";
import { FinalCTA } from "./components/FinalCTA";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Navbar } from "./components/Navbar";
import { PortfolioStrip } from "./components/PortfolioStrip";
import { Services } from "./components/Services";
import { TailorProfile } from "./components/TailorProfile";
import { Testimonials } from "./components/Testimonials";
import { TrustBar } from "./components/TrustBar";
import { WhatsAppButton } from "./components/WhatsAppButton";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { businessInfo, isConfigured } from "./config/business";

export default function App() {
  useSeoMetadata();

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#FCFAF7] font-sans text-[#242124] antialiased">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Services />
        <FeaturedService />
        <BeforeAfter />
        <Gallery />
        <PortfolioStrip />
        <About />
        <TailorProfile />
        <HowItWorks />
        <WhyChooseUs />
        <Testimonials />
        <BookingForm />
        <Contact />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

function useSeoMetadata() {
  useEffect(() => {
    const title = `${businessInfo.shopName} | Ladies Tailoring & Dress Alterations`;
    const description = businessInfo.seo.description;

    document.title = title;
    setMeta("name", "description", description);
    setMeta("property", "og:title", title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:image", businessInfo.images.hero);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", title);
    setMeta("name", "twitter:description", description);

    let canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = businessInfo.seo.canonicalUrl;

    const schema = buildLocalBusinessSchema();
    let script = document.querySelector<HTMLScriptElement>('#local-business-schema');
    if (!script) {
      script = document.createElement("script");
      script.id = "local-business-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
  }, []);
}

function setMeta(attribute: "name" | "property", key: string, content: string) {
  let tag = document.querySelector<HTMLMetaElement>(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.content = content;
}

function buildLocalBusinessSchema() {
  const schema: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.shopName,
    description: businessInfo.seo.description,
    url: businessInfo.seo.canonicalUrl,
    image: businessInfo.images.hero,
    makesOffer: [
      "Ladies dress stitching",
      "Saree blouse stitching",
      "Gown stitching",
      "Dress alterations",
      "Bridal and occasion wear adjustments",
    ],
  };

  if (isConfigured(businessInfo.phone)) schema.telephone = businessInfo.phone;
  if (isConfigured(businessInfo.address)) schema.address = businessInfo.address;
  if (isConfigured(businessInfo.openingHours)) schema.openingHours = businessInfo.openingHours;
  if (businessInfo.locationUrl) schema.hasMap = businessInfo.locationUrl;

  return schema;
}
