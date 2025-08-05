"use client"

import { useState } from "react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { X } from "lucide-react"

export default function GalleryGrid() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  const categories = [
    { id: "all", label: "All Results" },
    { id: "hair-transplant", label: "Hair Transplant" },
    { id: "beard", label: "Beard Transplant" },
    { id: "eyebrow", label: "Eyebrow Transplant" },
    { id: "prp", label: "PRP Treatment" },
  ]

  // Sample gallery images
  const galleryImages = [
    {
      id: 1,
      category: "hair-transplant",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Male Pattern Baldness Treatment",
      description: "FUE Hair Transplant, 3500 grafts",
    },
    {
      id: 2,
      category: "hair-transplant",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Hairline Restoration",
      description: "DHI Hair Transplant, 2800 grafts",
    },
    {
      id: 3,
      category: "beard",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Beard Density Enhancement",
      description: "Beard Transplant, 1500 grafts",
    },
    {
      id: 4,
      category: "eyebrow",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Eyebrow Restoration",
      description: "Eyebrow Transplant, 400 grafts",
    },
    {
      id: 5,
      category: "prp",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Hair Thinning Treatment",
      description: "PRP Therapy, 4 sessions",
    },
    {
      id: 6,
      category: "hair-transplant",
      before: "/placeholder.svg?height=400&width=300",
      after: "/placeholder.svg?height=400&width=300",
      title: "Crown Area Restoration",
      description: "FUE Hair Transplant, 2200 grafts",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <Tabs defaultValue="all" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList>
              {categories.map((category) => (
                <TabsTrigger key={category.id} value={category.id}>
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
