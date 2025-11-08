"use client";

import React, { useCallback, useRef, useEffect, useState } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { Compass, ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

interface Project {
  title: string;
  description: string;
  image: string;
  alt: string;
}

const projects: Project[] = [
  {
    title: "Sonoma Valley Vineyard Retreat",
    description: "A rustic-modern retreat set among Sonoma's vineyards, designed for leisure, gatherings, and weekend escapes.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/6f942SvHyYRaCchW2zEcatndm0-11.jpg",
    alt: "Aerial view of a vineyard retreat with pools and modern buildings",
  },
  {
    title: "Santa Monica Creative Studio",
    description: "An industrial loft transformed into a vibrant, collaborative creative studio for a design-focused business.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/ZQ3SNXxBqH4iRTn5KzvSUUfFkXU-12.jpg",
    alt: "Spacious industrial loft with high ceilings and studio lighting equipment",
  },
  {
    title: "Beverly Hills Luxury Residence",
    description: "A timeless family home renovation in Beverly Hills, designed to blend elegance, comfort, and modern luxury.",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/uh4xMEtnO7cYaQ5ItWn7lpfimTo-10.jpg",
    alt: "Elegant exterior of a modern luxury home at dusk",
  },
];

const slidesData: Project[] = [...projects, ...projects, ...projects];

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <motion.a
    href="#"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay: index * 0.1 }}
    whileHover={{ y: -10 }}
    className="block h-full relative group rounded-2xl overflow-hidden shadow-lg"
  >
    <motion.div
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.6 }}
      className="absolute inset-0"
    >
      <Image
        src={project.image}
        alt={project.alt}
        fill
        className="object-cover"
        sizes="(max-width: 640px) 90vw, (max-width: 1024px) 67vw, 40vw"
      />
    </motion.div>
    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
    <motion.div
      initial={{ scale: 0, rotate: -180 }}
      whileHover={{ scale: 1, rotate: 0 }}
      transition={{ duration: 0.4, type: "spring", stiffness: 200 }}
      className="absolute top-6 right-6 h-10 w-10 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/20"
    >
      <ArrowUpRight className="h-5 w-5 text-white" />
    </motion.div>
    <motion.div
      initial={{ y: 20, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="absolute bottom-0 left-0 p-6 md:p-8 text-white z-10 w-full transform transition-transform group-hover:-translate-y-2"
    >
      <h3 className="text-xl md:text-2xl font-semibold leading-snug">{project.title}</h3>
      <p className="mt-2 text-sm text-white/90 leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">{project.description}</p>
    </motion.div>
  </motion.a>
);

export default function ProjectsCarousel() {
  const autoplay = useRef(Autoplay({ delay: 3000, stopOnInteraction: true, stopOnMouseEnter: true }));
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" }, [autoplay.current]);
  const [isClient, setIsClient] = useState(false);
  const { ref: headerRef, isVisible } = useScrollAnimation(0.1);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <section className="bg-white py-20 md:py-24 lg:py-32 overflow-hidden relative">
      {/* Animated background patterns */}
      <motion.div
        className="absolute top-10 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div ref={headerRef} className="container mx-auto px-5 md:px-10 lg:px-20 text-center relative z-10">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={isVisible ? { scale: 1, opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center justify-center gap-x-2 rounded-full border border-primary px-4 py-2 text-sm font-semibold tracking-[0.05em] uppercase text-primary"
        >
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            <Compass className="h-4 w-4" />
          </motion.div>
          <span>Our Transformations</span>
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 text-[48px] font-bold leading-[1.2] -tracking-[0.01em] text-text-dark"
        >
          Real Homes. <span className="text-primary">Remarkable Results.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          animate={isVisible ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-6 max-w-3xl mx-auto text-lg leading-relaxed text-text-body"
        >
          See how we turn everyday spaces into extraordinary living experiences — one project at a time.
        </motion.p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mt-20 relative"
      >
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex -ml-6 lg:pl-[calc(50%-600px)] xl:pl-[calc(50%-600px+40px)]" style={{ backfaceVisibility: "hidden" }}>
            {slidesData.map((project, index) => (
              <div
                className="relative min-w-0 pl-6 flex-[0_0_90%] sm:flex-[0_0_66.67%] lg:flex-[0_0_40%]"
                key={`${project.title}-${index}`}
              >
                <div className="aspect-[4/3]">
                  <ProjectCard project={project} index={index % 3} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {isClient && (
          <>
            <motion.button
              onClick={scrollPrev}
              whileHover={{ scale: 1.1, x: -5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute z-10 top-1/2 left-4 xl:left-10 -translate-y-1/2 hidden lg:flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white hover:bg-button-hover transition-colors duration-300 shadow-lg"
              aria-label="Previous project"
            >
              <ChevronLeft className="h-7 w-7" />
            </motion.button>
            <motion.button
              onClick={scrollNext}
              whileHover={{ scale: 1.1, x: 5 }}
              whileTap={{ scale: 0.9 }}
              className="absolute z-10 top-1/2 right-4 xl:right-10 -translate-y-1/2 hidden lg:flex items-center justify-center h-14 w-14 rounded-full bg-primary text-white hover:bg-button-hover transition-colors duration-300 shadow-lg"
              aria-label="Next project"
            >
              <ChevronRight className="h-7 w-7" />
            </motion.button>
            <div className="lg:hidden flex justify-center mt-8 gap-4">
              <motion.button
                onClick={scrollPrev}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white hover:bg-button-hover transition-colors duration-300 shadow-md"
              >
                <ChevronLeft className="h-6 w-6" />
              </motion.button>
              <motion.button
                onClick={scrollNext}
                whileTap={{ scale: 0.9 }}
                className="flex items-center justify-center h-12 w-12 rounded-full bg-primary text-white hover:bg-button-hover transition-colors duration-300 shadow-md"
              >
                <ChevronRight className="h-6 w-6" />
              </motion.button>
            </div>
          </>
        )}
      </motion.div>
    </section>
  );
}