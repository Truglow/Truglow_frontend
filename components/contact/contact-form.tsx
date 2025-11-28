"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"
import { serviceCategoryOptions, serviceTitlesByCategory } from "@/lib/services-data"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    category: "",
    procedure: "",
    message: "",
  })

  const [errors, setErrors] = useState({
    name: "",
    phone: "",
    category: "",
    procedure: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    const newErrors = {
      name: "",
      phone: "",
      category: "",
      procedure: "",
    }

    // Validate name - only letters and spaces
    if (!formData.name.trim()) {
      newErrors.name = "Name is required"
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters"
    } else if (!/^[a-zA-Z\s]+$/.test(formData.name.trim())) {
      newErrors.name = "Name can only contain letters and spaces"
    }

    // Validate phone
    const phoneDigits = formData.phone.replace(/[^0-9]/g, "")
    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required"
    } else if (phoneDigits.length < 10) {
      newErrors.phone = "Phone number must be at least 10 digits"
    } else if (phoneDigits.length > 15) {
      newErrors.phone = "Phone number is too long"
    }

    // Validate category
    if (!formData.category) {
      newErrors.category = "Please select a service category"
    }

    // Validate procedure
    if (!formData.procedure) {
      newErrors.procedure = "Please select a procedure"
    }

    setErrors(newErrors)
    return !Object.values(newErrors).some((error) => error !== "")
  }

  const saveToGoogleSheets = async (data: {
    name: string
    phone: string
    category: string
    procedure: string
    message: string
    source: string
  }) => {
    try {
      const response = await fetch("/api/chat-conversations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        console.error("Failed to save contact form submission")
      }
    } catch (error) {
      console.error("Error saving contact form submission:", error)
    }
  }

  const handleWhatsapp = async () => {
    if (!validateForm()) {
      return
    }

    const name = formData.name.trim()
    const phone = formData.phone.trim()
    const category = formData.category
    const procedure = formData.procedure
    const message = formData.message.trim() || "-"

    // Save to Google Sheets (fire and forget)
    saveToGoogleSheets({
      name,
      phone,
      category,
      procedure,
      message,
      source: "Contact Page",
    })

    // Direct user to WhatsApp with prefilled message
    const clinicNumber = "917799127273" // +91 7799127273
    const text = encodeURIComponent(
      `Hello Tru Glow,\n\nI would like to book a consultation.\n\nName: ${name}\nPhone: ${phone}\nService: ${category}\nProcedure: ${procedure}\nMessage: ${message}`
    )
    const url = `https://api.whatsapp.com/send?phone=${clinicNumber}&text=${text}`
    window.open(url, "_blank")

    // Reset form after successful submission
    setFormData({
      name: "",
      phone: "",
      category: "",
      procedure: "",
      message: "",
    })
  }


  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
      <form className="space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">Your Name *</Label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && <p className="text-sm text-red-500">{errors.name}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone Number *</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
            className={errors.phone ? "border-red-500" : ""}
          />
          {errors.phone && <p className="text-sm text-red-500">{errors.phone}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="category">Service Category *</Label>
          <Select
            value={formData.category}
            onValueChange={(val) => {
              setFormData((prev) => ({ ...prev, category: val, procedure: "" }))
              if (errors.category) {
                setErrors((prev) => ({ ...prev, category: "", procedure: "" }))
              }
            }}
          >
            <SelectTrigger id="category" className={errors.category ? "border-red-500" : ""}>
              <SelectValue placeholder="Select service category" />
            </SelectTrigger>
            <SelectContent>
              {serviceCategoryOptions.map((cat) => (
                <SelectItem key={cat.value} value={cat.value}>
                  {cat.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          {errors.category && <p className="text-sm text-red-500">{errors.category}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="procedure">Procedure *</Label>
          <Select
            value={formData.procedure}
            onValueChange={(val) => {
              setFormData((prev) => ({ ...prev, procedure: val }))
              if (errors.procedure) {
                setErrors((prev) => ({ ...prev, procedure: "" }))
              }
            }}
            disabled={!formData.category}
          >
            <SelectTrigger id="procedure" className={errors.procedure ? "border-red-500" : ""}>
              <SelectValue placeholder={formData.category ? "Select procedure" : "Select category first"} />
            </SelectTrigger>
            <SelectContent>
              {formData.category &&
                serviceTitlesByCategory[formData.category as keyof typeof serviceTitlesByCategory]?.map((proc) => (
                  <SelectItem key={proc} value={proc}>
                    {proc}
                  </SelectItem>
                ))}
            </SelectContent>
          </Select>
          {errors.procedure && <p className="text-sm text-red-500">{errors.procedure}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">Your Message (Optional)</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Tell us more about your requirements"
            rows={5}
          />
        </div>

        <Button type="button" onClick={handleWhatsapp} className="w-full bg-green-600 hover:bg-green-700">
          Send WhatsApp
        </Button>
      </form>
    </div>
  )
}
