"use client";

import { useEffect, useMemo, useRef } from "react";
import Image from "next/image";
import { MessageSquare } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const testimonialsData = [
  {
    id: 1,
    quote: "Great communication, excellent quality — our remodel feels flawless and well-crafted.",
    name: "Jason P.",
    location: "Los Angeles",
    avatar: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=96&h=96&q=80",
    rating: 5,
  },
  {
    id: 2,
    quote: "ASL Realtors was professional, fast, and the final result truly blew us away. Fully Satisfied!",
    name: "Priya R.",
    location: "Sacramento",
    avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=96&h=96&q=80",
    rating: 5,
  },
  {
    id: 3,
    quote: "They handled everything from design to build. We just sat back and watched it happen.",
    name: "Greg T.",
    location: "Pasadena",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=96&h=96&q=80",
    rating: 4,
  },
  {
    id: 4,
    quote: "It's rare to find a team this reliable and skilled — highly recommended to all!",
    name: "Melissa K.",
    location: "San Diego",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=96&h=96&q=80",
    rating: 5,
  },
  {
    id: 5,
    quote: "Outstanding workmanship and attention to detail. Our dream home became reality.",
    name: "Alex Peterson",
    location: "Beverly Hills",
    avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?auto=format&fit=crop&w=96&h=96&q=80",
    rating: 5,
  },
  {
    id: 6,
    quote: "From start to finish, the team was professional, courteous and delivered on time.",
    name: "Sarah Chen",
    location: "San Francisco",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=96&h=96&q=80",
    rating: 5,
  },
];

const featuredTestimonial = {
  quote: "From the very first consultation, ASL Realtors felt like the right choice. The team was organized, transparent, and truly cared about the details. Our home feels brand new.",
  attribution: "- Tanya L., Irvine",
  image: "https://images.unsplash.com/photo-1505691723518-36a5ac3be353?auto=format&fit=crop&w=1600&q=80",
};

const QuotationMark = ({ className }: { className?: string }) => (
    <svg
      width="27"
      height="23"
      viewBox="0 0 27 23"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M8.94 0C3.98 0 0 2.92134 0 6.53371V15.7416H11.18V6.53371C11.18 2.92134 7.2 0 2.22 0H8.94ZM27 6.53371C27 2.92134 23.02 0 18.04 0H24.76C19.8 0 15.82 2.92134 15.82 6.53371V15.7416H27V6.53371Z"
        fill="currentColor"
    />
    </svg>
  );

const StarRating = ({ rating }: { rating: number }) => (
  <div className="flex gap-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300 fill-gray-300"}`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ))}
  </div>
);

function useAutoScroll(
  ref: React.RefObject<HTMLDivElement | null>,
  speed: number,
  direction: 1 | -1
) {
  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    let animationFrameId: number;
    let scrollPosition = direction === 1 ? 0 : container.scrollWidth / 2;

    const step = () => {
      const maxScroll = container.scrollWidth / 2;
      scrollPosition += speed * direction;

      if (direction === 1 && scrollPosition >= maxScroll) {
        scrollPosition = 0;
      }
      if (direction === -1 && scrollPosition <= 0) {
        scrollPosition = maxScroll;
      }

      container.scrollLeft = scrollPosition;
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    const handleMouseEnter = () => cancelAnimationFrame(animationFrameId);
    const handleMouseLeave = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(step);
    };

    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [ref, speed, direction]);
}

export default function Testimonials() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const topRowRef = useRef<HTMLDivElement>(null);
  const bottomRowRef = useRef<HTMLDivElement>(null);

  const { topRow, bottomRow } = useMemo(() => {
    const even: typeof testimonialsData = [];
    const odd: typeof testimonialsData = [];
    testimonialsData.forEach((item, index) => {
      if (index % 2 === 0) {
        even.push(item);
      } else {
        odd.push(item);
      }
    });
    return {
      topRow: [...even, ...even],
      bottomRow: [...odd, ...odd],
    };
  }, []);

  useAutoScroll(topRowRef, 0.6, 1);
  useAutoScroll(bottomRowRef, 0.6, -1);

  return (
    <section id="testimonials" className="bg-[#FDF8F3] py-20 lg:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col gap-8">
          <div className={`flex flex-col items-center gap-4 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-primary text-primary pl-3 pr-4 py-1.5 text-[13px] font-semibold tracking-wider uppercase">
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Testimonials</span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-text-dark tracking-[-0.01em] leading-tight">
              What clients say about us
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-2xl">
              Real Stories from Homeowners Who Trusted ASL Realtors for Their Home Renovation
            </p>
          </div>

          {/* Dual-row marquee testimonials */}
          <div className="flex flex-col gap-8">
            <div
              ref={topRowRef}
              className="overflow-hidden"
              style={{ scrollBehavior: "auto" }}
            >
              <div className="flex w-max gap-6">
                {topRow.map((testimonial, index) => (
                  <TestimonialCard
                    key={`top-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>

            <div
              ref={bottomRowRef}
              className="overflow-hidden"
              style={{ scrollBehavior: "auto" }}
            >
              <div className="flex w-max gap-6">
                {bottomRow.map((testimonial, index) => (
                  <TestimonialCard
                    key={`bottom-${testimonial.id}-${index}`}
                    testimonial={testimonial}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Featured Testimonial */}
          <div className={`transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="relative rounded-2xl overflow-hidden h-[400px] flex flex-col justify-end">
              <Image
                src={featuredTestimonial.image}
                alt="Luxury home interior with warm lighting"
                fill
                className="object-cover z-0"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent z-10" />

              <div className="relative z-20 p-10 text-white max-w-3xl mx-auto text-center">
                <QuotationMark className="text-white/20 mx-auto mb-6 w-12 h-12" />
                <p className="text-xl font-medium leading-relaxed mb-6">
                  {featuredTestimonial.quote}
                </p>
                <p className="text-base text-white/80">
                  {featuredTestimonial.attribution}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type TestimonialProps = {
  testimonial: (typeof testimonialsData)[number];
};

function TestimonialCard({ testimonial }: TestimonialProps) {
  return (
    <div className="relative w-[360px] flex-shrink-0 rounded-3xl border border-[#F3E7DD] bg-white p-8 shadow-[0_12px_30px_rgba(31,43,64,0.08)] transition-transform duration-500 hover:-translate-y-2 hover:shadow-[0_24px_60px_rgba(31,43,64,0.12)] sm:p-10">
      <QuotationMark className="text-primary/10 absolute top-8 right-8 w-12 h-12" />
      <StarRating rating={testimonial.rating} />
      <p className="mt-6 min-h-[72px] text-base leading-relaxed text-[#5F6470] sm:text-lg">
        {testimonial.quote}
      </p>
      <div className="mt-8 flex items-center gap-4">
        <Image
          src={testimonial.avatar}
          alt={`Avatar of ${testimonial.name}`}
          width={54}
          height={54}
          className="rounded-full object-cover"
        />
        <div>
          <p className="text-base font-semibold text-[#1B1D24]">
            {testimonial.name}
          </p>
          <p className="text-sm text-[#6F7787]">{testimonial.location}</p>
        </div>
      </div>
    </div>
  );
}