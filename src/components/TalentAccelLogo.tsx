const TalentAccelLogo = ({ className = "", light = false }: { className?: string; light?: boolean }) => (
  <div className={`flex items-center gap-2 ${className}`}>
    <svg width="32" height="32" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="28" height="48" rx="4" fill="#0A72FF" transform="rotate(-8 18 32)" />
      <rect x="24" y="12" width="20" height="32" rx="4" fill="#00E59D" transform="rotate(5 34 28)" />
      <path d="M30 8 L42 20 L30 20Z" fill="#0A3850" />
    </svg>
    <span className={`text-xl font-bold tracking-tight ${light ? "text-foreground" : ""}`}>
      TalentAccel
    </span>
  </div>
);

export default TalentAccelLogo;
