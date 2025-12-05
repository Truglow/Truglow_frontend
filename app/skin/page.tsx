"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { serviceCategories } from "@/lib/services-data"

export default function SkinPage() {
    const skinServices = serviceCategories.skin

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
                <div className="absolute inset-0 bg-[url('/skin-hero.png')] bg-cover bg-center opacity-20"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">✨ Skin Treatments</h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Advanced dermatology solutions for radiant, healthy skin
                        </p>
                        <p className="text-lg opacity-90">
                            Expert treatments for anti-aging, acne, pigmentation, and skin rejuvenation
                        </p>
                    </div>
                </div>
            </div>

            {/* Services Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {skinServices.map((service, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="mb-4">
                                        <img src={service.icon} alt={service.title} className="w-16 h-16 object-contain" />
                                    </div>
                                    <CardTitle className="text-2xl text-primary">{service.title}</CardTitle>
                                    <p className="text-gray-600 mt-2">{service.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {service.details.slice(0, 2).map((detail, idx) => (
                                            <p key={idx} className="text-sm text-gray-700">
                                                • {detail}
                                            </p>
                                        ))}
                                        <Link href="/procedure?tab=skin">
                                            <Button variant="outline" className="w-full mt-4">
                                                Learn More
                                            </Button>
                                        </Link>
                                        <Link href={`/appointment?category=skin&service=${encodeURIComponent(service.title)}`}>
                                            <Button className="w-full mt-2 bg-primary hover:bg-primary/90">
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
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready for Radiant Skin?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Book your consultation today and discover the perfect treatment for your skin goals
                    </p>
                    <Link href="/appointment">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                            Book Your Consultation
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
