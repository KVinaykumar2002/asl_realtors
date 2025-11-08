"use client";

import { Calculator, Lightbulb, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const tools = [
  {
    icon: "📦",
    title: "Budget Calculator",
    description: "Check your affordability range for buying home",
    href: "#budget-calculator",
  },
  {
    icon: "🏦",
    title: "EMI Calculator",
    description: "Calculate your home loan EMI",
    href: "#emi-calculator",
  },
  {
    icon: "₹",
    title: "Loan Eligibility",
    description: "See what you can borrow for your home",
    href: "#loan-eligibility",
  },
  {
    icon: "📐",
    title: "Area Converter",
    description: "Convert one area into any other easily",
    href: "#area-converter",
  },
];

export default function CalculatorTools() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="bg-[#EEF5FF] dark:bg-[#0B0B0B] py-20 lg:py-28 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={ref} className="flex flex-col gap-12">
          <div className={`flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="flex items-start gap-4">
              <div className="bg-primary/10 dark:bg-neutral-900/60 border border-primary/20 dark:border-white/10 p-4 rounded-2xl backdrop-blur-md transition-colors duration-300">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h2 className="text-4xl lg:text-5xl font-bold text-text-dark dark:text-white tracking-[-0.01em] leading-tight transition-colors duration-300">
                  Use popular tools
                </h2>
                <p className="text-lg text-muted-foreground dark:text-neutral-400 mt-2 transition-colors duration-300">
                  Go from browsing to buying
                </p>
              </div>
            </div>
          </div>

          <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {tools.map((tool, index) => (
              <a
                key={index}
                href={tool.href}
                className="bg-white dark:bg-neutral-900/60 border border-white/10 rounded-2xl p-8 flex flex-col items-center text-center shadow-[0_4px_10px_rgba(0,0,0,0.05)] dark:shadow-none transition-all duration-300 hover:shadow-xl hover:-translate-y-2 group backdrop-blur-md"
              >
                <div className="text-6xl mb-6">{tool.icon}</div>
                <h3 className="text-xl font-bold text-text-dark dark:text-white mb-3 group-hover:text-[#FF642F] transition-colors">
                  {tool.title}
                </h3>
                <p className="text-muted-foreground dark:text-neutral-400 text-sm leading-relaxed transition-colors duration-300">
                  {tool.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
