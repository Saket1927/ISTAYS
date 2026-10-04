import React, { useState } from 'react';
import { Sparkles, Bed, ArrowRight } from 'lucide-react';
import RoomCard from './RoomCard';
import { hotelsData } from '../data/hotels';
import { Link } from 'react-router-dom';

export const RoomsSection = () => {
  const [selectedHotelSlug, setSelectedHotelSlug] = useState('jubilee-hills');

  const selectedHotel = hotelsData.find((h) => h.slug === selectedHotelSlug) || hotelsData[0];

  return (
    <section id="rooms-suites" className="py-20 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ROOMS & SUITES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              DESIGNED FOR YOUR COMFORT
            </h2>
            <p className="mt-2 text-base text-slate-600 max-w-2xl">
              Modern rooms with thoughtful amenities for a seamless stay. Featuring iCube, iComfort, and iClassic.
            </p>
          </div>

          <Link
            to="/rooms"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-widest text-slate-900 hover:text-amber-600 transition-colors pt-4 md:pt-0"
          >
            <span>View All Categories</span>
            <ArrowRight className="w-4 h-4 text-amber-500" />
          </Link>
        </div>

        {/* Hotel Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar">
          {hotelsData.map((hotel) => (
            <button
              key={hotel.id}
              onClick={() => setSelectedHotelSlug(hotel.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                selectedHotelSlug === hotel.slug
                  ? 'bg-slate-900 text-amber-400 shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {hotel.name} {hotel.isOpeningSoon ? '• Opening Soon' : ''}
            </button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {selectedHotel.rooms.map((room) => (
            <RoomCard
              key={room.id}
              room={room}
              hotelSlug={selectedHotel.slug}
              isOpeningSoon={selectedHotel.isOpeningSoon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoomsSection;
