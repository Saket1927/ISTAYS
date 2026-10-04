import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, ArrowRight, Calendar, Sparkles, Clock } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const HotelCard = ({ hotel }) => {
  const { openBookingModal } = useBooking();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Property Image Container */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={hotel.cardImage || hotel.heroImage}
          alt={hotel.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />

        {/* Status Badge */}
        {hotel.isOpeningSoon ? (
          <div className="absolute top-3 right-3 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow-lg flex items-center gap-1.5">
            <Clock className="w-3 h-3" />
            <span>OPENING SOON</span>
          </div>
        ) : (
          <div className="absolute top-3 right-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-400" />
            <span>Active Hotel</span>
          </div>
        )}

        {/* City on bottom left of image */}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-xs font-semibold drop-shadow">
          <MapPin className="w-3.5 h-3.5 text-amber-400" />
          <span>{hotel.city}, {hotel.state}</span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6 flex flex-col flex-1 justify-between">
        <div>
          <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-amber-600 transition-colors">
            {hotel.name}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed line-clamp-2 mb-4">
            {hotel.shortDescription}
          </p>
        </div>

        {/* Actions */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
          <Link
            to={`/hotels/${hotel.slug}`}
            className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-800 text-slate-800 hover:text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-all duration-200 flex items-center justify-center gap-1 group/btn"
          >
            <span>MORE DETAILS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>

          {hotel.isOpeningSoon ? (
            <Link
              to={`/hotels/${hotel.slug}`}
              className="py-2.5 px-4 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold text-xs uppercase tracking-wider transition-colors"
            >
              EXPLORE
            </Link>
          ) : (
            <button
              onClick={() => openBookingModal(hotel.slug)}
              className="py-2.5 px-4 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-extrabold text-xs uppercase tracking-wider shadow-sm transition-all duration-200 transform active:scale-95 flex items-center gap-1.5"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK NOW</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default HotelCard;
