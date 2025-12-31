"use client"

import Image from "next/image"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function AboutHero() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div className="relative bg-amber-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30 animate-fade-in">
        <Image
          src="/about-hero-improved.webp"
          alt="About Tru Glow Clinic"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/60 via-amber-900/40 to-amber-900/60"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down delay-100 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">About Tru Glow</h1>
          <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mx-auto animate-fade-in-up delay-200 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
            Your trusted partner in advanced dermatology, aesthetic treatments, and cosmetic surgery
          </p>
        </div>
      </div>
    </div>
  )
}
