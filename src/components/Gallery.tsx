import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryCategories, galleryImages, type GalleryCategory } from "../data/gallery";
import { cn } from "../utils/cn";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";

type ActiveCategory = "All" | GalleryCategory;

export function Gallery() {
  const [category, setCategory] = useState<ActiveCategory>("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const filteredImages = useMemo(() => {
    return category === "All" ? galleryImages : galleryImages.filter((image) => image.category === category);
  }, [category]);

  const activeImage = lightboxIndex === null ? null : filteredImages[lightboxIndex];

  useEffect(() => {
    if (lightboxIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxIndex(null);
      if (event.key === "ArrowRight") setLightboxIndex((index) => (index === null ? index : (index + 1) % filteredImages.length));
      if (event.key === "ArrowLeft") setLightboxIndex((index) => (index === null ? index : (index - 1 + filteredImages.length) % filteredImages.length));
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [filteredImages.length, lightboxIndex]);

  return (
    <section id="work" className="bg-[#F8F3ED] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionReveal>
          <SectionHeading eyebrow="Our Work" title="A Little Look at Our Work" description="Placeholder imagery is organized so real blouse, gown and alteration photos can be replaced easily later." />
        </SectionReveal>

        <SectionReveal className="mt-9 flex flex-wrap justify-center gap-2">
          {(["All", ...galleryCategories] as ActiveCategory[]).map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => {
                setCategory(item);
                setLightboxIndex(null);
              }}
              className={cn(
                "rounded-full px-4 py-2 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-2",
                category === item ? "bg-[#6B2638] text-white shadow-lg shadow-[#6B2638]/15" : "bg-white/70 text-[#6B2638] hover:bg-white",
              )}
            >
              {item}
            </button>
          ))}
        </SectionReveal>

        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4 [column-fill:_balance]">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.button
                layout
                key={image.id}
                type="button"
                onClick={() => setLightboxIndex(index)}
                className="group mb-4 block w-full break-inside-avoid overflow-hidden rounded-[1.4rem] bg-[#242124] text-left shadow-[0_18px_70px_rgba(36,33,36,0.12)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455] focus-visible:ring-offset-4"
                initial={reduceMotion ? false : { opacity: 0, y: 20 }}
                animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
                exit={reduceMotion ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={cn(
                    "w-full object-cover opacity-95 transition duration-700 group-hover:scale-105 group-hover:opacity-100",
                    image.shape === "wide" ? "aspect-[1.35/1]" : image.shape === "tall" ? "aspect-[0.78/1]" : "aspect-square",
                  )}
                  loading="lazy"
                />
                <span className="sr-only">Open {image.title}</span>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>
      </div>

      <AnimatePresence>
        {activeImage ? (
          <motion.div
            className="fixed inset-0 z-[70] grid place-items-center bg-[#242124]/88 p-4 backdrop-blur-md"
            role="dialog"
            aria-modal="true"
            aria-label={`${activeImage.title} image preview`}
            initial={reduceMotion ? false : { opacity: 0 }}
            animate={reduceMotion ? undefined : { opacity: 1 }}
            exit={reduceMotion ? undefined : { opacity: 0 }}
          >
            <button type="button" className="absolute right-4 top-4 grid h-12 w-12 place-items-center rounded-full bg-white text-[#242124] transition hover:bg-[#F8F3ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]" onClick={() => setLightboxIndex(null)} aria-label="Close gallery preview">
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
            <button type="button" className="absolute left-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-[#242124] transition hover:bg-[#F8F3ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]" onClick={() => setLightboxIndex((index) => (index === null ? index : (index - 1 + filteredImages.length) % filteredImages.length))} aria-label="Previous image">
              <ChevronLeft className="h-6 w-6" aria-hidden="true" />
            </button>
            <motion.figure className="w-full max-w-5xl" initial={reduceMotion ? false : { scale: 0.97, y: 20 }} animate={reduceMotion ? undefined : { scale: 1, y: 0 }} exit={reduceMotion ? undefined : { scale: 0.97, y: 20 }}>
              <img src={activeImage.src} alt={activeImage.alt} className="max-h-[78vh] w-full rounded-[1.5rem] object-contain" />
              <figcaption className="mt-4 text-center text-white">
                <span className="font-serif text-3xl font-semibold">{activeImage.title}</span>
                <span className="ml-3 text-sm font-bold uppercase tracking-[0.2em] text-[#E6C5C5]">{activeImage.category}</span>
              </figcaption>
            </motion.figure>
            <button type="button" className="absolute right-4 top-1/2 grid h-12 w-12 -translate-y-1/2 place-items-center rounded-full bg-white text-[#242124] transition hover:bg-[#F8F3ED] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B89455]" onClick={() => setLightboxIndex((index) => (index === null ? index : (index + 1) % filteredImages.length))} aria-label="Next image">
              <ChevronRight className="h-6 w-6" aria-hidden="true" />
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
