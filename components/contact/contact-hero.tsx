import Image from "next/image"

export default function ContactHero() {
  return (
    <div className="relative bg-amber-900 text-white overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/contact-hero-bg.webp"
          alt="Contact Tru Glow Clinic"
          fill
          priority
          className="object-cover"
        />
      </div>
      {/* Dark overlay for better text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-amber-900/30 via-amber-900/20 to-amber-900/30"></div>
      <div className="container mx-auto px-4 py-20 relative z-10 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6 drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]">Contact Us</h1>
        <p className="text-xl md:text-2xl text-amber-50 max-w-3xl mx-auto drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]">
          Get in touch with our team for consultations and appointments
        </p>
      </div>
    </div>
  )
}
