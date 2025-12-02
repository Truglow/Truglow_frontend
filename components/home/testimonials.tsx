"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedItem } from "@/components/animated-item"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Shiva Kumar",
      location: "Vizag",
      quote:
        "The team at TruGlow completely transformed my appearance. The results exceeded my expectations, and the care I received was exceptional.",
      image: "/shiva-testimonial.jpg",
    },
    {
      name: "Ramana Chowdary",
      location: "Hyderabad",
      quote:
        "After trying various treatments with no success, TruGlow's approach finally gave me the results I was looking for. I couldn't be happier!",
      image: "/ramana-chowdary-testimonial.jpg",
    },
    {
      name: "Meedha",
      location: "Hyderabad",
      quote:
        "The procedure was virtually painless, and the recovery was quick. Six months later, I have a full head of hair that looks completely natural.",
      image: "/meedha-testimonial.jpg",
    },
  ]

  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied patients about their experience and results at Tru Glow across our hair, skin, laser, and plastic surgery treatments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <AnimatedItem key={index} delay={index * 150} direction="up">
              <Card className="border-none shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-2 transform h-full">
                <CardContent className="pt-6 flex flex-col h-full">
                  <Quote className="h-8 w-8 text-amber-500 mb-4" />
                  <p className="text-gray-700 mb-6 italic flex-grow">"{testimonial.quote}"</p>
                  <div className="flex items-center mt-auto">
                    {testimonial.image ? (
                      <div className="relative w-12 h-12 mr-4 rounded-full overflow-hidden border-2 border-amber-100">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    ) : (
                      <div className="w-12 h-12 mr-4 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 font-bold text-xl">
                        {testimonial.name.charAt(0)}
                      </div>
                    )}
                    <div>
                      <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                      <p className="text-sm text-gray-500">{testimonial.location}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </section>
  )
}
