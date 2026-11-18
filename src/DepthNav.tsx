import { useEffect, useState } from 'react'

const MAX_DEPTH = 20

const DEPTH_SECTIONS: { id: string; label: string; depth: number }[] = [
  {
    id: 'about',
    label: 'Surface',
    depth: 0,
  },
  {
    id: 'news',
    label: 'News',
    depth: 2,
  },
  {
    id: 'media',
    label: 'Media',
    depth: 3.5,
  },
  {
    id: 'education',
    label: 'Education',
    depth: 5,
  },
  {
    id: 'research',
    label: 'Research',
    depth: 7,
  },
  {
    id: 'study-areas',
    label: 'Study Areas',
    depth: 9,
  },
  {
    id: 'publications',
    label: 'Publications',
    depth: 11,
  },
  {
    id: 'presentations',
    label: 'Talks',
    depth: 13,
  },
  {
    id: 'experience',
    label: 'Experience',
    depth: 15,
  },
  {
    id: 'skills',
    label: 'Skills',
    depth: 16.5,
  },
  {
    id: 'awards',
    label: 'Awards',
    depth: 17,
  },
  {
    id: 'guestbook',
    label: 'Guestbook',
    depth: 18.5,
  },
  {
    id: 'contact',
    label: 'Contact',
    depth: 20,
  },
]

export default function DepthNav() {
  const [progress, setProgress] = useState(0)
  const [activeId, setActiveId] = useState('about')
  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight
      setProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0)
      let current = 'about'
      for (const section of DEPTH_SECTIONS) {
        const el = document.getElementById(section.id)
        if (el && el.getBoundingClientRect().top <= 200) {
          current = section.id
        }
      }
      setActiveId(current)
    }
    window.addEventListener('scroll', handleScroll, {
      passive: true,
    })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  const depth = Math.round(progress * MAX_DEPTH)
  const activeSection = DEPTH_SECTIONS.find((section) => section.id === activeId)
  return (
    <div className="depth-indicator">
      <div className="depth-track">
        <div
          className="depth-fill"
          style={{
            height: `${progress * 100}%`,
          }}
        />
        <span className="depth-track-label depth-track-label-top">0 m</span>
        <span className="depth-track-label depth-track-label-bottom">
          -{MAX_DEPTH}
          {' m'}
        </span>
        {DEPTH_SECTIONS.map((section) => (
          <div
            key={section.id}
            className={`depth-tick-mark ${section.id === activeId ? 'active' : ''}`}
            style={{
              top: `${(section.depth / MAX_DEPTH) * 100}%`,
            }}
            onClick={() =>
              document.getElementById(section.id)?.scrollIntoView({
                behavior: 'smooth',
              })
            }
            title={section.label}
          />
        ))}
        <div
          className="depth-marker"
          style={{
            top: `${progress * 100}%`,
          }}
        >
          <div className="depth-marker-dot" />
          <span className="depth-label">
            -{depth}
            {' m · '}
            {activeSection?.label}
          </span>
        </div>
      </div>
    </div>
  )
}
