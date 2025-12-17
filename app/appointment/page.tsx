"use client"

import { useState, useEffect, Suspense, type ChangeEvent } from "react"
import { useSearchParams } from "next/navigation"

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

// Appointment Form Component
function AppointmentForm() {
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

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validationError, setValidationError] = useState<string>("")
  const [successMessage, setSuccessMessage] = useState<string>("")
  const [fieldErrors, setFieldErrors] = useState<Record<string, boolean>>({})

  // Router for URL parameters
  const searchParams = useSearchParams()

  // Auto-fill form from URL parameters
  useEffect(() => {
    const category = searchParams.get("category") as ServiceCategoryKey | null
    const service = searchParams.get("service")

    if (category && service) {
      console.log('Auto-filling form with:', { category, service })
      setFormData((prev) => ({
        ...prev,
        serviceCategory: category,
        service: service,
      }))
    }
  }, [searchParams])

  const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error for this field when user starts typing
    if (fieldErrors[name]) {
      setFieldErrors((prev) => ({ ...prev, [name]: false }))
    }
  }

  const handleCategoryChange = (value: string) => {
    setFormData((prev) => ({ ...prev, serviceCategory: value as ServiceCategoryKey, service: "" }))
    // Clear errors for service category and service
    setFieldErrors((prev) => ({ ...prev, serviceCategory: false, service: false }))
  }

  const handleServiceChange = (value: string) => {
    setFormData((prev) => ({ ...prev, service: value }))
    // Clear error for service field
    if (fieldErrors.service) {
      setFieldErrors((prev) => ({ ...prev, service: false }))
    }
  }

  // Check if a time slot is available based on selected date and current time
  const isTimeSlotAvailable = (timeSlot: string) => {
    if (!formData.date) return true // If no date selected, all slots available

    const selectedDate = new Date(formData.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Reset to start of day for comparison
    selectedDate.setHours(0, 0, 0, 0)

    // If selected date is not today, all time slots are available
    if (selectedDate.getTime() !== today.getTime()) {
      return true
    }

    // For today, check current time
    const currentHour = new Date().getHours()

    // Morning: 9 AM - 12 PM (disable if current time >= 12 PM)
    if (timeSlot.includes('Morning') && currentHour >= 12) {
      return false
    }

    // Afternoon: 12 PM - 3 PM (disable if current time >= 15:00/3 PM)
    if (timeSlot.includes('Afternoon') && currentHour >= 15) {
      return false
    }

    // Evening: 3 PM - 7 PM (disable if current time >= 19:00/7 PM)
    if (timeSlot.includes('Evening') && currentHour >= 19) {
      return false
    }

    return true
  }

  // Helper function to get input className based on error state
  const getInputClassName = (fieldName: string, baseClassName: string = "") => {
    const hasError = fieldErrors[fieldName]
    const errorClasses = hasError
      ? "border-red-500 focus:border-red-500 focus:ring-red-500/20 hover:border-red-500"
      : "border-gray-200 focus:border-primary focus:ring-primary/10 hover:border-primary/50"
    return `${baseClassName} ${errorClasses}`.trim()
  }

  const validateCoreFields = () => {
    const { name, email, phone, serviceCategory, service, date, time } = formData

    // Clear previous errors
    setValidationError("")
    const errors: Record<string, boolean> = {}

    // Check all required fields are filled
    if (!name.trim()) errors.name = true
    if (!email.trim()) errors.email = true
    if (!phone.trim()) errors.phone = true
    if (!serviceCategory) errors.serviceCategory = true
    if (!service) errors.service = true
    if (!date) errors.date = true
    if (!time) errors.time = true

    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors)
      setValidationError("Please fill in all required fields before booking (everything except Additional Notes).")
      return false
    }

    // Validate name (letters and spaces only, minimum 2 characters)
    const namePattern = /^[a-zA-Z\s]{2,}$/
    if (!namePattern.test(name.trim())) {
      setFieldErrors({ name: true })
      setValidationError("Please enter a valid name (letters and spaces only, minimum 2 characters).")
      return false
    }

    // Validate email
    const emailOk = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())
    if (!emailOk) {
      setFieldErrors({ email: true })
      setValidationError("Please enter a valid email address.")
      return false
    }

    // Validate phone (exactly 10 digits)
    const digits = phone.replace(/[^0-9]/g, "")
    if (digits.length !== 10) {
      setFieldErrors({ phone: true })
      setValidationError("Please enter a valid 10-digit phone number.")
      return false
    }

    // Validate date (not in the past, not more than 3 months in future)
    const selectedDate = new Date(date)
    const today = new Date()
    today.setHours(0, 0, 0, 0) // Reset time to start of day

    if (selectedDate < today) {
      setFieldErrors({ date: true })
      setValidationError("Please select a date that is today or in the future.")
      return false
    }

    const threeMonthsFromNow = new Date()
    threeMonthsFromNow.setMonth(threeMonthsFromNow.getMonth() + 3)

    if (selectedDate > threeMonthsFromNow) {
      setFieldErrors({ date: true })
      setValidationError("Please select a date within the next 3 months.")
      return false
    }

    // Clear all errors if validation passes
    setFieldErrors({})
    return true
  }

  const handleAppointmentBooking = async () => {
    if (!validateCoreFields()) {
      return
    }

    setIsSubmitting(true)

    try {
      const categoryLabel = formData.serviceCategory
        ? serviceCategoryOptions.find((option) => option.value === formData.serviceCategory)?.label
        : ""

      const response = await fetch("/api/appointments", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name.trim(),
          email: formData.email.trim(),
          phone: formData.phone.trim(),
          serviceCategory: categoryLabel || formData.serviceCategory,
          service: formData.service,
          date: formData.date,
          time: formData.time,
          message: formData.message,
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSuccessMessage("✅ Appointment booked successfully! We'll contact you soon.")
        setValidationError("")
        // Reset form
        setFormData({
          name: "",
          email: "",
          phone: "",
          serviceCategory: "",
          service: "",
          date: "",
          time: "",
          message: "",
        })
        // Clear success message after 5 seconds
        setTimeout(() => setSuccessMessage(""), 5000)
      } else {
        setValidationError(`❌ Error: ${data.error || "Failed to book appointment. Please try again."}`)
        setSuccessMessage("")
      }
    } catch (error) {
      console.error("Error submitting appointment:", error)
      setValidationError("❌ Network error. Please check your connection and try again.")
      setSuccessMessage("")
    } finally {
      setIsSubmitting(false)
    }
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
                  {/* Validation Error Message - Creative Design */}
                  {validationError && (
                    <div className="animate-slide-down">
                      <div className="relative p-5 bg-gradient-to-r from-red-50 to-pink-50 border-l-4 border-red-500 rounded-xl shadow-lg overflow-hidden">
                        {/* Decorative background pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-red-100 rounded-full -mr-16 -mt-16 opacity-20"></div>

                        <div className="relative flex items-start space-x-4">
                          {/* Animated Icon */}
                          <div className="flex-shrink-0 w-10 h-10 bg-red-500 rounded-full flex items-center justify-center animate-pulse">
                            <span className="text-white text-xl">⚠</span>
                          </div>

                          {/* Error Content */}
                          <div className="flex-1 pt-1">
                            <h4 className="text-sm font-semibold text-red-800 mb-1">Validation Error</h4>
                            <p className="text-sm text-red-700 leading-relaxed">{validationError}</p>
                          </div>

                          {/* Close Button */}
                          <button
                            onClick={() => setValidationError("")}
                            className="flex-shrink-0 text-red-400 hover:text-red-600 hover:bg-red-100 rounded-full p-1 transition-all duration-200 hover:rotate-90"
                            type="button"
                            aria-label="Close error message"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Success Message - Creative Design */}
                  {successMessage && (
                    <div className="animate-slide-down">
                      <div className="relative p-5 bg-gradient-to-r from-green-50 to-emerald-50 border-l-4 border-green-500 rounded-xl shadow-lg overflow-hidden">
                        {/* Decorative background pattern */}
                        <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full -mr-16 -mt-16 opacity-20"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-100 rounded-full -ml-12 -mb-12 opacity-20"></div>

                        <div className="relative flex items-start space-x-4">
                          {/* Animated Icon */}
                          <div className="flex-shrink-0 w-10 h-10 bg-green-500 rounded-full flex items-center justify-center animate-bounce">
                            <span className="text-white text-xl">✓</span>
                          </div>

                          {/* Success Content */}
                          <div className="flex-1 pt-1">
                            <h4 className="text-sm font-semibold text-green-800 mb-1">Success!</h4>
                            <p className="text-sm text-green-700 leading-relaxed">{successMessage}</p>
                          </div>

                          {/* Close Button */}
                          <button
                            onClick={() => setSuccessMessage("")}
                            className="flex-shrink-0 text-green-400 hover:text-green-600 hover:bg-green-100 rounded-full p-1 transition-all duration-200 hover:rotate-90"
                            type="button"
                            aria-label="Close success message"
                          >
                            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                              <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  )}
                  <div className="space-y-2">
                    <Label htmlFor="name" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                      <span className="text-primary">👤</span>
                      <span>Full Name</span>
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative group">
                      <Input
                        id="name"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className={getInputClassName('name', 'transition-all duration-300 border-2 rounded-lg px-4 py-3 bg-white shadow-sm focus:shadow-md focus:ring-4')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                      <span className="text-primary">✉️</span>
                      <span>Email</span>
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative group">
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className={getInputClassName('email', 'transition-all duration-300 border-2 rounded-lg px-4 py-3 bg-white shadow-sm focus:shadow-md focus:ring-4')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                      <span className="text-primary">📱</span>
                      <span>Phone Number</span>
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative group">
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="10-digit mobile number"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className={getInputClassName('phone', 'transition-all duration-300 border-2 rounded-lg px-4 py-3 bg-white shadow-sm focus:shadow-md focus:ring-4')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="serviceCategory" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                        <span className="text-primary">🏥</span>
                        <span>Service Category</span>
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        key={`category-${formData.serviceCategory}`}
                        value={formData.serviceCategory}
                        onValueChange={handleCategoryChange}
                        aria-required="true"
                        disabled={isSubmitting}
                      >
                        <SelectTrigger id="serviceCategory" className={getInputClassName('serviceCategory', 'transition-all duration-300 border-2 rounded-lg px-4 py-3 bg-white shadow-sm hover:shadow-md focus:ring-4')}>
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
                      <Label htmlFor="service" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                        <span className="text-primary">💉</span>
                        <span>Procedure</span>
                        <span className="text-red-500">*</span>
                      </Label>
                      <Select
                        key={`service-${formData.service}`}
                        value={formData.service}
                        onValueChange={handleServiceChange}
                        disabled={!formData.serviceCategory || isSubmitting}
                        aria-required="true"
                      >
                        <SelectTrigger id="service" aria-disabled={!formData.serviceCategory} className={getInputClassName('service', 'transition-all duration-300 border-2 rounded-lg px-4 py-3 bg-white shadow-sm hover:shadow-md disabled:opacity-50 focus:ring-4')}>
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
                    <Label htmlFor="date" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                      <span className="text-primary">📅</span>
                      <span>Preferred Date</span>
                      <span className="text-red-500">*</span>
                    </Label>
                    <div className="relative group">
                      <Input
                        id="date"
                        name="date"
                        type="date"
                        min={new Date().toISOString().split('T')[0]}
                        value={formData.date}
                        onChange={handleInputChange}
                        required
                        disabled={isSubmitting}
                        className={getInputClassName('date', 'transition-all duration-300 border-2 rounded-lg px-4 py-3 bg-white shadow-sm focus:shadow-md focus:ring-4')}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="time" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                      <span className="text-primary">⏰</span>
                      <span>Preferred Time</span>
                      <span className="text-red-500">*</span>
                    </Label>
                    <Select
                      key={`time-${formData.date}`}
                      value={formData.time}
                      onValueChange={(value) => setFormData((prev) => ({ ...prev, time: value }))}
                      disabled={isSubmitting}
                    >
                      <SelectTrigger id="time" className={getInputClassName('time', 'transition-all duration-300 border-2 rounded-lg px-4 py-3 bg-white shadow-sm hover:shadow-md focus:ring-4')}>
                        <SelectValue placeholder="Select time slot" aria-required="true" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem
                          value="Morning (9:00 AM - 12:00 PM)"
                          disabled={!isTimeSlotAvailable("Morning (9:00 AM - 12:00 PM)")}
                        >
                          Morning (9:00 AM - 12:00 PM)
                          {!isTimeSlotAvailable("Morning (9:00 AM - 12:00 PM)") && " (Not available)"}
                        </SelectItem>
                        <SelectItem
                          value="Afternoon (12:00 PM - 3:00 PM)"
                          disabled={!isTimeSlotAvailable("Afternoon (12:00 PM - 3:00 PM)")}
                        >
                          Afternoon (12:00 PM - 3:00 PM)
                          {!isTimeSlotAvailable("Afternoon (12:00 PM - 3:00 PM)") && " (Not available)"}
                        </SelectItem>
                        <SelectItem
                          value="Evening (3:00 PM - 7:00 PM)"
                          disabled={!isTimeSlotAvailable("Evening (3:00 PM - 7:00 PM)")}
                        >
                          Evening (3:00 PM - 7:00 PM)
                          {!isTimeSlotAvailable("Evening (3:00 PM - 7:00 PM)") && " (Not available)"}
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-semibold text-gray-700 flex items-center space-x-2">
                      <span className="text-primary">📝</span>
                      <span>Additional Notes</span>
                      <span className="text-gray-400 text-xs">(Optional)</span>
                    </Label>
                    <div className="relative group">
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Any specific concerns or questions you'd like to discuss?"
                        value={formData.message}
                        onChange={handleInputChange}
                        disabled={isSubmitting}
                        rows={4}
                        className="transition-all duration-300 border-2 border-gray-200 focus:border-primary focus:ring-4 focus:ring-primary/10 hover:border-primary/50 rounded-lg px-4 py-3 bg-white shadow-sm focus:shadow-md resize-none"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                    </div>
                  </div>

                  <Button
                    type="button"
                    onClick={handleAppointmentBooking}
                    className="w-full bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-white font-semibold py-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center space-x-2">
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        <span>Booking...</span>
                      </span>
                    ) : (
                      <span className="flex items-center justify-center space-x-2">
                        <span>📅</span>
                        <span>Book Appointment</span>
                        <span>→</span>
                      </span>
                    )}
                  </Button>
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
                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Address</h3>
                        <p className="text-gray-600">
                          Tru Glow, Alkapur Township, Manikonda, Hyderabad, Telangana 500075
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                        <a href="tel:+917799127273" className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary">
                          <p>+91 7799127273</p>
                        </a>
                        <a href="tel:+917036127273" className="text-primary font-medium hover:text-primary/80 transition-colors underline decoration-primary/30 hover:decoration-primary">
                          <p>+91 7036127273</p>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                        <p className="text-gray-600">truglowcs@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start">
                      <svg className="h-5 w-5 text-primary mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Working Hours</h3>
                        <p className="text-gray-600">Monday - Saturday: 9:00 AM - 7:00 PM</p>
                        <p className="text-gray-600">Sunday: Closed</p>
                      </div>
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

// Wrap in Suspense for useSearchParams
export default function AppointmentPage() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">Loading...</div>}>
      <AppointmentForm />
    </Suspense>
  )
}