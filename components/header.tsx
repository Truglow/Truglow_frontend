"use client"

import Link from "next/link"
import Image from "next/image"
import { Phone, Mail, Facebook, Instagram, Youtube, Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { getTodaysService } from "@/lib/rotating-nav"


export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  // Rotating service functionality - disabled for now, will be used in future
  // const [rotatingService, setRotatingService] = useState(() => getTodaysService())
  // useEffect(() => {
  //   setRotatingService(getTodaysService())
  // }, [])

  const isActive = (path: string) => {
    return pathname === path
  }



  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/procedure", label: "Our Services" },
    { href: "/contact", label: "Contact Us" },
    { href: "/about", label: "About" },
    { href: "/blog", label: "Blogs" },
    { href: "/faq", label: "FAQs" },
  ]



  return (
    <header className="w-full bg-amber-50 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        {/* Top bar with contact info and social media */}
        <div className="hidden md:flex justify-between items-center py-2 text-sm text-gray-600 border-b">
          <div className="flex items-center space-x-4">
            <a href="tel:+917799427273" className="flex items-center hover:text-primary">
              <Phone className="h-4 w-4 mr-1" />
              +91 7799427273
            </a>
            <a href="mailto:truglowcs@gmail.com" className="flex items-center hover:text-primary">
              <Mail className="h-4 w-4 mr-1" />
              truglowcs@gmail.com
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <a href="https://wa.me/917799427273" target="_blank" rel="noopener noreferrer" className="text-green-600 hover:text-green-700">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12.04 2C6.57 2 2.13 6.44 2.13 11.91c0 2.09.61 4.04 1.77 5.72L2 22l4.49-1.83a10 10 0 0 0 5.55 1.64h.01c5.47 0 9.91-4.44 9.91-9.91S17.51 2 12.04 2Zm5.77 14.22c-.24.67-1.19 1.23-1.83 1.39-.49.12-1.13.21-3.28-.68-2.75-1.14-4.52-3.94-4.66-4.13-.13-.18-1.11-1.48-1.11-2.83 0-1.35.69-2 .94-2.28.24-.28.53-.35.7-.35h.5c.16 0 .38-.06.6.45.24.58.82 2 .89 2.14.07.14.12.3.02.48-.09.19-.14.3-.27.47-.13.16-.28.36-.4.49-.13.14-.26.29-.11.57.14.28.62 1.02 1.33 1.66.92.82 1.69 1.08 1.97 1.22.28.14.45.12.63-.07.19-.2.73-.81.93-1.09.2-.28.4-.23.66-.14.27.09 1.71.8 2 .95.3.15.49.22.56.34.07.13.07.75-.17 1.42Z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/truglow.hyd?igsh=dG1uZDhvOW05M2M1" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:text-pink-700">
              <Instagram className="h-7 w-7" />
            </a>
            {/* YouTube removed; Facebook removed */}
          </div>
        </div>

        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center group">
            <div className="relative h-16 w-48 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/Asset_logo_2.svg"
                alt="Tru Glow Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className={cn(
                "font-medium transition-all duration-300 relative hover:scale-105 transform",
                isActive("/") ? "text-primary" : "text-gray-800 hover:text-primary"
              )}
            >
              Home
              {isActive("/") && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transition-all duration-300" />}
            </Link>
            <Link
              href="/procedure"
              className={cn(
                "font-medium transition-all duration-300 relative hover:scale-105 transform",
                isActive("/procedure") ? "text-primary" : "text-gray-800 hover:text-primary"
              )}
            >
              Our Services
              {isActive("/procedure") && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transition-all duration-300" />}
            </Link>
            <Link
              href="/contact"
              className={cn(
                "font-medium transition-all duration-300 relative hover:scale-105 transform",
                isActive("/contact") ? "text-primary" : "text-gray-800 hover:text-primary"
              )}
            >
              Contact Us
              {isActive("/contact") && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transition-all duration-300" />}
            </Link>
            <Link
              href="/about"
              className={cn(
                "font-medium transition-all duration-300 relative hover:scale-105 transform",
                isActive("/about") ? "text-primary" : "text-gray-800 hover:text-primary"
              )}
            >
              About
              {isActive("/about") && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transition-all duration-300" />}
            </Link>
            <Link
              href="/blog"
              className={cn(
                "font-medium transition-all duration-300 relative hover:scale-105 transform",
                isActive("/blog") ? "text-primary" : "text-gray-800 hover:text-primary"
              )}
            >
              Blogs
              {isActive("/blog") && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transition-all duration-300" />}
            </Link>
            <Link
              href="/faq"
              className={cn(
                "font-medium transition-all duration-300 relative hover:scale-105 transform",
                isActive("/faq") ? "text-primary" : "text-gray-800 hover:text-primary"
              )}
            >
              FAQs
              {isActive("/faq") && <span className="absolute -bottom-2 left-0 w-full h-0.5 bg-primary transition-all duration-300" />}
            </Link>

            <Button
              className="bg-primary hover:bg-primary/90 text-white transition-all duration-300 hover:scale-105 transform hover:shadow-lg"
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
              <Link
                href="/"
                className={cn("font-medium transition-colors", isActive("/") ? "text-primary" : "text-gray-800 hover:text-primary")}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/procedure"
                className={cn("font-medium transition-colors", isActive("/procedure") ? "text-primary" : "text-gray-800 hover:text-primary")}
                onClick={() => setIsMenuOpen(false)}
              >
                Our Services
              </Link>
              <Link
                href="/contact"
                className={cn("font-medium transition-colors", isActive("/contact") ? "text-primary" : "text-gray-800 hover:text-primary")}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact Us
              </Link>
              <Link
                href="/about"
                className={cn("font-medium transition-colors", isActive("/about") ? "text-primary" : "text-gray-800 hover:text-primary")}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className={cn("font-medium transition-colors", isActive("/blog") ? "text-primary" : "text-gray-800 hover:text-primary")}
                onClick={() => setIsMenuOpen(false)}
              >
                Blogs
              </Link>
              <Link
                href="/faq"
                className={cn("font-medium transition-colors", isActive("/faq") ? "text-primary" : "text-gray-800 hover:text-primary")}
                onClick={() => setIsMenuOpen(false)}
              >
                FAQs
              </Link>
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
