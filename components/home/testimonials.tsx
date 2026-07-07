"use client"

import { useEffect } from "react"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"

// ==========================================
// PASTE YOUR ELFSIGHT WIDGET ID HERE:
// ==========================================
const ELFSIGHT_WIDGET_ID = "36bbd19a-497d-4010-a9b7-415fadbc7c25"

export default function Testimonials() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()

  useEffect(() => {
    // Only load the script if a valid widget ID has been provided
    if (!ELFSIGHT_WIDGET_ID || ELFSIGHT_WIDGET_ID === "YOUR_WIDGET_ID_HERE") {
      return
    }

    const script = document.createElement("script")
    script.src = "https://elfsightcdn.com/platform.js"
    script.async = true
    script.defer = true
    document.body.appendChild(script)

    return () => {
      try {
        document.body.removeChild(script)
      } catch (e) {
        // Script might have already been cleaned up or moved
      }
    }
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-amber-50/30 overflow-hidden">
      <div className="container mx-auto px-4 text-center">

        {(!ELFSIGHT_WIDGET_ID || ELFSIGHT_WIDGET_ID === "YOUR_WIDGET_ID_HERE") ? (
          <div className="max-w-xl mx-auto p-8 bg-white rounded-2xl border-2 border-dashed border-amber-300 text-center shadow-sm">
            <span className="text-4xl mb-4 block animate-bounce">🔌</span>
            <h3 className="font-bold text-gray-800 text-lg mb-2">Live Google Reviews Widget Ready</h3>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              We have set up the live reviews structure for you. To fetch your Google reviews live every day:
            </p>
            <ol className="text-left text-xs text-gray-600 space-y-2.5 max-w-sm mx-auto mb-6">
              <li className="flex items-start gap-2">
                <span className="bg-amber-100 text-amber-800 font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">1</span>
                <span>Go to <a href="https://elfsight.com/google-reviews-widget/" target="_blank" rel="noopener noreferrer" className="text-amber-600 underline font-semibold hover:text-amber-700">Elfsight Google Reviews</a> and create a free account.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-amber-100 text-amber-800 font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">2</span>
                <span>Select your clinic layout and connect your Google Business listing.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-amber-100 text-amber-800 font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">3</span>
                <span>Click "Publish" and copy your **Widget ID** (the characters after `elfsight-app-` in the code).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="bg-amber-100 text-amber-800 font-bold rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0">4</span>
                <span>Paste the ID in the file [testimonials.tsx](file:///c:/Users/Balu4/Downloads/truglow-hair-clinic/components/home/testimonials.tsx) at line 9.</span>
              </li>
            </ol>
            <p className="text-xs text-gray-400">
              *While configuring, your static Google Reviews display can remain visible by reverting this commit.
            </p>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            {/* Elfsight widget injection point */}
            <div className={`elfsight-app-${ELFSIGHT_WIDGET_ID}`} data-elfsight-app-lazy></div>
          </div>
        )}
      </div>
    </section>
  )
}
