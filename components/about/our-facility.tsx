import { CheckCircle } from "lucide-react"

export default function OurFacility() {
  const features = [
    "State-of-the-art operating rooms",
    "Advanced hair transplant equipment",
    "Comfortable recovery areas",
    "Private consultation rooms",
    "Sterile environment with strict protocols",
    "Modern amenities for patient comfort",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Facility</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience hair restoration in our modern, state-of-the-art clinic designed for your comfort and safety.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="grid grid-cols-2 gap-4">
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="TruGlow Clinic Reception"
              className="rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="TruGlow Consultation Room"
              className="rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="TruGlow Operating Room"
              className="rounded-lg shadow-md"
            />
            <img
              src="/placeholder.svg?height=300&width=400"
              alt="TruGlow Recovery Area"
              className="rounded-lg shadow-md"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Equipped with the Latest Technology</h3>
            <p className="text-gray-600 mb-6">
              Our clinic is equipped with the latest technology and equipment to ensure the highest quality of care and
              results for our patients. We maintain strict standards of cleanliness and sterilization to provide a safe
              environment for all procedures.
            </p>
            <ul className="space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-blue-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
