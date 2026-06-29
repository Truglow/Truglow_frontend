import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import OurMission from "@/components/about/our-mission"
import OurDoctors from "@/components/about/our-doctors"
import OurFacility from "@/components/about/our-facility"

export const metadata: Metadata = {
  title: "About Tru Glow Clinic | Top Dermatology & Plastic Surgery clinic in Hyderabad",
  description: "Learn about Tru Glow Clinic, our expert doctors Dr. Pranay Reddy, Dr. Vijay Bhattipolu, Dr. Vyshali Reddy, and Dr. Anusha Vadlapatla, and our mission to provide advanced hair, skin, and laser treatments.",
  keywords: "about Tru Glow Clinic, best dermatologist Hyderabad, Dr Pranay Reddy, Dr Vijay Bhattipolu, Dr Vyshali Reddy, Dr Anusha Vadlapatla, dermatology clinic Hyderabad, plastic surgeon Hyderabad, maxillofacial surgeon Hyderabad, hair transplant surgeon Hyderabad, skin specialist Hyderabad, cosmetic surgeon Hyderabad, Tru Glow doctors, best skin doctor Manikonda, best skin doctor HITEC City",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <OurMission />
      <OurDoctors />
      <OurFacility />
    </div>
  )
}
