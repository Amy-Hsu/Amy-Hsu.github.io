import type { ReactNode } from 'react'
import { useInView } from './useInView'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
}

export default function FadeIn({ children, className = '', delay = 0 }: FadeInProps) {
  const [ref, inView] = useInView(0.1)
  return (
    <div
      ref={ref}
      className={`fade-section ${inView ? 'visible' : ''} ${className}`}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  )
}
