import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Expert Skincare & Hair Restoration Blogs | Tru Glow Journal",
  description: "Read evidence-based medical articles on hair transplants, skin treatments, laser hair removal, and plastic surgery written by certified dermatologists.",
  keywords: "hair transplant guide, hair loss causes, acne scar removal Hyderabad, melasma protocol, botox anti-aging, glutathione IV therapy, Tru Glow Journal",
}

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
