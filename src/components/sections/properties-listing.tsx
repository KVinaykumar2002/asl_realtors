"use client";

import { useState } from "react";
import Image from "next/image";
import { Search, MapPin, Bed, Bath, Maximize, Heart } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

// const properties = [
//   {
//     id: 1,
//     title: "Modern Commercial Building",
//     image: "/Property.jpeg",
//   },
//   {
//     id: 2,
//     title: "Brand Factory Retail Complex",
//     image: "/BrandFactory.jpeg",
//   },
//   {
//     id: 3,
//     title: "MassMutual & Medtronic Office Tower",
//     image: "/MassMutual.jpeg",
//   },
//   {
//     id: 4,
//     title: "MPM Times Square Retail",
//     image: "/MPMTimesSquare.jpeg",
//   },
//   {
//     id: 5,
//     title: "Ratnadeep Retail Outlet",
//     image: "/Ratnadeep.jpeg",
//   },
//   {
//     id: 6,
//     title: "AU Infra Commercial Project",
//     image: "/AUInfra.jpeg",
//   },
//   {
//     id: 7,
//     title: "F-Studio Fashion Showroom",
//     image: "/FStudio.jpeg",
//   },
// ];

const properties = [
  {
    id: 1,
    title: "Modern Villa in Beverly Hills",
    location: "Beverly Hills, CA",
    price: "5,250,000",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,500",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/ZQ3SNXxBqH4iRTn5KzvSUUfFkXU-12.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Luxury Apartment Downtown",
    location: "Los Angeles, CA",
    price: "1,850,000",
    bedrooms: 3,
    bathrooms: 2,
    area: "2,200",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/tUSgx4XMKr8Q8ZDMyDkJGYJXE-1.png",
    featured: false,
  },
  {
    id: 3,
    title: "Beachfront Property Malibu",
    location: "Malibu, CA",
    price: "7,900,000",
    bedrooms: 6,
    bathrooms: 5,
    area: "5,800",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/0hfvpTKH6RiitJ9zFmfivKBBNE-9.jpg",
    featured: true,
  },
  {
    id: 4,
    title: "Contemporary Townhouse",
    location: "San Francisco, CA",
    price: "2,450,000",
    bedrooms: 4,
    bathrooms: 3,
    area: "3,100",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/Im4wRuRxPa3ij9n8tGFDxaDAys-5.webp",
    featured: false,
  },
  {
    id: 5,
    title: "Mountain View Estate",
    location: "Pasadena, CA",
    price: "3,200,000",
    bedrooms: 5,
    bathrooms: 4,
    area: "4,000",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/POxVH1JgZSlrsqIG0tAPuthBD8-8.png",
    featured: false,
  },
  {
    id: 6,
    title: "Vineyard Estate",
    location: "Sonoma Valley, CA",
    price: "6,500,000",
    bedrooms: 7,
    bathrooms: 6,
    area: "6,200",
    image: "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5b37b20a-86b6-49b1-af9d-5ab25a370d98-livohaus-framer-website/assets/images/uh4xMEtnO7cYaQ5ItWn7lpfimTo-10.jpg",
    featured: true,
  },
];

export default function PropertiesListing() {
  const { ref, isVisible } = useScrollAnimation(0.1);
  const [searchTerm, setSearchTerm] = useState("");
  const [priceRange, setPriceRange] = useState("all");
  const [propertyType, setPropertyType] = useState("all");

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

        {/* Search and Filters */}
        <div className={`bg-white rounded-2xl shadow-lg p-6 mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="md:col-span-2 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <input
                type="text"
                placeholder="Search by location, property name..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
              />
            </div>
            <select
              value={priceRange}
              onChange={(e) => setPriceRange(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
            >
              <option value="all">All Prices</option>
              <option value="0-2000000">Under $2M</option>
              <option value="2000000-5000000">$2M - $5M</option>
              <option value="5000000+">Above $5M</option>
            </select>
            <select
              value={propertyType}
              onChange={(e) => setPropertyType(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:border-primary"
            >
              <option value="all">All Types</option>
              <option value="villa">Villa</option>
              <option value="apartment">Apartment</option>
              <option value="townhouse">Townhouse</option>
            </select>
          </div>
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
                {property.featured && (
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm font-semibold">
                    Featured
                  </div>
                )}
                <button className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-colors">
                  <Heart className="w-5 h-5 text-gray-600 hover:text-primary transition-colors" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-text-dark mb-2 group-hover:text-primary transition-colors">
                  {property.title}
                </h3>
                <div className="flex items-center gap-2 text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm">{property.location}</span>
                </div>

                <div className="flex items-center justify-between mb-4 pb-4 border-b border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Bed className="w-4 h-4" />
                      <span className="text-sm">{property.bedrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Bath className="w-4 h-4" />
                      <span className="text-sm">{property.bathrooms}</span>
                    </div>
                    <div className="flex items-center gap-1 text-muted-foreground">
                      <Maximize className="w-4 h-4" />
                      <span className="text-sm">{property.area} sqft</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Price</p>
                    <p className="text-2xl font-bold text-primary">${property.price}</p>
                  </div>
                  <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-button-hover transition-colors font-semibold">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-primary text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white transition-colors font-semibold">
            Load More Properties
          </button>
        </div>
      </div>
    </section>
  );
}



