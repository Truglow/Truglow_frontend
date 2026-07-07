"use client"

import { useState } from "react"
import Link from "next/link"
import { Search, Calendar, Clock, ArrowRight } from "lucide-react"
import { blogPosts } from "@/lib/blogs-data"
import { Button } from "@/components/ui/button"

export default function BlogLandingPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState<"all" | "skin" | "hair" | "laser" | "plastic" | "drips">("all")

  // Filter posts based on active category and search query
  const filteredPosts = blogPosts.filter((post) => {
    const matchesCategory = activeCategory === "all" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const categories = [
    { value: "all", label: "All Articles" },
    { value: "hair", label: "Hair Restoration" },
    { value: "skin", label: "Skin Care" },
    { value: "plastic", label: "Plastic Surgery" },
    { value: "laser", label: "Laser Treatments" },
    { value: "drips", label: "IV Drips" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-gray-50/50">
      {/* Premium Hero Header */}
      <div className="relative bg-amber-900 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/90 via-amber-900/80 to-amber-950/90"></div>

        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 tracking-tight drop-shadow-md">
            The Tru Glow Journal
          </h1>
          <p className="text-lg md:text-xl text-amber-100 max-w-2xl mx-auto mb-8 font-light drop-shadow-sm">
            Expert insights, medical guides, and advanced skincare routines curated by our leading dermatologists and surgeons.
          </p>

          {/* Search bar inside hero */}
          <div className="max-w-md mx-auto relative mt-8">
            <div className="relative flex items-center bg-white rounded-full overflow-hidden shadow-xl border-2 border-amber-500/20 group focus-within:border-amber-500 transition-all duration-300">
              <Search className="h-5 w-5 text-gray-400 ml-4 group-focus-within:text-amber-600 transition-colors" />
              <input
                type="text"
                placeholder="Search articles by topic..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3.5 text-gray-900 placeholder-gray-400 focus:outline-none text-sm bg-transparent"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="container mx-auto px-4 py-12 flex-1">
        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value as any)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 border ${
                activeCategory === cat.value
                  ? "bg-amber-600 border-amber-600 text-white shadow-lg shadow-amber-600/20"
                  : "bg-white border-gray-200 text-gray-600 hover:border-amber-500 hover:text-amber-700 shadow-sm"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Blog Post Cards Grid */}
        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 flex flex-col group transform hover:-translate-y-2 border border-gray-100"
              >
                {/* Emoji / Accent Banner */}
                <div className="h-44 w-full bg-gradient-to-br from-amber-50 to-orange-50/60 border-b border-gray-100 flex items-center justify-center text-5xl relative">
                  <span>{post.emoji}</span>
                  <span className="absolute top-4 left-4 bg-amber-900 text-amber-100 text-[10px] font-bold uppercase tracking-wider px-3.5 py-1.5 rounded shadow-sm z-10">
                    {post.categoryLabel}
                  </span>
                </div>

                {/* Card Content */}
                <div className="p-6 flex-1 flex flex-col">
                  {/* Meta info */}
                  <div className="flex items-center gap-4 text-xs text-gray-500 mb-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-amber-700 transition-colors duration-300 line-clamp-2">
                    <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  {/* Excerpt */}
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                    {post.excerpt}
                  </p>

                  {/* Divider */}
                  <div className="border-t border-gray-100 pt-4 mt-auto flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-amber-100 text-amber-800 font-bold flex items-center justify-center text-xs border border-amber-200">
                        {post.author.charAt(0)}
                      </div>
                      <span className="text-xs font-semibold text-gray-800">
                        {post.author}
                      </span>
                    </div>

                    <Link
                      href={`/blog/${post.slug}`}
                      className="text-amber-600 hover:text-amber-700 text-sm font-bold flex items-center gap-1 transition-all group-hover:translate-x-1"
                    >
                      Read More <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          // Empty State
          <div className="text-center py-20 max-w-md mx-auto bg-white rounded-2xl p-8 border shadow-sm">
            <div className="w-16 h-16 bg-amber-50 rounded-full flex items-center justify-center mx-auto mb-6 text-amber-600 text-3xl">
              🔍
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">No Articles Found</h3>
            <p className="text-gray-600 text-sm mb-6">
              We couldn't find any articles matching "{searchQuery}". Try searching for something else or clearing the search.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setActiveCategory("all")
              }}
              className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-6"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  )
}
