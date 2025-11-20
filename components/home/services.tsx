"use client"

import { useState } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

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
} as const

type ServiceCategory = keyof typeof services

const orderedTabs: ServiceCategory[] = ["skin", "hair", "plastic", "laser"]

const tabLabels: Record<ServiceCategory, string> = {
  skin: "✨ Skin",
  hair: "💇 Hair",
  laser: "⚡ Laser",
  plastic: "🏥 Plastic Surgery",
}

export default function Services() {
  const [activeTab, setActiveTab] = useState<ServiceCategory>("skin")
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()

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

        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as ServiceCategory)} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-md rounded-full p-1 grid grid-cols-2 gap-1 w-full max-w-2xl sm:inline-flex sm:space-x-1 sm:grid-cols-none sm:w-auto h-auto">
              {orderedTabs.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="text-xs sm:text-sm md:text-base lg:text-lg px-2 py-2 sm:px-3 md:px-4 rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all whitespace-normal sm:whitespace-nowrap"
                >
                  {tabLabels[category]}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {orderedTabs.map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
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
            </TabsContent>
          ))}
        </Tabs>

        <div className={`text-center mt-12 transition-all duration-700 delay-500 ${sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Link
            href={`/procedure?tab=${activeTab}`}
            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-full shadow-md hover:bg-amber-700 transition-all duration-300 hover:scale-110 hover:shadow-xl transform"
          >
            See all procedures <ArrowRight className="ml-2 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  )
}
