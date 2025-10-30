import { CheckCircle } from "lucide-react"

export default function WhyChooseUs() {
  const reasons = [
    "Expert team of hair transplant specialists",
    "State-of-the-art facilities and equipment",
    "Personalized treatment plans",
    "Natural-looking results",
    "Affordable pricing with flexible payment options",
    "Comprehensive aftercare support",
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/placeholder.svg?height=600&width=800"
              alt="TruGlow Hair Clinic Facility"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Why Choose TruGlow Hair Clinic?</h2>
            <p className="text-lg text-gray-600 mb-8">
              At TruGlow, we combine advanced technology with expert care to deliver exceptional results. Our commitment
              to excellence has made us a trusted name in hair restoration.
            </p>
            <ul className="space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{reason}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
