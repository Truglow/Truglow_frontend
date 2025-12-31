import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Book an Appointment | Tru Glow Clinic Hyderabad",
    description: "Schedule your consultation at Tru Glow Clinic. Easy online booking for hair, skin, laser, and plastic surgery consultations in Hyderabad.",
}

export default function AppointmentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
