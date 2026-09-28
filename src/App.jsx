import { useEffect, useState } from 'react'
import Intro from './components/Intro.jsx'
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
  // intro -> revealed (card animating in while the intro lifts) -> done
  const [stage, setStage] = useState('intro')

  useEffect(() => {
    if (pathname !== canonicalPath) {
      window.history.replaceState(null, '', canonicalPath + window.location.search + window.location.hash)
    }
    document.title = pageMeta(employee).title
  }, [])

  // No scrolling behind the intro.
  useEffect(() => {
    const root = document.documentElement
    root.classList.toggle('is-locked', stage === 'intro')
    return () => root.classList.remove('is-locked')
  }, [stage])

  return (
    <>
      {stage !== 'done' && (
        <Intro
          onReveal={() => setStage((s) => (s === 'intro' ? 'revealed' : s))}
          onDone={() => setStage('done')}
        />
      )}
      <main className={stage === 'intro' ? 'is-waiting' : 'is-live'} inert={stage === 'intro' ? true : undefined}>
        <ProfileSection employee={employee} />
        <CompanySection />
      </main>
    </>
  )
}
