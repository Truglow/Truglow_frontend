import Image from "next/image"

export default function GalleryHero() {
  return (
    <div className="relative bg-amber-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <Image
          src="/gallery-hero-bg.webp"
          alt="Gallery Hero"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
        <p className="text-xl text-amber-50 max-w-3xl mx-auto">
          View our collection of before and after photos showcasing the transformative results of our hair, skin, laser, and plastic surgery treatments.
        </p>
      </div>
    </div>
  )
}
