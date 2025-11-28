import { NextRequest, NextResponse } from "next/server"
import { google } from "googleapis"

export async function POST(request: NextRequest) {
    try {
        const body = await request.json()
        const { name, phone, category, procedure, message } = body

        // Validate required fields
        if (!name || !phone || !category || !procedure || !message) {
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
                { error: "Server configuration error" },
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
            phone,
            category,
            procedure,
            message,
            "Chat Widget",
        ]

        // Append to sheet (using Sheet2 for chat conversations)
        try {
            await sheets.spreadsheets.values.append({
                spreadsheetId,
                range: "Sheet2!A:G", // Different sheet for chat data
                valueInputOption: "RAW",
                requestBody: {
                    values: [rowData],
                },
            })
        } catch (sheetError: any) {
            console.error("Error appending to Sheet2:", sheetError)
            console.error("Error details:", sheetError.message)

            // If Sheet2 doesn't exist, try to create it or use Sheet1
            if (sheetError.message?.includes("Unable to parse range")) {
                console.error("Sheet2 might not exist. Please create Sheet2 in your Google Spreadsheet.")
            }

            throw sheetError
        }

        return NextResponse.json(
            { success: true, message: "Chat conversation saved successfully!" },
            { status: 200 }
        )
    } catch (error: any) {
        console.error("Error saving to Google Sheets:", error)
        console.error("Error message:", error?.message)
        return NextResponse.json(
            { error: "Failed to save conversation. Check server logs." },
            { status: 500 }
        )
    }
}
