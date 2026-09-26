import { useEffect, useRef, useState } from 'react'

const GAP = 12 // px between ticks
const MAJOR_EVERY = 5

// The seam between the two screens: a ledger ruler whose ticks lift in a
// wave that travels across as the page scrolls.
export default function Ruler() {
  const ref = useRef(null)
  const [count, setCount] = useState(40)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const measure = () => setCount(Math.ceil(el.clientWidth / GAP) + 1)
    measure()
    const ro = new ResizeObserver(measure)
    ro.observe(el)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    const el = ref.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const ticks = el.children
    let frame = 0

    const paint = () => {
      frame = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      // 0 when the ruler enters from the bottom, 1 when it reaches the top.
      const progress = Math.min(1, Math.max(0, 1 - rect.top / vh))
      const crest = -0.25 + progress * 1.5 // crest travels past both edges
      const n = ticks.length
      for (let i = 0; i < n; i++) {
        const d = Math.abs(i / n - crest)
        const lift = Math.max(0, 1 - d * 4.5) // width of the wave
        const eased = lift * lift * (3 - 2 * lift)
        ticks[i].style.setProperty('--lift', eased.toFixed(3))
      }
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(paint)
    }

    paint()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [count])

  return (
    <div className="ruler" ref={ref} aria-hidden="true">
      {Array.from({ length: count }, (_, i) => (
        <span key={i} className={i % MAJOR_EVERY === 0 ? 'tick tick--major' : 'tick'} />
      ))}
    </div>
  )
}
