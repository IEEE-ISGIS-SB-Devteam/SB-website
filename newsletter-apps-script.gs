const SHEET_NAME = 'Subscribers';

function doPost(event) {
  try {
    const payload = JSON.parse(event.postData.contents || '{}');
    const email = String(payload.email || '').trim().toLowerCase();

    if (!email || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
      return jsonResponse({ ok: false, error: 'A valid email is required.' });
    }

    const sheet = getSubscriberSheet();
    const existingEmails = sheet.getLastRow() > 1
      ? sheet.getRange(2, 2, sheet.getLastRow() - 1, 1)
        .getValues()
        .flat()
        .map((value) => String(value).trim().toLowerCase())
      : [];

    if (existingEmails.includes(email)) {
      return jsonResponse({ ok: true, duplicate: true });
    }

    sheet.appendRow([new Date(), email, payload.source || 'website']);

    MailApp.sendEmail({
      to: email,
      subject: 'You are subscribed to IEEE ISGIS updates',
      htmlBody: '<p>Thank you for subscribing to IEEE ISGIS updates.</p>' +
        '<p>We will let you know about workshops, events, competitions, and other branch activities.</p>' +
        '<p>IEEE ISGIS Student Branch</p>',
    });

    return jsonResponse({ ok: true });
  } catch (error) {
    return jsonResponse({ ok: false, error: String(error) });
  }
}

function getSubscriberSheet() {
  const spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  let sheet = spreadsheet.getSheetByName(SHEET_NAME);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(SHEET_NAME);
    sheet.appendRow(['Subscribed at', 'Email', 'Source']);
    sheet.setFrozenRows(1);
  }

  return sheet;
}

function jsonResponse(data) {
  return ContentService
    .createTextOutput(JSON.stringify(data))
    .setMimeType(ContentService.MimeType.JSON);
}
