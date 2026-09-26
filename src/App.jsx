import { useEffect } from 'react'
import ProfileSection from './components/ProfileSection.jsx'
import CompanySection from './components/CompanySection.jsx'
import { defaultEmployee, employeeForPath, pageMeta } from './config.js'

// Picked once per page load: each employee's QR code opens their own URL.
const { pathname } = window.location
const match = employeeForPath(pathname)
const employee = match ?? defaultEmployee
// Tidy the address bar: "/Habeeb/" becomes "/habeeb", unknown paths become "/".
const canonicalPath = match && pathname !== '/' ? `/${match.slug}` : '/'

export default function App() {
  useEffect(() => {
    if (pathname !== canonicalPath) {
      window.history.replaceState(null, '', canonicalPath + window.location.search + window.location.hash)
    }
    document.title = pageMeta(employee).title
  }, [])

  return (
    <main>
      <ProfileSection employee={employee} />
      <CompanySection />
    </main>
  )
}
