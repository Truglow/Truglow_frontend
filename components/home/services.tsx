import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function Services() {
  const services = {
    skin: [
      {
        title: "Anti Ageing",
        description: "Advanced treatments to reduce signs of aging and restore youthful skin",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Fillers",
        description: "Natural-looking facial enhancement and volume restoration",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "HIFU",
        description: "Non-surgical face lifting and skin tightening treatment",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Tattoo Removal",
        description: "Safe and effective laser tattoo removal treatments",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Pigmentation",
        description: "Treatments for various types of skin pigmentation issues",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Acne Scar Treatment",
        description: "Advanced solutions for reducing and removing acne scars",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Dull Skin Treatment",
        description: "Revitalize and brighten your skin with our specialized treatments",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Stretch Mark",
        description: "Effective treatments to reduce the appearance of stretch marks",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Skin Peels",
        description: "Professional chemical peels for skin rejuvenation",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
    ],
    hair: [
      {
        title: "Hair Transplant",
        description: "Permanent solution for hair loss with natural results",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Hair Regrowth",
        description: "Stimulate natural hair growth with advanced treatments",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Anti Dandruff",
        description: "Effective solutions for dandruff and scalp conditions",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Hair Fall Treatment",
        description: "Comprehensive solutions for hair loss and thinning",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Hair Patch",
        description: "Custom hair patch solutions for natural-looking coverage",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Scalp Micro Pigmentation",
        description: "Non-surgical solution for creating the appearance of fuller hair",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
    ],
    laser: [
      {
        title: "Laser 1",
        description: "Advanced laser treatment for skin rejuvenation",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
      {
        title: "Laser 2",
        description: "Specialized laser treatment for skin concerns",
        image: "/placeholder.svg?height=400&width=600",
        link: "#",
      },
    ],
  }

  return (
    <section className="py-16 bg-gradient-to-b from-amber-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Discover our comprehensive range of advanced skin, hair, and laser treatments designed to enhance your natural beauty.
          </p>
        </div>

        <Tabs defaultValue="skin" className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-white shadow-md rounded-full p-1">
              <TabsTrigger value="skin" className="text-lg px-6 py-2 rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                ✨ Skin
              </TabsTrigger>
              <TabsTrigger value="hair" className="text-lg px-6 py-2 rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                💇 Hair
              </TabsTrigger>
              <TabsTrigger value="laser" className="text-lg px-6 py-2 rounded-full data-[state=active]:bg-amber-600 data-[state=active]:text-white transition-all">
                ⚡ Laser
              </TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="skin" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.skin.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-serif !font-playfair font-semibold !text-base !tracking-wider"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="hair" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.hair.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-serif !font-playfair font-semibold !text-base !tracking-wider"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="laser" className="mt-0">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {services.laser.slice(0, 3).map((service, index) => (
                <div
                  key={index}
                  className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-sm text-gray-600 mb-3 line-clamp-2">{service.description}</p>
                    <Link
                      href={service.link}
                      className="inline-flex items-center text-amber-600 hover:text-amber-700 font-serif !font-playfair font-semibold !text-base !tracking-wider"
                    >
                      Learn more <ArrowRight className="ml-1 h-4 w-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  )
}
