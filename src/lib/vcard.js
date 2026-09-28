// Builds a vCard 3.0 string. Version 3.0 is the one both iOS Contacts
// and Android Contacts import without complaint.

const escape = (value) =>
  String(value)
    .replace(/\\/g, '\\\\')
    .replace(/\n/g, '\\n')
    .replace(/,/g, '\\,')
    .replace(/;/g, '\\;')

export function buildVCard(employee, company) {
  const lines = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `N:${escape(employee.lastName)};${escape(employee.firstName)};;;`,
    `FN:${escape(`${employee.firstName} ${employee.lastName}`)}`,
    `ORG:${escape(company.legalName)}`,
    `TITLE:${escape(employee.role)}`,
    `TEL;TYPE=CELL,VOICE,pref:${employee.phone}`,
    `EMAIL;TYPE=INTERNET,WORK:${employee.email}`,
    `URL;TYPE=WORK:${company.website}`,
    ...(employee.linkedin ? [`item1.URL:${employee.linkedin}`, 'item1.X-ABLabel:LinkedIn'] : []),
    'END:VCARD',
  ]
  // vCard requires CRLF line endings.
  return lines.join('\r\n') + '\r\n'
}
