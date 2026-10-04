import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Compass, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const FinalCTA = () => {
  const { openBookingModal } = useBooking();

  return (
    <section className="relative py-24 sm:py-32 bg-slate-950 text-white overflow-hidden">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=2000&q=90"
          alt="iStay Hotels Atmosphere"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/85 to-slate-950/70" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>RESERVE YOUR STAY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-white uppercase tracking-tight leading-[1.1] mb-4">
          PLAN YOUR NEXT STAY WITH <br className="hidden sm:inline" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
            iSTAY HOTELS
          </span>
        </h2>

        <p className="text-base sm:text-xl text-slate-300 font-normal tracking-wide max-w-2xl mb-10">
          Smart locations. Comfortable stays. Memorable experiences.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <button
            onClick={() => openBookingModal()}
            className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-9 py-4 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK NOW</span>
          </button>

          <Link
            to="/hotels"
            className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-bold px-9 py-4 rounded-full text-xs uppercase tracking-widest transition-all duration-300 hover:border-white flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-amber-400" />
            <span>EXPLORE OUR HOTELS</span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;
