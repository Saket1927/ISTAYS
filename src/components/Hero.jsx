import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Compass, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const Hero = () => {
  const { openBookingModal } = useBooking();
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroSlides = [
    {
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2200&q=90",
      caption: "iStay Hotels Jubilee Hills, Hyderabad"
    },
    {
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=2200&q=90",
      caption: "iStay Hotels Hitech, Hyderabad"
    },
    {
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2200&q=90",
      caption: "iStay Hotels Rajajinagar, Bangalore"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 7000);
    return () => clearInterval(timer);
  }, [heroSlides.length]);

  return (
    <section className="relative w-full h-[620px] sm:h-[680px] lg:h-[760px] xl:h-[800px] flex items-center bg-slate-950 text-white overflow-hidden">
      {/* Full-bleed Edge-to-edge Hotel Photography */}
      <div className="absolute inset-0 z-0">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 scale-100' : 'opacity-0 scale-105 pointer-events-none'
            }`}
            style={{
              transition: 'opacity 1.4s ease-in-out, transform 8s ease-out'
            }}
          >
            <img
              src={slide.image}
              alt={slide.caption}
              className="w-full h-full object-cover object-center"
            />
          </div>
        ))}

        {/* Sophisticated subtle dark gradient overlay - Left heavy for text legibility while keeping photo luminous */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent w-full sm:w-3/4 lg:w-3/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
      </div>

      {/* Left-Aligned Hero Content (8-10% from left edge) */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12">
        <div className="max-w-2xl text-left space-y-4 sm:space-y-6">
          {/* Eyebrow Label */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-950/70 backdrop-blur-md border border-white/20 text-amber-400 text-xs font-bold uppercase tracking-widest shadow-sm">
            <Sparkles className="w-3.5 h-3.5" />
            <span>iSTAY HOTELS JUBILEE HILLS • HYDERABAD</span>
          </div>

          {/* Main Large Typography Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-white uppercase leading-[1.08] drop-shadow-md">
            SMART HOSPITALITY. <br />
            <span className="text-amber-400">
              DESIGNED AROUND YOU.
            </span>
          </h1>

          {/* Supporting Text */}
          <p className="text-base sm:text-xl text-slate-200 font-normal tracking-wide max-w-xl">
            Stay Connected. Stay Comfortable.
          </p>

          {/* Minimal CTA Buttons */}
          <div className="pt-2 sm:pt-4 flex flex-wrap items-center gap-4">
            <button
              onClick={() => openBookingModal('jubilee-hills')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-4 h-4" />
              <span>BOOK NOW</span>
            </button>

            <Link
              to="/rooms"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/30 hover:border-white font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-200 flex items-center gap-2"
            >
              <Compass className="w-4 h-4 text-amber-400" />
              <span>EXPLORE ROOMS</span>
            </Link>
          </div>
        </div>

        {/* Minimal Bottom-Right Slide Indicator */}
        <div className="absolute bottom-4 right-8 hidden md:flex items-center gap-2">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentSlide(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === currentSlide ? 'w-8 bg-amber-400' : 'w-2 bg-white/40 hover:bg-white/80'
              }`}
              aria-label={`Slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
