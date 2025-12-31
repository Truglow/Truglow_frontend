"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"
import Image from "next/image"

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All Results" },
    { id: "facility", label: "🏥 Facility" },
    { id: "treatment", label: "✨ Treatments" },
    { id: "results", label: "💇 Results" },
  ]

  // Actual gallery images from real-photos
  const galleryImages = [
    {
      id: 1,
      category: "results",
      src: "/real-photos/1.webp",
      title: "Hair Transformation",
      description: "FUE Procedure Result",
    },
    {
      id: 2,
      category: "facility",
      src: "/real-photos/2.webp",
      title: "Modern Consultation Room",
      description: "Safe & Private Environment",
    },
    {
      id: 3,
      category: "treatment",
      src: "/real-photos/3.webp",
      title: "Advanced Skin Treatment",
      description: "Medifacial Session",
    },
    {
      id: 4,
      category: "facility",
      src: "/real-photos/4.webp",
      title: "Sterile Procedure Area",
      description: "US-FDA Approved Equipment",
    },
    {
      id: 5,
      category: "results",
      src: "/real-photos/5.webp",
      title: "Skin Rejuvenation",
      description: "After 3 Sessions",
    },
    {
      id: 6,
      category: "treatment",
      src: "/real-photos/6.webp",
      title: "Laser Procedure",
      description: "Precision Care",
    },
    {
      id: 7,
      category: "facility",
      src: "/real-photos/7.webp",
      title: "Tru Glow Entrance",
      description: "Welcome to Excellence",
    },
    {
      id: 8,
      category: "results",
      src: "/real-photos/8.webp",
      title: "Hair Patch Integration",
      description: "Natural Appearance",
    },
    {
      id: 9,
      category: "treatment",
      src: "/real-photos/9.webp",
      title: "Doctor Consultation",
      description: "Expert Analysis",
    },
    {
      id: 10,
      category: "results",
      src: "/real-photos/11.webp",
      title: "Acne Scar Improvement",
      description: "Visible Results",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-md rounded-full p-1 flex overflow-x-auto whitespace-nowrap">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base px-4 py-2 rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages
                  .filter((img) => category.id === "all" || img.category === category.id)
                  .map((image) => (
                    <div key={image.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md group">
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            className="relative w-full aspect-square overflow-hidden"
                            onClick={() => setSelectedImage(image.src)}
                          >
                            <Image
                              src={image.src}
                              alt={image.title}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all flex items-center justify-center">
                              <span className="bg-white/90 text-gray-900 px-4 py-2 rounded-full font-medium opacity-0 group-hover:opacity-100 transition-all transform translate-y-4 group-hover:translate-y-0">
                                View Large
                              </span>
                            </div>
                          </button>
                        </DialogTrigger>
                        <DialogContent className="max-w-4xl p-0 overflow-hidden bg-transparent border-none">
                          <div className="relative w-full aspect-square md:aspect-video">
                            {selectedImage && (
                              <Image
                                src={selectedImage}
                                alt="Enlarged view"
                                fill
                                className="object-contain"
                              />
                            )}
                          </div>
                        </DialogContent>
                      </Dialog>
                      <div className="p-4 bg-white">
                        <h3 className="font-semibold text-gray-900">{image.title}</h3>
                        <p className="text-sm text-gray-600">{image.description}</p>
                      </div>
                    </div>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  )
}
