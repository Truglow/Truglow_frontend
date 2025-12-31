import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { serviceCategories } from "@/lib/services-data"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Best Hair Transplant & Restoration | Tru Glow Clinic Hyderabad",
    description: "Expert hair restoration at Tru Glow Clinic. FUE, DHI, and Sapphire hair transplants, hair loss treatments, and PRP therapy in Hyderabad.",
}

export default function HairPage() {
    const hairServices = serviceCategories.hair

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-amber-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/hair-hero.webp"
                        alt="Hair Treatments"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">💇 Hair Treatments</h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Advanced hair restoration and treatment solutions
                        </p>
                        <p className="text-lg opacity-90">
                            Expert care for hair loss, transplants, and comprehensive hair health
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {hairServices.map((service, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
                                <CardHeader>
                                    <div className="mb-4 relative w-16 h-16">
                                        <Image
                                            src={service.icon}
                                            alt={service.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                                    <p className="text-gray-600 mt-2">{service.description}</p>
                                </CardHeader>
                                <CardContent className="flex flex-col h-full">
                                    <div className="space-y-4 flex-grow">
                                        {service.details.slice(0, 2).map((detail, idx) => (
                                            <p key={idx} className="text-sm text-gray-700">
                                                • {detail}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="mt-8 space-y-3">
                                        <Link href="/procedure?tab=hair">
                                            <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary/5 transition-colors">
                                                Learn More
                                            </Button>
                                        </Link>
                                        <Link href={`/appointment?category=hair&service=${encodeURIComponent(service.title)}`}>
                                            <Button className="w-full bg-primary hover:bg-primary/90 text-white shadow-md hover:shadow-lg transition-all">
                                                Schedule Now
                                            </Button>
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 italic">Ready to Restore Your Hair?</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        Book your consultation today and discover the best hair restoration solution for you
                    </p>
                    <Link href="/appointment">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95">
                            Book Your Consultation
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
