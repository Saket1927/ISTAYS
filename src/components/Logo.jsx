import React from 'react';
import { Link } from 'react-router-dom';

export const Logo = ({ variant = 'dark', className = 'h-9 sm:h-10', showLink = true }) => {
  const isLight = variant === 'white' || variant === 'light';
  const textColor = isLight ? '#FFFFFF' : '#0F172A';
  const subtextColor = isLight ? '#94A3B8' : '#64748B';
  const yellowColor = '#F59E0B';

  const logoSvg = (
    <svg
      viewBox="0 0 210 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`w-auto select-none ${className}`}
      style={{ display: 'block' }}
      aria-label="iStay Hotels Logo"
    >
      {/* Lowercase 'i' with vibrant yellow dot */}
      {/* Dot */}
      <circle cx="11" cy="9.5" r="4.2" fill={yellowColor} />
      {/* Stem */}
      <rect x="8" y="17.5" width="6" height="15" rx="1.5" fill={textColor} />

      {/* 'Stay' Text - Pixel-perfect baseline matching the 'i' stem */}
      <text
        x="19"
        y="32.5"
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="31"
        fontWeight="900"
        letterSpacing="-0.8px"
        fill={textColor}
      >
        Stay
      </text>

      {/* Vertical Divider */}
      <line
        x1="93"
        y1="9"
        x2="93"
        y2="33"
        stroke={isLight ? 'rgba(255,255,255,0.25)' : 'rgba(15,23,42,0.2)'}
        strokeWidth="1.2"
      />

      {/* 'HOTELS' Subtitle */}
      <text
        x="101"
        y="21"
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="10"
        fontWeight="900"
        letterSpacing="3.5px"
        fill={yellowColor}
      >
        HOTELS
      </text>

      {/* 'Business & Leisure' Subtitle */}
      <text
        x="101.5"
        y="31.5"
        fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
        fontSize="6.5"
        fontWeight="700"
        letterSpacing="1px"
        fill={subtextColor}
      >
        BUSINESS & LEISURE
      </text>
    </svg>
  );

  if (!showLink) {
    return logoSvg;
  }

  return (
    <Link
      to="/"
      className="inline-flex items-center transition-transform duration-200 hover:scale-[1.02] active:scale-95 focus:outline-none"
    >
      {logoSvg}
    </Link>
  );
};

export default Logo;
