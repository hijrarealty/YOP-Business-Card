// Everything on the card comes from this file.
// To make a card for another employee, copy this object and change the values.

export const employee = {
  firstName: 'Mohamed',
  lastName: 'Saleem',
  role: 'Founder & CEO',
  // E.164 format (no spaces) is used for links; `phoneDisplay` is what people see.
  phone: '+971589842522',
  phoneDisplay: '+971 58 984 2522',
  whatsapp: '971589842522', // digits only, used for wa.me links
  email: 'saleem@yourofficepartners.com',
  linkedin: 'https://www.linkedin.com/in/mohamedsaleem-taxconsultant/',
}

export const company = {
  name: 'Your Office Partners',
  legalName: 'Your Office Partners LLC',
  headline: 'Accounting, tax, audit & business setup, handled end to end.',
  description:
    'Your Office Partners is a Dubai-based corporate services firm helping entrepreneurs and SMEs set up, stay compliant with VAT and corporate tax, and grow across the UAE.',
  website: 'https://yourofficepartners.com/',
  websiteLabel: 'yourofficepartners.com',
  mapsUrl:
    'https://www.google.com/maps/place/Your+Office+Partners+LLC/@25.1921116,55.2848716,16.66z/data=!4m6!3m5!1s0x3e5f4368758194b5:0x9d6dc4efede2a66!8m2!3d25.1919811!4d55.2847161!16s%2Fg%2F11qp4ckxnj',
  city: 'Dubai, UAE',
}

// File name of the generated contact card, served from the site root.
export const vcardFileName = 'mohamed-saleem.vcf'
