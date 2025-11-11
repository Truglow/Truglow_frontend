"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function AboutHero() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <div className="relative bg-amber-900 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20 animate-fade-in"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <div ref={ref} className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in-down delay-100">About Tru Glow</h1>
          <p className="text-xl text-amber-50 max-w-3xl mx-auto animate-fade-in-up delay-200">
            A premier dermatology, aesthetics, and plastic surgery clinic committed to providing advanced treatments in hair, skin, laser, and cosmetic procedures with exceptional care and natural-looking results.
          </p>
        </div>
      </div>
    </div>
  )
}
