"use client"

import { useState, type ChangeEvent } from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import type { ServiceCategoryKey } from "@/lib/services-data"
import { serviceCategoryOptions, serviceTitlesByCategory } from "@/lib/services-data"

type AppointmentFormData = {
  name: string
  email: string
  phone: string
  serviceCategory: ServiceCategoryKey | ""
  service: string
  date: string
  time: string
  message: string
}

const CLINIC_EMAIL = "truglowcs@gmail.com"
const CLINIC_WHATSAPP_NUMBER = "917799127273"

export default function AppointmentPage() {
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: "",
    email: "",
    phone: "",
    serviceCategory: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceCategory: value as ServiceCategoryKey, service: "" }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
  }

  const validateCoreFields = () => {
    const { name, email, phone, serviceCategory, service, date, time } = formData
    if (
      !name.trim() ||
      !email.trim() ||
      !phone.trim() ||
      !serviceCategory ||
      !service ||
      !date ||
      !time
    ) {
      alert("Please fill in all required fields before booking (everything except Additional Notes).")
      return false
    }
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email.trim())
    if (!emailOk) {
      alert("Please enter a valid email address.")
      return false
    }
    const digits = phone.replace(/[^0-9]/g, "")
    if (digits.length < 10) {
      alert("Please enter a valid phone number (at least 10 digits).")
      return false
    }
    return true
  }

  const buildMessage = () => {
    const categoryLabel = formData.serviceCategory
      ? serviceCategoryOptions.find((option) => option.value === formData.serviceCategory)?.label
      : ""
    return `Hello Tru Glow,

I would like to book an appointment.

Name: ${formData.name.trim()}
Phone: ${formData.phone.trim()}
Email: ${formData.email.trim()}
Service Category: ${categoryLabel || formData.serviceCategory || "-"}
Procedure: ${formData.service || "-"}
Preferred Date: ${formData.date || "-"}
Preferred Time: ${formData.time || "-"}

Additional Notes:
${formData.message || "-"}
`
  }

  const handleEmailBooking = () => {
    if (!validateCoreFields()) {
      return
    }
    const subject = `Appointment Request - ${formData.service || "Consultation"}`
    const body = encodeURIComponent(buildMessage())
    const mailtoUrl = `mailto:${CLINIC_EMAIL}?subject=${encodeURIComponent(subject)}&body=${body}`
    window.open(mailtoUrl, "_blank")
  }

  const handleWhatsappBooking = () => {
    if (!validateCoreFields()) {
      return
    }
    const text = encodeURIComponent(buildMessage())
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${CLINIC_WHATSAPP_NUMBER}&text=${text}`
    window.open(whatsappUrl, "_blank")
  }

  const availableProcedures = formData.serviceCategory ? serviceTitlesByCategory[formData.serviceCategory] : []

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
            <p className="text-lg text-gray-600">
              Schedule a consultation with our experts in hair, skin, laser, and plastic surgery
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Appointment Form */}
            <Card className="border-none shadow-md">
              <CardHeader>
                <CardTitle className="text-2xl text-primary">Appointment Details</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6" onSubmit={(event) => event.preventDefault()}>
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name</Label>
                    <Input
                      id="name"
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="serviceCategory">Service Category</Label>
                      <Select
                        value={formData.serviceCategory}
                        onValueChange={handleCategoryChange}
                        aria-required="true"
                      >
                        <SelectTrigger id="serviceCategory">
                          <SelectValue placeholder="Choose a category" />
                        </SelectTrigger>
                        <SelectContent>
                          {serviceCategoryOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="service">Procedure</Label>
                      <Select
                        value={formData.service}
                        onValueChange={handleServiceChange}
                        disabled={!formData.serviceCategory}
                        aria-required="true"
                      >
                        <SelectTrigger id="service" aria-disabled={!formData.serviceCategory}>
                          <SelectValue placeholder="Select a procedure" />
                        </SelectTrigger>
                        <SelectContent>
                          {availableProcedures.map((procedure) => (
                            <SelectItem key={procedure} value={procedure}>
                              {procedure}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="date">Preferred Date</Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={handleInputChange}
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time">Preferred Time</Label>
                    <Select
                      value={formData.time}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
                    >
                      <SelectTrigger id="time">
                        <SelectValue placeholder="Select time slot" aria-required="true" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Morning (9:00 AM - 12:00 PM)">Morning (9:00 AM - 12:00 PM)</SelectItem>
                        <SelectItem value="Afternoon (12:00 PM - 3:00 PM)">Afternoon (12:00 PM - 3:00 PM)</SelectItem>
                        <SelectItem value="Evening (3:00 PM - 7:00 PM)">Evening (3:00 PM - 7:00 PM)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Additional Notes</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Any specific concerns or questions you'd like to discuss?"
                      className="min-h-[100px]"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>

                  <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                    <Button
                      type="button"
                      onClick={handleEmailBooking}
                      className="w-full bg-primary hover:bg-primary/90 text-white"
                    >
                      Book via Email
                    </Button>
                    <Button
                      type="button"
                      onClick={handleWhatsappBooking}
                      className="w-full bg-green-600 hover:bg-green-700 text-white"
                    >
                      Book via WhatsApp
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Contact Information</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Address</h3>
                      <p className="text-gray-600">
                        Tru Glow, Alkapur Township, Manikonda, Hyderabad, Telangana 500075
                      </p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Phone</h3>
                      <p className="text-gray-600">+91 7799127273</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
                      <p className="text-gray-600">info@truglowclinic.com</p>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">Working Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-none shadow-md">
                <CardHeader>
                  <CardTitle className="text-2xl text-primary">Why Choose Us?</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-600">Expert team of dermatologists, plastic surgeons, and specialists</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-600">State-of-the-art facilities</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-600">Personalized treatment plans</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-primary mr-2">✓</span>
                      <span className="text-gray-600">Comprehensive aftercare support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 