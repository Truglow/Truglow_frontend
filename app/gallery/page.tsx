import GalleryHero from "@/components/gallery/gallery-hero"
import GalleryGrid from "@/components/gallery/gallery-grid"

export default function GalleryPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <GalleryHero />
      <GalleryGrid />
    </div>
  )
}
