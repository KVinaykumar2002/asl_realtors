"use client";

import Image from "next/image";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const properties = [
  {
    id: 1,
    title: "Modern Villa in Beverly Hills",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/ZQ3SNXxBqH4iRTn5KzvSUUfFkXU-12.jpg",
  },
  {
    id: 2,
    title: "Luxury Apartment Downtown",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/tUSgx4XMKr8Q8ZDMyDkJGYJXE-1.png",
  },
  {
    id: 3,
    title: "Beachfront Property Malibu",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/0hfvpTKH6RiitJ9zFmfivKBBNE-9.jpg",
  },
  {
    id: 4,
    title: "Contemporary Townhouse",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/Im4wRuRxPa3ij9n8tGFDxaDAys-5.webp",
  },
  {
    id: 5,
    title: "Mountain View Estate",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/POxVH1JgZSlrsqIG0tAPuthBD8-8.png",
  },
  {
    id: 6,
    title: "Vineyard Estate",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/uh4xMEtnO7cYaQ5ItWn7lpfimTo-10.jpg",
  },
];

export default function PropertiesListing() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div ref={ref} className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl font-bold text-text-dark mb-4">
            Featured <span className="text-primary">Properties</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover your dream home from our exclusive collection of luxury properties
          </p>
        </div>

        {/* Properties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property, index) => (
            <div
              key={property.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: isVisible ? `${(index + 3) * 100}ms` : '0ms' }}
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
