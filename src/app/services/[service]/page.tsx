"use client";

import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";

type ServiceCopy = {
  title: string;
  highlight: string;
  heroDescription: string;
  heroImage: string;
  heroImageAlt: string;
  narrative: string;
  metrics: Array<{ label: string; value: string; detail: string }>;
  pillars: Array<{ title: string; bullets: string[] }>;
};

const SERVICES_CONTENT: Record<string, ServiceCopy> = {
  "retail-properties": {
    title: "Retail Properties",
    highlight: "Retail",
    heroDescription:
      "Prime retail spaces designed to maximize footfall, brand visibility, and sales performance in high-traffic locations.",
    heroImage: "https://silver-foundation.com/wp-content/uploads/2024/09/interiror-design.jpg",
    heroImageAlt: "Modern retail storefront with contemporary design",
    narrative:
      "We identify and secure prime retail locations, negotiate favorable lease terms, and provide strategic positioning to help your brand thrive in competitive markets.",
    metrics: [
      {
        label: "Location Strategy",
        value: "Prime Zones",
        detail: "High-footfall areas with excellent connectivity and visibility.",
      },
      {
        label: "Lease Terms",
        value: "Flexible",
        detail: "Negotiated terms that align with your business growth plans.",
      },
      {
        label: "Footfall Potential",
        value: "High Traffic",
        detail: "Strategic positioning in shopping districts and commercial hubs.",
      },
    ],
    pillars: [
      {
        title: "Site Selection & Analysis",
        bullets: [
          "Identify high-traffic retail corridors and shopping destinations.",
          "Analyze demographic profiles, spending patterns, and catchment areas.",
          "Evaluate competition and market saturation for optimal positioning.",
        ],
      },
      {
        title: "Lease Negotiation & Structuring",
        bullets: [
          "Negotiate favorable rental terms and lease structures.",
          "Secure tenant-friendly clauses for expansion and exit flexibility.",
          "Coordinate legal documentation and compliance requirements.",
        ],
      },
      {
        title: "Retail Strategy & Support",
        bullets: [
          "Provide market insights and retail positioning strategies.",
          "Facilitate brand placement and visibility optimization.",
          "Offer ongoing support for lease renewals and portfolio expansion.",
        ],
      },
    ],
  },
  "commercial-properties": {
    title: "Commercial Properties",
    highlight: "Commercial",
    heroDescription:
      "Premium commercial real estate solutions for businesses seeking strategic locations and growth-oriented spaces.",
    heroImage: "/vaishnavi-tech-square.jpg",
    heroImageAlt: "Vaishnavi Tech Square commercial building in Bangalore",
    narrative:
      "From standalone commercial buildings to mixed-use developments, we help businesses find the perfect commercial space that supports operations and enhances brand presence.",
    metrics: [
      {
        label: "Property Types",
        value: "Diverse",
        detail: "Standalone buildings, mixed-use, and commercial complexes.",
      },
      {
        label: "Location Coverage",
        value: "City-wide",
        detail: "Prime commercial zones across Hyderabad and surrounding areas.",
      },
      {
        label: "Investment Options",
        value: "Lease & Buy",
        detail: "Flexible acquisition models to suit your business needs.",
      },
    ],
    pillars: [
      {
        title: "Commercial Property Sourcing",
        bullets: [
          "Identify prime commercial locations aligned with business requirements.",
          "Evaluate property specifications, amenities, and infrastructure.",
          "Assess zoning compliance and commercial viability.",
        ],
      },
      {
        title: "Transaction Management",
        bullets: [
          "Facilitate lease negotiations and purchase transactions.",
          "Coordinate due diligence, legal documentation, and registrations.",
          "Manage property handovers and operational transitions.",
        ],
      },
      {
        title: "Portfolio Advisory",
        bullets: [
          "Provide strategic advice on commercial property investments.",
          "Support portfolio optimization and expansion planning.",
          "Offer property management and maintenance coordination.",
        ],
      },
    ],
  },
  "hospitality-properties": {
    title: "Hospitality Properties",
    highlight: "Hospitality",
    heroDescription:
      "Destination-driven hotels and resorts crafted with immersive guest journeys, brand expression, and operational resilience.",
    heroImage:
      "https://s3.divcom.com/www.asaporg.com/images/front-desk-admin-talking-with-hotel-guest.jpg.large.1024x1024.jpg",
    heroImageAlt: "Front desk administrator greeting a hotel guest in a contemporary lobby",
    narrative:
      "We blend market intelligence, concept storytelling, and operator alignment to create hospitality assets that welcome guests, conferences, and communities alike.",
    metrics: [
      {
        label: "Experience Design",
        value: "5-Star Ready",
        detail: "Signature arrivals, F&B zoning, wellness, and event programming engineered in.",
      },
      {
        label: "Yield Optimisation",
        value: "18% RevPAR lift",
        detail: "Benchmark-driven pricing, digital marketing, and loyalty integration.",
      },
      {
        label: "Operator Partnerships",
        value: "Global & Boutique",
        detail: "We negotiate brand agreements and manage onboarding for smooth launches.",
      },
    ],
    pillars: [
      {
        title: "Market Story & Brand Positioning",
        bullets: [
          "Craft guest personas, demand seasons, and brand differentiators.",
          "Shape architectural narratives with interior designers and brand consultants.",
          "Align with hospitality brands or independent concepts, including asset-light models.",
        ],
      },
      {
        title: "Program & Revenue Engineering",
        bullets: [
          "Curate room mix, suites, villas, banqueting, F&B, and wellness offerings.",
          "Model RevPAR, ADR, and GOP to inform investment and debt strategy.",
          "Deploy digital-first go-to-market activations with influencer and travel trade networks.",
        ],
      },
      {
        title: "Pre-Opening & Operations",
        bullets: [
          "Oversee operator onboarding, SOP creation, and talent ramp-up.",
          "Coordinate FF&E/OS&E procurement with sustainability benchmarks.",
          "Launch destination marketing, PR, and event calendars to build loyalty.",
        ],
      },
    ],
  },
  warehouses: {
    title: "Warehouse Solutions",
    highlight: "Warehouses",
    heroDescription:
      "Grade-A warehousing and cold-chain assets engineered for seamless inventory turn and digital visibility.",
    heroImage: "/hero-3.webp",
    heroImageAlt: "Interior of a high-bay warehouse with shelving",
    narrative:
      "We serve 3PLs, e-commerce, pharma, and retail networks with plug-and-play facilities, smart automation, and optimised last-mile access.",
    metrics: [
      {
        label: "Clear Heights",
        value: "12–16 m",
        detail: "High-bay racking layouts plus mezzanine integrations for SKU density.",
      },
      {
        label: "Dock-to-Floor Ratio",
        value: "1:8",
        detail: "Ergonomic docking grids with staging yards and circulation planning.",
      },
      {
        label: "IoT Visibility",
        value: "Real-time",
        detail: "Warehouse management systems, security, and energy analytics ready on day one.",
      },
    ],
    pillars: [
      {
        title: "Logistics Intelligence",
        bullets: [
          "Select micro-markets aligned with highways, ports, and air cargo stations.",
          "Optimise parcel size for cross-docking, fulfilment, or bulk storage formats.",
          "Integrate trucking, workforce, and compliance considerations early.",
        ],
      },
      {
        title: "Technical Design & Automation",
        bullets: [
          "Embed automation readiness—conveyors, AMRs, AS/RS, temperature zones.",
          "Engineer flooring, dock levellers, and structural grid to suit heavy duty operations.",
          "Plan solar, rainwater harvesting, and green certifications for ESG mandates.",
        ],
      },
      {
        title: "Leasing & Lifecycle Management",
        bullets: [
          "Curate tenant rosters, negotiate commercials, and manage SLAs.",
          "Deliver fit-out oversight, repairs, and operational help desks.",
          "Provide reinvestment advisory for expansions or portfolio exits.",
        ],
      },
    ],
  },
  "open-plots": {
    title: "Open Plot Opportunities",
    highlight: "Open Plots",
    heroDescription:
      "Strategic land banks curated for residential, commercial, and mixed-use development pipelines.",
    heroImage: "/hero-2.webp",
    heroImageAlt: "Panoramic view of open land parcel ready for development",
    narrative:
      "We locate, diligence, and structure land parcels with clear titles, infrastructure potential, and master-planning vision tailored to your investment horizon.",
    metrics: [
      {
        label: "Land Assemblies",
        value: "2–50 acres",
        detail: "Modular acquisitions that respect zoning, topography, and future expansion.",
      },
      {
        label: "Title Assurance",
        value: "100% vetted",
        detail: "Legal, revenue, and encumbrance checks with digital documentation trails.",
      },
      {
        label: "Development Frameworks",
        value: "Ready-to-execute",
        detail: "Concept masterplans, FAR utilisation, and phasing models for investors.",
      },
    ],
    pillars: [
      {
        title: "Market Intelligence & Land Scouting",
        bullets: [
          "Analyse catchments, absorption, and infrastructure catalysts.",
          "Identify future corridors for residential townships, retail boulevards, or industrial zones.",
          "Negotiate landowner relationships and joint development models.",
        ],
      },
      {
        title: "Due Diligence & Structuring",
        bullets: [
          "Run end-to-end legal, technical, and environmental diligence.",
          "Structure SPVs, JDs, or outright acquisitions with funding alignment.",
          "Plan regulatory submissions and conversion processes.",
        ],
      },
      {
        title: "Development Roadmap",
        bullets: [
          "Create masterplan options with architects and urban planners.",
          "Craft product strategy, amenities, and phasing for optimal IRR.",
          "Prepare investor decks, feasibility, and exit scenarios.",
        ],
      },
    ],
  },
  "office-spaces": {
    title: "Office Spaces",
    highlight: "Office",
    heroDescription:
      "Human-centric workplaces balancing productivity, amenity, and digital infrastructure for enterprise scales.",
    heroImage: "https://assets.executivecentre.com/assets/Banner-Product-PrivateOffice.jpg",
    heroImageAlt: "Modern private office suite with workspace seating and city views",
    narrative:
      "We deliver Grade-A office towers, tech parks, and hybrid work hubs that prioritise employee wellbeing, brand experience, and ESG compliance.",
    metrics: [
      {
        label: "Flex & Core Mix",
        value: "30/70",
        detail: "Strategically blend collaborative zones with efficient core office plate layouts.",
      },
      {
        label: "Well-being Index",
        value: "WELL & IGBC",
        detail: "Natural light, biophilia, ventilation, and smart building controls embedded.",
      },
      {
        label: "Talent Retention",
        value: "+22%",
        detail: "Experience-led amenities and hospitality-grade services drive culture.",
      },
    ],
    pillars: [
      {
        title: "Design & Brand Alignment",
        bullets: [
          "Craft workplace strategies around headcount, hybrid schedules, and community rituals.",
          "Deliver architectural storytelling that reinforces company DNA.",
          "Integrate AV, IT, and security infrastructure for always-on workflows.",
        ],
      },
      {
        title: "Sustainability & Smart Operations",
        bullets: [
          "Secure green certifications with energy, water, and waste optimisation.",
          "Implement smart building systems with analytics and predictive maintenance.",
          "Plan mobility, parking, and last mile connectivity solutions.",
        ],
      },
      {
        title: "Leasing & Transition",
        bullets: [
          "Lead negotiations, legal documentation, and handover management.",
          "Coordinate fit-out vendors, furniture, and tech deployments.",
          "Provide workplace change management and employee onboarding experiences.",
        ],
      },
    ],
  },
  "co-working-spaces": {
    title: "Co-working Spaces",
    highlight: "Co-working",
    heroDescription:
      "Flexible, modern co-working environments designed for startups, freelancers, and growing businesses seeking collaborative workspaces.",
    heroImage: "https://gofloaters.com/static/62941a09086df36c9cbef6368c62fb4d/14b42/pricing-options-for-coworking-spaces-in-gachibowli.jpg",
    heroImageAlt: "Modern co-working space with flexible seating and meeting areas",
    narrative:
      "We curate and manage premium co-working spaces that combine flexibility, community, and professional amenities to support modern workstyles and business growth.",
    metrics: [
      {
        label: "Flexible Plans",
        value: "Daily to Annual",
        detail: "Membership options from hot desks to private cabins with flexible terms.",
      },
      {
        label: "Amenities",
        value: "Full-Service",
        detail: "High-speed internet, meeting rooms, cafes, and business support services.",
      },
      {
        label: "Community",
        value: "Networking Hub",
        detail: "Regular events, workshops, and networking opportunities for members.",
      },
    ],
    pillars: [
      {
        title: "Space Design & Setup",
        bullets: [
          "Design flexible layouts that accommodate various work styles and team sizes.",
          "Integrate modern amenities including meeting rooms, phone booths, and event spaces.",
          "Create inspiring environments that foster productivity and collaboration.",
        ],
      },
      {
        title: "Membership & Operations",
        bullets: [
          "Structure flexible membership plans from daily passes to annual commitments.",
          "Manage day-to-day operations, member services, and community engagement.",
          "Provide technology infrastructure and business support services.",
        ],
      },
      {
        title: "Community Building",
        bullets: [
          "Organize networking events, workshops, and professional development sessions.",
          "Foster a collaborative community culture among members.",
          "Facilitate partnerships and business opportunities within the co-working ecosystem.",
        ],
      },
    ],
  },
  investments: {
    title: "Investment Advisory",
    highlight: "Investments",
    heroDescription:
      "Real estate investment strategies calibrated for resilient returns, diversification, and risk governance.",
    heroImage: "https://www.uniondevelopers.com/wp-content/uploads/2022/07/Importance-of-Real-Estate-Market-Analysis-1024x683.jpg",
    heroImageAlt: "Business professionals reviewing real estate market analysis charts",
    narrative:
      "We advise family offices, funds, and corporates with market entry, portfolio rebalancing, and exit strategies across asset classes.",
    metrics: [
      {
        label: "Opportunity Mapping",
        value: "12+ Cities",
        detail: "Data-backed heat maps across residential, commercial, industrial, and alternative assets.",
      },
      {
        label: "Deal Structuring",
        value: "Equity, Debt, Hybrid",
        detail: "SPVs, REIT-prep, and alliance structuring with tax optimisation.",
      },
      {
        label: "Risk Governance",
        value: "360°",
        detail: "Legal, regulatory, ESG, and market scenario planning embedded in every mandate.",
      },
    ],
    pillars: [
      {
        title: "Strategy & Portfolio Design",
        bullets: [
          "Assess macro trends, micro-markets, and life-cycle phases of assets.",
          "Model cashflows, sensitivity scenarios, and exit timelines.",
          "Craft allocation strategies across income, growth, and opportunistic plays.",
        ],
      },
      {
        title: "Deal Origination & Structuring",
        bullets: [
          "Source exclusive on- and off-market opportunities.",
          "Lead commercial negotiations, diligence, and valuation analysis.",
          "Structure equity, debt, or hybrid instruments aligned to investor mandates.",
        ],
      },
      {
        title: "Asset Management & Exits",
        bullets: [
          "Monitor performance, compliance, and reporting cadence.",
          "Drive asset enhancement, leasing, and re-positioning strategies.",
          "Plan refinancing, divestment, or REIT pathways with investor communication.",
        ],
      },
    ],
  },
};

