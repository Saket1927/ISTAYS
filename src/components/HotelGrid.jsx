import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  MapPin,
  Sparkles,
  ArrowRight,
  Calendar,
  Clock,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import { hotelsData } from '../data/hotels';
import { useBooking } from '../context/BookingContext';

export const HotelGrid = () => {
  const [selectedHotelId, setSelectedHotelId] = useState(hotelsData[0].id);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { openBookingModal } = useBooking();

  const selectedHotel = hotelsData.find((h) => h.id === selectedHotelId) || hotelsData[0];

  const handleSelectHotel = (id) => {
    if (id === selectedHotelId) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setSelectedHotelId(id);
      setIsTransitioning(false);
    }, 200);
  };

  return (
    <section id="our-hotels" className="py-16 sm:py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>DISCOVER OUR DESTINATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
            OUR HOTELS
          </h2>
          <p className="mt-2 sm:mt-3 text-sm sm:text-base text-slate-600">
            Discover our properties across India.
          </p>
        </div>

        {/* =========================================================================
            MOBILE LAYOUT (lg:hidden) — MANGO-STYLE PROPERTY SELECTOR
            1 Large Featured Hotel Card + Horizontal Swipeable Hotel Selector Below
            ========================================================================= */}
        <div className="lg:hidden space-y-5">
          {/* 1. Large Featured Hotel Card on Mobile */}
          <div
            className={`bg-white rounded-2xl sm:rounded-3xl overflow-hidden border border-slate-200 shadow-xl transition-all duration-300 ${
              isTransitioning ? 'opacity-40 scale-[0.99] blur-[1px]' : 'opacity-100 scale-100 blur-0'
            }`}
          >
            {/* Dominant Large Hotel Image (220-280px) */}
            <div className="relative h-56 sm:h-72 w-full overflow-hidden bg-slate-900">
              <img
                src={selectedHotel.heroImage || selectedHotel.cardImage}
                alt={selectedHotel.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-transparent to-black/30" />

              {/* Status & City Badges */}
              <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                <div className="bg-slate-950/80 backdrop-blur-md text-amber-400 text-[11px] font-black uppercase tracking-wider px-2.5 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                  <MapPin className="w-3 h-3 text-amber-400" />
                  <span>{selectedHotel.city}</span>
                </div>

                {selectedHotel.isOpeningSoon && (
                  <div className="bg-amber-500 text-slate-950 text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    <span>OPENING SOON</span>
                  </div>
                )}
              </div>

              {/* Hotel Name over bottom of image */}
              <div className="absolute bottom-3 left-4 right-4">
                <h3 className="text-xl sm:text-2xl font-black text-white uppercase tracking-tight leading-tight drop-shadow-md">
                  {selectedHotel.name}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-4 sm:p-6 space-y-4">
              <div>
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-600 block mb-1">
                  {selectedHotel.city.toUpperCase()}
                </span>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                  {selectedHotel.shortDescription || selectedHotel.overview}
                </p>
              </div>

              {/* 3 Key Highlights */}
              <div className="pt-2 border-t border-slate-100">
                <div className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-2">
                  Key Highlights
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
                  {(selectedHotel.featuredHighlights || selectedHotel.locationAdvantages || []).slice(0, 3).map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 p-2 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                      <span className="truncate">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Buttons in a Row */}
              <div className="pt-2 flex items-center gap-2.5">
                <Link
                  to={`/hotels/${selectedHotel.slug}`}
                  className="flex-1 py-3 px-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-wider text-center flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>MORE DETAILS</span>
                  <ArrowRight className="w-3.5 h-3.5 text-amber-400" />
                </Link>

                {selectedHotel.isOpeningSoon ? (
                  <span className="py-3 px-4 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-extrabold text-xs uppercase tracking-wider text-center shrink-0">
                    COMING SOON
                  </span>
                ) : (
                  <button
                    type="button"
                    onClick={() => openBookingModal(selectedHotel.slug)}
                    className="flex-1 py-3 px-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-wider text-center shadow-md shadow-amber-500/20 flex items-center justify-center gap-1.5 shrink-0"
                  >
                    <Calendar className="w-3.5 h-3.5" />
                    <span>BOOK NOW</span>
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* 2. Horizontal Swipeable Hotel Selector Below the Card */}
          <div>
            <div className="flex items-center justify-between px-1 mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Swipe to Switch Hotel
              </span>
              <span className="text-[10px] text-amber-600 font-bold">
                {hotelsData.findIndex((h) => h.id === selectedHotel.id) + 1} of 5
              </span>
            </div>

            <div className="flex overflow-x-auto no-scrollbar gap-2.5 pb-2 pt-1 snap-x -mx-4 px-4">
              {hotelsData.map((hotel) => {
                const isSelected = selectedHotel.id === hotel.id;

                return (
                  <button
                    key={hotel.id}
                    type="button"
                    onClick={() => handleSelectHotel(hotel.id)}
                    className={`shrink-0 w-44 sm:w-52 text-left rounded-xl p-2 sm:p-2.5 border transition-all duration-200 snap-start flex items-center gap-2.5 ${
                      isSelected
                        ? 'bg-amber-50/90 border-amber-500 shadow-md ring-2 ring-amber-400/30'
                        : 'bg-white border-slate-200/80 hover:border-slate-300 shadow-xs opacity-80'
                    }`}
                  >
                    {/* Compact Thumbnail */}
                    <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-lg overflow-hidden bg-slate-100 shrink-0 border border-slate-200 relative">
                      <img
                        src={hotel.cardImage || hotel.heroImage}
                        alt={hotel.name}
                        className="w-full h-full object-cover"
                      />
                      {isSelected && (
                        <div className="absolute inset-0 bg-amber-500/20" />
                      )}
                    </div>

                    {/* Compact Text */}
                    <div className="min-w-0 pr-1">
                      <div className="flex items-center gap-1 leading-tight mb-0.5">
                        <span className={`text-[10px] font-bold uppercase ${isSelected ? 'text-amber-700' : 'text-slate-500'}`}>
                          {hotel.city}
                        </span>
                        {hotel.isOpeningSoon && (
                          <span className="text-[8px] font-extrabold uppercase px-1 py-0.2 rounded bg-amber-200 text-amber-900">
                            Soon
                          </span>
                        )}
                      </div>
                      <h4 className={`text-xs font-extrabold truncate ${isSelected ? 'text-slate-950' : 'text-slate-700'}`}>
                        {hotel.name.replace('iStay Hotels ', '')}
                      </h4>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* =========================================================================
            DESKTOP LAYOUT (hidden lg:grid) — UNTOUCHED AS REQUESTED
            Left: Large Featured Hotel Display | Right: Vertical Selector List
            ========================================================================= */}
        <div className="hidden lg:grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
          {/* LEFT: Large Featured Hotel Display */}
          <div className="lg:col-span-7 xl:col-span-8 flex flex-col">
            <div
              className={`bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-xl flex flex-col h-full transition-all duration-300 ${
                isTransitioning ? 'opacity-40 scale-[0.99] blur-[1px]' : 'opacity-100 scale-100 blur-0'
              }`}
            >
              {/* Large Featured Image */}
              <div className="relative aspect-[16/10] sm:aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={selectedHotel.heroImage || selectedHotel.cardImage}
                  alt={selectedHotel.name}
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                />
                
                {/* Gradient Overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/30" />

                {/* Status Badges */}
                <div className="absolute top-4 left-4 flex items-center gap-2">
                  <div className="bg-slate-950/80 backdrop-blur-md text-amber-400 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5 text-amber-400" />
                    <span>{selectedHotel.city}, {selectedHotel.state}</span>
                  </div>

                  {selectedHotel.isOpeningSoon && (
                    <div className="bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-widest px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1.5 animate-pulse">
                      <Clock className="w-3.5 h-3.5" />
                      <span>OPENING SOON</span>
                    </div>
                  )}
                </div>

                {/* Hotel Name over bottom of image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight drop-shadow-md">
                    {selectedHotel.name}
                  </h3>
                </div>
              </div>

              {/* Content Details */}
              <div className="p-6 sm:p-8 flex flex-col flex-1 justify-between space-y-6">
                <div className="space-y-4">
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {selectedHotel.overview || selectedHotel.shortDescription}
                  </p>

                  {/* Key Highlights Grid */}
                  <div className="pt-2">
                    <div className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-2.5">
                      Key Highlights & Connectivity
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-2.5">
                      {(selectedHotel.featuredHighlights || selectedHotel.locationAdvantages || []).slice(0, 6).map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-bold text-slate-800"
                        >
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Action Buttons */}
                <div className="pt-6 border-t border-slate-100 flex flex-wrap items-center gap-3 sm:gap-4">
                  <Link
                    to={`/hotels/${selectedHotel.slug}`}
                    className="flex-1 sm:flex-none py-3.5 px-6 rounded-xl border border-slate-900 bg-slate-900 hover:bg-slate-800 text-white font-extrabold text-xs uppercase tracking-widest text-center shadow-sm transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                  >
                    <span>MORE DETAILS</span>
                    <ArrowRight className="w-4 h-4 text-amber-400" />
                  </Link>

                  {selectedHotel.isOpeningSoon ? (
                    <span className="py-3.5 px-6 rounded-xl bg-amber-50 border border-amber-200 text-amber-800 font-extrabold text-xs uppercase tracking-widest text-center">
                      COMING SOON
                    </span>
                  ) : (
                    <button
                      type="button"
                      onClick={() => openBookingModal(selectedHotel.slug)}
                      className="flex-1 sm:flex-none py-3.5 px-6 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow-md shadow-amber-500/20 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>BOOK NOW</span>
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Vertical Hotel Selector / List */}
          <div className="lg:col-span-5 xl:col-span-4 flex flex-col justify-between space-y-3">
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 px-1 mb-1">
              Select a Hotel ({hotelsData.length})
            </div>

            <div className="space-y-3 flex-1 flex flex-col justify-between">
              {hotelsData.map((hotel) => {
                const isSelected = selectedHotel.id === hotel.id;

                return (
                  <button
                    key={hotel.id}
                    type="button"
                    onClick={() => handleSelectHotel(hotel.id)}
                    className={`w-full text-left p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 flex items-center justify-between group ${
                      isSelected
                        ? 'bg-amber-50/80 border-amber-400 shadow-md ring-2 ring-amber-400/30'
                        : 'bg-white border-slate-200/80 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                    }`}
                  >
                    <div className="flex items-center gap-3.5 min-w-0">
                      {/* Thumbnail */}
                      <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200 relative">
                        <img
                          src={hotel.cardImage || hotel.heroImage}
                          alt={hotel.name}
                          className={`w-full h-full object-cover transition-transform duration-500 ${
                            isSelected ? 'scale-110' : 'group-hover:scale-105'
                          }`}
                        />
                        {isSelected && (
                          <div className="absolute inset-0 bg-amber-500/15" />
                        )}
                      </div>

                      {/* Info */}
                      <div className="min-w-0 pr-2">
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className={`text-[11px] font-bold uppercase tracking-wider ${isSelected ? 'text-amber-700' : 'text-slate-500'}`}>
                            {hotel.city}
                          </span>
                          {hotel.isOpeningSoon && (
                            <span className="text-[9px] font-black uppercase px-1.5 py-0.2 rounded bg-amber-200 text-amber-900">
                              Opening Soon
                            </span>
                          )}
                        </div>

                        <h4 className={`text-sm sm:text-base font-extrabold tracking-tight truncate ${
                          isSelected ? 'text-slate-950' : 'text-slate-800 group-hover:text-amber-600'
                        }`}>
                          {hotel.name}
                        </h4>

                        <div className="text-[11px] text-slate-500 truncate mt-0.5">
                          {hotel.rooms.length} Room Categories Available
                        </div>
                      </div>
                    </div>

                    {/* Active Arrow Indicator */}
                    <div className="shrink-0 pl-2">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
                          isSelected
                            ? 'bg-amber-500 text-slate-950 shadow-sm rotate-0'
                            : 'bg-slate-100 text-slate-400 group-hover:bg-slate-200 group-hover:text-slate-800'
                        }`}
                      >
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelGrid;
