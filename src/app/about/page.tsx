"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import ScrollStack, { ScrollStackItem } from "@/components/ui/scroll-stack";
import { Sparkles } from "lucide-react";

type PhaseSection = {
  title: string;
  bullets: string[];
};

type PhaseContent = {
  key: string;
  title: string;
  accent: string;
  gradient: string;
  summary: string;
  sections: PhaseSection[];
};

const phases: PhaseContent[] = [
  {
    key: "idea",
    title: "Idea Phase",
    accent: "#FF6B2C",
    gradient:
      "bg-[radial-gradient(circle_at_top,_rgba(255,107,44,0.22),_rgba(255,245,238,0.85)),_linear-gradient(135deg,_rgba(255,245,238,0.92),_rgba(242,240,237,0.92))]",
    summary:
      "Distil intuition and market intelligence into a clear development thesis, mapping demand, opportunity, and concept positioning.",
    sections: [
      {
        title: "Research & Identification",
        bullets: [
          "Identify high-potential real estate zones.",
          "Map demand drivers across residential, commercial, retail, and industrial sectors.",
          "Assess competitor landscape and white space.",
          "Profile buyer and renter demographics.",
        ],
      },
      {
        title: "Feasibility Analysis",
        bullets: [
          "Model ROI estimations and financial viability.",
          "Complete risk assessments (SWOT, legal, financial).",
          "Study catchment strength and absorption.",
          "Project pre-development capital requirements.",
        ],
      },
      {
        title: "Strategic Planning",
        bullets: [
          "Shape concept (product mix, scale, positioning).",
          "Facilitate stakeholder consultations with developers, authorities, and communities.",
          "Undertake land use analysis and acquisition feasibility.",
        ],
      },
    ],
  },
  {
    key: "plan",
    title: "Plan Phase",
    accent: "#FF914D",
    gradient:
      "bg-[radial-gradient(circle_at_top,_rgba(255,145,77,0.18),_rgba(255,245,238,0.9)),_linear-gradient(130deg,_rgba(255,245,238,0.9),_rgba(242,240,237,0.9))]",
    summary:
      "Translate concept into executable blueprints with location intelligence, design stewardship, and regulatory readiness.",
    sections: [
      {
        title: "Location Strategy",
        bullets: [
          "Undertake site selection and evaluation.",
          "Ensure zoning compliance and risk mitigation.",
          "Appraise connectivity and infrastructure frameworks.",
        ],
      },
      {
        title: "Project Design Strategy",
        bullets: [
          "Shortlist and onboard architects + specialists.",
          "Lead design development and statutory compliance.",
          "Embed sustainable planning (green certification, smart planning).",
        ],
      },
      {
        title: "Approvals & Clearances",
        bullets: [
          "Coordinate regulatory and statutory approvals.",
          "Supervise environmental clearances.",
          "Secure local authority permits and documentation.",
        ],
      },
    ],
  },
  {
    key: "lead",
    title: "Lead Phase",
    accent: "#4B3A2B",
    gradient:
      "bg-[radial-gradient(circle_at_top,_rgba(75,58,43,0.18),_rgba(255,245,238,0.88)),_linear-gradient(135deg,_rgba(255,248,242,0.92),_rgba(243,240,237,0.92))]",
    summary:
      "Ignite market velocity with storytelling, tenant curation, and sales intelligence that convert awareness into absorption.",
    sections: [
      {
        title: "Marketing & Promotion",
        bullets: [
          "Craft pre-launch campaign strategy.",
          "Define brand positioning and narrative system.",
          "Activate digital and offline promotions.",
        ],
      },
      {
        title: "Leasing Strategy",
        bullets: [
          "Curate tenant mix across retail, office, and experiential assets.",
          "Structure leasing frameworks and commercials.",
          "Orchestrate broker partnerships and outreach.",
        ],
      },
      {
        title: "Sales Strategy",
        bullets: [
          "Calibrate unit pricing and inventory release.",
          "Onboard channel partners and broker ecosystems.",
          "Manage CRM, lead nurturing, and analytics.",
        ],
      },
      {
        title: "Documentation",
        bullets: [
          "Draft letters of intent and transaction decks.",
          "Finalise lease/sale agreements.",
          "Provide due diligence coordination and support.",
        ],
      },
    ],
  },
  {
    key: "treat",
    title: "Treat Phase",
    accent: "#FF6B2C",
    gradient:
      "bg-[radial-gradient(circle_at_top,_rgba(255,107,44,0.2),_rgba(255,245,238,0.88)),_linear-gradient(135deg,_rgba(242,240,237,0.92),_rgba(255,245,238,0.9))]",
    summary:
      "Deliver the promise with hospitality-grade handovers, operational readiness, and activation programs that welcome communities.",
    sections: [
      {
        title: "Project Handover",
        bullets: [
          "Provide fit-out guidelines and assistance.",
          "Curate handover documentation packs.",
          "Coordinate utility activation and readiness.",
        ],
      },
      {
        title: "Operations Setup",
    bullets: [
          "Plan facility management playbooks.",
          "Onboard vendors and service partners.",
          "Develop SOPs and compliance frameworks.",
        ],
      },
      {
        title: "Activation Strategy",
        bullets: [
          "Curate inauguration and promotional launch journeys.",
          "Design community and destination engagement programs.",
          "Coordinate occupancy and experience choreography.",
        ],
      },
      {
        title: "Documentation",
        bullets: [
          "Draft LOIs and transaction papers.",
          "Finalise lease/sale agreements.",
          "Support diligence and compliance sign-offs.",
        ],
      },
    ],
  },
  {
    key: "post-opening",
    title: "Post-Opening",
    accent: "#4B3A2B",
    gradient:
      "bg-[radial-gradient(circle_at_top,_rgba(75,58,43,0.2),_rgba(255,245,238,0.88)),_linear-gradient(135deg,_rgba(241,244,255,0.92),_rgba(235,240,255,0.92))]",
    summary:
      "Sustain momentum with asset care, financial governance, and brand amplification that keep destinations thriving.",
    sections: [
      {
        title: "Property Management",
        bullets: [
          "Oversee ongoing leasing and resale services.",
          "Nurture tenant relationships and retention.",
          "Optimise rental yields and occupancy health.",
        ],
      },
      {
        title: "Financial Management",
        bullets: [
          "Manage CAM collections and audits.",
          "Drive budget planning and reporting cadence.",
          "Govern revenue flows and compliance.",
        ],
      },
      {
        title: "Marketing & PR",
        bullets: [
          "Elevate brand through continuous storytelling.",
          "Program event-led engagement and activations.",
          "Guard and enhance reputation across channels.",
        ],
      },
    ],
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#FFF5EE] text-[#4B3A2B]">
      <Navigation />
      <main className="pt-[108px]">
        <Hero />
        <ScrollStackSection />
      </main>
      <Footer />
    </div>
  );
}

