type Props = { className?: string; size?: number };

// Polished "Doctor Bee" mascot — black & yellow with a tiny head mirror and stethoscope.
export function Bee({ className = "", size = 96 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 160 160"
      className={`drop-shadow-[0_10px_22px_rgba(0,0,0,0.22)] ${className}`}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="beeBody" cx="50%" cy="40%" r="65%">
          <stop offset="0%" stopColor="#FFE066" />
          <stop offset="60%" stopColor="#FFC107" />
          <stop offset="100%" stopColor="#E0A800" />
        </radialGradient>
        <radialGradient id="beeHead" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stopColor="#3a3a3a" />
          <stop offset="100%" stopColor="#0a0a0a" />
        </radialGradient>
        <linearGradient id="wingGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
          <stop offset="100%" stopColor="#cfeaff" stopOpacity="0.55" />
        </linearGradient>
      </defs>

      {/* Wings (behind body) */}
      <g style={{ transformOrigin: "80px 60px" }} className="bee-wing-left">
        <ellipse cx="58" cy="54" rx="26" ry="14" fill="url(#wingGrad)" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M40 50 Q58 46 76 56" stroke="#1a1a1a" strokeWidth="1" fill="none" opacity=".4" />
      </g>
      <g style={{ transformOrigin: "80px 60px" }} className="bee-wing-right">
        <ellipse cx="102" cy="54" rx="26" ry="14" fill="url(#wingGrad)" stroke="#1a1a1a" strokeWidth="2" />
        <path d="M84 56 Q102 46 120 50" stroke="#1a1a1a" strokeWidth="1" fill="none" opacity=".4" />
      </g>

      {/* Body */}
      <ellipse cx="80" cy="98" rx="42" ry="34" fill="url(#beeBody)" stroke="#1a1a1a" strokeWidth="3" />
      {/* Stripes */}
      <path d="M52 86 Q58 100 56 116" stroke="#1a1a1a" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M80 80 Q82 100 80 122" stroke="#1a1a1a" strokeWidth="7" fill="none" strokeLinecap="round" />
      <path d="M108 86 Q102 100 104 116" stroke="#1a1a1a" strokeWidth="7" fill="none" strokeLinecap="round" />
      {/* Body shine */}
      <ellipse cx="68" cy="82" rx="14" ry="6" fill="#fff8d6" opacity=".55" />
      {/* Stinger */}
      <path d="M122 100 L134 104 L122 108 Z" fill="#1a1a1a" />

      {/* Stethoscope around neck */}
      <path
        d="M58 64 Q50 86 62 96 Q74 104 70 118"
        stroke="#0e7490"
        strokeWidth="3.2"
        fill="none"
        strokeLinecap="round"
      />
      <circle cx="70" cy="120" r="5.5" fill="#0e7490" stroke="#083344" strokeWidth="1.5" />
      <circle cx="70" cy="120" r="2.4" fill="#67e8f9" />

      {/* Head */}
      <circle cx="46" cy="74" r="22" fill="url(#beeHead)" stroke="#000" strokeWidth="2" />
      {/* Cheek glow */}
      <circle cx="38" cy="82" r="3.2" fill="#ff6b6b" opacity=".55" />
      {/* Eyes */}
      <circle cx="40" cy="70" r="4.2" fill="#fff" />
      <circle cx="52" cy="70" r="4.2" fill="#fff" />
      <circle cx="41" cy="71" r="2" fill="#1a1a1a" />
      <circle cx="53" cy="71" r="2" fill="#1a1a1a" />
      <circle cx="41.6" cy="70.2" r=".7" fill="#fff" />
      <circle cx="53.6" cy="70.2" r=".7" fill="#fff" />
      {/* Smile */}
      <path d="M40 80 Q46 84 52 80" stroke="#FFD60A" strokeWidth="2" fill="none" strokeLinecap="round" />

      {/* Doctor head mirror */}
      <path d="M30 60 Q46 46 62 60" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeLinecap="round" />
      <circle cx="46" cy="54" r="7" fill="#e5e7eb" stroke="#1a1a1a" strokeWidth="2" />
      <circle cx="46" cy="54" r="3" fill="#1a1a1a" />
      <circle cx="44.8" cy="52.8" r="1.1" fill="#fff" />

      {/* Antennae */}
      <path d="M34 56 Q26 42 22 38" stroke="#1a1a1a" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <path d="M58 56 Q66 42 70 38" stroke="#1a1a1a" strokeWidth="2.4" fill="none" strokeLinecap="round" />
      <circle cx="22" cy="38" r="3" fill="#FFD60A" stroke="#1a1a1a" strokeWidth="1.4" />
      <circle cx="70" cy="38" r="3" fill="#FFD60A" stroke="#1a1a1a" strokeWidth="1.4" />

      {/* Little legs */}
      <path d="M62 128 L66 138" stroke="#1a1a1a" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M80 132 L80 142" stroke="#1a1a1a" strokeWidth="2.4" strokeLinecap="round" />
      <path d="M98 128 L94 138" stroke="#1a1a1a" strokeWidth="2.4" strokeLinecap="round" />
    </svg>
  );
}
