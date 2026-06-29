import type { Metadata } from "next"
import GalleryHero from "@/components/gallery/gallery-hero"
import GalleryGrid from "@/components/gallery/gallery-grid"

export const metadata: Metadata = {
  title: "Patient Gallery & Results | Tru Glow Clinic Hyderabad",
  description: "View real results from our patients at Tru Glow Clinic. Browse our gallery of hair transplant, skin rejuvenation, and cosmetic surgery transformations.",
  keywords: "hair transplant results Hyderabad, before after hair transplant, skin treatment results, cosmetic surgery before after, patient testimonials Hyderabad, Tru Glow Clinic results, hair transplant gallery, skin rejuvenation gallery, PRP results, laser treatment results, plastic surgery before after Hyderabad",
}

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHero />
      <GalleryGrid />
    </div>
  )
}
