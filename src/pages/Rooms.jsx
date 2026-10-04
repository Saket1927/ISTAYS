import React, { useState, useEffect } from 'react';
import { Sparkles, Bed } from 'lucide-react';
import { hotelsData } from '../data/hotels';
import RoomCard from '../components/RoomCard';
import FinalCTA from '../components/FinalCTA';

export const Rooms = () => {
  const [selectedHotelSlug, setSelectedHotelSlug] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const allRooms = hotelsData.flatMap((hotel) =>
    hotel.rooms.map((room) => ({
      ...room,
      hotelSlug: hotel.slug,
      hotelName: hotel.name,
      hotelCity: hotel.city,
      isOpeningSoon: hotel.isOpeningSoon
    }))
  );

  const filteredRooms = selectedHotelSlug === 'All'
    ? allRooms
    : allRooms.filter((r) => r.hotelSlug === selectedHotelSlug);

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>THOUGHTFUL ACCOMMODATION</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            ROOMS & SUITES
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            From the smart efficiency of iCube to executive suites, explore accommodation tailored for your productive business trip or comfortable leisure getaway.
          </p>
        </div>
      </section>

      {/* Hotel Filter Tabs */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto no-scrollbar">
          <button
            onClick={() => setSelectedHotelSlug('All')}
            className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
              selectedHotelSlug === 'All'
                ? 'bg-amber-500 text-slate-950 shadow-sm'
                : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
            }`}
          >
            All Hotels
          </button>
          {hotelsData.map((h) => (
            <button
              key={h.id}
              onClick={() => setSelectedHotelSlug(h.slug)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedHotelSlug === h.slug
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {h.name}
            </button>
          ))}
        </div>
      </section>

      {/* Rooms Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredRooms.map((room, idx) => (
              <div key={idx} className="flex flex-col">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-1 pl-1">
                  {room.hotelName} • {room.hotelCity}
                </div>
                <RoomCard
                  room={room}
                  hotelSlug={room.hotelSlug}
                  isOpeningSoon={room.isOpeningSoon}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Rooms;
