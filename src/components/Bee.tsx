type Props = { className?: string; size?: number };

// Animated SVG bee — black & yellow with flapping wings.
export function Bee({ className = "", size = 80 }: Props) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 120 120"
      className={`drop-shadow-[0_8px_18px_rgba(0,0,0,0.18)] ${className}`}
      aria-hidden="true"
    >
      {/* Wings */}
      <g style={{ transformOrigin: "60px 45px" }} className="bee-wing-left">
        <ellipse cx="42" cy="42" rx="20" ry="12" fill="#ffffff" fillOpacity="0.85" stroke="#1a1a1a" strokeWidth="2" />
      </g>
      <g style={{ transformOrigin: "60px 45px" }} className="bee-wing-right">
        <ellipse cx="78" cy="42" rx="20" ry="12" fill="#ffffff" fillOpacity="0.85" stroke="#1a1a1a" strokeWidth="2" />
      </g>

      {/* Body */}
      <ellipse cx="60" cy="68" rx="28" ry="22" fill="#FFD60A" stroke="#1a1a1a" strokeWidth="2.5" />
      {/* Stripes */}
      <path d="M44 52 Q44 72 44 84" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M60 48 Q60 70 60 88" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round" />
      <path d="M76 52 Q76 72 76 84" stroke="#1a1a1a" strokeWidth="6" fill="none" strokeLinecap="round" />
      {/* Stinger */}
      <path d="M86 70 L96 74 L86 78 Z" fill="#1a1a1a" />

      {/* Head */}
      <circle cx="30" cy="58" r="13" fill="#1a1a1a" />
      {/* Eye */}
      <circle cx="26" cy="56" r="3" fill="#ffffff" />
      <circle cx="26" cy="56" r="1.4" fill="#1a1a1a" />
      {/* Smile */}
      <path d="M22 62 Q26 65 30 62" stroke="#FFD60A" strokeWidth="1.6" fill="none" strokeLinecap="round" />
      {/* Antennae */}
      <path d="M24 48 Q20 38 16 36" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M32 46 Q32 36 36 32" stroke="#1a1a1a" strokeWidth="2" fill="none" strokeLinecap="round" />
      <circle cx="16" cy="36" r="2.4" fill="#FFD60A" stroke="#1a1a1a" strokeWidth="1.2" />
      <circle cx="36" cy="32" r="2.4" fill="#FFD60A" stroke="#1a1a1a" strokeWidth="1.2" />
    </svg>
  );
}