type ServicePageProps = {
  params: {
    service: string;
  };
};

export default function ServicePage({ params }: ServicePageProps) {
  const service = SERVICES_CONTENT[params.service];

  if (!service) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-[#FFF5EE] text-[#4B3A2B] dark:bg-[#0B0B0B] dark:text-neutral-100 transition-colors duration-300">
      <Navigation />
      <main className="pt-[108px]">
        <section className="relative mx-auto max-w-[1180px] px-6 pb-20 pt-16 sm:px-10 lg:px-16">
          <div className="relative overflow-hidden rounded-[40px] bg-gradient-to-br from-[#FFF5EE] via-white to-[#F9F5F0] dark:from-[#151515] dark:via-[#101010] dark:to-[#0B0B0B] px-8 py-16 shadow-[0_40px_120px_rgba(75,58,43,0.16)] dark:shadow-[0_45px_140px_rgba(0,0,0,0.45)] sm:px-12 lg:px-20 transition-colors duration-300">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -left-20 -top-24 h-52 w-52 rounded-full bg-[#FF6B2C]/24 blur-[140px]" />
              <div className="absolute -right-14 -bottom-20 h-72 w-72 rounded-full bg-[#4B3A2B]/18 blur-[160px]" />
            </div>
            <div className="relative z-[1] grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center text-[#4B3A2B] dark:text-neutral-100 transition-colors duration-300">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="flex flex-col gap-6"
              >
                <span className="inline-flex w-fit items-center gap-3 rounded-full bg-white/80 dark:bg-neutral-900/70 px-5 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[#4B3A2B] dark:text-neutral-100 shadow-[0_12px_30px_rgba(255,107,44,0.18)] dark:shadow-[0_12px_30px_rgba(0,0,0,0.35)]">
                  <span className="inline-flex h-2.5 w-2.5 rounded-full bg-[#FF6B2C]" />
                  {service.highlight} Service
                </span>
                <h1 className="text-4xl font-semibold leading-tight text-[#2E2E2E] dark:text-white sm:text-5xl lg:text-6xl">
                  {service.title}
                </h1>
                <p className="max-w-3xl text-lg leading-relaxed text-[#6B6B6B] dark:text-neutral-300 sm:text-xl">
                  {service.heroDescription}
                </p>
                <p className="max-w-3xl text-base leading-relaxed text-[#6B6B6B]/90 dark:text-neutral-300 sm:text-lg">
                  {service.narrative}
                </p>
              </motion.div>
              <motion.figure
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="group relative aspect-[4/5] w-full overflow-hidden rounded-[32px] border border-white/40 bg-white/60 dark:bg-neutral-900/60 dark:border-white/10 shadow-[0_30px_110px_rgba(75,58,43,0.18)] dark:shadow-[0_40px_130px_rgba(0,0,0,0.45)]"
              >
                <Image
                  src={service.heroImage}
                  alt={service.heroImageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 500px"
                  className="object-cover"
                  priority
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent transition-opacity duration-300 group-hover:opacity-90" />
                <div className="pointer-events-none absolute inset-0 flex items-center justify-center px-6 text-center text-white opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <div className="rounded-full bg-black/65 px-6 py-3 backdrop-blur-md shadow-[0_12px_35px_rgba(0,0,0,0.25)]">
                    <span className="text-lg font-semibold tracking-[0.25em] uppercase text-white">
                      {service.title}
                    </span>
                  </div>
                </div>
              </motion.figure>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-20 sm:px-10 lg:px-16">
          <div className="grid gap-6 md:grid-cols-3">
            {service.metrics.map((metric) => (
              <div
                key={metric.label}
                className="rounded-[28px] border border-[#4B3A2B]/10 dark:border-white/10 bg-white/85 dark:bg-neutral-900/70 p-6 shadow-[0_25px_80px_rgba(75,58,43,0.12)] dark:shadow-[0_35px_110px_rgba(0,0,0,0.45)] backdrop-blur-lg transition hover:-translate-y-1 hover:shadow-[0_35px_110px_rgba(75,58,43,0.16)] dark:hover:shadow-[0_40px_130px_rgba(0,0,0,0.55)]"
              >
                <span className="text-xs font-semibold uppercase tracking-[0.28em] text-[#FF6B2C]">
                  {metric.label}
                </span>
                <h3 className="mt-3 text-3xl font-semibold text-[#2E2E2E] dark:text-white">{metric.value}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#5C5247] dark:text-neutral-300">{metric.detail}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-[1180px] px-6 pb-20 sm:px-10 lg:px-16">
          <div className="grid gap-6 lg:grid-cols-3">
            {service.pillars.map((pillar) => (
              <div
                key={pillar.title}
                className="flex h-full flex-col gap-4 rounded-[32px] border border-[#4B3A2B]/12 dark:border-white/10 bg-white/90 dark:bg-neutral-900/75 p-8 shadow-[0_30px_100px_rgba(75,58,43,0.12)] dark:shadow-[0_32px_110px_rgba(0,0,0,0.45)] backdrop-blur-xl transition-colors duration-300"
              >
                <h3 className="text-lg font-semibold uppercase tracking-[0.22em] text-[#4B3A2B]/80 dark:text-neutral-200">
                  {pillar.title}
                </h3>
                <ul className="flex flex-col gap-3 text-sm leading-relaxed text-[#4B3A2B] dark:text-neutral-200">
                  {pillar.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-3">
                      <span className="mt-2 inline-flex h-2 w-2 flex-shrink-0 rounded-full bg-[#FF6B2C]" />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  );
}

