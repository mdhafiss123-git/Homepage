export default function HeroIllustration({ className = '' }) {
  return (
    <svg
      viewBox="0 0 560 480"
      className={className}
      role="img"
      aria-labelledby="hero-illo-title"
    >
      <title id="hero-illo-title">
        Illustration of a student learning from a mentor over a live video class
      </title>

      <ellipse cx="280" cy="440" rx="230" ry="22" fill="#f0e6d6" />

      <rect x="40" y="40" width="150" height="110" rx="6" fill="#f8f1e7" stroke="#d9bc73" strokeWidth="2" />
      <rect x="52" y="52" width="126" height="60" rx="3" fill="#fdfaf5" />
      <rect x="60" y="62" width="50" height="6" rx="2" fill="#c9a24b" />
      <rect x="60" y="74" width="80" height="6" rx="2" fill="#e8d6a3" />
      <rect x="60" y="86" width="65" height="6" rx="2" fill="#e8d6a3" />
      <circle cx="150" cy="92" r="14" fill="#4a1228" />
      <rect x="62" y="118" width="100" height="6" rx="3" fill="#a9802f" />

      <g transform="translate(245 70)">
        <rect width="200" height="14" rx="3" fill="#4a1228" />
        <rect x="6" y="14" width="188" height="130" fill="#fdfaf5" stroke="#4a1228" strokeWidth="3" />
        <rect x="20" y="28" width="160" height="100" rx="3" fill="#3d0e23" />
        <circle cx="100" cy="78" r="26" fill="#e8d6a3" />
        <circle cx="92" cy="70" r="9" fill="#fdfaf5" />
        <path d="M70 100 q30 -24 60 0 v18 h-60 z" fill="#fdfaf5" />
        <rect x="38" y="40" width="30" height="6" rx="2" fill="#c9a24b" />
        <rect x="132" y="40" width="30" height="6" rx="2" fill="#c9a24b" />
        <rect x="90" y="150" width="20" height="14" fill="#5c1832" />
        <ellipse cx="100" cy="166" rx="46" ry="6" fill="#5c1832" />
      </g>

      <g transform="translate(120 190)">
        <rect x="0" y="120" width="150" height="10" rx="4" fill="#5c1832" />
        <rect x="65" y="40" width="20" height="84" fill="#3d0e23" />

        <circle cx="75" cy="20" r="22" fill="#e8d6a3" />
        <path d="M53 16 q22 -22 44 0 v6 h-44 z" fill="#2c0a1a" />
        <circle cx="68" cy="20" r="2.4" fill="#2c0a1a" />
        <circle cx="84" cy="20" r="2.4" fill="#2c0a1a" />
        <path d="M68 28 q7 6 14 0" stroke="#2c0a1a" strokeWidth="1.6" fill="none" strokeLinecap="round" />

        <path d="M40 130 q35 -56 70 0 z" fill="#4a1228" />
        <rect x="-10" y="124" width="40" height="14" rx="6" fill="#e8d6a3" />
        <rect x="120" y="124" width="40" height="14" rx="6" fill="#e8d6a3" />
      </g>

      <g transform="translate(330 195)">
        <rect x="0" y="0" width="120" height="90" rx="4" fill="#fdfaf5" stroke="#d9bc73" strokeWidth="2" />
        <rect x="10" y="10" width="100" height="70" rx="2" fill="#f4ead0" />
        <path d="M20 60 l20 -24 l16 16 l24 -30 l20 22 v16 z" fill="#c9a24b" opacity="0.6" />
        <circle cx="32" cy="28" r="8" fill="#a9802f" />
      </g>

      <g transform="translate(355 30)">
        <circle cx="0" cy="20" r="16" fill="#f8f1e7" stroke="#c9a24b" strokeWidth="2" />
        <text x="0" y="26" textAnchor="middle" fontSize="18" fill="#4a1228" fontWeight="700">?</text>
      </g>
      <g transform="translate(60 250)">
        <circle cx="0" cy="0" r="13" fill="#f8f1e7" stroke="#c9a24b" strokeWidth="2" />
        <path d="M-5 2 a5 5 0 1 1 8 -4" stroke="#a9802f" strokeWidth="2" fill="none" strokeLinecap="round" />
        <line x1="0" y1="-2" x2="0" y2="4" stroke="#a9802f" strokeWidth="2" strokeLinecap="round" />
      </g>
    </svg>
  )
}
