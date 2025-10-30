export default function ContactHero() {
  return (
    <div className="relative bg-amber-900 text-white">
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
        <p className="text-xl text-amber-50 max-w-3xl mx-auto">
          Get in touch with our team to schedule a consultation or learn more about our hair restoration services.
        </p>
      </div>
    </div>
  )
}
