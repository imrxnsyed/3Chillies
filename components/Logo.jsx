export default function Logo({ className = "h-11 w-11" }) {
  return (
    <svg viewBox="0 0 120 120" className={className} role="img" aria-label="3 Chillies">
      <circle cx="60" cy="60" r="58" fill="#141210" />
      <circle cx="60" cy="60" r="50" fill="#fdfaf3" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#cba24a" strokeWidth="2" />
      <g transform="rotate(-18 60 60)">
        <path d="M60 44 C74 44 84 56 84 74 C84 84 78 90 72 90 C74 82 70 70 60 66 C64 58 62 50 60 44 Z" fill="#e0402c" />
        <path d="M60 44 C61 40 64 38 68 39" fill="none" stroke="#5aa63f" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="rotate(102 60 60)">
        <path d="M60 44 C74 44 84 56 84 74 C84 84 78 90 72 90 C74 82 70 70 60 66 C64 58 62 50 60 44 Z" fill="#5aa63f" />
        <path d="M60 44 C61 40 64 38 68 39" fill="none" stroke="#3a7a2b" strokeWidth="4" strokeLinecap="round" />
      </g>
      <g transform="rotate(222 60 60)">
        <path d="M60 44 C74 44 84 56 84 74 C84 84 78 90 72 90 C74 82 70 70 60 66 C64 58 62 50 60 44 Z" fill="#f2a51f" />
        <path d="M60 44 C61 40 64 38 68 39" fill="none" stroke="#5aa63f" strokeWidth="4" strokeLinecap="round" />
      </g>
      <text x="60" y="72" fontFamily="Georgia, serif" fontSize="40" fontWeight="700" fill="#141210" textAnchor="middle">3</text>
    </svg>
  );
}
