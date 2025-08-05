import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import WhyChooseUs from "@/components/home/why-choose-us"
import Testimonials from "@/components/home/testimonials"
import ContactCta from "@/components/home/contact-cta"
import Statistics from "@/components/home/statistics"

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
      <Statistics />
      <ContactCta />
    </main>
  )
}
