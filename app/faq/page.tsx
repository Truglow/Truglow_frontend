"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search, ChevronDown, ChevronUp, MessageSquare, Phone, MapPin, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"

import { faqItems, type FAQItem } from "@/lib/faq-data"

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState<"all" | "general" | "skin" | "hair" | "laser" | "transplant" | "iv">("all")
  const [searchQuery, setSearchQuery] = useState("")
  const [openIndex, setOpenIndex] = useState<number | null>(0) // Keep the first FAQ open by default

  // Filter FAQs based on active category and search input
  const filteredFAQs = faqItems.filter((item) => {
    const matchesCategory = activeCategory === "all" || item.category === activeCategory
    const matchesSearch =
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const categories = [
    { value: "all", label: "All FAQ's" },
    { value: "hair", label: "Hair Fall & Hair Growth" },
    { value: "transplant", label: "Hair Transplant" },
    { value: "skin", label: "Skin Care & Dermatology" },
    { value: "iv", label: "IV Therapy" },
    { value: "laser", label: "Laser Hair Removal" },
    { value: "general", label: "General" },
  ]

  // Format the answer to render markdown links or bullet points nicely
  const formatAnswer = (text: string) => {
    return text.split("\n\n").map((paragraph, pIdx) => {
      // Check for lists
      if (paragraph.startsWith("• ")) {
        return (
          <ul key={pIdx} className="space-y-2.5 my-3 pl-2">
            {paragraph.split("\n").map((line, lIdx) => (
              <li key={lIdx} className="flex gap-2.5 items-start text-sm md:text-base text-gray-600 leading-relaxed">
                <span className="text-amber-500 mt-1">•</span>
                <span>
                  {parseInlineLinks(line.substring(2))}
                </span>
              </li>
            ))}
          </ul>
        )
      }
      return (
        <p key={pIdx} className="text-sm md:text-base text-gray-600 leading-relaxed mb-3">
          {parseInlineLinks(paragraph)}
        </p>
      )
    })
  }

  // Parse custom links formatted like [Anchor Text](/url)
  const parseInlineLinks = (text: string) => {
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g
    const parts = []
    let lastIndex = 0
    let match

    while ((match = linkRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        parts.push(text.substring(lastIndex, match.index))
      }
      const label = match[1]
      const url = match[2]
      const isExternal = url.startsWith("http")

      parts.push(
        <Link
          key={match.index}
          href={url}
          target={isExternal ? "_blank" : undefined}
          rel={isExternal ? "noopener noreferrer" : undefined}
          className="text-amber-600 hover:text-amber-700 font-semibold underline underline-offset-2 inline-flex items-center gap-0.5"
        >
          {label}
          {isExternal && <ExternalLink className="h-3 w-3 inline" />}
        </Link>
      )
      lastIndex = linkRegex.lastIndex
    }

    if (lastIndex < text.length) {
      parts.push(text.substring(lastIndex))
    }

    return parts.length > 0 ? parts : text
  }

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqItems.map((item) => ({
              "@type": "Question",
              "name": item.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer.replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1"),
              },
            })),
          }),
        }}
      />
      {/* FAQ Hero Header */}
      <div className="relative bg-amber-900 text-white overflow-hidden py-16 md:py-24">
        {/* Background Image Overlay */}
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/procedure-hero-bg.webp"
            alt="FAQ Banner Bg"
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/75 via-amber-900/60 to-amber-950/75"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto mb-8 font-light drop-shadow-sm">
            Find quick answers to common questions about clinic timings, locations, treatment safety, and procedural recovery.
          </p>

          {/* Search bar inside hero */}
          <div className="max-w-md mx-auto relative mt-8">
            <div className="relative flex items-center bg-white rounded-full overflow-hidden shadow-xl border-2 border-amber-500/20 group focus-within:border-amber-500 transition-all duration-300">
              <Search className="h-5 w-5 text-gray-400 ml-4 group-focus-within:text-amber-600 transition-colors" />
              <input
                type="text"
                placeholder="Search queries (e.g. transplant, pricing)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none text-sm bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main FAQ content area */}
      <div className="container mx-auto px-4 py-12 flex-1">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Filters Column */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100 sticky top-28">
              <h3 className="font-bold text-gray-900 text-lg mb-4 pb-2 border-b border-gray-100">
                FAQ Categories
              </h3>
              <div className="flex flex-col gap-2">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => {
                      setActiveCategory(cat.value as any)
                      setOpenIndex(null) // Reset open index when switching categories
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-300 flex items-center justify-between border ${
                      activeCategory === cat.value
                        ? "bg-amber-600 border-amber-600 text-white shadow-md shadow-amber-600/10"
                        : "bg-transparent border-transparent text-gray-600 hover:bg-amber-50 hover:text-amber-700"
                    }`}
                  >
                    <span>{cat.label}</span>
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === cat.value ? "bg-white/20 text-white" : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      {cat.value === "all"
                        ? faqItems.length
                        : faqItems.filter((item) => item.category === cat.value).length}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* FAQ Accordions List Column */}
          <div className="lg:col-span-8 space-y-4">
            {filteredFAQs.length > 0 ? (
              <div className="space-y-4">
                {filteredFAQs.map((faq, idx) => {
                  const isOpen = openIndex === idx
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden transition-all duration-300"
                    >
                      <button
                        onClick={() => toggleAccordion(idx)}
                        className="w-full flex items-center justify-between p-6 text-left focus:outline-none group"
                      >
                        <h4 className="text-base md:text-lg font-bold text-gray-900 group-hover:text-amber-700 transition-colors pr-6">
                          {faq.question}
                        </h4>
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center transition-transform group-hover:bg-amber-100">
                          {isOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                        </span>
                      </button>

                      {/* Expandable Panel */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isOpen ? "max-h-[500px] opacity-100 border-t border-gray-100" : "max-h-0 opacity-0"
                        }`}
                      >
                        <div className="p-6 bg-gray-50/50">
                          {formatAnswer(faq.answer)}
                        </div>
                      </div>
                    </div>
                  )
                })}
              </div>
            ) : (
              // Empty State
              <div className="text-center py-16 bg-white rounded-2xl p-8 border shadow-sm max-w-md mx-auto">
                <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600 text-3xl">
                  ❓
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">No Matching FAQs</h3>
                <p className="text-gray-600 text-sm mb-6">
                  We couldn't find any FAQs matching your query "{searchQuery}". Please browse the categories on the left or try another search term.
                </p>
                <Button
                  onClick={() => {
                    setSearchQuery("")
                    setActiveCategory("all")
                  }}
                  className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
                >
                  Reset Filters
                </Button>
              </div>
            )}

            {/* Quick Contact CTA Footer */}
            <div className="bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 rounded-2xl p-8 flex flex-col md:flex-row items-center justify-between gap-6 mt-12 shadow-sm">
              <div className="space-y-2 text-center md:text-left">
                <h4 className="text-xl font-bold text-amber-900 flex items-center gap-2 justify-center md:justify-start">
                  <MessageSquare className="h-5 w-5 text-amber-600" /> Still Have Questions?
                </h4>
                <p className="text-sm text-amber-800/80 leading-relaxed max-w-md">
                  Our clinical coordinators are available to answer any questions about treatments, branch availability, or appointment rescheduling.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
                <Button
                  className="bg-amber-600 hover:bg-amber-700 text-white rounded-lg flex items-center gap-2 justify-center py-5 shadow-md shadow-amber-600/10"
                  asChild
                >
                  <a href="https://wa.me/917799427273" target="_blank" rel="noopener noreferrer">
                    Chat on WhatsApp
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="border-amber-200 hover:bg-amber-100/50 text-amber-800 rounded-lg flex items-center gap-2 justify-center py-5"
                  asChild
                >
                  <a href="tel:+917799427273">
                    <Phone className="h-4 w-4" /> Call Helpline
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
