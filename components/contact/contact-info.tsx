import { Phone, Mail, MapPin, Clock } from "lucide-react"

export default function ContactInfo() {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-8">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
      <div className="space-y-4">
        <div className="flex items-start">
          <MapPin className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Address</h3>
            <p className="text-gray-600">Plot.no 28 , Road no.9, Neknampur Rd, Alkapur Township, Hyderabad, Telangana 500075</p>
          </div>
        </div>
        <div className="flex items-start">
          <Phone className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Phone</h3>
            <p className="text-gray-600">+91 9493385217</p>
          </div>
        </div>
        <div className="flex items-start">
          <Mail className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Email</h3>
            <p className="text-gray-600">truglowcs@gmail.com</p>
          </div>
        </div>
        <div className="flex items-start">
          <Clock className="h-5 w-5 text-amber-600 mr-3 mt-1 flex-shrink-0" />
          <div>
            <h3 className="font-medium text-gray-900">Working Hours</h3>
            <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
      </div>
    </div>
  )
}
