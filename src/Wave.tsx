interface WaveProps {
  flip?: boolean
  color?: string
}

export default function Wave({ flip = false, color = 'var(--wave-color)' }: WaveProps) {
  return (
    <div className={`wave-divider ${flip ? 'wave-flip' : ''}`}>
      <svg viewBox="0 0 1440 80" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M0,40 C180,80 360,0 540,40 C720,80 900,0 1080,40 C1260,80 1440,20 1440,40 L1440,80 L0,80 Z"
          fill={color}
          opacity="0.08"
        />
        <path
          d="M0,50 C200,70 400,10 600,50 C800,90 1000,10 1200,50 C1350,75 1440,30 1440,50 L1440,80 L0,80 Z"
          fill={color}
          opacity="0.05"
        />
      </svg>
    </div>
  )
}
