import type React from "react"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Tru Glow | Hair • Skin • Laser • Plastic Surgery",
  description: "Expert Hair, Skin, Laser & Plastic Surgery Treatments | Dermatology & Aesthetics Clinic",
  generator: "v0.dev",
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
      <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
