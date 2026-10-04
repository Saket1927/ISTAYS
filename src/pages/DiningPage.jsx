import React, { useEffect } from 'react';
import { Sparkles, Utensils, Coffee, Clock, CheckCircle2 } from 'lucide-react';
import { allDiningConcepts, hotelsData } from '../data/hotels';
import FinalCTA from '../components/FinalCTA';

export const DiningPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>CULINARY EXPERIENCES</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            DINING AT iSTAY HOTELS
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            From traditional regional recipes at Utsavam to quick gourmet bites at Moxa Xpress, experience curated flavours designed for today's travellers.
          </p>
        </div>
      </section>

      {/* 4 Concepts In Depth */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {allDiningConcepts.map((concept, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={concept.id}
                id={concept.id}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center ${
                  isReversed ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual */}
                <div className={`lg:col-span-6 ${isReversed ? 'lg:order-2' : ''}`}>
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[16/11] bg-slate-100 border border-slate-200">
                    <img
                      src={concept.image}
                      alt={concept.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-black uppercase tracking-widest px-3.5 py-1.5 rounded-full border border-white/10">
                      {concept.cuisine}
                    </div>
                  </div>
                </div>

                {/* Information */}
                <div className={`lg:col-span-6 space-y-5 ${isReversed ? 'lg:order-1' : ''}`}>
                  <div className="inline-block text-xs font-black uppercase tracking-widest text-amber-500">
                    Signature F&B Concept
                  </div>
                  <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                    {concept.name}
                  </h2>
                  <p className="text-sm font-semibold text-amber-600">
                    {concept.tagline}
                  </p>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                    {concept.description}
                  </p>

                  {/* Highlights */}
                  {concept.menuHighlights && (
                    <div className="pt-2">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-2">
                        Menu & Concept Highlights
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {concept.menuHighlights.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg bg-slate-100 text-slate-800 text-xs font-semibold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Perfect For */}
                  {concept.perfectFor && (
                    <div className="pt-2 border-t border-slate-100">
                      <span className="text-xs font-black uppercase tracking-widest text-slate-400 block mb-2">
                        Ideal For
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {concept.perfectFor.map((item, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 rounded-lg bg-amber-50 text-amber-900 border border-amber-200/60 text-xs font-bold"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Property-Specific Dining Matrix */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              PROPERTY-WISE DINING VENUES
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Find out which dining concepts are featured at your chosen iStay hotel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
                <h4 className="text-base font-black text-slate-900 mb-1">{h.name}</h4>
                <p className="text-xs text-amber-600 font-semibold mb-4">{h.city}</p>
                <div className="space-y-2">
                  {h.dining.map((d, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-bold text-slate-800 bg-slate-50 p-2.5 rounded-lg border border-slate-100">
                      <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                      <span>{d.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default DiningPage;
