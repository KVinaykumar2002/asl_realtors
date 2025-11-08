import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import ServicesHero from "@/components/sections/services-hero";
import Services from "@/components/sections/services";
import ProcessSection from "@/components/sections/process";
import CtaBook from "@/components/sections/cta-book";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        <ServicesHero />
        <Services />
        <ProcessSection />
        <CtaBook />
      </main>
      <Footer />
    </div>
  );
}
