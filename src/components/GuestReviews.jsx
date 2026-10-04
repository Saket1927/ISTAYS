import React from 'react';
import { Star, ShieldCheck, Award, Sparkles, CheckCircle2, Quote } from 'lucide-react';
import { guestReviewsStructure } from '../data/hotels';

export const GuestReviews = () => {
  return (
    <section id="guest-reviews" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>GUEST REVIEWS & RATINGS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            WHAT OUR GUESTS SAY
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Real feedback from business travellers, families, and long-stay guests.
          </p>
        </div>

        {/* Rating Metrics & Highlights Top Banner */}
        <div className="bg-[#F8FAFC] rounded-2xl p-6 sm:p-8 border border-slate-100 mb-12 shadow-xs">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            {/* Left: Overall Score */}
            <div className="md:col-span-4 flex items-center gap-5 border-b md:border-b-0 md:border-r border-slate-200 pb-6 md:pb-0 md:pr-6">
              <div className="w-20 h-20 rounded-2xl bg-slate-900 text-white flex flex-col items-center justify-center shrink-0 shadow-md">
                <span className="text-3xl font-black text-amber-400 leading-none">
                  {guestReviewsStructure.googleRating}
                </span>
                <span className="text-[10px] font-bold text-slate-400 mt-1">OUT OF 5.0</span>
              </div>

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <div className="text-sm font-extrabold text-slate-900">Google Verified Rating</div>
                <div className="text-xs text-slate-500">{guestReviewsStructure.reviewCount} Verified Reviews Across Properties</div>
              </div>
            </div>

            {/* Right: Category Performance Metrics */}
            <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-4">
              {guestReviewsStructure.experienceHighlights.map((hl, idx) => (
                <div key={idx} className="bg-white p-3.5 rounded-xl border border-slate-100 shadow-xs">
                  <div className="text-xs font-semibold text-slate-500">{hl.label}</div>
                  <div className="text-xl font-black text-slate-900 mt-1 flex items-center gap-1.5">
                    <span>{hl.score}</span>
                    <span className="text-[11px] font-bold text-emerald-600">✓</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {guestReviewsStructure.reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-[#FAFAFA] rounded-2xl p-6 border border-slate-100 hover:border-amber-200 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-slate-300" />
                </div>

                <p className="text-xs sm:text-sm text-slate-700 italic leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900">{rev.guestName}</h4>
                  <p className="text-[11px] text-slate-500 font-medium">{rev.stayLocation}</p>
                </div>

                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-md bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-bold">
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>Verified</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestReviews;
