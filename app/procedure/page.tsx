import { CheckCircle2 } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type PageProps = {
  searchParams?: {
    tab?: string
  }
}

export default function ProcedurePage({ searchParams }: PageProps) {
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
        title: "Anti-Ageing Treatments",
        description: "Advanced treatments to reduce fine lines, wrinkles, and restore youthful skin",
        icon: "✨",
      },
      {
        title: "Acne & Scar Treatment",
        description: "Comprehensive solutions for acne and scar reduction",
        icon: "🌟",
      },
      {
        title: "Pigmentation Correction",
        description: "Treatment for uneven skin tone and dark spots",
        icon: "🎭",
      },
      {
        title: "Skin Rejuvenation",
        description: "Revitalizing treatments for brighter, more radiant skin",
        icon: "💫",
      },
      {
        title: "Laser Scar Reduction",
        description: "Advanced laser treatments for scar reduction",
        icon: "⚡",
      },
      {
        title: "Skin Lifting & Tightening",
        description: "Non-surgical skin tightening and lifting treatments",
        icon: "🎯",
      },
      {
        title: "Hyperpigmentation Solutions",
        description: "Specialized treatments for hyperpigmentation issues",
        icon: "🌈",
      },
      {
        title: "Dull Skin Revitalisation",
        description: "Treatments to restore glow and vitality to dull skin",
        icon: "💎",
      },
      {
        title: "Laser Tanning Removal",
        description: "Effective laser treatments to remove tan and even out skin tone",
        icon: "☀️",
      },
      {
        title: "Hydrafacial",
        description: "Deep cleansing and hydrating facial treatment",
        icon: "💧",
      },
      {
        title: "Vampire Facial",
        description: "PRP-based facial for skin rejuvenation",
        icon: "🧛",
      },
      {
        title: "Korean Facial",
        description: "Multi-step Korean skincare facial treatment",
        icon: "🇰🇷",
      },
      {
        title: "Medifacial",
        description: "Medical-grade facial with active ingredients",
        icon: "💉",
      },
    ],
    hair: [
      {
        title: "Hair Regrowth & Transplantation",
        description: "Comprehensive hair regrowth and transplant solutions",
        icon: "🌱",
      },
      {
        title: "PRP Therapy for Hair Growth",
        description: "Platelet-rich plasma therapy to stimulate natural hair growth",
        icon: "💉",
      },
      {
        title: "Exosome Therapy",
        description: "Advanced exosome therapy for hair restoration",
        icon: "🔬",
      },
      {
        title: "Anti-Dandruff Treatments",
        description: "Effective solutions for dandruff and scalp conditions",
        icon: "❄️",
      },
      {
        title: "Alopecia & Psoriasis Care",
        description: "Specialized care for alopecia and psoriasis conditions",
        icon: "🏥",
      },
      {
        title: "Hair Patch Integration",
        description: "Custom hair patch solutions for natural-looking coverage",
        icon: "🎭",
      },
      {
        title: "Advanced Laser Hair Reduction",
        description: "Permanent hair reduction using advanced laser technology",
        icon: "⚡",
      },
      {
        title: "Hair Loss Treatment",
        description: "Comprehensive solutions for hair loss and thinning",
        icon: "💪",
      },
      {
        title: "Low Level Laser Therapy (LLLT)",
        description: "Non-invasive laser therapy for hair growth stimulation",
        icon: "🔴",
      },
    ],
    laser: [
      {
        title: "Full Body Laser Hair Removal",
        description: "Complete body laser hair removal treatment",
        icon: "⚡",
      },
      {
        title: "Face, Underarms & Bikini Laser",
        description: "Targeted laser hair removal for face, underarms, and bikini area",
        icon: "✨",
      },
    ],
    plastic: [
      {
        title: "Botox & Fillers",
        description: "Natural-looking facial enhancement and volume restoration",
        icon: "💉",
      },
      {
        title: "Hair Transplant (FUE / DHI / Sapphire)",
        description: "Advanced hair transplant techniques for natural-looking results",
        icon: "🌱",
      },
      {
        title: "Eyebrow & Beard Transplant",
        description: "Specialized transplant procedures for eyebrows and beard",
        icon: "👨",
      },
      {
        title: "Rhinoplasty (Nose Surgery)",
        description: "Cosmetic and functional nose reshaping surgery",
        icon: "👃",
      },
      {
        title: "Lip Augmentation",
        description: "Natural-looking lip enhancement and volume restoration",
        icon: "💋",
      },
      {
        title: "Brazilian Butt Lift",
        description: "Body contouring procedure for enhanced curves",
        icon: "🍑",
      },
      {
        title: "Cosmetic Gynecology",
        description: "Specialized cosmetic procedures in gynecology",
        icon: "🌸",
      },
      {
        title: "Scar Revision & Management",
        description: "Advanced techniques for scar reduction and management",
        icon: "🔧",
      },
      {
        title: "Breast Surgery",
        description: "Comprehensive breast enhancement and reconstruction procedures",
        icon: "💎",
      },
      {
        title: "Gynecomastia Correction",
        description: "Male breast reduction surgery",
        icon: "👔",
      },
    ],
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-amber-900 text-white">
        <div className="absolute inset-0 bg-[url('/placeholder.svg?height=600&width=1200')] bg-cover bg-center opacity-20"></div>
        <div className="container mx-auto px-4 py-20 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Procedure</h1>
          <p className="text-xl text-amber-50 max-w-3xl mx-auto">
            Experience our streamlined process designed for your comfort and satisfaction
          </p>
        </div>
      </div>

      {/* Procedure Steps */}
      <section className="py-20 bg-gradient-to-b from-white to-amber-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                {/* Number Badge */}
                <div className="absolute -top-4 -left-4 w-14 h-14 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-2xl">
                  {step.number}
                </div>

                {/* Icon */}
                <div className="text-5xl mb-6 mt-4">{step.icon}</div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-gray-900 mb-3">{step.title}</h3>
                <p className="text-gray-600 text-lg">{step.description}</p>

                {/* Check Icon */}
                <div className="mt-6 text-amber-600">
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
          <Tabs defaultValue={(["skin","hair","plastic","laser"] as const).includes((searchParams?.tab as any)) ? (searchParams?.tab as any) : "skin"} className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="skin" className="text-lg">✨ Skin</TabsTrigger>
              <TabsTrigger value="hair" className="text-lg">💇 Hair</TabsTrigger>
              <TabsTrigger value="plastic" className="text-lg">🏥 Plastic Surgery</TabsTrigger>
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

            <TabsContent value="plastic">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.plastic.map((service, index) => (
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