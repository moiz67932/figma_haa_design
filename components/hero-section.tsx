"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const heroImages = [
  {
    url: "/Pic1.png",
    alt: "Modern home interior with smart home features",
  },
  {
    url: "/Pic2.png",
    alt: "Advanced car dashboard with digital displays",
  },
  {
    url: "/Pic3.png",
    alt: "Professional home maintenance tools and equipment",
  },
  {
    url: "/Pic4.png",
    alt: "Clean modern vehicle service center",
  },
];

export function HeroSection() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Images with Cross-fade */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImageIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.url || "/placeholder.svg"}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/40" />
          </div>
        ))}
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1 className="text-5xl font-bold mb-6 leading-tight md:text-6xl">
          TRACK EVERY FIX,
          <br />
          EVERY MILE,
          <br />
          <span className="text-[#FF7A00]">EVERY WARRANTY</span>
        </h1>

        <div className="flex flex-wrap justify-center gap-4 mb-8 text-xl font-semibold md:text-xl">
          <span className="text-[#0056B3] bg-white/90 px-4 py-2 rounded-full">
            HOME
          </span>
          <span className="text-white">•</span>
          <span className="text-[#FF7A00] bg-white/90 px-4 py-2 rounded-full">
            AUTO
          </span>
          <span className="text-white">•</span>
          <span className="text-[#0056B3] bg-white/90 px-4 py-2 rounded-full">
            ORGANIZED
          </span>
        </div>

        <p className="text-xl mb-12 text-white/90 max-w-3xl mx-auto leading-relaxed md:text-xl">
          All your home and vehicle info—safe, searchable, and always
          up-to-date.
          <br />
          <span className="text-[#FF7A00] font-semibold">
            IT&#39;S ALL ABOUT ORGANIZATION
          </span>
        </p>

        <Link href="/signup">
          <Button
            size="lg"
            className="bg-[#FF7A00] hover:bg-[#E6690A] text-white px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:scale-105 transition-all duration-300"
          >
            Join Us for Free
          </Button>
        </Link>
      </div>

      {/* Image Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-3">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImageIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentImageIndex
                ? "bg-[#FF7A00] scale-125"
                : "bg-white/50 hover:bg-white/75"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
