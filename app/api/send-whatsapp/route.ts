import { NextResponse } from "next/server"

type Body = {
  name: string
  phone: string
  subject?: string
  message?: string
  to?: string
}

export async function POST(request: Request) {
  try {
    const { name, phone, subject, message, to }: Body = await request.json()

    const trimmedName = (name || "").trim()
    const trimmedPhone = (phone || "").trim()
    if (!trimmedName || !trimmedPhone) {
      return NextResponse.json({ error: "Name and phone are required" }, { status: 400 })
    }

    const recipientNumber =
      (to && to.replace(/[^0-9]/g, "")) ||
      process.env.WHATSAPP_TO?.replace(/[^0-9]/g, "") ||
      "917799127273" // default to clinic number if not provided

    const token = process.env.WHATSAPP_TOKEN
    const phoneNumberId = process.env.WHATSAPP_PHONE_NUMBER_ID
    if (!token || !phoneNumberId) {
      return NextResponse.json(
        { error: "WhatsApp API not configured (missing WHATSAPP_TOKEN or WHATSAPP_PHONE_NUMBER_ID)" },
        { status: 500 }
      )
    }

    const text = [
      "New Consultation Request",
      `Name: ${trimmedName}`,
      `Phone: ${trimmedPhone}`,
      `Subject: ${subject || "Consultation"}`,
      `Message: ${message || "-"}`,
    ].join("\n")

    const res = await fetch(`https://graph.facebook.com/v18.0/${phoneNumberId}/messages`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        messaging_product: "whatsapp",
        to: recipientNumber,
        type: "text",
        text: { body: text },
      }),
    })

    const data = await res.json()
    if (!res.ok) {
      return NextResponse.json({ error: "Failed to send WhatsApp message", details: data }, { status: res.status })
    }

    return NextResponse.json({ success: true, id: data.messages?.[0]?.id })
  } catch (err) {
    return NextResponse.json({ error: "Unexpected error", details: String(err) }, { status: 500 })
  }
}


