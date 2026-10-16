import React from 'react';

interface FlagProps {
  className?: string;
}

/**
 * علم المملكة العربية السعودية (Arabic)
 */
export const FlagSA: React.FC<FlagProps> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 600 400"
    className={`inline-block shrink-0 rounded-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.25)] ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="600" height="400" fill="#006C35" />
    {/* Simplified crisp Arabic calligraphy & sword in white */}
    <g fill="#FFFFFF">
      {/* Sword */}
      <rect x="180" y="275" width="240" height="10" rx="3" />
      <polygon points="420,270 445,280 420,290" />
      <rect x="175" y="268" width="8" height="24" rx="2" />
      <circle cx="166" cy="280" r="6" />
      
      {/* Calligraphic Shahada Silhouette Representation */}
      <path d="M170 195 Q190 170 215 190 T260 185 T305 175 T350 185 T395 170 T430 190 Q410 215 390 195 T350 205 T305 200 T260 210 T215 200 Z" />
      <rect x="220" y="150" width="8" height="45" rx="3" />
      <rect x="250" y="145" width="8" height="50" rx="3" />
      <rect x="275" y="148" width="8" height="45" rx="3" />
      <rect x="320" y="145" width="8" height="50" rx="3" />
      <rect x="350" y="148" width="8" height="45" rx="3" />
      <rect x="380" y="150" width="8" height="45" rx="3" />
      <circle cx="205" cy="160" r="5" />
      <circle cx="295" cy="160" r="5" />
      <circle cx="405" cy="160" r="5" />
    </g>
  </svg>
);

/**
 * علم فرنسا (Français)
 */
export const FlagFR: React.FC<FlagProps> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 900 600"
    className={`inline-block shrink-0 rounded-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.25)] ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="300" height="600" fill="#002654" />
    <rect x="300" width="300" height="600" fill="#FFFFFF" />
    <rect x="600" width="300" height="600" fill="#CE1126" />
  </svg>
);

/**
 * علم المملكة المتحدة (English)
 */
export const FlagGB: React.FC<FlagProps> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 60 30"
    className={`inline-block shrink-0 rounded-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.25)] ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <clipPath id="uk-clip">
      <rect width="60" height="30" />
    </clipPath>
    <g clipPath="url(#uk-clip)">
      <rect width="60" height="30" fill="#012169" />
      {/* Diagonals White */}
      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
      {/* Diagonals Red */}
      <path d="M0,0 L60,30" stroke="#C8102E" strokeWidth="2" />
      <path d="M60,0 L0,30" stroke="#C8102E" strokeWidth="2" />
      {/* Cross White */}
      <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
      {/* Cross Red */}
      <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
    </g>
  </svg>
);

/**
 * علم بلجيكا (Nederlands - Vlaams)
 */
export const FlagBE: React.FC<FlagProps> = ({ className = 'w-6 h-4' }) => (
  <svg
    viewBox="0 0 900 600"
    className={`inline-block shrink-0 rounded-[3px] shadow-[0_1px_3px_rgba(0,0,0,0.25)] ${className}`}
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect width="300" height="600" fill="#000000" />
    <rect x="300" width="300" height="600" fill="#FDDA24" />
    <rect x="600" width="300" height="600" fill="#EF3340" />
  </svg>
);
