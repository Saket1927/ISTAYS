import React, { useEffect } from 'react';
import { Sparkles, CheckCircle2, ShieldCheck, Heart, Award, Users } from 'lucide-react';
import { brandInfo } from '../data/hotels';
import WhyStayGrid from '../components/WhyStayGrid';
import PropertyHighlights from '../components/PropertyHighlights';
import FinalCTA from '../components/FinalCTA';

export const AboutPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const values = [
    { title: "Modern & Approachable", desc: "Contemporary interior architecture designed for ease, functional efficiency, and friendly warmth." },
    { title: "Business & Productivity First", desc: "Ergonomic work spaces, ultra-fast broadband, and silent zones so you remain at peak productivity." },
    { title: "Culinary Diversity", desc: "From fast breakfast grab-and-go to authentic regional thalis at Utsavam, we celebrate Indian cuisine." },
    { title: "Safety & Reliability", desc: "Strict hygiene standards, round-the-clock security, electronic access, and dedicated front desk care." }
  ];

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>OUR STORY & PHILOSOPHY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            ABOUT iSTAY HOTELS
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Smart Hospitality. Designed Around You. Redefining modern business and leisure travel across India.
          </p>
        </div>
      </section>

      {/* Main Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
            <div className="lg:col-span-6 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">
                OUR VISION
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                {brandInfo.aboutHeadline}
              </h2>
              {brandInfo.aboutText.map((p, i) => (
                <p key={i} className="text-slate-600 text-sm sm:text-base leading-relaxed">
                  {p}
                </p>
              ))}
            </div>

            <div className="lg:col-span-6">
              <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[16/11] bg-slate-100 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                  alt="iStay Hotels Atmosphere"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Core Values Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 border-t border-slate-200">
            {values.map((val, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 text-amber-600 flex items-center justify-center font-black text-sm mb-4">
                  0{idx + 1}
                </div>
                <h4 className="text-base font-extrabold text-slate-900 mb-2">{val.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{val.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PropertyHighlights />

      <WhyStayGrid />

      <FinalCTA />
    </div>
  );
};

export default AboutPage;
