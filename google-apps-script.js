/**
 * Nexora Digital — Contact Form Google Apps Script
 * Configured specifically for Sheet ID: 1_k1fHgUo-a5GcIRhaiwvv12JPbGSameZqPV4ntJBkhs
 * Admin Notification Email: tigerreddy6272@gmail.com
 * 
 * INSTRUCTIONS TO DEPLOY IN GOOGLE APPS SCRIPT:
 * 1. Go to https://script.google.com/home and click "New project"
 *    OR in your Google Sheet (https://docs.google.com/spreadsheets/d/1_k1fHgUo-a5GcIRhaiwvv12JPbGSameZqPV4ntJBkhs)
 *    click Extensions > Apps Script.
 * 2. Delete any code in the editor and PASTE THIS ENTIRE FILE.
 * 3. Click the Save icon (Ctrl+S or Cmd+S).
 * 4. Click Deploy > New deployment.
 * 5. Click the gear icon (Select type) and choose "Web app".
 *    - Description: Contact Form Webhook
 *    - Execute as: Me (tigerreddy6272@gmail.com)
 *    - Who has access: Anyone
 * 6. Click "Deploy", grant permissions when prompted (Advanced > Go to project).
 * 7. Copy your Web App URL (looks like: https://script.google.com/macros/s/AKfycb.../exec).
 * 8. Add it to your project `.env` file as:
 *    VITE_APPSCRIPT_URL=https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID/exec
 */

const SPREADSHEET_ID = "1_k1fHgUo-a5GcIRhaiwvv12JPbGSameZqPV4ntJBkhs";
const ADMIN_EMAIL = "tigerreddy6272@gmail.com";

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    
    // Open the spreadsheet by ID
    let ss;
    try {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch (err) {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    }
    
    let sheet = ss.getSheetByName("Inquiries");
    if (!sheet) {
      sheet = ss.getSheets()[0]; // Fallback to first sheet
    }
    
    // Ensure header row exists
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Reference ID", "Client Name", "Client Email", "Service Interest", "Project Details", "Status"]);
    }
    
    const timestamp = new Date();
    const inquiryId = data.inquiryId || "NEX-" + Math.random().toString(36).substring(2, 8).toUpperCase();
    const name = data.name || "N/A";
    const email = data.email || "N/A";
    const service = data.service || "General Inquiry";
    const details = data.details || "No additional details provided.";

    // 1. Append Row to Google Sheet
    sheet.appendRow([
      timestamp,
      inquiryId,
      name,
      email,
      service,
      details,
      "New Inquiry"
    ]);

    // 2. Send Email Alert to Admin (tigerreddy6272@gmail.com)
    try {
      MailApp.sendEmail({
        to: ADMIN_EMAIL,
        subject: `🔥 New Lead Inquiry [${inquiryId}] - ${name}`,
        htmlBody: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
            <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 12px; margin-top: 0;">New Contact Inquiry Received</h2>
            
            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px; width: 140px;"><strong>Reference ID:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: bold;">${inquiryId}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Client Name:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Client Email:</strong></td>
                <td style="padding: 8px 0; color: #4f46e5; font-size: 14px;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 8px 0; color: #64748b; font-size: 14px;"><strong>Service Interest:</strong></td>
                <td style="padding: 8px 0; color: #0f172a; font-size: 14px; font-weight: bold;">${service}</td>
              </tr>
            </table>

            <p style="color: #64748b; font-size: 14px; margin-bottom: 6px;"><strong>Project Details:</strong></p>
            <blockquote style="background: #f8fafc; border-left: 4px solid #4f46e5; padding: 14px; margin: 0 0 20px 0; color: #334155; font-size: 14px; border-radius: 4px;">
              ${details}
            </blockquote>

            <div style="background: #eef2ff; border: 1px solid #c7d2fe; border-radius: 8px; padding: 12px; text-align: center;">
              <a href="https://docs.google.com/spreadsheets/d/${SPREADSHEET_ID}/edit" style="color: #4338ca; text-decoration: none; font-weight: bold; font-size: 14px;">
                📊 View Live Inquiries Google Sheet
              </a>
            </div>

            <hr style="margin: 24px 0 16px 0; border: none; border-top: 1px solid #e2e8f0;" />
            <p style="font-size: 12px; color: #94a3b8; margin: 0;">Submitted on ${timestamp.toLocaleString()} via Nexora Digital Web Platform.</p>
          </div>
        `
      });
    } catch (adminErr) {
      Logger.log("Admin Email Error: " + adminErr.toString());
    }

    // 3. Send Automated Confirmation Email to Client
    try {
      if (email && email !== "N/A") {
        MailApp.sendEmail({
          to: email,
          subject: `Consultation Requested - Nexora Digital [${inquiryId}]`,
          htmlBody: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e2e8f0; border-radius: 12px; background-color: #ffffff;">
              <h2 style="color: #4f46e5; margin-top: 0;">Thank you for contacting Nexora Digital!</h2>
              <p style="color: #334155; font-size: 15px;">Hi <strong>${name}</strong>,</p>
              <p style="color: #334155; font-size: 15px; line-height: 1.6;">We have received your consultation request for <strong>${service}</strong>. Our engineering team is reviewing your project requirements and will reach out to you within 2 business hours.</p>
              
              <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; margin: 20px 0;">
                <p style="margin: 0 0 8px 0; color: #4338ca; font-weight: bold; font-size: 14px;">Your Inquiry Summary:</p>
                <p style="margin: 4px 0; color: #475569; font-size: 14px;">• Reference ID: <strong>${inquiryId}</strong></p>
                <p style="margin: 4px 0; color: #475569; font-size: 14px;">• Requested Service: <strong>${service}</strong></p>
              </div>

              <p style="color: #334155; font-size: 15px;">If you have any urgent questions, feel free to reply directly to this email.</p>
              
              <hr style="margin: 24px 0 16px 0; border: none; border-top: 1px solid #e2e8f0;" />
              <p style="color: #64748b; font-size: 14px; margin: 0;">
                Best regards,<br />
                <strong>The Nexora Digital Team</strong><br />
                <a href="mailto:${ADMIN_EMAIL}" style="color: #4f46e5;">${ADMIN_EMAIL}</a>
              </p>
            </div>
          `
        });
      }
    } catch (clientErr) {
      Logger.log("Client Email Error: " + clientErr.toString());
    }

    return ContentService
      .createTextOutput(JSON.stringify({
        success: true,
        message: "Inquiry saved to Google Sheet and email notifications sent successfully.",
        inquiryId: inquiryId
      }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({
        success: false,
        error: error.toString()
      }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet() {
  return ContentService
    .createTextOutput(JSON.stringify({
      status: "active",
      message: "Nexora Digital Google Apps Script API is active.",
      spreadsheetId: SPREADSHEET_ID,
      adminEmail: ADMIN_EMAIL
    }))
    .setMimeType(ContentService.MimeType.JSON);
}
