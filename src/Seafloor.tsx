import TreasureChest from './TreasureChest'

export default function Seafloor() {
  return (
    <div className="seafloor-section" aria-hidden="true">
      <div className="sand-ground" />
      <svg className="coral c1" viewBox="0 0 100 90" width="100" height="90">
        <path
          d="M50,90 L50,55 Q40,38 30,48 Q20,28 26,16 M50,55 Q60,38 56,22 M50,62 Q70,42 66,26 Q74,16 68,8"
          fill="none"
          stroke="#e57373"
          strokeWidth="4"
          strokeLinecap="round"
          opacity="0.22"
        />
        <circle cx="26" cy="16" r="8" fill="#e57373" opacity="0.14" />
        <circle cx="56" cy="22" r="7" fill="#ef5350" opacity="0.14" />
        <circle cx="68" cy="8" r="7.5" fill="#e57373" opacity="0.14" />
      </svg>
      <svg className="coral c2" viewBox="0 0 90 85" width="90" height="85">
        <path
          d="M45,85 L45,48 Q36,30 26,38 Q16,18 24,8 M45,52 Q54,32 50,18 M45,60 Q64,38 58,22"
          fill="none"
          stroke="#f48fb1"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.2"
        />
        <circle cx="24" cy="8" r="7" fill="#f48fb1" opacity="0.12" />
        <circle cx="50" cy="18" r="6" fill="#ec407a" opacity="0.12" />
        <circle cx="58" cy="22" r="5.5" fill="#f48fb1" opacity="0.12" />
      </svg>
      <svg className="coral c3" viewBox="0 0 80 72" width="80" height="72">
        <path
          d="M40,72 L40,40 Q30,24 22,32 Q14,14 20,6 M40,44 Q50,26 46,14"
          fill="none"
          stroke="#ce93d8"
          strokeWidth="3.5"
          strokeLinecap="round"
          opacity="0.18"
        />
        <circle cx="20" cy="6" r="7" fill="#ce93d8" opacity="0.12" />
        <circle cx="46" cy="14" r="6" fill="#ba68c8" opacity="0.12" />
      </svg>
      <svg className="coral c4" viewBox="0 0 70 65" width="70" height="65">
        <path
          d="M35,65 L35,38 Q26,24 20,30 Q12,14 18,6 M35,42 Q44,26 40,14"
          fill="none"
          stroke="#ffab91"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.18"
        />
        <circle cx="18" cy="6" r="5.5" fill="#ffab91" opacity="0.12" />
        <circle cx="40" cy="14" r="5" fill="#ff8a65" opacity="0.12" />
      </svg>
      {[10, 22, 42, 58, 72, 85].map((left, i) => (
        <svg
          key={i}
          className={`seagrass sg-${i}`}
          style={{
            left: `${left}%`,
          }}
          viewBox="0 0 40 70"
          width="40"
          height="70"
        >
          <path
            d={`M20,70 Q${14 - (i % 3)},46 ${10 + (i % 4)},24 Q${8 + (i % 3)},10 ${12 + (i % 3)},2`}
            fill="none"
            stroke="#66bb6a"
            strokeWidth="2.5"
            strokeLinecap="round"
            opacity="0.17"
          />
          <path
            d={`M20,70 Q${22 + (i % 3)},40 ${19 + (i % 2)},14 Q${18 + (i % 3)},6 ${20 + (i % 2)},1`}
            fill="none"
            stroke="#81c784"
            strokeWidth="2"
            strokeLinecap="round"
            opacity="0.14"
          />
          <path
            d={`M20,70 Q${24 + (i % 2)},48 ${26 - (i % 3)},26 Q${28 - (i % 2)},12 ${24 + (i % 3)},5`}
            fill="none"
            stroke="#a5d6a7"
            strokeWidth="1.8"
            strokeLinecap="round"
            opacity="0.12"
          />
        </svg>
      ))}
      {[12, 28, 48, 65, 80].map((left, i) => (
        <div
          key={i}
          className={`bubble b-${i}`}
          style={{
            left: `${left}%`,
          }}
        />
      ))}
      <svg className="starfish sf-1" viewBox="0 0 40 40" width="40" height="40">
        <path
          d="M20,3 L23,15 L35,15 L25,22 L29,34 L20,27 L11,34 L15,22 L5,15 L17,15 Z"
          fill="#ff7043"
          opacity="0.14"
        />
      </svg>
      <svg className="starfish sf-2" viewBox="0 0 32 32" width="32" height="32">
        <path
          d="M16,2 L19,12 L28,12 L21,18 L24,28 L16,22 L8,28 L11,18 L4,12 L13,12 Z"
          fill="#ffab91"
          opacity="0.12"
        />
      </svg>
      <svg className="shell sh-1" viewBox="0 0 28 24" width="28" height="24">
        <path d="M14,3 Q24,10 20,22 L8,22 Q4,10 14,3 Z" fill="#d7ccc8" opacity="0.14" />
        <path
          d="M14,3 L14,22 M14,8 Q19,13 18,19 M14,8 Q9,13 10,19"
          fill="none"
          stroke="#bcaaa4"
          strokeWidth="1"
          opacity="0.12"
        />
      </svg>
      <TreasureChest />
    </div>
  )
}
