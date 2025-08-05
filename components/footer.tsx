import Link from "next/link"
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react"
import { useMemo } from "react"

export default function Footer() {
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <div className="mb-6">
              <img src="/app_logo.svg" alt="Tru Glow Hair Clinic Logo" className="h-14 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-gray-300 mb-4">
              TruGlow is a premier hair transplant and restoration clinic offering advanced solutions for hair loss with
              state-of-the-art technology and experienced specialists.
            </p>
            <div className="flex space-x-4 mt-4">
              <Link href="https://facebook.com" className="text-white hover:text-primary transition-colors">
                <div className="bg-gray-800 p-2 rounded-full hover:bg-primary/10">
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
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </div>
              </Link>
              <Link href="https://instagram.com" className="text-white hover:text-primary transition-colors">
                <div className="bg-gray-800 p-2 rounded-full hover:bg-primary/10">
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
              <Link href="https://youtube.com" className="text-white hover:text-primary transition-colors">
                <div className="bg-gray-800 p-2 rounded-full hover:bg-primary/10">
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
                    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                  </svg>
                </div>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Terms & Conditions
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-xl font-bold mb-4">Our Services</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Hair Transplant
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  FUE Hair Transplant
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  DHI Hair Transplant
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  PRP Treatment
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Beard Transplant
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-300 hover:text-primary transition-colors flex items-center">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  Eyebrow Transplant
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info with Map */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-4 mb-6">
              <li className="flex">
                <MapPin className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">Plot.no 28 , Road no.9, Neknampur Rd, Alkapur Township, Hyderabad, Telangana 500075</span>
              </li>
              <li className="flex">
                <Phone className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">+91 9493385217</span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">truglowcs@gmail.com</span>
              </li>
              <li className="flex">
                <Clock className="h-5 w-5 text-primary mr-3 flex-shrink-0" />
                <span className="text-gray-300">Mon - Sat: 9:00 AM - 7:00 PM</span>
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
      <div className="bg-gray-950 py-4">
        <div className="container mx-auto px-4 text-center text-gray-400">
          <div className="flex items-center justify-center mb-3">
            <img src="/app_logo.svg" alt="Tru Glow Hair Clinic Logo" className="h-10 w-auto filter brightness-0 invert opacity-80" />
          </div>
          <p>© {year} All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  )
}
