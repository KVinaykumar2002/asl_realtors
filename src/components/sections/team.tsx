"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { Users } from "lucide-react";

const team = [
  {
    name: "Michael Anderson",
    role: "Founder & CEO",
    image: "https://framerusercontent.com/images/15Lp1E78tHQQO5GUC5WbMqzR5U.png",
    bio: "20+ years in luxury home construction",
  },
  {
    name: "Sarah Mitchell",
    role: "Lead Designer",
    image: "https://framerusercontent.com/images/I8tA6fJg2iCEnJzD9EaGPlz4s.png",
    bio: "Award-winning interior architect",
  },
  {
    name: "David Chen",
    role: "Project Manager",
    image: "https://framerusercontent.com/images/dG6aD2zu5wI4Ua89g2a4qj68Zc.png",
    bio: "Expert in large-scale renovations",
  },
  {
    name: "Emily Rodriguez",
    role: "Construction Lead",
    image: "https://framerusercontent.com/images/aBnNeR2QxjkJ88A7gRD7SjYc6uA.png",
    bio: "Master craftsperson with 15+ years",
  },
];

export default function TeamSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0B0B0B] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="text-center mb-12">
          <div className={`inline-flex items-center gap-2.5 rounded-full border border-primary/60 dark:border-white/10 bg-white/60 dark:bg-neutral-900/60 text-primary pl-3 pr-4 py-1.5 text-[13px] font-semibold tracking-wider uppercase mb-6 transition-all duration-1000 backdrop-blur-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <Users className="w-3.5 h-3.5" />
            <span>Our Team</span>
          </div>
          <h2 className={`text-4xl lg:text-5xl font-bold text-text-dark dark:text-white mb-4 transition-all duration-1000 delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Meet The <span className="text-primary">Experts</span>
          </h2>
          <p className={`text-lg text-muted-foreground dark:text-neutral-400 max-w-2xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            Our talented team of professionals brings decades of combined experience in luxury home renovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className={`bg-[#FDF8F3] dark:bg-neutral-900/60 border border-transparent dark:border-white/10 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms' }}
            >
              <div className="relative h-80">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-text-dark dark:text-white mb-1 transition-colors duration-300">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-sm text-muted-foreground dark:text-neutral-400 transition-colors duration-300">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
