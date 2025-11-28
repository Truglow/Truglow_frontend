"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { serviceCategories } from "@/lib/services-data"

export default function IVDripsPage() {
    const ivDrips = serviceCategories.ivdrips

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-primary to-primary/80 text-white py-20">
                <div className="absolute inset-0 bg-[url('/ivdrips-hero.png')] bg-cover bg-center opacity-20"></div>
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
                            <Card key={index} className="border-none shadow-lg hover:shadow-xl transition-shadow">
                                <CardHeader>
                                    <div className="text-5xl mb-4">{drip.icon}</div>
                                    <CardTitle className="text-2xl text-primary">{drip.title}</CardTitle>
                                    <p className="text-gray-600 mt-2">{drip.description}</p>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {drip.details.map((detail, idx) => (
                                            <p key={idx} className="text-sm text-gray-700">
                                                {detail}
                                            </p>
                                        ))}
                                        <Link href="/appointment">
                                            <Button className="w-full mt-4 bg-primary hover:bg-primary/90">
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
            <div className="bg-white py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-12">Why Choose IV Drip Therapy?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="flex items-start space-x-4">
                                <div className="text-3xl">⚡</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Fast Absorption</h3>
                                    <p className="text-gray-600">
                                        100% bioavailability - nutrients delivered directly to your bloodstream for immediate effect
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="text-3xl">💧</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Deep Hydration</h3>
                                    <p className="text-gray-600">
                                        Rapid rehydration at the cellular level for optimal body function
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="text-3xl">🎯</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Targeted Results</h3>
                                    <p className="text-gray-600">
                                        Customized formulations designed by doctors for specific health and wellness goals
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start space-x-4">
                                <div className="text-3xl">✨</div>
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Immediate Benefits</h3>
                                    <p className="text-gray-600">
                                        Feel the difference right away - energy, clarity, and radiance from your first session
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-6">Ready to Experience IV Wellness?</h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Book your consultation today and discover which drip is perfect for your wellness goals
                    </p>
                    <Link href="/appointment">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                            Book Your IV Drip Session
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}
