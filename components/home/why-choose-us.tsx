"use client"

import { CheckCircle, Award, Users, Shield, Sparkles, Heart } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedItem } from "@/components/animated-item"
import Image from "next/image"

export default function WhyChooseUs() {
  const reasons = [
    {
      icon: <Award className="h-6 w-6" />,
      title: "Expert Medical Team",
      description: "Experienced & certified dermatologists and plastic surgeons with years of expertise in delivering transformative results",
    },
    {
      icon: <Sparkles className="h-6 w-6" />,
      title: "Cutting-Edge Technology",
      description: "Advanced US-FDA approved equipment and latest techniques ensuring safe, effective, and superior outcomes",
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Personalized Care",
      description: "Tailored treatment plans designed specifically for your unique concerns, goals, and lifestyle",
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Safety First",
      description: "100% safety and hygiene protocols with sterile environments and rigorous quality standards",
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Proven Results",
      description: "Visible results with high client satisfaction - thousands of happy patients trust us for their transformation journey",
    },
  ]

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()
  const { ref: imageRef, isVisible: imageVisible } = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-white to-amber-50">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Why Choose Tru Glow?</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            At Tru Glow, we combine advanced technology with expert care to deliver exceptional results. Our commitment
            to excellence has made us a trusted name in hair, skin, laser, and plastic surgery treatments.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div ref={imageRef} className={`transition-all duration-1000 h-full flex items-center ${imageVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden rounded-lg shadow-xl transform transition-transform duration-500 hover:scale-[1.02]">
              <Image
                src="/why-choose-us.webp"
                alt="Tru Glow Facility"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="space-y-6">
            {reasons.map((reason, index) => (
              <AnimatedItem key={index} delay={index * 100} direction="right">
                <div className="flex items-start group">
                  <div className="flex-shrink-0 mr-4 p-3 bg-amber-100 rounded-lg group-hover:bg-amber-200 transition-all duration-300 group-hover:scale-110 transform">
                    <div className="text-amber-600">{reason.icon}</div>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{reason.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>


      </div>
    </section>
  )
}
