import type { Metadata } from "next"
import ContactHero from "@/components/contact/contact-hero"
import ContactForm from "@/components/contact/contact-form"
import ContactInfo from "@/components/contact/contact-info"
import ContactMap from "@/components/contact/contact-map"

export const metadata: Metadata = {
  title: "Contact Tru Glow Clinic | Best Dermatologist in Manikonda & HITEC City, Hyderabad",
  description: "Get in touch with Tru Glow Clinic in Manikonda and HITEC City, Hyderabad. Book consultations for hair transplant, skin treatments, and cosmetic surgery. Reach us at +91 7799427273.",
  keywords: "contact Tru Glow Clinic, Tru Glow Clinic Manikonda, Tru Glow Clinic HITEC City, dermatologist near me Hyderabad, skin clinic near me Manikonda, hair clinic near me HITEC City, book appointment dermatologist Hyderabad, Tru Glow phone number, Tru Glow Clinic address, Alkapur Township clinic, SMR Vinay Technopolis clinic, Kothaguda skin clinic",
}

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