function Hero() {
  return (
    <section className="relative mx-auto max-w-[1180px] px-6 pb-20 pt-16 sm:px-10 lg:px-16">
      <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#FFF5EE] via-white to-[#F9F5F0] px-8 py-16 shadow-[0_40px_120px_rgba(75,58,43,0.16)] sm:px-12 lg:px-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 -top-24 h-52 w-52 rounded-full bg-[#FF6B2C]/20 blur-[140px]" />
          <div className="absolute -right-14 -bottom-20 h-72 w-72 rounded-full bg-[#4B3A2B]/20 blur-[160px]" />
        </div>

        <div className="relative z-[1] flex flex-col gap-6 text-[#4B3A2B]">
          <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#4B3A2B] shadow-[0_12px_30px_rgba(255,107,44,0.18)]">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#FF6B2C]" />
            Market Intelligence & Conceptualization
          </span>
          <h1 className="text-4xl font-semibold leading-tight text-[#2E2E2E] sm:text-5xl lg:text-6xl">
            Scroll through the cinematic journey from spark to thriving destination.
          </h1>
          <p className="max-w-3xl text-lg leading-relaxed text-[#6B6B6B] sm:text-xl">
            ASL Realtors choreographs each milestone of real estate development with data, design,
            and hospitality. Experience the phases as an immersive stack—pinning, layering, and
            revealing the craft behind every destination we launch and steward.
          </p>
        </div>
      </div>
    </section>
  );
}

