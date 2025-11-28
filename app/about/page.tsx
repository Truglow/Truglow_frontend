import AboutHero from "@/components/about/about-hero"
import OurMission from "@/components/about/our-mission"
import OurDoctors from "@/components/about/our-doctors"
import OurFacility from "@/components/about/our-facility"

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
