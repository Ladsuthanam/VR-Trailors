import { motion, useReducedMotion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { businessInfo } from "../config/business";
import { ButtonLink } from "./ui/Button";

export function Hero() {
  const reduceMotion = useReducedMotion();

  const fadeUp = {
    hidden: { opacity: 0, y: 28 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="home" className="relative isolate flex min-h-[100svh] items-end overflow-hidden bg-[#242124]">
      <motion.img
        src={businessInfo.images.hero}
        alt="Elegant South Asian fashion portrait used as a tailoring studio placeholder."
        className="absolute inset-0 h-full w-full object-cover object-[58%_center]"
        initial={reduceMotion ? false : { scale: 1.06 }}
        animate={reduceMotion ? undefined : { scale: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(36,33,36,0.88),rgba(107,38,56,0.54)_46%,rgba(36,33,36,0.18)),linear-gradient(0deg,rgba(36,33,36,0.72),rgba(36,33,36,0.05)_42%)]" />
      <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-[#242124]/55 to-transparent" />

      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-7xl flex-col px-5 pb-20 pt-36 sm:px-8 lg:pb-24"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: reduceMotion ? 0 : 0.13 }}
      >
        <motion.p variants={reduceMotion ? undefined : fadeUp} className="text-xs font-bold uppercase tracking-[0.38em] text-[#E6C5C5]">
          Crafted With Care
        </motion.p>
        <motion.p variants={reduceMotion ? undefined : fadeUp} className="mt-6 font-serif text-3xl font-semibold leading-none tracking-[-0.04em] text-white sm:text-4xl">
          {businessInfo.shopName}
        </motion.p>
        <motion.h1 variants={reduceMotion ? undefined : fadeUp} className="mt-6 max-w-4xl font-serif text-[clamp(3.25rem,10vw,9.5rem)] font-semibold leading-[0.82] tracking-[-0.075em] text-white">
          Made to Fit.
          <br /> Made to Feel Beautiful.
        </motion.h1>
        <motion.p variants={reduceMotion ? undefined : fadeUp} className="mt-7 max-w-xl text-base leading-7 text-white/78 sm:text-lg">
          Expert ladies' tailoring, custom stitching and dress alterations designed around your style, shape and occasion.
        </motion.p>
        <motion.div variants={reduceMotion ? undefined : fadeUp} className="mt-9 flex flex-col gap-3 sm:flex-row">
          <ButtonLink href="#booking">Book an Appointment</ButtonLink>
          <ButtonLink href="#work" variant="secondary">Explore Our Work</ButtonLink>
        </motion.div>
      </motion.div>

      <a
        href="#trust"
        aria-label="Scroll to studio highlights"
        className="absolute bottom-5 left-1/2 z-10 hidden -translate-x-1/2 rounded-full p-3 text-white/75 transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white md:block"
      >
        <motion.span animate={reduceMotion ? undefined : { y: [0, 7, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: "easeInOut" }} className="block">
          <ChevronDown className="h-6 w-6" aria-hidden="true" />
        </motion.span>
      </a>
    </section>
  );
}
