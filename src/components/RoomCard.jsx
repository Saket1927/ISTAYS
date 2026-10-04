import React from 'react';
import { Bed, Tv, Wifi, Coffee, Wind, ArrowRight, Calendar, Check } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const RoomCard = ({ room, hotelSlug = 'jubilee-hills', isOpeningSoon = false }) => {
  const { openBookingModal, openRoomDetail } = useBooking();

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Room Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={room.image}
          alt={room.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        
        {/* Category Pill */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
          {room.category || "Room"}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="text-xl font-extrabold text-slate-900 tracking-tight group-hover:text-amber-600 transition-colors">
              {room.name}
            </h3>
          </div>

          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
            {room.description}
          </p>

          {/* Features List */}
          <div className="space-y-2 mb-6 pt-2 border-t border-slate-100">
            <div className="text-[10px] font-black uppercase tracking-widest text-slate-400">
              Key Features
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              {room.features.slice(0, 6).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-amber-500 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="pt-4 border-t border-slate-100 flex items-center gap-2.5">
          <button
            type="button"
            onClick={() => openRoomDetail(room)}
            className="flex-1 py-2.5 px-3 rounded-xl border border-slate-200 hover:border-slate-900 text-slate-800 hover:text-slate-950 font-bold text-xs uppercase tracking-wider text-center transition-all duration-200 flex items-center justify-center gap-1 group/btn"
          >
            <span>VIEW DETAILS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </button>

          {isOpeningSoon ? (
            <button
              type="button"
              onClick={() => openRoomDetail(room)}
              className="py-2.5 px-4 rounded-xl bg-slate-100 text-slate-600 hover:bg-slate-200 font-bold text-xs uppercase tracking-wider"
            >
              PREVIEW
            </button>
          ) : (
            <button
              type="button"
              onClick={() => openBookingModal(hotelSlug, room)}
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

export default RoomCard;
