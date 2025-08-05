import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      name: "Rahul Sharma",
      location: "Delhi",
      quote:
        "The team at TruGlow completely transformed my appearance. The results exceeded my expectations, and the care I received was exceptional.",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Priya Patel",
      location: "Mumbai",
      quote:
        "After trying various treatments with no success, TruGlow's approach finally gave me the results I was looking for. I couldn't be happier!",
      image: "/placeholder.svg?height=100&width=100",
    },
    {
      name: "Amit Kumar",
      location: "Bangalore",
      quote:
        "The procedure was virtually painless, and the recovery was quick. Six months later, I have a full head of hair that looks completely natural.",
      image: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Hear from our satisfied patients about their experience and results at TruGlow Hair Clinic.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-none shadow-md">
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-blue-500 mb-4" />
                <p className="text-gray-700 mb-6 italic">"{testimonial.quote}"</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
