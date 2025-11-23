"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { useState, useEffect } from "react"

export default function Hero() {
  const { ref, isVisible } = useScrollReveal()
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    "/hero-slide-1.png",
    "/hero-slide-2.png",
    "/hero-slide-3.png",
    "/hero-slide-4.png",
  ]

  // Auto-scroll carousel every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [slides.length])

  return (
    <div className="relative text-white overflow-hidden min-h-[580px] md:min-h-[680px]">
      {/* Background Images Carousel */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <img
            key={slide}
            src={slide}
            alt={`Tru Glow Clinic ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-opacity duration-1000 ${index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10 flex items-center min-h-[580px] md:min-h-[680px]">
        <div
          ref={ref}
          className={`max-w-3xl transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="bg-black/40 md:bg-black/35 backdrop-blur-sm rounded-2xl p-6 md:p-10 shadow-xl border border-white/10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-down delay-100 drop-shadow-lg">
              <span className="block">Dermatology &</span>
              <span className="block">Plastic Surgery</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 text-white/90 animate-fade-in-up delay-200 drop-shadow-md">
              Experience renewed confidence through advanced dermatology, aesthetic excellence, and certified cosmetic surgery.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-300">
              <Button
                asChild
                size="lg"
                className="bg-amber-600 hover:bg-amber-500 text-white font-semibold px-8 py-3 rounded-full shadow-lg transition-all duration-300 hover:shadow-xl"
              >
                <Link href="/contact">Book Consultation</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/80 text-white rounded-full shadow-md px-8 py-3 font-semibold tracking-widest uppercase transition-all duration-300 bg-white/10 hover:bg-white/20 hover:text-white hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2"
              >
                <Link href="/about">Learn More</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentSlide
              ? "bg-white w-8"
              : "bg-white/50 hover:bg-white/75"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
