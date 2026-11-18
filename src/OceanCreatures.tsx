import { useCallback, useEffect, useRef, useState } from 'react'
import type { MouseEvent, ReactNode } from 'react'

interface CreatureProps {
  className: string
  flipped?: boolean
  children: ReactNode
}

interface LinkCreatureProps extends CreatureProps {
  label: string
  href: string
}

const FLEE_MESSAGES = [
  'Eek! A human!',
  'Leave me alone!',
  "Not now, I'm vibing!",
  'Too slow, landlubber!',
  'Catch me if you can!',
  'Bloop bloop!',
  'Nope nope nope!',
  'Personal space, please!',
  "I'm late for a meeting!",
  'You scared my stripes off!',
  'AHHHH!',
  'Was that a shark?! Oh, just you.',
  'BRB, swimming to Fiji!',
  'Tell my family I loved them!',
]

const CHAT_MESSAGES = [
  'Hi there!',
  'Hello, human!',
  'I need a coffee...',
  'Nice day for a swim!',
  'Bloop bloop!',
  'Just keep swimming!',
  "What's up?",
  'Welcome to the deep!',
  'Whoa, a visitor!',
  '*blows bubbles*',
  'Glub glub!',
  'You found me!',
  "Plot twist: I'm just a CSS animation",
  'Error 404: Fish not found',
  "I've been swimming all day!",
  'My therapist warned me about this',
  'Is this your first dive?',
  "Water's great down here!",
  'Got any fish food?',
  "I'm basically Amy's pet",
  "Fun fact: I'm made of SVG!",
  'Wheee!',
]

function randomPick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)]
}

function FleeingCreature({ className, flipped, children }: CreatureProps) {
  const [fleeing, setFleeing] = useState(false)
  const [message, setMessage] = useState('')
  const tooltipSide = flipped ? 'tooltip-flipped' : 'tooltip-normal'
  return (
    <div
      className={`ocean-creature ${className} ${fleeing ? 'flee' : ''}`}
      onMouseEnter={() => {
        setMessage(randomPick(FLEE_MESSAGES))
        setFleeing(true)
      }}
      onAnimationEnd={() => {
        if (fleeing) {
          setFleeing(false)
        }
      }}
    >
      {fleeing && (
        <span className={`creature-tooltip creature-tooltip-flee ${tooltipSide}`}>{message}</span>
      )}
      {children}
    </div>
  )
}

