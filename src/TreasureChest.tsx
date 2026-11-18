import { useState } from 'react'

type ChestStage = 'closed' | 'opening' | 'open' | 'unrolling' | 'done'

export default function TreasureChest() {
  const [stage, setStage] = useState<ChestStage>('closed')
  const openChest = () => {
    if (stage === 'closed') {
      setStage('opening')
      setTimeout(() => setStage('open'), 600)
    }
  }
  const unrollScroll = () => {
    if (stage === 'open') {
      setStage('unrolling')
      setTimeout(() => {
        setStage('done')
        const link = document.createElement('a')
        link.href = '/Hsu_CV.pdf'
        link.download = 'Hsu_CV.pdf'
        link.click()
      }, 1800)
    }
  }
  const reset = () => {
    setStage('closed')
  }
  return (
    <div className={`treasure-chest stage-${stage}`}>
      <div className="tc-chest" onClick={openChest}>
        <svg viewBox="0 0 100 80" width="100" height="80">
          <rect
            x="8"
            y="40"
            width="84"
            height="38"
            rx="3"
            fill="#8d6e33"
            stroke="#6d4c1a"
            strokeWidth="2"
          />
          <line x1="12" y1="52" x2="88" y2="52" stroke="#6d4c1a" strokeWidth="1" opacity="0.5" />
          <line x1="12" y1="64" x2="88" y2="64" stroke="#6d4c1a" strokeWidth="1" opacity="0.5" />
          <rect x="6" y="39" width="88" height="4" rx="1" fill="#b8860b" opacity="0.4" />
          <g className="tc-lid">
            <path
              d="M8,40 L8,26 Q50,8 92,26 L92,40 Z"
              fill="#a67c3d"
              stroke="#6d4c1a"
              strokeWidth="2"
            />
            <path
              d="M14,38 Q50,20 86,38"
              fill="none"
              stroke="#6d4c1a"
              strokeWidth="1"
              opacity="0.4"
            />
            <rect x="6" y="38" width="88" height="4" rx="1" fill="#b8860b" opacity="0.3" />
          </g>
          <rect
            className="tc-lock"
            x="42"
            y="36"
            width="16"
            height="14"
            rx="2"
            fill="#ffd54f"
            stroke="#f9a825"
            strokeWidth="1.5"
          />
          <circle className="tc-lock" cx="50" cy="44" r="2.5" fill="#f9a825" />
          <path
            className="tc-sparkle s1"
            d="M20,18 L21,14 L22,18 L26,19 L22,20 L21,24 L20,20 L16,19 Z"
            fill="#fff9c4"
          />
          <path
            className="tc-sparkle s2"
            d="M78,12 L79,9 L80,12 L83,13 L80,14 L79,17 L78,14 L75,13 Z"
            fill="#fff9c4"
          />
          <path
            className="tc-sparkle s3"
            d="M50,6 L51,3 L52,6 L55,7 L52,8 L51,11 L50,8 L47,7 Z"
            fill="#fff9c4"
          />
        </svg>
        {stage === 'closed' && <span className="tc-hint">Click to open</span>}
      </div>
      {(stage === 'open' || stage === 'unrolling' || stage === 'done') && (
        <div className="tc-scroll-container" onClick={unrollScroll}>
          <div
            className={`tc-scroll ${stage === 'unrolling' || stage === 'done' ? 'unrolled' : ''}`}
          >
            <svg className="tc-scroll-rolled" viewBox="0 0 60 80" width="60" height="80">
              <rect
                x="10"
                y="10"
                width="40"
                height="60"
                rx="2"
                fill="#f5e6c8"
                stroke="#c4a265"
                strokeWidth="1.5"
              />
              <ellipse
                cx="30"
                cy="10"
                rx="22"
                ry="6"
                fill="#e8d5a8"
                stroke="#c4a265"
                strokeWidth="1.5"
              />
              <ellipse
                cx="30"
                cy="70"
                rx="22"
                ry="6"
                fill="#e8d5a8"
                stroke="#c4a265"
                strokeWidth="1.5"
              />
              <path d="M24,30 Q30,26 36,30 Q30,34 24,30 Z" fill="#c62828" opacity="0.8" />
              <line
                x1="30"
                y1="22"
                x2="30"
                y2="38"
                stroke="#c62828"
                strokeWidth="2"
                opacity="0.7"
              />
              <path
                d="M20,45 L24,49 M24,45 L20,49"
                stroke="#8d6e33"
                strokeWidth="1.5"
                opacity="0.5"
              />
              <path
                d="M36,45 L40,49 M40,45 L36,49"
                stroke="#8d6e33"
                strokeWidth="1.5"
                opacity="0.5"
              />
            </svg>
            <div className="tc-map">
              <svg viewBox="0 0 360 180" preserveAspectRatio="xMidYMid meet">
                <rect width="360" height="180" fill="#0a2a4a" />
                <rect x="0" y="0" width="360" height="180" fill="url(#bathyGrad)" opacity="0.5" />
                <defs>
                  <radialGradient id="bathyGrad" cx="50%" cy="50%" r="60%">
                    <stop offset="0%" stopColor="#1a5276" />
                    <stop offset="50%" stopColor="#0e3d5c" />
                    <stop offset="100%" stopColor="#061a2e" />
                  </radialGradient>
                </defs>
                <path
                  d="M180,10 Q178,40 175,60 Q170,80 168,100 Q172,120 180,140 Q185,155 182,175"
                  fill="none"
                  stroke="#1e6e8e"
                  strokeWidth="3"
                  opacity="0.6"
                />
                <path
                  d="M60,0 Q70,30 80,50 Q90,80 85,110 Q75,140 65,180"
                  fill="none"
                  stroke="#1a6080"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <path
                  d="M300,10 Q290,50 285,80 Q280,120 290,160"
                  fill="none"
                  stroke="#1a6080"
                  strokeWidth="2"
                  opacity="0.4"
                />
                <path d="M100,58 Q120,55 140,60 Q130,62 110,64 Z" fill="#2e86ab" opacity="0.6" />
                <path d="M220,75 Q250,70 270,78 Q250,82 230,80 Z" fill="#2e86ab" opacity="0.5" />
                <path
                  d="M130,110 Q160,105 180,112 Q155,118 135,115 Z"
                  fill="#2e86ab"
                  opacity="0.5"
                />
                <path
                  d="M60,30 Q80,25 95,35 Q100,50 95,60 Q85,70 70,75 Q55,70 50,55 Q48,40 60,30 Z"
                  fill="#4a7c59"
                  opacity="0.7"
                />
                <path
                  d="M85,90 Q95,85 100,95 Q105,110 100,125 Q90,140 80,135 Q75,120 78,105 Z"
                  fill="#4a7c59"
                  opacity="0.7"
                />
                <path
                  d="M165,30 Q180,28 185,40 Q183,48 178,50 Q175,45 170,42 Z"
                  fill="#4a7c59"
                  opacity="0.6"
                />
                <path
                  d="M170,55 Q180,50 188,60 Q190,80 185,100 Q178,115 170,110 Q165,95 168,75 Z"
                  fill="#4a7c59"
                  opacity="0.7"
                />
                <path
                  d="M195,25 Q230,20 260,30 Q280,35 285,50 Q275,55 260,52 Q240,55 225,48 Q210,45 200,38 Z"
                  fill="#4a7c59"
                  opacity="0.7"
                />
                <path
                  d="M260,110 Q280,105 290,112 Q288,125 278,128 Q265,126 260,118 Z"
                  fill="#4a7c59"
                  opacity="0.65"
                />
                {[30, 60, 90, 120, 150].map((item) => (
                  <line
                    key={`h${item}`}
                    x1="0"
                    y1={item}
                    x2="360"
                    y2={item}
                    stroke="#ffffff"
                    strokeWidth="0.3"
                    opacity="0.15"
                  />
                ))}
                {[60, 120, 180, 240, 300].map((item) => (
                  <line
                    key={`v${item}`}
                    x1={item}
                    y1="0"
                    x2={item}
                    y2="180"
                    stroke="#ffffff"
                    strokeWidth="0.3"
                    opacity="0.15"
                  />
                ))}
                <defs>
                  <linearGradient id="depthLeg" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#7fdbff" />
                    <stop offset="30%" stopColor="#2e86ab" />
                    <stop offset="60%" stopColor="#1a5276" />
                    <stop offset="100%" stopColor="#061a2e" />
                  </linearGradient>
                </defs>
                <rect x="335" y="30" width="10" height="80" fill="url(#depthLeg)" rx="2" />
                <text x="340" y="26" fill="#aaa" fontSize="6" textAnchor="middle">
                  0m
                </text>
                <text x="340" y="120" fill="#aaa" fontSize="6" textAnchor="middle">
                  -11km
                </text>
                <text
                  x="180"
                  y="172"
                  fill="#ffd54f"
                  fontSize="8"
                  textAnchor="middle"
                  fontWeight="bold"
                >
                  Global Bathymetry
                </text>
              </svg>
              <div className="tc-map-label">Downloading CV...</div>
            </div>
          </div>
          {stage === 'open' && <span className="tc-scroll-hint">Click the scroll!</span>}
        </div>
      )}
      {stage === 'done' && (
        <button className="tc-reset" onClick={reset}>
          Close
        </button>
      )}
    </div>
  )
}
