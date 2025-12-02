"use client"

import { CheckCircle } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedItem } from "@/components/animated-item"

export default function OurFacility() {
  const features = [
    "State-of-the-art operating rooms",
    "Advanced treatment equipment for all procedures",
    "Comfortable recovery areas",
    "Private consultation rooms",
    "Sterile environment with strict protocols",
    "Modern amenities for patient comfort",
  ]

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facility</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience comprehensive treatments in our modern, state-of-the-art clinic designed for your comfort and safety across hair, skin, laser, and plastic surgery procedures.
          </p>
        </div>

        <div className="mb-12">
          {/* Top Section: Images 2 & 4 with Content on the side */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="grid grid-cols-2 gap-4">
              <AnimatedItem delay={0} direction="up">
                <img
                  src="/real-photos/2.png"
                  alt="TruGlow Treatment"
                  className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 h-96 w-full object-contain bg-gray-50"
                />
              </AnimatedItem>
              <AnimatedItem delay={100} direction="up">
                <img
                  src="/real-photos/4.png"
                  alt="TruGlow Procedure"
                  className="rounded-lg shadow-md transform transition-transform duration-500 hover:scale-105 h-96 w-full object-contain bg-gray-50"
                />
              </AnimatedItem>
            </div>

            <AnimatedItem delay={400} direction="right">
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Equipped with the Latest Technology</h3>
                <p className="text-gray-600 mb-6">
                  Our clinic is equipped with the latest technology and equipment to ensure the highest quality of care and
                  results for our patients. We maintain strict standards of cleanliness and sterilization to provide a safe
                  environment for all procedures.
                </p>
                <ul className="space-y-4">
                  {features.map((feature, index) => (
                    <AnimatedItem key={index} delay={500 + index * 50} direction="left">
                      <li className="flex items-start group">
                        <CheckCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    </AnimatedItem>
                  ))}
                </ul>
              </div>
            </AnimatedItem>
          </div>
        </div>
      </div>
    </section>
  )
}
