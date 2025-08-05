"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent } from "@/components/ui/card"

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const stats = [
    {
      number: 10,
      suffix: "+",
      label: "Years Of Experience",
    },
    {
      number: 10000,
      suffix: "+",
      label: "Happy Clients",
    },
    {
      number: 100,
      suffix: "%",
      label: "Safest Non-Invasive Procedures",
    },
  ]

  return (
    <section ref={sectionRef} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="border-none shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="p-8 text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {isVisible ? (
                    <span className="inline-block animate-count">
                      {stat.number}
                      {stat.suffix}
                    </span>
                  ) : (
                    "0"
                  )}
                </div>
                <p className="text-lg text-gray-600">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
} 