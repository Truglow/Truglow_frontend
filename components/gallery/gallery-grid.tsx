"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All Results" },
    { id: "skin", label: "✨ Skin" },
    { id: "hair", label: "💇 Hair" },
    { id: "plastic", label: "🏥 Plastic Surgery" },
    { id: "laser", label: "⚡ Laser" },
  ]

  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      category: "hair",
      before: "/hair_restoration_before_1.jpeg",
      after: "/hair_restoration_after_1.jpeg",
      title: "Hair Restoration",
      description: "Before & After",
    },
    {
      id: 2,
      category: "hair",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Crown Coverage",
      description: "FUE Hair Transplant",
    },
    {
      id: 3,
      category: "skin",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Acne Scar Reduction",
      description: "Microneedling + PRP",
    },
    {
      id: 4,
      category: "laser",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Laser Hair Reduction",
      description: "Underarms & Face",
    },
    {
      id: 5,
      category: "plastic",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Rhinoplasty",
      description: "Profile Refinement",
    },
    {
      id: 6,
      category: "skin",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Pigmentation Correction",
      description: "Laser + Peels",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-md rounded-full p-1 grid grid-cols-2 sm:inline-flex sm:space-x-1 sm:grid-cols-none">
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm md:text-base px-4 py-2 rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </div>

          {categories.map((category) => (
            <TabsContent key={category.id} value={category.id} className="mt-0">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {galleryImages
                  .filter((img) => category.id === "all" || img.category === category.id)
                  .map((image) => (
                    <div key={image.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-md">
                      <div className="grid grid-cols-2">
                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="relative group" onClick={() => setSelectedImage(image.before)}>
                              <img
                                src={image.before || "/placeholder.svg"}
                                alt={`Before ${image.title}`}
                                className="w-full aspect-square object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-medium">Before</span>
                              </div>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <div className="relative">
                              <img src={selectedImage || ""} alt="Enlarged view" className="w-full h-auto" />
                              <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 bg-white rounded-full p-1"
                              >
                                <X className="h-6 w-6" />
                              </button>
                            </div>
                          </DialogContent>
                        </Dialog>

                        <Dialog>
                          <DialogTrigger asChild>
                            <button className="relative group" onClick={() => setSelectedImage(image.after)}>
                              <img
                                src={image.after || "/placeholder.svg"}
                                alt={`After ${image.title}`}
                                className="w-full aspect-square object-cover"
                              />
                              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all flex items-center justify-center">
                                <span className="text-white opacity-0 group-hover:opacity-100 font-medium">After</span>
                              </div>
                            </button>
                          </DialogTrigger>
                          <DialogContent className="max-w-3xl">
                            <div className="relative">
                              <img src={selectedImage || ""} alt="Enlarged view" className="w-full h-auto" />
                              <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-2 right-2 bg-white rounded-full p-1"
                              >
                                <X className="h-6 w-6" />
                              </button>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </div>
                      <div className="p-4">
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
