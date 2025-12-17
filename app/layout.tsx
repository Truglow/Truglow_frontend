import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import ChatWidget from "@/components/chat-widget"

const inter = Inter({
  subsets: ["latin"],
  display: 'swap',
  preload: true,
})

export const metadata = {
  title: "Tru Glow Hair & Skin Clinic | Best Dermatology, Hair Transplant & Aesthetic Treatments in Hyderabad",
  description: "Tru Glow Clinic offers expert hair transplant (FUE/DHI), advanced skin treatments, laser hair removal, plastic surgery, and IV drip therapy in Hyderabad. Book your consultation today!",
  keywords: "Tru Glow, hair clinic Hyderabad, skin clinic, dermatology, hair transplant FUE, DHI hair transplant, laser hair removal, plastic surgery, IV drip therapy, botox fillers, anti-aging treatments, acne treatment, PRP therapy",
  authors: [{ name: "Tru Glow Clinic" }],
  creator: "Tru Glow Clinic",
  publisher: "Tru Glow Clinic",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://truglowclinic.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: "Tru Glow Hair & Skin Clinic | Best Dermatology & Aesthetic Treatments",
    description: "Expert hair transplant, skin treatments, laser procedures & plastic surgery in Hyderabad. Advanced dermatology solutions for all your aesthetic needs.",
    url: 'https://truglowclinic.com',
    siteName: 'Tru Glow Clinic',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Tru Glow Hair & Skin Clinic",
    description: "Expert Hair, Skin, Laser & Plastic Surgery Treatments in Hyderabad",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-verification-code',
  },
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.svg", type: "image/svg+xml", sizes: "32x32" },
      { url: "/favicon-16x16.svg", type: "image/svg+xml", sizes: "16x16" },
    ],
    shortcut: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [
      { url: "/apple-touch-icon.svg", type: "image/svg+xml", sizes: "180x180" },
    ],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  )
}
