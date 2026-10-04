import React, { useState, useEffect } from 'react';
import LoadingScreen from '../components/LoadingScreen';
import Hero from '../components/Hero';
import BookingWidget from '../components/BookingWidget';
import HotelGrid from '../components/HotelGrid';
import AboutSection from '../components/AboutSection';
import PropertyHighlights from '../components/PropertyHighlights';
import WhyStayGrid from '../components/WhyStayGrid';
import RoomsSection from '../components/RoomsSection';
import DiningSection from '../components/DiningSection';
import EventsSection from '../components/EventsSection';
import NearbyAttractions from '../components/NearbyAttractions';
import SpecialOffers from '../components/SpecialOffers';
import GuestReviews from '../components/GuestReviews';
import FinalCTA from '../components/FinalCTA';
import { Sparkles, ArrowRight } from 'lucide-react';
import { hotelsData } from '../data/hotels';
import HotelCard from '../components/HotelCard';

export const Home = () => {
  const [showLoadingScreen, setShowLoadingScreen] = useState(() => {
    // Only show loading screen once per session
    return !sessionStorage.getItem('istay_loading_shown');
  });

  const handleLoadingComplete = () => {
    setShowLoadingScreen(false);
    sessionStorage.setItem('istay_loading_shown', 'true');
  };

  return (
    <div className="relative">
      {/* 01. LOADING SCREEN */}
      {showLoadingScreen && <LoadingScreen onComplete={handleLoadingComplete} />}

      {/* 02. HERO */}
      <Hero />

      {/* 03. BOOKING WIDGET */}
      <BookingWidget />

      {/* 04. OUR HOTELS */}
      <HotelGrid />

      {/* 05. ABOUT iSTAY HOTELS */}
      <AboutSection />

      {/* 05.1 PROPERTY HIGHLIGHTS */}
      <PropertyHighlights />

      {/* 06. WHY STAY WITH US */}
      <WhyStayGrid />

      {/* 07. ROOMS & SUITES */}
      <RoomsSection />

      {/* 08. DINING EXPERIENCES */}
      <DiningSection />

      {/* 09. MEETINGS & EVENTS */}
      <EventsSection />

      {/* 10. NEARBY ATTRACTIONS */}
      <NearbyAttractions defaultHotelSlug="jubilee-hills" />

      {/* 11. SPECIAL OFFERS */}
      <SpecialOffers />

      {/* 12. GUEST REVIEWS */}
      <GuestReviews />

      {/* 12.1 EXPLORE OUR HOTELS (Dedicated 5-card grid near lower section) */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>DEDICATED LOCATIONS</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              EXPLORE OUR HOTELS
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              Modern business-class hospitality tailored across Hyderabad, Bengaluru, Haveri, and Haridwar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {hotelsData.map((hotel) => (
              <HotelCard key={hotel.id} hotel={hotel} />
            ))}
          </div>
        </div>
      </section>

      {/* 13. FINAL CTA */}
      <FinalCTA />

      {/* 14. FOOTER is included globally in App.jsx */}
    </div>
  );
};

export default Home;
