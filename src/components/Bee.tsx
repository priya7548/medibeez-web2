type Props = { className?: string; size?: number };

// Animated bee — black & yellow, simple flat style (not realistic, not over-comic).
export function Bee({ className = "", size = 56 }: Props) {
  return (
    <svg
      viewBox="0 0 120 120"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      {/* Wings */}
      <g style={{ transformOrigin: "60px 45px", animation: "wing-flap .25s ease-in-out infinite" }}>
        <ellipse cx="48" cy="42" rx="18" ry="10" fill="#ffffff" fillOpacity="0.85" stroke="#1a1a1a" strokeWidth="2" />
        <ellipse cx="72" cy="42" rx="18" ry="10" fill="#ffffff" fillOpacity="0.85" stroke="#1a1a1a" strokeWidth="2" />
      </g>
      {/* Body */}
      <ellipse cx="60" cy="68" rx="30" ry="26" fill="#FFC72C" stroke="#0f0f0f" strokeWidth="3" />
      {/* Stripes */}
      <path d="M40 56 Q60 50 80 56 L80 64 Q60 60 40 64 Z" fill="#0f0f0f" />
      <path d="M38 76 Q60 72 82 76 L82 84 Q60 88 38 84 Z" fill="#0f0f0f" />
      {/* Head */}
      <circle cx="60" cy="42" r="14" fill="#0f0f0f" />
      {/* Eyes */}
      <circle cx="55" cy="40" r="2.4" fill="#fff" />
      <circle cx="65" cy="40" r="2.4" fill="#fff" />
      {/* Antennae */}
      <path d="M54 30 Q50 22 46 20" stroke="#0f0f0f" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <path d="M66 30 Q70 22 74 20" stroke="#0f0f0f" strokeWidth="2.2" fill="none" strokeLinecap="round" />
      <circle cx="46" cy="20" r="2.2" fill="#FFC72C" stroke="#0f0f0f" strokeWidth="1.5" />
      <circle cx="74" cy="20" r="2.2" fill="#FFC72C" stroke="#0f0f0f" strokeWidth="1.5" />
      {/* Stinger */}
      <path d="M60 94 L56 102 L64 102 Z" fill="#0f0f0f" />
    </svg>
  );
}
