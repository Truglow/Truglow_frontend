import AboutHero from "@/components/about/about-hero"
import OurMission from "@/components/about/our-mission"
import OurFacility from "@/components/about/our-facility"

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <AboutHero />
      <OurMission />
      <OurFacility />
    </div>
  )
}
