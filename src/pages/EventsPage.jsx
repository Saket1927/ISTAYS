import React, { useEffect } from 'react';
import { Sparkles, Calendar, Users, Projector, Tv, Volume2, Wifi, Utensils, CheckCircle, ArrowRight } from 'lucide-react';
import { meetingsAndEventsData } from '../data/hotels';
import { useBooking } from '../context/BookingContext';
import FinalCTA from '../components/FinalCTA';

export const EventsPage = () => {
  const { openEnquiryModal } = useBooking();

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
            <span>BUSINESS & SOCIAL GATHERINGS</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            MEETINGS & EVENTS
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Host professional board meetings, seminars, team workshops, and celebratory gatherings with dedicated event coordination and modern AV tech.
          </p>
          <div className="mt-8">
            <button
              onClick={() => openEnquiryModal('Meetings & Events Enquiry')}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-xl transition-all"
            >
              REQUEST AN EVENT QUOTE
            </button>
          </div>
        </div>
      </section>

      {/* Facilities & Suitability */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">
                VERSATILE SPACES
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                SPACES ENGINEERED FOR PRODUCTIVE MEETINGS
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Whether you are organizing a high-stakes executive board meeting in Hyderabad, a multi-day corporate training seminar in Bangalore, or a private family reception, iStay Hotels delivers flexible configurations, high-speed broadband, and seamless catering support.
              </p>

              <div className="grid grid-cols-2 gap-3 pt-2">
                {meetingsAndEventsData.suitableFor.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800">
                    <CheckCircle className="w-4 h-4 text-amber-500 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/11] bg-slate-100 border border-slate-200">
                <img
                  src={meetingsAndEventsData.mainImage}
                  alt="Boardroom"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Event Facilities */}
          <div className="pt-12 border-t border-slate-200">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tight">
                INCLUDED MEETING INFRASTRUCTURE
              </h3>
              <p className="text-xs sm:text-sm text-slate-500 mt-1">
                State-of-the-art audiovisual solutions and dedicated on-site assistance.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
              {meetingsAndEventsData.facilities.map((fac, idx) => (
                <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center flex flex-col items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center mb-2">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-900">{fac.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default EventsPage;
