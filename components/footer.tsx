"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import TermsModal from "@/components/terms-modal"
import PrivacyModal from "@/components/privacy-modal"

export default function Footer() {
  const [year, setYear] = useState(2024)
  const [isTermsOpen, setIsTermsOpen] = useState(false)
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false)

  useEffect(() => {
    setYear(new Date().getFullYear())
  }, [])

  return (
    <footer className="bg-amber-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <img src="/app_logo.svg" alt="Tru Glow Logo" className="h-14 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-gray-300 mb-4">
              Tru Glow is a premier dermatology, aesthetics, and plastic surgery clinic offering advanced treatments in hair, skin, laser, and cosmetic procedures with state-of-the-art technology and experienced specialists.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://wa.me/917799127273" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700 transition-all duration-300 transform hover:scale-110">
                <div className="bg-green-100 p-2 rounded-full transition-all duration-300 hover:shadow-lg">
                  {/* WhatsApp */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12.04 2C6.57 2 2.13 6.44 2.13 11.91c0 2.09.61 4.04 1.77 5.72L2 22l4.49-1.83a10 10 0 0 0 5.55 1.64h.01c5.47 0 9.91-4.44 9.91-9.91S17.51 2 12.04 2Zm5.77 14.22c-.24.67-1.19 1.23-1.83 1.39-.49.12-1.13.21-3.28-.68-2.75-1.14-4.52-3.94-4.66-4.13-.13-.18-1.11-1.48-1.11-2.83 0-1.35.69-2 .94-2.28.24-.28.53-.35.7-.35h.5c.16 0 .38-.06.6.45.24.58.82 2 .89 2.14.07.14.12.3.02.48-.09.19-.14.3-.27.47-.13.16-.28.36-.4.49-.13.14-.26.29-.11.57.14.28.62 1.02 1.33 1.66.92.82 1.69 1.08 1.97 1.22.28.14.45.12.63-.07.19-.2.73-.81.93-1.09.2-.28.4-.23.66-.14.27.09 1.71.8 2 .95.3.15.49.22.56.34.07.13.07.75-.17 1.42Z" />
                  </svg>
                </div>
              </Link>
              <Link href="https://www.instagram.com/truglow.hyd?igsh=dG1uZDhvOW05M2M1" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700 transition-all duration-300 transform hover:scale-110">
                <div className="bg-pink-100 p-2 rounded-full transition-all duration-300 hover:shadow-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </div>
              </Link>
              {/* YouTube link removed per request */}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Contact Us
                </Link>
              </li>
              <li>
                <button
                  onClick={() => setIsPrivacyOpen(true)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center w-full text-left group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  onClick={() => setIsTermsOpen(true)}
                  className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center w-full text-left group"
                >
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Terms & Conditions
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {/* Skin Services */}
              <li>
                <Link href="/procedure?tab=skin" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Anti-Ageing Treatments
                </Link>
              </li>
              <li>
                <Link href="/procedure?tab=skin" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Acne & Scar Treatment
                </Link>
              </li>
              <li>
                <Link href="/procedure?tab=skin" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Pigmentation Correction
                </Link>
              </li>
              {/* Hair Services */}
              <li>
                <Link href="/procedure?tab=hair" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Hair Transplant
                </Link>
              </li>
              <li>
                <Link href="/procedure?tab=hair" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Hair Loss
                </Link>
              </li>
              <li>
                <Link href="/procedure?tab=hair" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Hair Patch Integration
                </Link>
              </li>
              {/* Plastic Surgery Services */}
              <li>
                <Link href="/procedure?tab=plastic" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Botox & Fillers
                </Link>
              </li>
              <li>
                <Link href="/procedure?tab=plastic" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Breast Surgery
                </Link>
              </li>
              <li>
                <Link href="/procedure?tab=plastic" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Rhinoplasty (Nose Surgery)
                </Link>
              </li>
              {/* Laser Services */}
              <li>
                <Link href="/procedure?tab=laser" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Full Body Laser Hair Removal
                </Link>
              </li>
              <li>
                <Link href="/procedure?tab=laser" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Face, Underarms & Bikini Laser
                </Link>
              </li>
              <li>
                <Link href="/procedure?tab=laser" className="text-gray-300 hover:text-white transition-colors duration-200 flex items-center group">
                  <ArrowRight className="h-4 w-4 mr-2 transition-transform duration-200 group-hover:translate-x-1" />
                  Laser Scar Reduction
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info with Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex">
                <MapPin className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="text-gray-300">Tru Glow, Alkapur Township, Manikonda, Hyderabad, Telangana 500075</span>
              </li>
              <li className="flex">
                <Phone className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <div className="text-gray-300">
                  <span className="block">+91 7799127273</span>
                  <span className="block">+91 7036127273</span>
                </div>
              </li>
              <li className="flex">
                <Mail className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="text-gray-300">truglowcs@gmail.com</span>
              </li>
              <li className="flex">
                <Clock className="h-6 w-6 text-white mr-3 flex-shrink-0" />
                <span className="text-gray-300">Everyday: 10:00 AM - 8:00 PM</span>
              </li>
            </ul>
            <div className="h-48 bg-gray-800 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.123456789!2d78.370626!3d17.3962244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb954fadc49b9b%3A0xb0e529fb031d12e1!2sTruglow%20Skin%20%26%20Hair%20Clinic!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="bg-amber-900 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex items-center justify-center mb-3">
            <img src="/app_logo.svg" alt="Tru Glow Logo" className="h-10 w-auto filter brightness-0 invert opacity-80" />
          </div>
          <p>© {year} All Rights Reserved.</p>
        </div>
      </div>
      <TermsModal open={isTermsOpen} onOpenChange={setIsTermsOpen} />
      <PrivacyModal open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen} />
    </footer>
  )
}
