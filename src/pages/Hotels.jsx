import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Search } from 'lucide-react';
import { hotelsData } from '../data/hotels';
import HotelCard from '../components/HotelCard';
import FinalCTA from '../components/FinalCTA';

export const Hotels = () => {
  const [selectedCity, setSelectedCity] = useState('All');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const cities = ['All', 'Hyderabad', 'Bangalore', 'Haveri', 'Haridwar'];

  const filteredHotels = selectedCity === 'All'
    ? hotelsData
    : hotelsData.filter((h) => h.city.toLowerCase() === selectedCity.toLowerCase());

  return (
    <div className="bg-white pt-24">
      {/* Page Header */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR PROPERTIES ACROSS INDIA</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            DISCOVER iSTAY HOTELS
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Explore our contemporary business and leisure hotels situated across key commercial districts and spiritual destinations.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
            {cities.map((city) => (
              <button
                key={city}
                onClick={() => setSelectedCity(city)}
                className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  selectedCity === city
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
                }`}
              >
                {city}
              </button>
            ))}
          </div>

          <div className="text-xs text-slate-500 font-semibold">
            Showing {filteredHotels.length} Properties
          </div>
        </div>
      </section>

      {/* Hotel Cards Grid */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredHotels.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default Hotels;
