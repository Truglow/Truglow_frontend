"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log("Form submitted:", formData)
    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thank you for your message. We'll get back to you soon!")
  }

  const handleEmail = () => {
    const name = formData.name.trim()
    const phone = formData.phone.trim()
    const subject = (formData.subject || "Consultation Request").trim()
    const message = (formData.message || "").trim()
    if (!name || !phone || !formData.email || !formData.subject) {
      alert("Please fill in Your Name, Email, Phone, and Subject to send an email.")
      return
    }
    // Basic validations
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(formData.email.trim())
    if (!emailOk) {
      alert("Please enter a valid email address.")
      return
    }
    const to = "truglowcs@gmail.com"
    const mailSubject = encodeURIComponent(subject)
    const mailBody = encodeURIComponent(
      `Hello Tru Glow,\n\nI would like to book a consultation.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${formData.email}\n\nMessage:\n${message || "-"}\n`
    )
    const mailtoUrl = `mailto:${to}?subject=${mailSubject}&body=${mailBody}`
    window.open(mailtoUrl, "_blank")
  }
  const handleWhatsapp = async () => {
    const name = formData.name.trim()
    const phone = formData.phone.trim()
    const email = (formData.email || "").trim()
    const subject = (formData.subject || "").trim()
    if (!name || !phone || !email || !subject) {
      alert("Please fill in Your Name, Email, Phone, and Subject to send via WhatsApp.")
      return
    }
    // Basic phone cleanup to digits only
    const digits = phone.replace(/[^0-9]/g, "")
    const emailOk = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)
    if (!emailOk) {
      alert("Please enter a valid email address.")
      return
    }
    if (digits.length < 10) {
      alert("Please enter a valid phone number (at least 10 digits).")
      return
    }
    // Direct user to WhatsApp with prefilled message (no server send)
    const clinicNumber = "917799127273" // +91 7799127273
    const text = encodeURIComponent(
      `Hello Tru Glow,\n\nI would like to book a consultation.\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${formData.message || "-"}`
    )
    const url = `https://api.whatsapp.com/send?phone=${clinicNumber}&text=${text}`
    window.open(url, "_blank")
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="name">Your Name</Label>
            <Input
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email Address</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your mail"
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your number"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="subject">Subject</Label>
            <Select
              value={formData.subject}
              onValueChange={(val) => setFormData((prev) => ({ ...prev, subject: val }))}
              required
            >
              <SelectTrigger id="subject" aria-label="Select subject">
                <SelectValue placeholder="Select a subject" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Skin">Skin</SelectItem>
                <SelectItem value="Hair">Hair</SelectItem>
                <SelectItem value="Plastic Surgeon">Plastic Surgeon</SelectItem>
                <SelectItem value="Laser">Laser</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-2">
          <Label htmlFor="message">Your Message</Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Write your message (optional)"
            rows={5}
          />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <Button type="button" onClick={handleEmail} className="w-full bg-amber-600 hover:bg-amber-700">
            Send Email
          </Button>
          <Button type="button" onClick={handleWhatsapp} className="w-full bg-green-600 hover:bg-green-700">
            Send WhatsApp
          </Button>
        </div>
      </form>
    </div>
  )
}
