// One stroke family (24px grid, 1.75 stroke) plus the two brand glyphs
// that have to be filled to be recognisable.

const Stroke = ({ children, ...props }) => (
  <svg
    viewBox="0 0 24 24"
    width="20"
    height="20"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.75"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    {children}
  </svg>
)

export const PhoneIcon = (p) => (
  <Stroke {...p}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
  </Stroke>
)

export const MailIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M4 4.5h16A2 2 0 0 1 22 6.5v.35l-9.46 5.9a1 1 0 0 1-1.08 0L2 6.85V6.5a2 2 0 0 1 2-2Z" />
    <path d="M2 9.2v8.3a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9.2l-8.4 5.24a3 3 0 0 1-3.2 0L2 9.2Z" />
  </svg>
)

export const UserPlusIcon = (p) => (
  <Stroke {...p}>
    <path d="M15 21v-1.5a4.5 4.5 0 0 0-4.5-4.5h-4A4.5 4.5 0 0 0 2 19.5V21" />
    <circle cx="8.5" cy="7.5" r="4" />
    <path d="M19 8v6M22 11h-6" />
  </Stroke>
)

export const ArrowUpRightIcon = (p) => (
  <Stroke {...p}>
    <path d="M7 17 17 7M8 7h9v9" />
  </Stroke>
)

export const MapPinIcon = (p) => (
  <Stroke {...p}>
    <path d="M19.5 10c0 5.5-7.5 11.5-7.5 11.5S4.5 15.5 4.5 10a7.5 7.5 0 0 1 15 0Z" />
    <circle cx="12" cy="10" r="2.75" />
  </Stroke>
)

// The check from the Your Office Partners mark, drawn in by CSS
// (stroke-dashoffset) when a contact is saved.
export const MarkCheckIcon = (p) => (
  <svg viewBox="128 236 212 168" width="20" height="20" fill="none" aria-hidden="true" focusable="false" {...p}>
    <path
      className="check-path"
      d="M146 326 200 378 319 257"
      pathLength="1"
      stroke="currentColor"
      strokeWidth="17"
      strokeLinecap="butt"
      strokeLinejoin="miter"
    />
  </svg>
)

export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.47-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.17-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.2-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.06 2.88 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.7.63.71.22 1.36.19 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.35m-5.42 7.4h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88 2.64 0 5.12 1.03 6.99 2.9a9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.88-9.88 9.88m8.41-18.3A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.89c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.88 11.88 0 0 0 5.69 1.45h.01c6.55 0 11.89-5.34 11.89-11.89a11.82 11.82 0 0 0-3.48-8.41Z" />
  </svg>
)

export const LinkedInIcon = (p) => (
  <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true" focusable="false" {...p}>
    <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13ZM7.12 20.45H3.56V9h3.56v11.45Z" />
  </svg>
)

// The Your Office Partners mark: diamond bracket and check,
// traced from the official logo file.
// `animated` tags the two parts so CSS can replay the logo's fold in miniature.
export const YopMark = ({ tone = 'light', animated = false, ...p }) => (
  <svg viewBox="0 0 395 394" aria-hidden="true" focusable="false" {...p}>
    <polygon
      className={animated ? 'mark-bracket' : undefined}
      fill={tone === 'light' ? 'currentColor' : '#65063C'}
      points="4,193 37,226 46,213 28,194 199,23 370,193 344,222 354,233 393,194 200,0"
    />
    <polygon
      className={animated ? 'mark-check' : undefined}
      fill={tone === 'light' ? 'currentColor' : '#9A999A'}
      points="324,262 313,252 200,365 154,321 150,320 141,332 199,389"
    />
  </svg>
)
