export default function GalleryHero() {
  return (
    <div className="relative bg-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Gallery</h1>
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          View our collection of before and after photos showcasing the transformative results of our hair restoration
          procedures.
        </p>
      </div>
    </div>
  )
}
