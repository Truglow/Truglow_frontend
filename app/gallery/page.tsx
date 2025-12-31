import type { Metadata } from "next"
import GalleryHero from "@/components/gallery/gallery-hero"
import GalleryGrid from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Patient Gallery & Results | Tru Glow Clinic Hyderabad",
  description: "View real results from our patients at Tru Glow Clinic. Browse our gallery of hair transplant, skin rejuvenation, and cosmetic surgery transformations.",
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHero />
      <GalleryGrid />
    </div>
  )
}
