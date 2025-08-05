import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <ContactHero />
      <div className="container mx-auto px-4 py-12 grid md:grid-cols-2 gap-8">
        <ContactForm />
        <div>
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </div>
  )
}
