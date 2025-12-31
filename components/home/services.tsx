"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import Image from "next/image"

const services = {
  skin: [
    {
      title: "Anti-Ageing Treatments",
      description: "Reduce fine lines and wrinkles with US-FDA approved anti-ageing solutions.",
    },
    {
      title: "Acne & Scar Treatment",
      description: "Target acne, blemishes, and scars with personalised treatment plans.",
    },
    {
      title: "Pigmentation Correction",
      description: "Correct uneven skin tone, tanning, and dark spots effectively.",
    },
  ],
  hair: [
    {
      title: "Hair Transplant",
      description: "Comprehensive hair transplant solutions tailored to you.",
    },
    {
      title: "Hair Loss",
      description: "Effective treatments for hair loss and thinning with personalized care.",
    },
    {
      title: "Hair Patch Integration",
      description: "Seamless hair replacement solutions for instant confidence.",
    },
  ],
  laser: [
    {
      title: "Full Body Laser Hair Removal",
      description: "Enjoy long-lasting smooth skin with advanced laser reduction.",
    },
    {
      title: "Face, Underarms & Bikini Laser",
      description: "Targeted laser sessions for the most sensitive areas.",
    },
    {
      title: "Laser Scar Reduction",
      description: "Minimise scars and improve skin texture with precision lasers.",
    },
  ],
  plastic: [
    {
      title: "Botox & Fillers",
      description: "Enhance and rejuvenate facial features with precise cosmetic injectables.",
    },
    {
      title: "Breast Surgery",
      description: "Comprehensive breast enhancement and reconstruction procedures.",
    },
    {
      title: "Rhinoplasty (Nose Surgery)",
      description: "Refine nose shape and function with expert surgical care.",
    },
  ],
  ivdrips: [
    {
      title: "After Party",
      description: "Keep the night. Lose the hangover. Rapid rehydration and recovery.",
    },
    {
      title: "Ageless",
      description: "Age is just a number. Cellular repair and longevity boost.",
    },
    {
      title: "Shine",
      description: "Glow from within. Hydrating and brightening for radiant skin.",
    },
  ],
} as const

type ServiceCategory = keyof typeof services

const orderedCategories: ServiceCategory[] = ["skin", "hair", "plastic", "laser", "ivdrips"]

const categoryLabels: Record<ServiceCategory, string> = {
  skin: "✨ Skin",
  hair: "💇 Hair",
  laser: "⚡ Laser",
  plastic: "🏥 Plastic Surgery",
  ivdrips: "💧 IV Drips",
}

export default function Services() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()

  const currentCategory = orderedCategories[currentSlide]

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % orderedCategories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % orderedCategories.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + orderedCategories.length) % orderedCategories.length)
  }

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Explore our top hair, skin, laser, and plastic surgery treatments. Tap into specialised procedures curated by
            experts for every beauty goal.
          </p>
        </div>

        <div className="w-full max-w-6xl mx-auto relative">
          {/* Category Title */}
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="relative w-8 h-8 md:w-10 md:h-10">
              <Image
                src={`/icons/${currentCategory}.webp`}
                alt={categoryLabels[currentCategory].replace(/^[^\w]+/, '').trim()}
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-amber-600 transition-all duration-500">
              {categoryLabels[currentCategory].replace(/^[^\w]+/, '').trim()}
            </h3>
          </div>

          {/* Carousel Container */}
          <div className="relative overflow-hidden">
            <div className="flex transition-transform duration-700 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
              {orderedCategories.map((category) => (
                <div key={category} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto px-4">
                    {services[category].map((service, index) => (
                      <div
                        key={service.title}
                        className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 ${sectionVisible
                          ? 'opacity-100 translate-y-0'
                          : 'opacity-0 translate-y-10'
                          }`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                      >
                        <div className="p-6 flex flex-col h-full">
                          <h3 className="text-xl font-semibold text-gray-900 mb-3">{service.title}</h3>
                          <p className="text-sm text-gray-600 mb-4 flex-grow">{service.description}</p>
                          <Link
                            href={`/procedure?tab=${category}`}
                            className="inline-flex items-center text-amber-600 hover:text-amber-700 font-serif !font-playfair font-semibold !text-base !tracking-wider"
                          >
                            Learn more <ArrowRight className="ml-1 h-4 w-4" />
                          </Link>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-6 w-6 text-amber-600" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next slide"
            >
              <ChevronRight className="h-6 w-6 text-amber-600" />
            </button>
          </div>

          {/* Carousel Indicators */}
          <div className="flex justify-center gap-2 mt-8">
            {orderedCategories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all duration-300 ${index === currentSlide
                  ? "bg-amber-600 w-8 h-3"
                  : "bg-amber-300 hover:bg-amber-400 w-3 h-3"
                  } rounded-full`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href={`/procedure?tab=${currentCategory}`}
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-700 transition-all duration-300 hover:scale-110 hover:shadow-xl transform"
          >
            See all procedures <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
