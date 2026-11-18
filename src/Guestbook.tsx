import { useEffect, useRef } from 'react'

interface GuestbookProps {
  theme: 'light' | 'dark'
}

export default function Guestbook({ theme }: GuestbookProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  useEffect(() => {
    const container = containerRef.current
    if (!container) return
    container.innerHTML = ''
    const script = document.createElement('script')
    script.src = 'https://giscus.app/client.js'
    script.setAttribute('data-repo', 'Amy-Hsu/Amy-Hsu.github.io')
    script.setAttribute('data-repo-id', 'R_kgDORgh3Ww')
    script.setAttribute('data-category', 'General')
    script.setAttribute('data-category-id', 'DIC_kwDORgh3W84DIXOb')
    script.setAttribute('data-mapping', 'specific')
    script.setAttribute('data-term', 'Guestbook')
    script.setAttribute('data-strict', '0')
    script.setAttribute('data-reactions-enabled', '1')
    script.setAttribute('data-emit-metadata', '0')
    script.setAttribute('data-input-position', 'top')
    script.setAttribute('data-theme', theme === 'dark' ? 'dark_dimmed' : 'light')
    script.setAttribute('data-lang', 'en')
    script.setAttribute('data-loading', 'lazy')
    script.crossOrigin = 'anonymous'
    script.async = true
    container.appendChild(script)
  }, [theme])
  return <div ref={containerRef} className="guestbook-widget" />
}
