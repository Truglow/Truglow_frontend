import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, email, phone, serviceCategory, service, date, time, message } = body

        // Validate required fields
        if (!name || !email || !phone || !serviceCategory || !service || !date || !time) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            )
        }

        // Get credentials from environment variables
        const credentials = process.env.GOOGLE_SHEETS_CREDENTIALS
        const spreadsheetId = process.env.GOOGLE_SHEET_ID

        if (!credentials || !spreadsheetId) {
            console.error("Missing Google Sheets configuration")
            return NextResponse.json(
                { error: "Server configuration error. Please contact support." },
                { status: 500 }
            )
        }

        // Parse credentials
        const auth = new google.auth.GoogleAuth({
            credentials: JSON.parse(credentials),
            scopes: ["https://www.googleapis.com/auth/spreadsheets"],
        })

        const sheets = google.sheets({ version: "v4", auth })

        // Prepare row data
        const timestamp = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })
        const rowData = [
            timestamp,
            name,
            email,
            phone,
            serviceCategory,
            service,
            date,
            time,
            message || "-",
        ]

        // Append to sheet
        await sheets.spreadsheets.values.append({
            spreadsheetId,
            range: "Sheet1!A:I", // Adjust sheet name if needed
            valueInputOption: "RAW",
            requestBody: {
                values: [rowData],
            },
        })

        return NextResponse.json(
            { success: true, message: "Appointment booked successfully!" },
            { status: 200 }
        )
    } catch (error) {
        console.error("Error saving to Google Sheets:", error)
        return NextResponse.json(
            { error: "Failed to save appointment. Please try again." },
            { status: 500 }
        )
    }
}
