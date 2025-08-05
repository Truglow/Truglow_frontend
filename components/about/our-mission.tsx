export default function OurMission() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission & Vision</h2>
            <p className="text-lg text-gray-600 mb-6">
              At TruGlow Hair Clinic, our mission is to provide the highest quality hair restoration solutions using the
              most advanced techniques and technologies available. We are committed to helping our patients regain their
              confidence and improve their quality of life.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Our vision is to be the most trusted name in hair restoration, known for our exceptional results,
              personalized care, and commitment to innovation. We strive to continuously improve our techniques and
              services to provide the best possible outcomes for our patients.
            </p>
            <p className="text-lg text-gray-600">
              We believe that everyone deserves to feel confident in their appearance, and we are dedicated to helping
              our patients achieve that confidence through our expert care and advanced treatments.
            </p>
          </div>
          <div>
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="TruGlow Hair Clinic Mission"
              className="rounded-lg shadow-xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
