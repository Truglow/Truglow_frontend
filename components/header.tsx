"use client"

import Link from "next/link"
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path: string) => {
    return pathname === path
  }

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/procedure", label: "Procedure" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="w-full bg-amber-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info and social media */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center space-x-4">
            <a href="tel:+919493385217" className="flex items-center hover:text-primary">
              <Phone className="h-4 w-4 mr-1" />
              +91 9493385217
            </a>
            <a href="mailto:truglowcs@gmail.com" className="flex items-center hover:text-primary">
              <Mail className="h-4 w-4 mr-1" />
              truglowcs@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <Facebook className="h-4 w-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <Instagram className="h-4 w-4" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-primary">
              <Youtube className="h-4 w-4" />
            </a>
          </div>
        </div>

        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <img src="/app_logo.svg" alt="Tru Glow Hair Clinic Logo" className="h-16 w-auto object-contain mr-4" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "font-medium transition-colors relative",
                  isActive(link.href)
                    ? "text-primary"
                    : "text-gray-800 hover:text-primary"
                )}
              >
                {link.label}
                {isActive(link.href) && (
                  <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary" />
                )}
              </Link>
            ))}
            <Button
              className="bg-primary hover:bg-primary/90 text-white"
              asChild
            >
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle menu">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "font-medium transition-colors",
                    isActive(link.href)
                      ? "text-primary"
                      : "text-gray-800 hover:text-primary"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <Button
                className="bg-primary hover:bg-primary/90 text-white w-full"
                asChild
              >
                <Link href="/appointment">Book Appointment</Link>
              </Button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
