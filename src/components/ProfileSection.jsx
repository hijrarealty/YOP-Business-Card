import { useEffect, useRef, useState } from 'react'
import { company, fullName as nameOf, vcardFileName } from '../config.js'
import {
  PhoneIcon,
  MailIcon,
  WhatsAppIcon,
  LinkedInIcon,
  UserPlusIcon,
  MarkCheckIcon,
  ArrowUpRightIcon,
  YopMark,
} from './Icons.jsx'

const detectPlatform = () => {
  const ua = navigator.userAgent
  const iOS = /iPad|iPhone|iPod/.test(ua) || (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1)
  if (iOS) return 'ios'
  if (/Android/i.test(ua)) return 'android'
  return 'desktop'
}

const SAVE_HINTS = {
  ios: 'Tap “Create New Contact” to save.',
  android: 'Open the downloaded file to add to your contacts.',
  desktop: 'Contact card downloaded. Open it to add to your contacts.',
}

export default function ProfileSection({ employee }) {
  const fullName = nameOf(employee)
  const [platform, setPlatform] = useState(null)
  const [saved, setSaved] = useState(false)
  const timer = useRef()

  useEffect(() => {
    setPlatform(detectPlatform())
    return () => clearTimeout(timer.current)
  }, [])

  // iOS Safari opens its contact sheet when it navigates to a .vcf file, but
  // only downloads it to Files when the link has a `download` attribute.
  // Everywhere else the download is what hands the file to Contacts.
  const downloadName = platform === 'ios' ? undefined : `${fullName}.vcf`

  const onSave = () => {
    setSaved(true)
    clearTimeout(timer.current)
    timer.current = setTimeout(() => setSaved(false), 6000)
  }

  const channels = [
    {
      id: 'whatsapp',
      label: 'WhatsApp',
      // Rows name the action, not the raw number, address or URL;
      // the links and the saved contact carry those.
      detail: 'Send a message',
      href: `https://wa.me/${employee.whatsapp}`,
      icon: WhatsAppIcon,
      external: true,
    },
    {
      id: 'email',
      label: 'Email',
      detail: 'Send an email',
      href: `mailto:${employee.email}`,
      icon: MailIcon,
    },
    employee.linkedin && {
      id: 'linkedin',
      label: 'LinkedIn',
      detail: 'View profile',
      href: employee.linkedin,
      icon: LinkedInIcon,
      external: true,
    },
  ].filter(Boolean)

  return (
    <section className="profile" aria-labelledby="person-name">
      <div className="profile__inner">
        <header className="identity">
          <h1 id="person-name" className="identity__name">
            <span className="identity__name-line">{fullName}</span>
          </h1>
          <p className="identity__role rise" style={{ '--i': 1 }}>
            {employee.role}
          </p>
          <p className="identity__company rise" style={{ '--i': 2 }}>
            <YopMark className="identity__mark" animated />
            <span>{company.name}</span>
          </p>
        </header>

        <div className="actions rise" style={{ '--i': 3 }}>
          <a
            className={`pill pill--primary${saved ? ' is-saved' : ''}`}
            href={`/${vcardFileName(employee)}`}
            download={downloadName}
            type="text/vcard"
            onClick={onSave}
          >
            <span className="pill__icon">{saved ? <MarkCheckIcon /> : <UserPlusIcon />}</span>
            <span>{saved ? 'Contact ready' : 'Save contact'}</span>
          </a>
          <a className="pill pill--ghost" href={`tel:${employee.phone}`}>
            <span className="pill__icon">
              <PhoneIcon />
            </span>
            <span>Call</span>
          </a>
        </div>

        <p className={`save-hint${saved ? ' is-visible' : ''}`} role="status" aria-live="polite">
          {saved && platform ? SAVE_HINTS[platform] : ''}
        </p>

        <nav className="channels" aria-label={`Contact ${fullName}`}>
          <div className="channels__label rise" style={{ '--i': 4 }}>
            <span>Contact</span>
          </div>
          <ul>
            {channels.map(({ id, label, detail, href, icon: Icon, external }, n) => (
              <li key={id} className="rise" style={{ '--i': 5 + n }}>
                <a
                  className={`channel channel--${id}`}
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                >
                  <span className="channel__icon">
                    <Icon />
                  </span>
                  <span className="channel__text">
                    <span className="channel__label">{label}</span>
                    <span className="channel__detail">{detail}</span>
                  </span>
                  <ArrowUpRightIcon className="channel__go" width="18" height="18" />
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </section>
  )
}
