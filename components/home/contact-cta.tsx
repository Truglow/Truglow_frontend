"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

export default function ContactCta() {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section ref={ref} className={`py-16 bg-primary text-white transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-fade-in-down delay-100">Ready to Transform Your Appearance?</h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto animate-fade-in-up delay-200">
          Schedule a consultation with our experts to discuss your treatment options in hair, skin, laser, and plastic surgery, and take the first step towards transforming your confidence.
        </p>
        <Button asChild size="lg" className="bg-white text-amber-900 hover:bg-amber-50 hover:shadow-lg transition-all duration-200 font-semibold animate-fade-in-up delay-300">
          <Link href="/contact">Book Your Consultation Now</Link>
        </Button>
      </div>
    </section>
  )
}
