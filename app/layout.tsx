import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tru Glow | Hair • Skin • Laser • Plastic Surgery",
  description: "Expert Hair, Skin, Laser & Plastic Surgery Treatments | Dermatology & Aesthetics Clinic",
    generator: 'v0.dev',
    icons: {
      // Minimal setup: single JPEG in /public
      icon: [{ url: "/favicon.jpg", type: "image/jpeg" }],
      // Use the same image for Apple touch if only one file is provided
      apple: { url: "/favicon.jpg", type: "image/jpeg" },
    },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
