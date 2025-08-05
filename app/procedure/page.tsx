import { CheckCircle2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

export default function ProcedurePage() {
  const steps = [
    {
      number: "01",
      title: "Initial Consultation",
      description: "Meet with our experts to discuss your concerns and goals",
      icon: "👋",
    },
    {
      number: "02",
      title: "Treatment Plan",
      description: "Personalized treatment plan tailored to your needs",
      icon: "📋",
    },
    {
      number: "03",
      title: "Procedure",
      description: "Expert execution of your chosen treatment",
      icon: "✨",
    },
    {
      number: "04",
      title: "Aftercare",
      description: "Comprehensive post-treatment care and support",
      icon: "💆",
    },
  ]

  const services = {
    skin: [
      {
        title: "Anti Ageing",
        description: "Advanced treatments to reduce fine lines, wrinkles, and restore youthful skin",
        icon: "✨",
      },
      {
        title: "Fillers",
        description: "Natural-looking volume restoration and facial contouring",
        icon: "💉",
      },
      {
        title: "HIFU",
        description: "Non-surgical facelift using high-intensity focused ultrasound",
        icon: "🎯",
      },
      {
        title: "Tattoo Removal",
        description: "Safe and effective laser tattoo removal treatments",
        icon: "🎨",
      },
      {
        title: "Pigmentation",
        description: "Treatment for uneven skin tone and dark spots",
        icon: "🎭",
      },
      {
        title: "Acne Scar Treatment",
        description: "Advanced solutions for reducing acne scars and improving skin texture",
        icon: "🌟",
      },
      {
        title: "Dull Skin Treatment",
        description: "Revitalizing treatments for brighter, more radiant skin",
        icon: "💫",
      },
      {
        title: "Stretch Mark",
        description: "Specialized treatments to reduce the appearance of stretch marks",
        icon: "📏",
      },
      {
        title: "Skin Peels",
        description: "Chemical peels for skin rejuvenation and texture improvement",
        icon: "🍋",
      },
    ],
    hair: [
      {
        title: "Hair Transplant",
        description: "Advanced FUE and FUT techniques for natural-looking results",
        icon: "🌱",
      },
      {
        title: "Hair Regrowth",
        description: "Comprehensive treatments to stimulate natural hair growth",
        icon: "🌿",
      },
      {
        title: "Anti Dandruff",
        description: "Effective solutions for dandruff and scalp conditions",
        icon: "❄️",
      },
      {
        title: "Hair Fall Treatment",
        description: "Personalized treatments to prevent and reverse hair loss",
        icon: "💪",
      },
      {
        title: "Hair Patch",
        description: "Custom hair patch solutions for immediate results",
        icon: "🎭",
      },
      {
        title: "Scalp Micro Pigmentation",
        description: "Non-surgical solution for hair loss using micro-pigmentation",
        icon: "🎨",
      },
    ],
    laser: [
      {
        title: "Laser Hair Removal",
        description: "Permanent hair reduction using advanced laser technology",
        icon: "⚡",
      },
      {
        title: "Laser Skin Rejuvenation",
        description: "Advanced laser treatments for skin tightening and rejuvenation",
        icon: "✨",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-blue-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Procedure</h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Experience our streamlined process designed for your comfort and satisfaction
          </p>
        </div>
      </div>

      {/* Procedure Steps */}
      <section className="py-20 bg-gradient-to-b from-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 mt-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>

                {/* Check Icon */}
                <div className="mt-6 text-blue-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 text-center">
            <p className="text-xl text-gray-600 italic">
              Each step is carefully designed to ensure your comfort and satisfaction throughout the treatment process
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Our Services</h2>
          <Tabs defaultValue="skin" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="skin" className="text-lg">✨ Skin</TabsTrigger>
              <TabsTrigger value="hair" className="text-lg">💇 Hair</TabsTrigger>
              <TabsTrigger value="laser" className="text-lg">⚡ Laser</TabsTrigger>
            </TabsList>
            
            <TabsContent value="skin">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.skin.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="hair">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.hair.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="laser">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.laser.map((service, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-gray-600">{service.description}</p>
                  </div>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </div>
  )
} 