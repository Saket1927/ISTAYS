import React from 'react';
import { Sparkles, Utensils } from 'lucide-react';
import DiningCard from './DiningCard';
import { allDiningConcepts } from '../data/hotels';

export const DiningSection = () => {
  return (
    <section id="dining-experiences" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DINING EXPERIENCES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            DISCOVER iSTAY'S CULINARY EXPERIENCES
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600 leading-relaxed">
            Dining is an integral part of the iStay experience. Whether guests are looking for an authentic regional meal, a quick bite before work, or a relaxed dining experience, iStay offers a diverse collection of food and beverage concepts.
          </p>
        </div>

        {/* 4 Dining Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {allDiningConcepts.map((concept) => (
            <DiningCard key={concept.id} concept={concept} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
