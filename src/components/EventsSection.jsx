import React from 'react';
import { Projector, Tv, Volume2, Wifi, Utensils, CheckCircle, Sparkles, Calendar, ArrowRight } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { meetingsAndEventsData } from '../data/hotels';

const facilityIconMap = {
  Projector,
  Tv,
  Volume2,
  Wifi,
  Utensils,
  CheckCircle
};

export const EventsSection = () => {
  const { openEnquiryModal } = useBooking();

  return (
    <section id="meetings-events" className="py-20 lg:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-amber-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Information */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-bold uppercase tracking-widest">
              <Sparkles className="w-3 h-3" />
              <span>MEETINGS & EVENTS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight leading-[1.1]">
              VERSATILE SPACES FOR <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-300 to-amber-500">
                EVERY OCCASION
              </span>
            </h2>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
              {meetingsAndEventsData.description}
            </p>

            {/* Suitable For Tags */}
            <div className="space-y-2 pt-2">
              <div className="text-[11px] font-black uppercase tracking-widest text-amber-400">
                Tailored Occasions
              </div>
              <div className="flex flex-wrap gap-2">
                {meetingsAndEventsData.suitableFor.map((item, idx) => (
                  <span
                    key={idx}
                    className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-800/90 border border-slate-700 text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Facilities Icon Grid */}
            <div className="pt-4 border-t border-slate-800 space-y-3">
              <div className="text-[11px] font-black uppercase tracking-widest text-slate-400">
                Event Tech & Support Facilities
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {meetingsAndEventsData.facilities.map((fac, idx) => {
                  const IconComp = facilityIconMap[fac.icon] || CheckCircle;
                  return (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-800/60 border border-slate-700/60 text-xs text-slate-200"
                    >
                      <IconComp className="w-4 h-4 text-amber-400 shrink-0" />
                      <span className="truncate">{fac.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <button
                type="button"
                onClick={() => openEnquiryModal('Meetings & Events Enquiry')}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 transition-all duration-300 transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>ENQUIRE NOW</span>
              </button>
            </div>
          </div>

          {/* Right Column: Visual Showcase */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Conference Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-700 aspect-[16/10] bg-slate-800 group">
              <img
                src={meetingsAndEventsData.mainImage}
                alt="Conference & Boardroom Space"
                loading="lazy"
                className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">Executive Space</span>
                <span className="text-base font-extrabold text-white">Smart Audiovisual Equipped Meeting Suites</span>
              </div>
            </div>

            {/* Supporting Thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {meetingsAndEventsData.supportingImages.map((img, idx) => (
                <div
                  key={idx}
                  className="rounded-xl overflow-hidden aspect-[4/3] bg-slate-800 border border-slate-700/80"
                >
                  <img
                    src={img}
                    alt={`Event support visual ${idx + 1}`}
                    loading="lazy"
                    className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