function ScrollStackSection() {
  return (
    <section className="relative overflow-hidden pb-40 pt-12">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-[#FF6B2C]/14 blur-[200px]" />
        <div className="absolute -bottom-40 right-0 h-[420px] w-[420px] rounded-full bg-[#4B3A2B]/14 blur-[220px]" />
        <div className="absolute -left-32 top-1/2 h-[380px] w-[380px] -translate-y-1/2 rounded-full bg-[#FF914D]/12 blur-[200px]" />
      </div>

      <div className="relative mx-auto flex max-w-[1180px] flex-col gap-10 px-6 text-center sm:px-10 lg:px-16">
        <div className="flex flex-col items-center gap-6 text-center text-[#4B3A2B]">
          <span className="inline-flex items-center gap-3 rounded-full bg-white/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.3em] text-[#4B3A2B] shadow-[0_16px_40px_rgba(75,58,43,0.18)]">
            <Sparkles className="h-4 w-4 text-[#FF6B2C]" />
            The Phased Stack
          </span>
          <h2 className="max-w-3xl text-3xl font-semibold leading-tight text-[#2E2E2E] sm:text-4xl lg:text-5xl">
            Every phase pins in place, layering depth, detail, and destination insight.
        </h2>
          <p className="max-w-3xl text-base leading-relaxed text-[#6B6B6B] sm:text-lg">
            Scroll to unveil how we research, plan, activate, and sustain high-performing assets.
            Each card locks into the viewport with cinematic motion—stacking narratives much like we
            stack intelligence, experience, and operations in real life.
          </p>
        </div>
      </div>

      <div className="relative mx-auto mt-10 max-w-[1180px] px-0 sm:px-6 lg:px-10">
        <ScrollStack
          useWindowScroll
          className="mx-auto w-full"
          itemDistance={180}
          itemStackDistance={90}
          itemScale={0.045}
          stackPosition="32%"
          scaleEndPosition="18%"
          baseScale={0.88}
          blurAmount={3}
        >
          {phases.map((phase, index) => (
            <ScrollStackItem
              key={phase.key}
              itemClassName={`h-auto min-h-[560px] lg:min-h-[640px] border border-white/40 bg-white/85 backdrop-blur-xl shadow-[0_50px_140px_rgba(75,58,43,0.18)] ${phase.gradient}`}
            >
              <div className="flex h-full flex-col gap-8 text-left text-[#4B3A2B]">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="inline-flex items-center gap-3 rounded-full bg-white/80 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.3em] text-[#4B3A2B] shadow-sm shadow-white/40">
                    Phase {String(index + 1).padStart(2, "0")}
          </span>
                  <span className="inline-flex h-[3px] w-20 rounded-full" style={{ background: phase.accent }} />
                </div>
                <div className="flex flex-col gap-4">
                  <h3 className="text-3xl font-semibold text-[#2E2E2E] sm:text-4xl">{phase.title}</h3>
                  <p className="max-w-3xl text-base leading-relaxed text-[#6B6B6B] sm:text-lg">
                    {phase.summary}
                  </p>
                </div>
                <div className="grid gap-6 md:grid-cols-2">
                  {phase.sections.map((section) => (
                    <div
                      key={section.title}
                      className="rounded-[28px] border border-white/50 bg-white/90 p-5 shadow-[0_18px_40px_rgba(75,58,43,0.1)]"
                    >
                      <h4 className="text-sm font-semibold uppercase tracking-[0.22em] text-[#4B3A2B]/80">
                        {section.title}
                      </h4>
                      <ul className="mt-3 flex flex-col gap-2 text-sm leading-relaxed text-[#4B3A2B] sm:text-base">
                        {section.bullets.map((bullet) => (
                          <li key={bullet} className="flex gap-3">
                <span
                              className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full"
                  style={{ backgroundColor: phase.accent }}
                />
                            <span>{bullet}</span>
              </li>
            ))}
          </ul>
                    </div>
                  ))}
                </div>
        </div>
            </ScrollStackItem>
          ))}
        </ScrollStack>
      </div>
    </section>
  );
}
