import type { Metadata } from "next"

export const metadata: Metadata = {
    title: "Book an Appointment | Tru Glow Clinic Hyderabad",
    description: "Schedule your consultation at Tru Glow Clinic. Easy online booking for hair, skin, laser, and plastic surgery consultations in Hyderabad.",
    keywords: "book appointment Tru Glow, online booking dermatologist Hyderabad, schedule consultation skin clinic, book hair transplant consultation, appointment dermatologist Manikonda, appointment dermatologist HITEC City, book consultation Hyderabad, Tru Glow Clinic appointment, skin treatment booking, hair treatment booking Hyderabad",
}

export default function AppointmentLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <>{children}</>
}
