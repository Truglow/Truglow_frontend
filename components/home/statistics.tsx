"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { useScrollReveal } from "@/hooks/use-scroll-reveal"
import { AnimatedItem } from "@/components/animated-item"

export default function Statistics() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollReveal()
  const { ref: titleRef, isVisible: titleVisible } = useScrollReveal()

  return (
    <section ref={sectionRef} className="py-16 bg-amber-50">
      <div className="container mx-auto px-4">
        <div ref={titleRef} className={`text-center mb-12 transition-all duration-700 ${titleVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Success Statistics</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Track our performance and patient satisfaction through our comprehensive statistics.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Success Rate Graph */}
          <AnimatedItem delay={0} direction="left">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Hair Transplant Success Rate</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-[280px]">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">FUE Transplant</span>
                          <span className="text-sm font-medium text-gray-700">95%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "95%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">DHI Transplant</span>
                          <span className="text-sm font-medium text-gray-700">92%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "92%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">PRP Treatment</span>
                          <span className="text-sm font-medium text-gray-700">88%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "88%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            </Card>
          </AnimatedItem>

          {/* Patient Satisfaction Graph */}
          <AnimatedItem delay={200} direction="right">
            <Card className="border-none shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-2 transform">
            <CardHeader>
              <CardTitle className="text-xl text-primary">Patient Satisfaction</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-[300px] relative">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-full max-w-[280px]">
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Natural Results</span>
                          <span className="text-sm font-medium text-gray-700">98%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "98%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Doctor Expertise</span>
                          <span className="text-sm font-medium text-gray-700">97%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "97%" }}></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-sm font-medium text-gray-700">Overall Experience</span>
                          <span className="text-sm font-medium text-gray-700">96%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2.5">
                          <div className="bg-primary h-2.5 rounded-full" style={{ width: "96%" }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
            </Card>
          </AnimatedItem>
        </div>
      </div>
    </section>
  )
} 