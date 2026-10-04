import React, { useState, useEffect } from 'react';

export const LoadingScreen = ({ onComplete }) => {
  const [stage, setStage] = useState('falling'); // 'falling' -> 'settled' -> 'fading' -> 'done'
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    // Check prefers-reduced-motion
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (mediaQuery.matches) {
      setPrefersReducedMotion(true);
      const timer = setTimeout(() => {
        setStage('done');
        if (onComplete) onComplete();
      }, 500);
      return () => clearTimeout(timer);
    }

    // Step 1: Ball bounces and settles into position at ~1.2s
    const settleTimer = setTimeout(() => {
      setStage('settled');
    }, 1100);

    // Step 2: Start fade out at 2.0s
    const fadeTimer = setTimeout(() => {
      setStage('fading');
    }, 2000);

    // Step 3: Complete & unmount loading screen at 2.5s
    const doneTimer = setTimeout(() => {
      setStage('done');
      if (onComplete) onComplete();
    }, 2500);

    return () => {
      clearTimeout(settleTimer);
      clearTimeout(fadeTimer);
      clearTimeout(doneTimer);
    };
  }, [onComplete]);

  if (stage === 'done') {
    return null;
  }

  return (
    <div
      className={`fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#0F172A] transition-opacity duration-700 ease-out select-none ${
        stage === 'fading' ? 'opacity-0 pointer-events-none' : 'opacity-100'
      }`}
      aria-hidden="true"
    >
      <div className="relative flex flex-col items-center justify-center px-4">
        {/* SVG Container with Perfectly Aligned Coordinates */}
        <div className="relative w-72 sm:w-96">
          <svg
            viewBox="0 0 340 76"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-auto"
          >
            {/* 1. The Bouncing Yellow Ball (Dot of 'i') */}
            <g
              className={prefersReducedMotion ? '' : 'animate-ball-bounce'}
              style={{
                transformOrigin: '20px 17px'
              }}
            >
              <circle
                cx="20"
                cy="17"
                r="7.5"
                fill="#F59E0B"
                style={{
                  filter: 'drop-shadow(0 0 10px rgba(245, 158, 11, 0.7))'
                }}
              />
            </g>

            {/* 2. Lower stem of 'i' */}
            <rect
              x="14.5"
              y="31"
              width="11"
              height="28"
              rx="2.5"
              fill="#FFFFFF"
              className={`transition-all duration-700 ease-out ${
                stage === 'falling' ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* 3. 'Stay' Text - Perfectly placed on baseline y=59 */}
            <text
              x="34"
              y="59"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontSize="56"
              fontWeight="900"
              letterSpacing="-1.5px"
              fill="#FFFFFF"
              className={`transition-all duration-700 ease-out ${
                stage === 'falling'
                  ? 'opacity-0 translate-x-4 blur-xs'
                  : 'opacity-100 translate-x-0 blur-none'
              }`}
            >
              Stay
            </text>

            {/* 4. Vertical Divider */}
            <line
              x1="168"
              y1="16"
              x2="168"
              y2="60"
              stroke="rgba(255, 255, 255, 0.25)"
              strokeWidth="2"
              className={`transition-all duration-700 ease-out ${
                stage === 'falling' ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* 5. 'HOTELS' Subtitle */}
            <text
              x="182"
              y="38"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontSize="18"
              fontWeight="900"
              letterSpacing="6px"
              fill="#F59E0B"
              className={`transition-all duration-700 ease-out delay-100 ${
                stage === 'falling' ? 'opacity-0' : 'opacity-100'
              }`}
            >
              HOTELS
            </text>

            {/* 6. 'Business & Leisure' Subtitle */}
            <text
              x="183"
              y="57"
              fontFamily="'Plus Jakarta Sans', system-ui, -apple-system, sans-serif"
              fontSize="11"
              fontWeight="700"
              letterSpacing="1.8px"
              fill="#94A3B8"
              className={`transition-all duration-700 ease-out delay-150 ${
                stage === 'falling' ? 'opacity-0' : 'opacity-100'
              }`}
            >
              BUSINESS & LEISURE
            </text>
          </svg>
        </div>

        {/* Subtle Bottom Ambient Indicator */}
        <div
          className={`mt-10 flex items-center gap-2 transition-opacity duration-500 ${
            stage === 'falling' ? 'opacity-0' : 'opacity-70'
          }`}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-ping" />
          <span className="text-xs tracking-widest uppercase font-semibold text-slate-400">
            Welcome to iStay Hotels
          </span>
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;
