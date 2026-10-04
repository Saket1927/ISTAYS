import React from 'react';
import { ArrowRight, Utensils, Clock, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

export const DiningCard = ({ concept, onSelect }) => {
  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1">
      {/* Visual Image */}
      <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
        <img
          src={concept.image}
          alt={concept.name}
          loading="lazy"
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

        {/* Cuisine pill */}
        <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full border border-white/10">
          {concept.cuisine}
        </div>

        {/* Name on image */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-xl font-black text-white uppercase tracking-tight">
            {concept.name}
          </h3>
          <p className="text-xs font-semibold text-amber-400">
            {concept.tagline}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 justify-between">
        <div className="space-y-3">
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            {concept.description}
          </p>

          {/* Perfect For Tags */}
          {concept.perfectFor && (
            <div className="pt-2">
              <div className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1.5">
                Ideal For
              </div>
              <div className="flex flex-wrap gap-1.5">
                {concept.perfectFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-700"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* View Details Action */}
        <div className="pt-5 mt-4 border-t border-slate-100">
          <Link
            to={`/dining#${concept.id}`}
            className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-900 bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider text-center transition-all duration-200 flex items-center justify-center gap-2 group/btn"
          >
            <span>EXPLORE MENU & DETAILS</span>
            <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DiningCard;
