import type { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { serviceCategories } from "@/lib/services-data"
import Image from "next/image"

export const metadata: Metadata = {
    title: "Premium IV Drip Therapy & Vitamin Infusion | Tru Glow Clinic Hyderabad",
    description: "Boost your energy and wellness with IV Drip Therapy at Tru Glow Clinic. Customized vitamin infusions for immunity, skin glow, and recovery in Hyderabad.",
}

export default function IVDripsPage() {
    const ivDrips = serviceCategories.ivdrips

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-amber-900 text-white py-24 overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <Image
                        src="/ivdrips-hero.webp"
                        alt="IV Drip Therapy"
                        fill
                        priority
                        className="object-cover"
                    />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-5xl font-bold mb-6">💧 IV Drip Therapy</h1>
                        <p className="text-xl md:text-2xl mb-8">
                            Premium vitamin infusion therapy for optimal wellness
                        </p>
                        <p className="text-lg opacity-90">
                            Boost your health, energy, and vitality with customized IV vitamin treatments
                        </p>
                    </div>
                </div>
            </div>

            {/* Drips Grid */}
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {ivDrips.map((drip, index) => (
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 transform">
                                <CardHeader>
                                    <div className="mb-4 relative w-16 h-16">
                                        <Image
                                            src={drip.icon}
                                            alt={drip.title}
                                            fill
                                            className="object-contain"
                                        />
                                    </div>
                                    <CardTitle className="text-2xl text-primary">{drip.title}</CardTitle>
                                    <p className="text-gray-600 mt-2">{drip.description}</p>
                                </CardHeader>
                                <CardContent className="flex flex-col h-full">
                                    <div className="space-y-4 flex-grow">
                                        {drip.details.map((detail, idx) => (
                                            <p key={idx} className="text-sm text-gray-700">
                                                • {detail}
                                            </p>
                                        ))}
                                    </div>
                                    <div className="mt-8">
                                        <Link href={`/appointment?category=ivdrips&service=${encodeURIComponent(drip.title)}`}>
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

            {/* Benefits Section */}
            <div className="bg-white py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-16">Why Choose IV Drip Therapy?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                            <div className="flex items-start space-x-6">
                                <div className="text-4xl bg-amber-50 p-4 rounded-2xl">⚡</div>
                                <div>
                                    <h3 className="font-bold text-xl mb-3">Fast Absorption</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        100% bioavailability - nutrients delivered directly to your bloodstream for immediate effect
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="text-4xl bg-amber-50 p-4 rounded-2xl">💧</div>
                                <div>
                                    <h3 className="font-bold text-xl mb-3">Deep Hydration</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Rapid rehydration at the cellular level for optimal body function
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="text-4xl bg-amber-50 p-4 rounded-2xl">🎯</div>
                                <div>
                                    <h3 className="font-bold text-xl mb-3">Targeted Results</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Customized formulations designed by doctors for specific health and wellness goals
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-6">
                                <div className="text-4xl bg-amber-50 p-4 rounded-2xl">✨</div>
                                <div>
                                    <h3 className="font-bold text-xl mb-3">Immediate Benefits</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Feel the difference right away - energy, clarity, and radiance from your first session
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6 italic">Ready to Experience IV Wellness?</h2>
                    <p className="text-xl mb-10 max-w-2xl mx-auto opacity-90">
                        Book your consultation today and discover which drip is perfect for your wellness goals
                    </p>
                    <Link href="/appointment">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 px-10 py-7 text-lg rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 active:scale-95">
                            Book Your IV Drip Session
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
