import type { Metadata } from "next"
import AboutHero from "@/components/about/about-hero"
import OurMission from "@/components/about/our-mission"
import OurDoctors from "@/components/about/our-doctors"
import OurFacility from "@/components/about/our-facility"

export const metadata: Metadata = {
  title: "About Tru Glow Clinic | Top Dermatology & Plastic Surgery clinic in Hyderabad",
  description: "Learn about Tru Glow Clinic, our expert doctors Dr. Pranay Reddy and Dr. Vijay Bhattipolu, and our mission to provide advanced hair, skin, and laser treatments.",
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