function ChattyCreature({ className, flipped, children }: CreatureProps) {
  const [chatting, setChatting] = useState(false)
  const [message, setMessage] = useState('')
  const ref = useRef<HTMLDivElement>(null)
  const rafRef = useRef(0)
  const chattingRef = useRef(false)
  useEffect(() => {
    chattingRef.current = chatting
  }, [chatting])
  const handleEnter = useCallback((e: MouseEvent<HTMLDivElement>) => {
    setMessage(randomPick(CHAT_MESSAGES))
    setChatting(true)
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = e.clientX - cx
    const dy = e.clientY - cy
    const angle = Math.atan2(dy, dx)
    el.style.transition = 'transform 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)'
    el.style.transform = `translate(${-Math.cos(angle) * 30}px, ${-Math.sin(angle) * 30}px)`
    cancelAnimationFrame(rafRef.current)
    let phase = 0
    const bob = () => {
      phase += 0.04
      const x = Math.sin(phase) * 15
      const y = Math.cos(phase * 1.3) * 10
      el.style.transform = `translate(${x}px, ${y}px)`
      if (chattingRef.current) {
        rafRef.current = requestAnimationFrame(bob)
      }
    }
    setTimeout(() => {
      if (chattingRef.current) {
        el.style.transition = 'none'
        bob()
      }
    }, 800)
  }, [])
  const handleLeave = useCallback(() => {
    setChatting(false)
    cancelAnimationFrame(rafRef.current)
    const el = ref.current
    if (el) {
      el.style.transition = 'transform 0.6s ease-out'
      el.style.transform = 'translate(0, 0)'
    }
  }, [])
  return (
    <div
      ref={ref}
      className={`ocean-creature ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {chatting && (
        <span
          className={`creature-tooltip creature-tooltip-chat ${flipped ? 'tooltip-flipped' : 'tooltip-normal'}`}
        >
          {message}
        </span>
      )}
      {children}
    </div>
  )
}

const LINK_MESSAGES: Record<string, string[]> = {
  publications: [
    "Check out Amy's publications!",
    '186 citations and counting!',
    'Read her papers!',
    'Want to see some science?',
    'Peer-reviewed and everything!',
    'Click me, I dare you!',
    'I guard the publications section!',
    'These papers are deeper than I swim!',
  ],
  research: [
    'Dive into the research!',
    'Bathymetry from space? Yes, really!',
    "See what Amy's working on!",
    'Deep learning meets deep water!',
    'Click for some serious science!',
    "I'm basically a research assistant!",
    'From satellites to seafloor!',
    'Physics-informed neural nets, baby!',
  ],
  contact: [
    'Download her CV!',
    'Get in touch!',
    'Say hello!',
    "Let's connect!",
    "She's looking for collaborators!",
    "Hire her! (I'm biased though)",
    'This way to the contact info!',
    "Don't be shy, click me!",
  ],
  'study-areas': [
    'Explore the study areas!',
    'From Great Barrier Reef to Pratas!',
    'See where the magic happens!',
    "I've been to all these reefs!",
    'Maps! Glorious maps!',
    'Click for an underwater world tour!',
  ],
  awards: [
    'Check out the awards!',
    'So many shiny trophies!',
    'Presidential Fellowship, no big deal!',
    'Award-winning research ahead!',
    "I'm impressed and I'm just a jellyfish!",
    'Click for bragging rights!',
  ],
}

function LinkCreature({ className, label, href, flipped, children }: LinkCreatureProps) {
  const [showTip, setShowTip] = useState(false)
  const messageRef = useRef('')
  const targetId = href.replace('#', '')
  const handleEnter = () => {
    const messages = LINK_MESSAGES[targetId] || [`Check out ${label}!`]
    messageRef.current = randomPick(messages)
    setShowTip(true)
  }
  const scrollToTarget = () => {
    document.getElementById(targetId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }
  return (
    <div
      className={`ocean-creature ${className}`}
      onMouseEnter={handleEnter}
      onMouseLeave={() => setShowTip(false)}
      onClick={scrollToTarget}
    >
      {children}
      {showTip && (
        <a
          href={href}
          className={`creature-tooltip ${flipped ? 'tooltip-flipped' : 'tooltip-normal'}`}
          onClick={(e) => {
            e.preventDefault()
            scrollToTarget()
          }}
        >
          {/* The message is picked on hover and kept stable while the tooltip is shown. */}
          {/* eslint-disable-next-line react-hooks/refs */}
          {messageRef.current}
        </a>
      )}
    </div>
  )
}

export function GuideFish({ onClick }: { onClick: () => void }) {
  return (
    <div className="guide-fish-wrapper" onClick={onClick}>
      <div className="guide-fish">
        <svg viewBox="0 0 70 80" width="70" height="80">
          <ellipse cx="30" cy="20" rx="22" ry="18" fill="#ffd54f" opacity="0.35" />
          <ellipse cx="30" cy="20" rx="14" ry="10" fill="#fff9c4" opacity="0.2" />
          <circle cx="24" cy="18" r="2.5" fill="#e65100" opacity="0.35" />
          <circle cx="36" cy="18" r="2.5" fill="#e65100" opacity="0.35" />
          <circle cx="25" cy="17" r="1" fill="#fff" opacity="0.3" />
          <circle cx="37" cy="17" r="1" fill="#fff" opacity="0.3" />
          <path
            d="M26,24 Q30,28 34,24"
            fill="none"
            stroke="#e65100"
            strokeWidth="1.2"
            opacity="0.25"
          />
          <path
            d="M48,30 Q56,28 64,26 L68,24"
            fill="none"
            stroke="#ffb300"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M14,34 Q18,50 14,65"
            fill="none"
            stroke="#ffca28"
            strokeWidth="1.5"
            opacity="0.18"
          />
          <path
            d="M22,36 Q26,55 22,72"
            fill="none"
            stroke="#ffca28"
            strokeWidth="1.2"
            opacity="0.15"
          />
          <path
            d="M30,38 Q28,56 32,74"
            fill="none"
            stroke="#ffca28"
            strokeWidth="1.2"
            opacity="0.15"
          />
          <path
            d="M38,36 Q34,55 38,72"
            fill="none"
            stroke="#ffca28"
            strokeWidth="1.2"
            opacity="0.15"
          />
          <path
            d="M46,34 Q42,50 46,65"
            fill="none"
            stroke="#ffca28"
            strokeWidth="1.5"
            opacity="0.18"
          />
        </svg>
      </div>
    </div>
  )
}

export default function OceanCreatures() {
  return (
    <div className="ocean-creatures" aria-hidden="true">
      <FleeingCreature className="fish-1" flipped>
        <svg viewBox="0 0 120 60" width="120" height="60">
          <path d="M15,30 Q35,6 90,30 Q35,54 15,30 Z" fill="#ff7043" opacity="0.22" />
          <path d="M90,30 L112,14 L112,46 Z" fill="#e64a19" opacity="0.18" />
          <path d="M60,10 Q62,20 58,30" fill="none" stroke="#fff" strokeWidth="2" opacity="0.12" />
          <path d="M68,8 Q70,22 66,35" fill="none" stroke="#fff" strokeWidth="2" opacity="0.12" />
          <path
            d="M50,6 L55,16"
            stroke="#ff7043"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.16"
          />
          <path
            d="M40,52 L44,42"
            stroke="#ff7043"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.14"
          />
          <circle cx="32" cy="25" r="4" fill="#333" opacity="0.18" />
          <circle cx="33" cy="24" r="1.5" fill="#fff" opacity="0.12" />
        </svg>
      </FleeingCreature>
      <LinkCreature className="fish-2" label="Publications" href="#publications">
        <svg viewBox="0 0 110 56" width="110" height="56">
          <path d="M12,28 Q30,4 80,28 Q30,52 12,28 Z" fill="#ff9800" opacity="0.24" />
          <path d="M80,28 L100,14 L100,42 Z" fill="#f57c00" opacity="0.18" />
          <circle cx="28" cy="24" r="3.5" fill="#212121" opacity="0.18" />
          <circle cx="29" cy="23" r="1.2" fill="#fff" opacity="0.14" />
          <path d="M30,6 Q30,28 30,50" fill="none" stroke="#fff" strokeWidth="5" opacity="0.18" />
          <path d="M52,4 Q52,28 52,52" fill="none" stroke="#fff" strokeWidth="5" opacity="0.18" />
          <path d="M70,10 Q70,28 70,46" fill="none" stroke="#fff" strokeWidth="4" opacity="0.15" />
        </svg>
      </LinkCreature>
      <ChattyCreature className="fish-3" flipped>
        <svg viewBox="0 0 110 60" width="110" height="60">
          <path d="M14,30 Q32,4 84,30 Q32,56 14,30 Z" fill="#1e88e5" opacity="0.22" />
          <path d="M84,30 L104,16 L104,44 Z" fill="#1565c0" opacity="0.16" />
          <circle cx="30" cy="26" r="3.5" fill="#0d47a1" opacity="0.22" />
          <circle cx="31" cy="25" r="1.2" fill="#fff" opacity="0.14" />
          <path
            d="M38,12 Q55,22 70,14 Q80,28 70,42 Q55,34 38,44 Q28,30 38,12 Z"
            fill="#0d47a1"
            opacity="0.08"
          />
          <path
            d="M80,28 L90,30"
            stroke="#fdd835"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.14"
          />
        </svg>
      </ChattyCreature>
      <LinkCreature className="fish-4" label="Research" href="#research">
        <svg viewBox="0 0 100 90" width="100" height="90">
          <path d="M20,45 Q35,4 78,45 Q35,86 20,45 Z" fill="#ab47bc" opacity="0.18" />
          <path
            d="M30,8 L38,22"
            stroke="#9c27b0"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.14"
          />
          <path
            d="M30,82 L38,68"
            stroke="#9c27b0"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.14"
          />
          <path d="M78,45 L92,34 L92,56 Z" fill="#7b1fa2" opacity="0.14" />
          <circle cx="36" cy="40" r="4" fill="#4a148c" opacity="0.2" />
          <circle cx="37" cy="39" r="1.5" fill="#fff" opacity="0.12" />
          <path
            d="M48,18 L52,45 L48,72"
            fill="none"
            stroke="#e1bee7"
            strokeWidth="2"
            opacity="0.14"
          />
          <path
            d="M58,22 L62,45 L58,68"
            fill="none"
            stroke="#e1bee7"
            strokeWidth="1.5"
            opacity="0.1"
          />
        </svg>
      </LinkCreature>
      <LinkCreature className="manta" label="Download CV" href="#contact" flipped>
        <svg viewBox="0 0 200 90" width="200" height="90">
          <path
            d="M100,18 Q50,0 10,35 Q40,44 100,38 Q160,44 190,35 Q150,0 100,18 Z"
            fill="var(--accent)"
            opacity="0.12"
          />
          <path
            d="M100,38 L100,80 L92,75 M100,80 L108,75"
            fill="none"
            stroke="var(--accent)"
            strokeWidth="2.5"
            opacity="0.1"
          />
          <ellipse cx="100" cy="30" rx="30" ry="8" fill="var(--accent)" opacity="0.04" />
          <circle cx="70" cy="28" r="3" fill="var(--accent)" opacity="0.14" />
          <circle cx="130" cy="28" r="3" fill="var(--accent)" opacity="0.14" />
        </svg>
      </LinkCreature>
      <FleeingCreature className="dolphin" flipped>
        <svg viewBox="0 0 180 70" width="180" height="70">
          <path
            d="M10,42 Q25,18 55,24 Q90,10 130,26 Q155,16 168,28 L174,22 Q170,32 155,34 Q130,40 90,36 Q55,44 30,46 Q18,48 10,42 Z"
            fill="#546e7a"
            opacity="0.14"
          />
          <path
            d="M130,26 Q136,14 144,18"
            fill="none"
            stroke="#546e7a"
            strokeWidth="3"
            strokeLinecap="round"
            opacity="0.12"
          />
          <circle cx="46" cy="30" r="3" fill="#263238" opacity="0.14" />
          <circle cx="47" cy="29" r="1" fill="#fff" opacity="0.1" />
        </svg>
      </FleeingCreature>
      <LinkCreature className="turtle-1" label="Study Areas" href="#study-areas">
        <svg viewBox="0 0 140 100" width="140" height="100">
          <ellipse cx="70" cy="50" rx="36" ry="26" fill="#558b2f" opacity="0.16" />
          <ellipse cx="70" cy="50" rx="28" ry="20" fill="#689f38" opacity="0.08" />
          <path
            d="M70,30 L82,38 L82,52 L70,60 L58,52 L58,38 Z"
            fill="none"
            stroke="#33691e"
            strokeWidth="1.2"
            opacity="0.08"
          />
          <ellipse cx="108" cy="44" rx="10" ry="7" fill="#7cb342" opacity="0.14" />
          <circle cx="114" cy="42" r="2" fill="#33691e" opacity="0.14" />
          <path d="M42,38 L18,24 Q14,22 16,26 L34,42" fill="#7cb342" opacity="0.12" />
          <path d="M98,38 L122,24 Q126,22 124,26 L106,42" fill="#7cb342" opacity="0.12" />
          <path d="M44,62 L24,80 Q22,84 26,82 L48,66" fill="#7cb342" opacity="0.1" />
          <path d="M96,62 L116,80 Q118,84 114,82 L92,66" fill="#7cb342" opacity="0.1" />
        </svg>
      </LinkCreature>
      <ChattyCreature className="turtle-2" flipped>
        <svg viewBox="0 0 110 80" width="110" height="80">
          <ellipse cx="55" cy="40" rx="28" ry="20" fill="#43a047" opacity="0.14" />
          <ellipse cx="55" cy="40" rx="20" ry="14" fill="#66bb6a" opacity="0.06" />
          <ellipse cx="84" cy="35" rx="8" ry="5.5" fill="#66bb6a" opacity="0.12" />
          <circle cx="89" cy="33" r="1.8" fill="#2e7d32" opacity="0.12" />
          <path d="M32,30 L12,18 Q8,16 10,20 L28,36" fill="#66bb6a" opacity="0.1" />
          <path d="M78,30 L98,18 Q102,16 100,20 L82,36" fill="#66bb6a" opacity="0.1" />
          <path d="M34,52 L18,66 Q16,70 20,68 L38,56" fill="#66bb6a" opacity="0.08" />
          <path d="M76,52 L92,66 Q94,70 90,68 L72,56" fill="#66bb6a" opacity="0.08" />
        </svg>
      </ChattyCreature>
      <LinkCreature className="jellyfish" label="Awards" href="#awards">
        <svg viewBox="0 0 80 120" width="80" height="120">
          <ellipse cx="40" cy="28" rx="28" ry="22" fill="#ce93d8" opacity="0.1" />
          <ellipse cx="40" cy="28" rx="20" ry="14" fill="#e1bee7" opacity="0.06" />
          <path
            d="M12,34 Q20,42 28,34"
            fill="none"
            stroke="#ce93d8"
            strokeWidth="1.5"
            opacity="0.08"
          />
          <path
            d="M28,34 Q36,42 44,34"
            fill="none"
            stroke="#ce93d8"
            strokeWidth="1.5"
            opacity="0.08"
          />
          <path
            d="M44,34 Q52,42 60,34"
            fill="none"
            stroke="#ce93d8"
            strokeWidth="1.5"
            opacity="0.08"
          />
          <path
            d="M16,38 Q22,65 16,100"
            fill="none"
            stroke="#ce93d8"
            strokeWidth="1.5"
            opacity="0.08"
          />
          <path
            d="M28,40 Q34,70 28,110"
            fill="none"
            stroke="#ce93d8"
            strokeWidth="1.2"
            opacity="0.07"
          />
          <path
            d="M40,42 Q38,75 42,115"
            fill="none"
            stroke="#ce93d8"
            strokeWidth="1.2"
            opacity="0.07"
          />
          <path
            d="M52,40 Q46,70 52,110"
            fill="none"
            stroke="#ce93d8"
            strokeWidth="1.2"
            opacity="0.07"
          />
          <path
            d="M64,38 Q58,65 64,100"
            fill="none"
            stroke="#ce93d8"
            strokeWidth="1.5"
            opacity="0.08"
          />
        </svg>
      </LinkCreature>
      <FleeingCreature className="school" flipped>
        <svg viewBox="0 0 160 80" width="160" height="80">
          <path d="M10,20 Q22,12 36,20 Q22,28 10,20 Z" fill="#4fc3f7" opacity="0.14" />
          <path d="M36,20 L44,16 L44,24 Z" fill="#4fc3f7" opacity="0.1" />
          <circle cx="18" cy="18" r="1.5" fill="#0277bd" opacity="0.12" />
          <path d="M30,40 Q42,32 56,40 Q42,48 30,40 Z" fill="#4fc3f7" opacity="0.14" />
          <path d="M56,40 L64,36 L64,44 Z" fill="#4fc3f7" opacity="0.1" />
          <circle cx="38" cy="38" r="1.5" fill="#0277bd" opacity="0.12" />
          <path d="M15,55 Q27,47 41,55 Q27,63 15,55 Z" fill="#4fc3f7" opacity="0.14" />
          <path d="M41,55 L49,51 L49,59 Z" fill="#4fc3f7" opacity="0.1" />
          <circle cx="23" cy="53" r="1.5" fill="#0277bd" opacity="0.12" />
          <path d="M60,22 Q72,14 86,22 Q72,30 60,22 Z" fill="#4fc3f7" opacity="0.12" />
          <path d="M86,22 L94,18 L94,26 Z" fill="#4fc3f7" opacity="0.08" />
          <circle cx="68" cy="20" r="1.5" fill="#0277bd" opacity="0.1" />
          <path d="M50,65 Q62,57 76,65 Q62,73 50,65 Z" fill="#4fc3f7" opacity="0.12" />
          <path d="M76,65 L84,61 L84,69 Z" fill="#4fc3f7" opacity="0.08" />
          <circle cx="58" cy="63" r="1.5" fill="#0277bd" opacity="0.1" />
          <path d="M85,45 Q97,37 111,45 Q97,53 85,45 Z" fill="#4fc3f7" opacity="0.11" />
          <path d="M111,45 L119,41 L119,49 Z" fill="#4fc3f7" opacity="0.08" />
          <circle cx="93" cy="43" r="1.5" fill="#0277bd" opacity="0.1" />
        </svg>
      </FleeingCreature>
    </div>
  )
}
