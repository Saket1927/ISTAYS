import React from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { brandInfo } from '../data/hotels';

export const AboutSection = () => {
  return (
    <section id="about-istay" className="py-20 lg:py-28 bg-[#F8FAFC] border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Editorial Text */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ABOUT iSTAY HOTELS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 uppercase tracking-tight leading-[1.1]">
              CONTEMPORARY HOSPITALITY FOR <br className="hidden sm:inline" />
              <span className="text-amber-500">MODERN TRAVELLERS</span>
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
              {brandInfo.aboutText.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link
                to="/about"
                className="bg-slate-900 hover:bg-slate-800 text-white font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-widest shadow-md transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center gap-2"
              >
                <span>OUR STORY</span>
                <ArrowRight className="w-4 h-4 text-amber-400" />
              </Link>

              <Link
                to="/hotels"
                className="border border-slate-300 hover:border-slate-800 bg-white hover:bg-slate-50 text-slate-800 font-extrabold px-7 py-3.5 rounded-full text-xs uppercase tracking-widest transition-all duration-200"
              >
                EXPLORE HOTELS
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Layout (1 Large + 3 Small Supporting Images) */}
          <div className="lg:col-span-6 space-y-4">
            {/* Main Feature Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200/80 aspect-[16/10] bg-slate-200">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80"
                alt="iStay Hotels Modern Lobby & Architecture"
                loading="lazy"
                className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute bottom-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg border border-white/10">
                iStay Hotels Jubilee Hills, Hyderabad
              </div>
            </div>

            {/* 3 Small Supporting Images */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4">
              <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-slate-200 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1618773928121-c32242e63f39?auto=format&fit=crop&w=600&q=80"
                  alt="Modern Room"
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-slate-200 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=600&q=80"
                  alt="Moxa Xpress Dining"
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-md aspect-[4/3] bg-slate-200 border border-slate-200">
                <img
                  src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=600&q=80"
                  alt="Conference & Events"
                  loading="lazy"
                  className="w-full h-full object-cover object-center hover:scale-110 transition-transform duration-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
