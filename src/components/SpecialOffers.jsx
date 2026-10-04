import React from 'react';
import { Sparkles, ArrowRight, Tag } from 'lucide-react';
import { specialOffers } from '../data/hotels';
import { useBooking } from '../context/BookingContext';

export const SpecialOffers = () => {
  const { openBookingModal, openEnquiryModal } = useBooking();

  return (
    <section id="special-offers" className="py-20 bg-[#F8FAFC] border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXCLUSIVE PACKAGES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            SPECIAL OFFERS
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Tailored packages designed for corporate trips, weekend getaways, and extended visits.
          </p>
        </div>

        {/* Offers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {specialOffers.map((offer) => (
            <div
              key={offer.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={offer.image}
                  alt={offer.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                <div className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full shadow">
                  {offer.badge}
                </div>

                <div className="absolute bottom-3 left-3 text-white text-xs font-semibold flex items-center gap-1.5">
                  <Tag className="w-3.5 h-3.5 text-amber-400" />
                  <span>{offer.tag}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-1 justify-between">
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900 tracking-tight mb-2 group-hover:text-amber-600 transition-colors">
                    {offer.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {offer.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100">
                  <button
                    type="button"
                    onClick={() => {
                      if (offer.tag === 'Enterprise' || offer.tag === 'Extended Stay') {
                        openEnquiryModal(offer.title);
                      } else {
                        openBookingModal();
                      }
                    }}
                    className="w-full py-2.5 px-4 rounded-xl border border-slate-200 hover:border-slate-900 bg-slate-50 hover:bg-slate-900 text-slate-800 hover:text-white font-bold text-xs uppercase tracking-wider text-center transition-all duration-200 flex items-center justify-center gap-2 group/btn"
                  >
                    <span>VIEW OFFER</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;
