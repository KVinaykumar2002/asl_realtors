import Navigation from "@/components/sections/navigation";
import Footer from "@/components/sections/footer";
import ContactFormSection from "@/components/sections/contact-form";
import ContactInfo from "@/components/sections/contact-info";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-[120px]">
        <ContactInfo />
        <ContactFormSection />
      </main>
      <Footer />
    </div>
  );
}
