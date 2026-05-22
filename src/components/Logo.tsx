export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 60 60" className="h-10 w-10 shrink-0">
        <circle cx="22" cy="30" r="18" fill="#1e3a8a" />
        <circle cx="38" cy="30" r="18" fill="#f59e0b" opacity="0.92" />
      </svg>
      <div className="leading-none">
        <div className="text-xl sm:text-2xl font-extrabold tracking-tight">
          <span style={{ color: "var(--brand-navy)" }}>MEDI</span>
          <span style={{ color: "var(--brand-orange)" }}>BEEZ</span>
        </div>
        <div className="mt-0.5 text-[8px] sm:text-[9px] font-semibold tracking-[0.18em] text-muted-foreground">
          UNLOCK A WORLD OF MEDICAL EXPERTISE
        </div>
      </div>
    </div>
  );
}
