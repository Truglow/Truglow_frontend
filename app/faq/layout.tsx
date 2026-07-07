import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Frequently Asked Questions | Tru Glow Clinic Hyderabad",
  description: "Find answers to frequently asked questions about dermatology consultations, timing, hair transplants, laser treatments, and safety at Tru Glow Clinic.",
  keywords: "Tru Glow FAQ, dermatology questions, hair transplant cost Hyderabad, laser hair removal safety, booking clinic Hyderabad, Manikonda skin clinic, HITEC City dermatologist",
}

export default function FAQLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
