import { galleryImages } from "../data/gallery";
import { ButtonLink } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

export function PortfolioStrip() {
  const images = galleryImages.slice(0, 8);

  return (
    <section className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <SectionReveal>
            <SectionHeading
              align="left"
              eyebrow="Portfolio"
              title="Made With Detail. Worn With Confidence."
              description="A visual rhythm of blouses, gowns, fitting details and occasion-ready inspiration. Replace these placeholders with real studio work whenever available."
            />
            <ButtonLink href="#work" className="mt-8">View More Work</ButtonLink>
          </SectionReveal>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {images.map((image, index) => (
              <SectionReveal key={image.id} delay={index * 0.035}>
                <a href="#work" className="group block overflow-hidden rounded-[1.4rem] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-4">
                  <img src={image.src} alt={image.alt} loading="lazy" className="aspect-[0.82/1] h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                </a>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
