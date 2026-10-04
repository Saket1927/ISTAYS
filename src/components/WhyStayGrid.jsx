import React from 'react';
import {
  MapPin,
  BedDouble,
  Wifi,
  Laptop,
  UtensilsCrossed,
  Coffee,
  Clock,
  Users,
  Car,
  Sparkles,
  Plane,
  ShieldCheck
} from 'lucide-react';
import { whyStayBenefits } from '../data/hotels';

const iconMap = {
  MapPin,
  BedDouble,
  Wifi,
  Laptop,
  UtensilsCrossed,
  Coffee,
  Clock,
  Users,
  Car,
  Sparkles,
  Plane,
  ShieldCheck
};

export const WhyStayGrid = () => {
  return (
    <section id="why-stay" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>WHY STAY WITH US</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            MORE THAN JUST A STAY
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600">
            Thoughtful experiences for every kind of traveller.
          </p>
        </div>

        {/* 3x4 Icon Card Grid (12 Items) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {whyStayBenefits.map((item) => {
            const IconComponent = iconMap[item.icon] || Sparkles;

            return (
              <div
                key={item.id}
                className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-amber-200 transition-all duration-300 flex flex-col justify-between transform hover:-translate-y-1"
              >
                <div>
                  {/* Icon with yellow accent badge */}
                  <div className="w-12 h-12 rounded-xl bg-amber-50 group-hover:bg-amber-500 text-amber-600 group-hover:text-slate-950 flex items-center justify-center transition-colors duration-300 mb-5 shadow-xs">
                    <IconComponent className="w-6 h-6 stroke-[1.8]" />
                  </div>

                  <h3 className="text-base font-extrabold text-slate-900 mb-2 tracking-tight group-hover:text-amber-600 transition-colors">
                    {item.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-50 flex items-center justify-between text-[10px] font-bold uppercase tracking-wider text-slate-400 group-hover:text-amber-500 transition-colors">
                  <span>iStay Standard</span>
                  <span className="opacity-0 group-hover:opacity-100 transition-opacity">✓</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyStayGrid;
