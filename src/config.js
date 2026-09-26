// Everything on the cards comes from this file.
//
// Each employee gets their own page at /<slug> (for example /habeeb) and
// their own contact file at /<slug>.vcf. The employee marked `isDefault`
// is also shown at the site root (/) and for any unknown address.
//
// To add an employee: copy one block, change the values, pick a new slug
// (lowercase, no spaces), then rebuild and redeploy.

export const employees = [
  {
    slug: 'saleem',
    isDefault: true,
    firstName: 'Mohamed',
    lastName: 'Saleem',
    role: 'Founder & CEO',
    // E.164 format (no spaces) is used for links; `phoneDisplay` is what people see.
    phone: '+971589842522',
    phoneDisplay: '+971 58 984 2522',
    whatsapp: '971589842522', // digits only, used for wa.me links
    email: 'saleem@yourofficepartners.com',
    linkedin: 'https://www.linkedin.com/in/mohamedsaleem-taxconsultant/',
  },
  {
    slug: 'habeeb',
    firstName: 'Habeeb',
    lastName: 'Mohamed',
    role: 'HR Executive',
    phone: '+971521423950',
    phoneDisplay: '+971 52 142 3950',
    whatsapp: '971521423950',
    email: 'hr@yourofficepartners.com',
    linkedin: 'https://www.linkedin.com/in/habeeb-mohamed-84682123a/',
  },
  {
    slug: 'farhan',
    firstName: 'Mohamed',
    lastName: 'Farhan',
    role: 'Tax & Accounting Executive',
    phone: '+971588416870',
    phoneDisplay: '+971 58 841 6870',
    whatsapp: '971588416870',
    email: 'farhan@yourofficepartners.com',
    linkedin: 'https://www.linkedin.com/in/mohamed-farhan-9aa7ba268/',
  },
]

export const defaultEmployee = employees.find((e) => e.isDefault) ?? employees[0]

export const fullName = (employee) => `${employee.firstName} ${employee.lastName}`

// The contact file the Save contact button links to, served from the site root.
// Saleem keeps his original file name so any link already shared still works.
export const vcardFileName = (employee) =>
  employee.slug === 'saleem' ? 'mohamed-saleem.vcf' : `${employee.slug}.vcf`

// Finds the employee for a URL path like "/habeeb", "/Habeeb/" or "/".
export const employeeForPath = (pathname) => {
  const slug = pathname.split('/').filter(Boolean)[0]?.toLowerCase()
  return employees.find((e) => e.slug === slug) ?? null
}

// Title and link-preview text for an employee's page.
export const pageMeta = (employee) => ({
  title: `${fullName(employee)} · ${employee.role} · ${company.name}`,
  description: `Save ${fullName(employee)}'s contact, ${employee.role} at ${company.name}, Dubai. Call, WhatsApp, email or connect on LinkedIn.`,
  ogTitle: `${fullName(employee)} · ${employee.role}, ${company.name}`,
})

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
