import React, { useEffect } from 'react';
import { Sparkles } from 'lucide-react';
import SpecialOffers from '../components/SpecialOffers';
import FinalCTA from '../components/FinalCTA';

export const OffersPage = () => {
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
            <span>EXCLUSIVE CURATIONS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            SPECIAL OFFERS & PACKAGES
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Discover tailored stay advantages crafted for corporate teams, family weekends, extended work assignments, and festive breaks.
          </p>
        </div>
      </section>

      <SpecialOffers />

      <FinalCTA />
    </div>
  );
};

export default OffersPage;
