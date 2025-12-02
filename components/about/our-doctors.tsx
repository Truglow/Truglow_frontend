"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"

export default function OurDoctors() {
    const doctors = [
        {
            name: "Dr. Pranay Reddy",
            image: "/doctor-pranay.jpg",
            qualifications: "MBBS, MD (Dermatology, Venereology and Leprosy)",
            specialization: "Dermatologist & Hair Transplant Surgeon",
            experience: "Specialized Training from K S Hegde Medical Academy, Mangalore",
            expertise: [
                "Advanced Hair Restoration & PRP Treatments",
                "Skin Biopsy & Electrocautery Procedures",
                "Radiofrequency & Laser Treatments",
                "Pattern Hair Loss & Facial Hypermelanosis",
                "Clinical Dermatology & Patient Care"
            ],
            description: "Dr. Pranay Reddy is a highly skilled dermatologist with exceptional clinical knowledge and expertise in advanced dermatological procedures. Fluent in English, Telugu, Hindi, and Kannada, he is committed to providing optimal patient care through continuous professional development and staying updated with recent advances in dermatology.",
            contact: {
                phone: "8886040003",
                email: "pranayreddygujjula66@gmail.com",
                location: "Warangal, Telangana"
            }
        },
        {
            name: "Dr. Vijay Bhattipolu",
            image: "/doctor-vijay.jpg",
            qualifications: "MBBS, DNB (General Surgery), MCh (Plastic & Cosmetic Surgery)",
            specialization: "Plastic & Cosmetic Surgeon",
            experience: "Fellowship in Aesthetic Surgery (Vienna, Austria)",
            expertise: [
                "Advanced Hair Restoration Treatments",
                "Cosmetic Facial Surgery & Rhinoplasty",
                "Cosmetic Eyelid Surgery",
                "Chin Correction Surgery",
                "Cosmetic Breast Surgery & Tummy Tuck",
                "Personalized Anti-Ageing Treatments"
            ],
            description: "Dr. Vijay Bhattipolu is a highly accomplished plastic and cosmetic surgeon with advanced training from Madras Medical College and a prestigious Fellowship in Aesthetic Surgery from Vienna, Austria. With expertise spanning facial aesthetics, body contouring, and reconstructive procedures, Dr. Vijay combines surgical precision with an artistic approach to deliver natural-looking, transformative results that enhance patient confidence and well-being.",
            education: [
                "MBBS, DNB (General Surgery)",
                "MCh Plastic & Cosmetic Surgery (Madras Medical College)",
                "FAS (Fellowship in Aesthetic Surgery) Vienna, Austria"
            ]
        }
    ]

    return (
        <section className="py-20 bg-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Expert Doctors</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Our team of highly qualified and experienced doctors is dedicated to providing you with the best care and results
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {doctors.map((doctor, index) => (
                        <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-shadow duration-300">
                            <CardContent className="p-8">
                                <div className="flex flex-col items-center text-center">
                                    {/* Doctor Image */}
                                    <div className="relative w-48 h-48 mb-6 rounded-full overflow-hidden border-4 border-primary shadow-lg">
                                        <Image
                                            src={doctor.image}
                                            alt={doctor.name}
                                            fill
                                            className="object-cover"
                                        />
                                    </div>

                                    {/* Doctor Info */}
                                    <h3 className="text-3xl font-bold text-primary mb-2">{doctor.name}</h3>
                                    <p className="text-lg font-semibold text-gray-700 mb-1">{doctor.qualifications}</p>
                                    <p className="text-md text-gray-600 mb-2">{doctor.specialization}</p>
                                    <p className="text-sm font-medium text-primary mb-4">{doctor.experience}</p>

                                    {/* Description */}
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {doctor.description}
                                    </p>

                                    {/* Expertise */}
                                    <div className="w-full">
                                        <h4 className="text-lg font-semibold text-gray-900 mb-3">Areas of Expertise</h4>
                                        <ul className="space-y-2 text-left max-w-md mx-auto">
                                            {doctor.expertise.map((item, idx) => (
                                                <li key={idx} className="flex items-start text-gray-700">
                                                    <svg className="w-5 h-5 text-primary mr-2 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                                                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                    </svg>
                                                    <span>{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
