import { useEffect, useRef, useState } from 'react'
import '@fontsource/raleway/latin-300.css'
import '@fontsource/raleway/latin-400.css'
import '../yop-logo-motion.css'

// Opening screen: the brand's logo motion (pure CSS keyframes, see
// yop-logo-motion.css) plays on paper, holds for a beat, then the paper wipes
// up to uncover the card. Tap, click or any key skips it.

const DUR = 5.23 // seconds, the length of the supplied keyframes
const SETTLED = 0.62 // every keyframe has landed by 62% of DUR; the rest is dead air
const HOLD = 400 // ms the finished logo stays before leaving
const LEAVE = 150 // ms for the wipe; keep in sync with .intro transition in CSS

export default function Intro({ onReveal, onDone }) {
  const rootRef = useRef(null)
  const [leaving, setLeaving] = useState(false)
  // Callbacks change identity on every App render; the effect must not restart.
  const cb = useRef({ onReveal, onDone })
  cb.current = { onReveal, onDone }

  useEffect(() => {
    const root = rootRef.current
    const timers = []
    let leaveTimer = 0
    let left = false

    // The latest call wins, so skip() can pull a pending leave forward.
    const leave = (delay) => {
      if (left) return
      clearTimeout(leaveTimer)
      leaveTimer = setTimeout(() => {
        left = true
        setLeaving(true)
        // Start the card's entrance while the paper is still lifting.
        cb.current.onReveal?.()
        timers.push(setTimeout(() => cb.current.onDone?.(), LEAVE))
      }, delay)
    }

    const skip = () => {
      // Jump every keyframe to its last frame so the wipe shows the finished logo.
      root.getAnimations?.({ subtree: true }).forEach((a) => a.finish())
      leave(0)
    }

    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    // Reduced motion: the CSS lands every keyframe instantly, so only a short hold remains.
    leave(reduce ? 700 : DUR * SETTLED * 1000 + HOLD)

    const onKey = (e) => {
      if (e.key === 'Tab') return
      skip()
    }
    const el = root.closest('.intro')
    el.addEventListener('pointerdown', skip)
    window.addEventListener('keydown', onKey)

    return () => {
      clearTimeout(leaveTimer)
      timers.forEach(clearTimeout)
      el.removeEventListener('pointerdown', skip)
      window.removeEventListener('keydown', onKey)
    }
  }, [])

  return (
    <div className={`intro${leaving ? ' is-leaving' : ''}`} role="presentation">
      <div className="intro__logo">
        <div
          ref={rootRef}
          className="yop-root"
          style={{ '--yop-dur': `${DUR}s`, '--yop-loop': 1 }}
          role="img"
          aria-label="YourOffice Partners, Account on us"
        >
          <svg viewBox="0 0 1920 1080" aria-hidden="true">
            <rect className="yop-dash-l" width="1" height="8" fill="#111111" />
            <rect className="yop-dash-r" width="1" height="8" fill="#111111" />
            <rect className="yop-dash-t" width="8" height="1" fill="#111111" />
            <rect className="yop-dash-b" width="8" height="1" fill="#111111" />
          </svg>
          <svg className="yop-layer yop-mark" viewBox="0 0 1920 1080" aria-hidden="true">
            <g className="yop-pos">
              <g className="yop-shift-g">
                <g className="yop-spin">
                  <path
                    className="yop-grey"
                    pathLength="400"
                    d="M-124 -124 L0 -248 L248 0 L0 248 L-248 0 Z"
                    fill="none"
                    stroke="#A3A3A3"
                    strokeWidth="11"
                    strokeLinejoin="miter"
                  />
                </g>
              </g>
              <g className="yop-shift-m">
                <g className="yop-spin">
                  <path
                    className="yop-maroon"
                    pathLength="400"
                    d="M124 124 L0 248 L-248 0 L0 -248 L248 0 Z"
                    fill="none"
                    stroke="#660032"
                    strokeWidth="12"
                    strokeLinejoin="miter"
                  />
                </g>
              </g>
            </g>
          </svg>
          <svg className="yop-layer yop-word" viewBox="0 0 1920 1080" aria-hidden="true">
            <g className="yop-word-move">
              <text x="429.6" y="514" fontSize="119.3" fill="#660032">
                Y<tspan dx="-6">our</tspan>
                <tspan dx="6">Office</tspan>
              </text>
              <text x="421.4" y="688" fontSize="195.4" fill="#660032">
                Partners
              </text>
            </g>
          </svg>
          <svg className="yop-layer yop-tag" viewBox="0 0 1920 1080" aria-hidden="true">
            <g className="yop-tag-move">
              <text x="695.3" y="779" fontSize="69.5" fill="#A3A3A3">
                Account on us
              </text>
            </g>
          </svg>
        </div>
      </div>
    </div>
  )
}
