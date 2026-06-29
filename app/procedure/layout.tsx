import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Detailed Treatment Procedures | Tru Glow Clinic Hyderabad",
    description: "Explore our comprehensive range of dermatological and cosmetic procedures. From hair transplants to laser treatments and plastic surgery in Hyderabad.",
    keywords: "treatment procedures Hyderabad, hair transplant procedure, FUE procedure details, DHI procedure explained, laser treatment procedure, skin treatment procedure, PRP procedure, chemical peel procedure, botox procedure, rhinoplasty procedure, dermatology procedures Hyderabad, cosmetic surgery procedures, treatment cost Hyderabad",
}

export default function ProcedureLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
