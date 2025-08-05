import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ContactCta() {
  return (
    <section className="py-16 bg-primary text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Appearance?</h2>
        <p className="text-xl text-primary-foreground/90 mb-8 max-w-3xl mx-auto">
          Schedule a consultation with our experts to discuss your hair restoration options and take the first step
          towards regaining your confidence.
        </p>
        <Button asChild size="lg" className="bg-white text-primary hover:bg-primary-foreground/10">
          <Link href="/contact">Book Your Consultation Now</Link>
        </Button>
      </div>
    </section>
  )
}
