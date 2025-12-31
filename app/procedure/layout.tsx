import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Detailed Treatment Procedures | Tru Glow Clinic Hyderabad",
    description: "Explore our comprehensive range of dermatological and cosmetic procedures. From hair transplants to laser treatments and plastic surgery in Hyderabad.",
}

export default function ProcedureLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
