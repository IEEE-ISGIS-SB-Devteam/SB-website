/*** CONFIG ***/
const SHEET_ID = 'PASTE_YOUR_SHEET_ID_HERE';
const NEWSLETTER_TAB = 'Emails';
const CONTACT_TAB = 'Contact';

/*** ROUTER ***/
function doPost(e) {
  try {
    const raw = (e && e.postData && e.postData.contents) || '{}';
    const data = JSON.parse(raw);
    const ss = SpreadsheetApp.openById(SHEET_ID);

    if (data.type === 'contact') {
      const sheet = getOrCreateSheet(ss, CONTACT_TAB, [
        'Timestamp', 'Name', 'Email', 'Subject', 'Message'
      ]);
      sheet.appendRow([
        new Date(),
        data.name || '',
        data.email || '',
        data.subject || '',
        data.message || '',
      ]);
    } else {
      const sheet = getOrCreateSheet(ss, NEWSLETTER_TAB, [
        'Timestamp', 'Email', 'Source'
      ]);
      sheet.appendRow([new Date(), data.email || '', data.source || '']);
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

function doGet() {
  return ContentService.createTextOutput('IEEE ISGIS endpoint is live.');
}

/*** HELPERS ***/
function json(obj) {
  return ContentService
    .createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}

function getOrCreateSheet(ss, name, headers) {
  let sheet = ss.getSheetByName(name);
  if (!sheet) {
    sheet = ss.insertSheet(name);
    sheet.appendRow(headers);
    sheet.getRange(1, 1, 1, headers.length).setFontWeight('bold');
    sheet.setFrozenRows(1);
  }
  return sheet;
}

/*** RUN ONCE to create both tabs ***/
function setup() {
  const ss = SpreadsheetApp.openById(SHEET_ID);
  getOrCreateSheet(ss, NEWSLETTER_TAB, ['Timestamp', 'Email', 'Source']);
  getOrCreateSheet(ss, CONTACT_TAB, ['Timestamp', 'Name', 'Email', 'Subject', 'Message']);
}