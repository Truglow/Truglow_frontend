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
      { url: "/app_logo.svg", type: "image/svg+xml" },
      { url: "/favicon.jpg", type: "image/jpeg" },
    ],
    shortcut: [{ url: "/app_logo.svg", type: "image/svg+xml" }],
    apple: [{ url: "/app_logo.svg", type: "image/svg+xml" }],
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
