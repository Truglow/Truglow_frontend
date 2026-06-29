"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function Services() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className={`text-center transition-all duration-700 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-8">
            Explore our top hair, skin, laser, and plastic surgery treatments. Tap into specialised procedures curated by
            experts for every beauty goal.
          </p>
          <div>
            <Link
              href="/procedure"
              className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-700 transition-all duration-300 hover:scale-110 hover:shadow-xl transform group"
            >
              See all procedures <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
