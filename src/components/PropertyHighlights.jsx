import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { brandInfo } from '../data/hotels';

export const PropertyHighlights = ({ highlights = brandInfo.highlights, title = "PROPERTY HIGHLIGHTS" }) => {
  return (
    <div className="py-12 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <span className="text-[11px] font-black uppercase tracking-[0.25em] text-amber-500">
            {title}
          </span>
          <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight mt-1">
            Core Signature Amenities & Features
          </h3>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100/80 hover:bg-amber-50/50 hover:border-amber-200/60 transition-all duration-200"
            >
              <div className="w-8 h-8 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 text-amber-600">
                <CheckCircle2 className="w-4 h-4" />
              </div>
              <span className="text-xs sm:text-sm font-bold text-slate-800 tracking-tight">
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyHighlights;
