import Link from "next/link"
import { notFound } from "next/navigation"
import { Calendar, Clock, ChevronLeft, User, Phone, CheckCircle } from "lucide-react"
import { blogPosts } from "@/lib/blogs-data"
import { Button } from "@/components/ui/button"
import type { Metadata } from "next"

interface PageProps {
  params: Promise<{ slug: string }>
}

// Generate static paths for Next.js builds
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }))
}

// Generate dynamic metadata for SEO
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    return {
      title: "Article Not Found | Tru Glow Clinic",
    }
  }

  return {
    title: `${post.title} | Tru Glow Clinic Hyderabad`,
    description: post.excerpt,
    keywords: `${post.categoryLabel}, Tru Glow Hyderabad, dermatologist, cosmetic clinic, hair transplant, skin treatment, ${post.author}`,
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="min-h-screen bg-gray-50/50 pb-20">
      {/* Blog Article Hero */}
      <div className="relative bg-amber-900 text-white overflow-hidden py-16 md:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-amber-950/90 via-amber-900/85 to-amber-950/90"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <Link
              href="/blog"
              className="inline-flex items-center gap-1 text-sm font-semibold text-amber-200 hover:text-white transition-colors mb-6 group"
            >
              <ChevronLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to Articles
            </Link>

            {/* Category label */}
            <span className="inline-block bg-amber-500/90 text-white text-xs font-bold uppercase tracking-wider px-3.5 py-1.5 rounded-full mb-4">
              {post.categoryLabel}
            </span>

            {/* Title */}
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-md">
              {post.title}
            </h1>

            {/* Meta row */}
            <div className="flex flex-wrap items-center gap-6 text-sm text-amber-100">
              <div className="flex items-center gap-2">
                <div className="w-9 h-9 rounded-full bg-amber-800 border-2 border-amber-600 flex items-center justify-center font-bold text-sm">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <span className="font-semibold text-white block">{post.author}</span>
                  <span className="text-xs text-amber-200">{post.authorRole}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-amber-200 border-l border-amber-800 pl-6">
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  {post.date}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {post.readTime}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Article Content Layout */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
          {/* Main Body Column */}
          <div className="lg:col-span-8 bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
            {/* Render block items dynamically */}
            <div className="prose prose-amber max-w-none space-y-6 text-gray-700 leading-relaxed">
              {post.content.map((block, idx) => {
                switch (block.type) {
                  case "paragraph":
                    return <p key={idx} className="text-base md:text-lg" dangerouslySetInnerHTML={{ __html: block.text }} />

                  case "heading":
                    return (
                      <h2 key={idx} className="text-2xl md:text-3xl font-bold text-gray-900 mt-10 mb-4 border-b border-gray-100 pb-3" dangerouslySetInnerHTML={{ __html: block.text }} />
                    )

                  case "list":
                    return (
                      <ul key={idx} className="space-y-3 pl-2 my-6">
                        {block.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex gap-3 items-start">
                            <CheckCircle className="h-5 w-5 text-amber-600 flex-shrink-0 mt-0.5" />
                            <span className="text-sm md:text-base" dangerouslySetInnerHTML={{ __html: item }} />
                          </li>
                        ))}
                      </ul>
                    )

                  case "quote":
                    return (
                      <div key={idx} className="relative my-8 p-6 bg-amber-50/50 rounded-r-xl border-l-4 border-amber-600 italic">
                        <p className="text-gray-800 text-base md:text-lg leading-relaxed" dangerouslySetInnerHTML={{ __html: `"${block.text}"` }} />
                      </div>
                    )

                  default:
                    return null
                }
              })}
            </div>
          </div>

          {/* Sidebar Column */}
          <div className="lg:col-span-4 space-y-8">
            {/* Quick Action Booking Card */}
            <div className="bg-gradient-to-br from-amber-900 to-amber-950 text-white rounded-2xl p-6 shadow-lg border border-amber-800/40 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-800/20 rounded-full -mr-16 -mt-16 pointer-events-none"></div>

              <h3 className="text-xl font-bold mb-4 relative z-10 flex items-center gap-2">
                <span>📅</span> Book a Consultation
              </h3>
              <p className="text-sm text-amber-200 mb-6 leading-relaxed">
                Ready to take the next step? Connect with our expert medical team for a personalized treatment plan in skin, hair, or laser care.
              </p>

              <div className="space-y-3">
                <Button
                  className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-5 text-sm rounded-lg"
                  asChild
                >
                  <Link href="/appointment">Book Appointment Online</Link>
                </Button>

                <Button
                  variant="outline"
                  className="w-full border-amber-700 hover:bg-amber-900/40 text-amber-200 hover:text-white font-semibold py-5 text-sm rounded-lg"
                  asChild
                >
                  <a href="tel:+917799427273" className="flex items-center justify-center gap-1">
                    <Phone className="h-4 w-4" /> Call: +91 7799427273
                  </a>
                </Button>
              </div>
            </div>

            {/* Author Card Info */}
            <div className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <h4 className="text-base font-bold text-gray-900 mb-4 border-b border-gray-100 pb-2">Medical Reviewer</h4>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 bg-amber-50 rounded-full flex items-center justify-center text-amber-600 border border-amber-200 flex-shrink-0 text-lg font-bold">
                  {post.author.charAt(0)}
                </div>
                <div>
                  <h5 className="font-bold text-gray-900 text-sm">{post.author}</h5>
                  <p className="text-xs text-gray-500 mb-2">{post.authorRole}</p>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    This article has been medically reviewed for accurate details of clinical procedures, recovery expectations, and safety guidelines.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
