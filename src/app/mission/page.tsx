"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Award, Users, TrendingUp, Heart, Sparkles } from "lucide-react";
import { AnimatedText, FadeIn } from "@/components/ui/animated-text";

export default function MissionPage() {
  return (
    <div className="min-h-screen bg-[#FFF5EE] text-[#4B3A2B] dark:bg-[#0B0B0B] dark:text-neutral-100 transition-colors duration-300">
      <Navigation />
      <main className="pt-[108px]">
        <HeroSection />
        <AboutSection />
        <MissionSection />
        <VisionSection />
      </main>
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative mx-auto max-w-[1180px] px-6 pb-20 pt-16 sm:px-10 lg:px-16 overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-24 h-72 w-72 rounded-full bg-[#FF642F]/20 blur-[140px]" />
        <div className="absolute -right-14 -bottom-20 h-96 w-96 rounded-full bg-[#4B3A2B]/20 blur-[160px]" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-[1]"
      >
        <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#FFF5EE] via-white to-[#F9F5F0] dark:from-[#151515] dark:via-[#101010] dark:to-[#0B0B0B] px-8 py-16 shadow-[0_40px_120px_rgba(75,58,43,0.16)] dark:shadow-[0_45px_140px_rgba(0,0,0,0.45)] sm:px-12 lg:px-20 transition-colors duration-300">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 -top-24 h-52 w-52 rounded-full bg-[#FF642F]/20 blur-[140px]" />
            <div className="absolute -right-14 -bottom-20 h-72 w-72 rounded-full bg-[#4B3A2B]/20 blur-[160px]" />
          </div>

          <div className="relative z-[1] flex flex-col gap-6 text-[#4B3A2B] dark:text-neutral-100 transition-colors duration-300">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/70 dark:bg-neutral-900/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#4B3A2B] dark:text-neutral-100 shadow-[0_12px_30px_rgba(255,100,47,0.18)] dark:shadow-[0_12px_30px_rgba(255,100,47,0.12)]">
                <Sparkles className="h-4 w-4 text-[#FF642F]" />
                Our Purpose & Promise
              </span>
            </motion.div>
            <AnimatedText
              text="Building Trust, Delivering Excellence, Creating Value"
              className="text-4xl font-semibold leading-tight text-[#2E2E2E] dark:text-white sm:text-5xl lg:text-6xl"
              delay={0.3}
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="max-w-3xl text-lg leading-relaxed text-[#6B6B6B] dark:text-neutral-300 sm:text-xl"
            >
              For over 10 years, ASL Realtors has been a trusted leader in commercial real estate,
              delivering strategic leasing solutions that support business growth and long-term success.
            </motion.p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const services = [
    "Commercial leasing for office, retail, and industrial spaces",
    "Tenant representation and space-planning guidance",
    "Landlord representation and property marketing",
    "Market research and site selection strategy",
    "Lease negotiations and advisory services",
  ];

  const values = [
    { icon: TrendingUp, title: "Transparent communication", color: "#FF642F" },
    { icon: Award, title: "Expert market knowledge", color: "#4B3A2B" },
    { icon: Target, title: "Customized real estate strategies", color: "#FF642F" },
    { icon: Users, title: "Strong industry relationships", color: "#4B3A2B" },
    { icon: Heart, title: "Commitment to delivering results", color: "#FF642F" },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#FF642F]/14 blur-[200px]" />
        <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-[#4B3A2B]/14 blur-[220px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-16">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 rounded-full bg-white/70 dark:bg-neutral-900/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4B3A2B] dark:text-neutral-100 shadow-[0_16px_40px_rgba(75,58,43,0.18)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] mb-6">
              <Award className="h-4 w-4 text-[#FF642F]" />
              About ASL Realtors
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[#2E2E2E] dark:text-white sm:text-4xl lg:text-5xl mb-6">
              A Decade of Excellence in Commercial Real Estate
            </h2>
            <p className="max-w-3xl mx-auto text-base leading-relaxed text-[#6B6B6B] dark:text-neutral-300 sm:text-lg">
              Founded on principles of integrity, professionalism, and client-focused service, we have built
              a strong reputation for connecting businesses with the right commercial spaces—efficiently,
              confidently, and with measurable results.
            </p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <FadeIn direction="right" delay={0.3}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="rounded-[32px] border border-white/40 dark:border-white/10 bg-white/85 dark:bg-neutral-900/80 backdrop-blur-xl p-8 shadow-[0_50px_140px_rgba(75,58,43,0.18)] dark:shadow-[0_55px_160px_rgba(0,0,0,0.5)]"
            >
              <h3 className="text-2xl font-semibold text-[#2E2E2E] dark:text-white mb-6">
                What We Do
              </h3>
              <ul className="space-y-4">
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="flex gap-4 items-start"
                  >
                    <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#FF642F]" />
                    <span className="text-base leading-relaxed text-[#4B3A2B] dark:text-neutral-200">
                      {service}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </FadeIn>

          <FadeIn direction="left" delay={0.4}>
            <motion.div
              whileHover={{ scale: 1.02, y: -5 }}
              transition={{ duration: 0.3 }}
              className="rounded-[32px] border border-white/40 dark:border-white/10 bg-white/85 dark:bg-neutral-900/80 backdrop-blur-xl p-8 shadow-[0_50px_140px_rgba(75,58,43,0.18)] dark:shadow-[0_55px_160px_rgba(0,0,0,0.5)]"
            >
              <h3 className="text-2xl font-semibold text-[#2E2E2E] dark:text-white mb-6">
                Why Clients Trust Us
              </h3>
              <div className="space-y-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                      whileHover={{ x: 5 }}
                      className="flex gap-4 items-center p-4 rounded-xl bg-white/50 dark:bg-neutral-800/50 backdrop-blur-sm"
                    >
                      <div
                        className="p-3 rounded-xl"
                        style={{ backgroundColor: `${value.color}15` }}
                      >
                        <Icon className="h-5 w-5" style={{ color: value.color }} />
                      </div>
                      <span className="text-base font-medium text-[#4B3A2B] dark:text-neutral-200">
                        {value.title}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </FadeIn>
        </div>

        <FadeIn direction="up" delay={0.6}>
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
            className="rounded-[32px] border border-white/40 dark:border-white/10 bg-gradient-to-br from-[#FF642F]/10 via-white/90 to-[#FFF5EE] dark:from-[#FF642F]/5 dark:via-neutral-900/90 dark:to-[#0B0B0B] backdrop-blur-xl p-10 shadow-[0_50px_140px_rgba(75,58,43,0.18)] dark:shadow-[0_55px_160px_rgba(0,0,0,0.5)]"
          >
            <p className="text-lg leading-relaxed text-[#4B3A2B] dark:text-neutral-200 text-center max-w-4xl mx-auto">
              Over the past decade, we have helped countless businesses secure their ideal locations—spaces
              that support productivity, customer traffic, operational efficiency, and long-term stability.
            </p>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

function MissionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-32 bg-gradient-to-b from-transparent to-[#FFF5EE]/50 dark:to-[#0B0B0B]/50"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#FF914D]/12 blur-[200px]" />
        <div className="absolute right-0 bottom-0 h-[420px] w-[420px] rounded-full bg-[#FF642F]/10 blur-[220px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-16">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 rounded-full bg-white/70 dark:bg-neutral-900/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4B3A2B] dark:text-neutral-100 shadow-[0_16px_40px_rgba(75,58,43,0.18)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] mb-6">
              <Target className="h-4 w-4 text-[#FF642F]" />
              Our Mission
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[#2E2E2E] dark:text-white sm:text-4xl lg:text-5xl mb-6">
              Empowering Businesses Through Exceptional Real Estate Solutions
            </h2>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ duration: 0.3 }}
            className="rounded-[40px] border border-white/40 dark:border-white/10 bg-white/85 dark:bg-neutral-900/80 backdrop-blur-xl p-10 lg:p-16 shadow-[0_50px_140px_rgba(75,58,43,0.18)] dark:shadow-[0_55px_160px_rgba(0,0,0,0.5)]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-[#4B3A2B] dark:text-neutral-200 mb-6">
                At ASL Realtors, our mission is to provide exceptional commercial leasing solutions that
                empower businesses to grow and thrive. We are committed to guiding clients with integrity,
                market expertise, and a personalized approach that ensures every space meets their operational
                and strategic goals.
              </p>
              <p className="text-lg leading-relaxed text-[#4B3A2B] dark:text-neutral-200 mb-6">
                We strive to simplify the leasing process by listening closely to our clients' needs, offering
                clear insights, and delivering tailored solutions that create long-term value. Through transparent
                communication, strong industry relationships, and a commitment to excellence, we aim to support
                tenants, landlords, and investors in making confident real estate decisions.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="p-6 rounded-2xl bg-gradient-to-r from-[#FF642F]/10 to-[#FF914D]/10 dark:from-[#FF642F]/5 dark:to-[#FF914D]/5 border border-[#FF642F]/20 dark:border-[#FF642F]/10"
              >
                <p className="text-lg leading-relaxed text-[#4B3A2B] dark:text-neutral-200 font-medium">
                  Our mission is to build lasting partnerships, contribute to vibrant business communities,
                  and set a higher standard for service within the commercial real estate industry.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

function VisionSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-20 lg:py-32"
    >
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#4B3A2B]/14 blur-[200px]" />
        <div className="absolute -bottom-40 left-0 h-[420px] w-[420px] rounded-full bg-[#FF642F]/10 blur-[220px]" />
      </div>

      <div className="relative mx-auto max-w-[1180px] px-6 sm:px-10 lg:px-16">
        <FadeIn direction="up" delay={0.2}>
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-3 rounded-full bg-white/70 dark:bg-neutral-900/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4B3A2B] dark:text-neutral-100 shadow-[0_16px_40px_rgba(75,58,43,0.18)] dark:shadow-[0_16px_40px_rgba(0,0,0,0.35)] mb-6">
              <Eye className="h-4 w-4 text-[#FF642F]" />
              Our Vision
            </span>
            <h2 className="text-3xl font-semibold leading-tight text-[#2E2E2E] dark:text-white sm:text-4xl lg:text-5xl mb-6">
              Shaping the Future of Commercial Real Estate
            </h2>
          </div>
        </FadeIn>

        <FadeIn direction="up" delay={0.3}>
          <motion.div
            whileHover={{ scale: 1.01, y: -5 }}
            transition={{ duration: 0.3 }}
            className="rounded-[40px] border border-white/40 dark:border-white/10 bg-gradient-to-br from-[#4B3A2B]/5 via-white/85 to-[#FFF5EE] dark:from-[#4B3A2B]/5 dark:via-neutral-900/85 dark:to-[#0B0B0B] backdrop-blur-xl p-10 lg:p-16 shadow-[0_50px_140px_rgba(75,58,43,0.18)] dark:shadow-[0_55px_160px_rgba(0,0,0,0.5)]"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg leading-relaxed text-[#4B3A2B] dark:text-neutral-200 mb-6">
                Our vision at ASL Realtors is to become a leading force in the commercial real estate industry
                by setting new standards for service, integrity, and market expertise. We aim to be the preferred
                partner for businesses seeking strategic leasing solutions, recognized for our commitment to
                innovation, client success, and long-term value creation.
              </p>
              <p className="text-lg leading-relaxed text-[#4B3A2B] dark:text-neutral-200 mb-6">
                As we build on our 10-year foundation, we envision a future where ASL Realtors continues to
                expand its reach, strengthen industry relationships, and shape vibrant commercial communities.
                Through forward-thinking strategies and a client-first approach, we aspire to create environments
                where businesses grow, investments flourish, and communities prosper.
              </p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10"
              >
                {[
                  { title: "10+ Years", subtitle: "Of Excellence" },
                  { title: "Innovation", subtitle: "Forward Thinking" },
                  { title: "Community", subtitle: "Building Together" },
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-6 rounded-2xl bg-white/60 dark:bg-neutral-800/60 backdrop-blur-sm border border-white/40 dark:border-white/10 text-center"
                  >
                    <h4 className="text-2xl font-bold text-[#FF642F] mb-2">{stat.title}</h4>
                    <p className="text-sm text-[#6B6B6B] dark:text-neutral-400">{stat.subtitle}</p>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>
        </FadeIn>
      </div>
    </section>
  );
}

