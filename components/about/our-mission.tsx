"use client"

import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedItem } from "@/components/animated-item"
import Image from "next/image"

export default function OurMission() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <AnimatedItem delay={0} direction="left">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
              <p className="text-lg text-gray-600 mb-6">
                At Tru Glow, our mission is to provide the highest quality treatments in hair, skin, laser, and plastic surgery using the most advanced techniques and technologies available. We are committed to helping our patients regain their confidence and improve their quality of life.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our vision is to be the most trusted name in dermatology, aesthetics, and cosmetic surgery, known for our exceptional results, personalized care, and commitment to innovation. We strive to continuously improve our techniques and services to provide the best possible outcomes for our patients.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                We believe that everyone deserves to feel confident in their appearance, and we are dedicated to helping our patients achieve that confidence through our expert care and advanced treatments across all our service areas.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our team of experienced dermatologists and plastic surgeons work closely with each patient to understand their unique needs and goals, creating customized treatment plans that deliver natural-looking, transformative results.
              </p>
              <p className="text-lg text-gray-600">
                With state-of-the-art facilities and cutting-edge technology, we ensure every patient receives the highest standard of care in a comfortable, welcoming environment. Your journey to renewed confidence starts here at Tru Glow.
              </p>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={200} direction="right">
            <div className="h-full flex items-center">
              <div className="grid grid-cols-2 gap-4 w-full">
                <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-[1.05]">
                  <Image
                    src="/real-photos/20.webp"
                    alt="Tru Glow Branding"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-[200px] md:h-[300px] overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-[1.05]">
                  <Image
                    src="/real-photos/21.webp"
                    alt="Tru Glow Clinic"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative w-full h-[300px] md:h-[450px] overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-[1.05] col-span-2">
                  <Image
                    src="/real-photos/9.webp"
                    alt="Patient Consultation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </section>
  )
}
