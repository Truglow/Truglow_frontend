# Google Sheets Setup Guide

This guide will help you set up Google Sheets integration for your appointment booking system.

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click **"Select a project"** → **"New Project"**
3. Enter project name: `Truglow Appointments`
4. Click **"Create"**

## Step 2: Enable Google Sheets API

1. In your project, go to **"APIs & Services"** → **"Library"**
2. Search for **"Google Sheets API"**
3. Click on it and press **"Enable"**

## Step 3: Create Service Account

1. Go to **"APIs & Services"** → **"Credentials"**
2. Click **"Create Credentials"** → **"Service Account"**
3. Enter details:
   - **Service account name**: `truglow-sheets-service`
   - **Service account ID**: (auto-generated)
4. Click **"Create and Continue"**
5. For role, select **"Editor"** (or you can skip this step)
6. Click **"Done"**

## Step 4: Create and Download Credentials

1. Click on the service account you just created
2. Go to **"Keys"** tab
3. Click **"Add Key"** → **"Create new key"**
4. Select **"JSON"** format
5. Click **"Create"** - a JSON file will download automatically
6. **Keep this file safe!** You'll need it in the next step

## Step 5: Create Your Google Sheet

1. Go to [Google Sheets](https://sheets.google.com)
2. Create a new spreadsheet
3. Name it: `Truglow Appointments`
4. In the first row (headers), add these columns:
   ```
   Timestamp | Name | Email | Phone | Service Category | Procedure | Preferred Date | Preferred Time | Additional Notes
   ```
5. Copy the **Sheet ID** from the URL:
   - URL looks like: `https://docs.google.com/spreadsheets/d/SHEET_ID_HERE/edit`
   - Copy the `SHEET_ID_HERE` part

## Step 6: Share Sheet with Service Account

1. In your Google Sheet, click **"Share"** button
2. Paste the **service account email** from the JSON file you downloaded
   - It looks like: `truglow-sheets-service@PROJECT_ID.iam.gserviceaccount.com`
3. Give it **"Editor"** access
4. Uncheck **"Notify people"**
5. Click **"Share"**

## Step 7: Configure Environment Variables

1. Open the JSON credentials file you downloaded
2. Copy the **entire contents** of the file
3. Create a file named `.env.local` in your project root (if it doesn't exist)
4. Add these lines:

```env
GOOGLE_SHEETS_CREDENTIALS='{"type":"service_account","project_id":"...PASTE_ENTIRE_JSON_HERE..."}'
GOOGLE_SHEET_ID=YOUR_SHEET_ID_FROM_STEP_5
```

**Important Notes:**
- The credentials must be on a single line
- Keep the single quotes around the JSON
- Replace `YOUR_SHEET_ID_FROM_STEP_5` with the actual Sheet ID

## Step 8: Restart Your Development Server

```bash
npm run dev
```

## Testing

1. Go to your appointment booking page
2. Fill out the form
3. Click "Book Appointment"
4. Check your Google Sheet - the data should appear automatically!

## Troubleshooting

**Error: "Missing Google Sheets configuration"**
- Make sure `.env.local` file exists in project root
- Check that environment variables are set correctly
- Restart your dev server

**Error: "The caller does not have permission"**
- Make sure you shared the Google Sheet with the service account email
- Give it "Editor" access

**Data not appearing in sheet**
- Check the sheet name is "Sheet1" (or update the API route)
- Verify the Sheet ID is correct
- Check browser console for errors

## Security Notes

- **Never commit** the `.env.local` file to Git
- Add `.env.local` to your `.gitignore` file
- Keep your credentials JSON file secure
- Don't share your service account credentials publicly
