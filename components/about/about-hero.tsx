export default function AboutHero() {
  return (
    <div className="relative bg-amber-900 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">About TruGlow Hair Clinic</h1>
        <p className="text-xl text-amber-50 max-w-3xl mx-auto">
          A leading hair restoration clinic committed to providing advanced solutions with exceptional care and
          natural-looking results.
        </p>
      </div>
    </div>
  )
}
