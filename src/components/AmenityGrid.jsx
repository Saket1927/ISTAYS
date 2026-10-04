import React from 'react';
import {
  Wifi,
  Utensils,
  Coffee,
  Laptop,
  Users,
  Car,
  Shirt,
  Bell,
  Plane,
  Sparkles,
  Zap,
  ArrowUpDown,
  Compass,
  HeartPulse,
  Luggage,
  CupSoda,
  Wind,
  Tv,
  Clock,
  Shield
} from 'lucide-react';
import { allStandardAmenities } from '../data/hotels';

const iconMap = {
  Wifi,
  Utensils,
  Coffee,
  Laptop,
  Users,
  Car,
  Shirt,
  Bell,
  Plane,
  Sparkles,
  Zap,
  ArrowUpDown,
  Compass,
  HeartPulse,
  Luggage,
  CupSoda,
  Wind,
  Tv,
  Clock,
  Shield
};

export const AmenityGrid = ({ customAmenities = null, title = "HOTEL AMENITIES", subtitle = "Comprehensive facilities crafted for your business & leisure stay." }) => {
  const displayAmenities = customAmenities
    ? allStandardAmenities.filter((a) =>
        customAmenities.some((c) => c.toLowerCase().includes(a.name.toLowerCase().split(' ')[0]))
      )
    : allStandardAmenities;

  return (
    <section id="amenities" className="py-20 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{title}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            DESIGNED FOR SEAMLESS STAYS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            {subtitle}
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {displayAmenities.map((amenity, idx) => {
            const IconComp = iconMap[amenity.icon] || Sparkles;

            return (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 border border-slate-100 shadow-xs hover:shadow-lg hover:border-amber-200 transition-all duration-300 flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-amber-500 text-slate-700 group-hover:text-slate-950 flex items-center justify-center transition-colors duration-300 mb-3">
                  <IconComp className="w-6 h-6 stroke-[1.8]" />
                </div>
                <h4 className="text-xs sm:text-sm font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors mb-1">
                  {amenity.name}
                </h4>
                <p className="text-[11px] text-slate-500 line-clamp-2">
                  {amenity.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AmenityGrid;
