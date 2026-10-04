import React, { useState } from 'react';
import { MapPin, Navigation, Clock, Compass, Sparkles, ExternalLink, ChevronRight, Layers, ZoomIn, ZoomOut } from 'lucide-react';
import { hotelsData } from '../data/hotels';

export const NearbyAttractions = ({ defaultHotelSlug = 'jubilee-hills' }) => {
  const [selectedHotelSlug, setSelectedHotelSlug] = useState(defaultHotelSlug);
  const [activeAttraction, setActiveAttraction] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  const currentHotel = hotelsData.find((h) => h.slug === selectedHotelSlug) || hotelsData[0];
  const attractions = currentHotel.attractions || [];

  const handleAttractionClick = (attraction) => {
    setActiveAttraction(attraction);
  };

  const getGoogleMapsDirectionsUrl = (attractionName, hotelName, city) => {
    return `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(hotelName + ', ' + city)}&destination=${encodeURIComponent(attractionName + ', ' + city)}`;
  };

  return (
    <section id="nearby-attractions" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>EXPLORE AROUND</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              NEARBY ATTRACTIONS
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Discover popular landmarks, business hubs and travel points near iStay Hotels.
            </p>
          </div>

          {/* Hotel Switcher Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 mt-4 md:mt-0 no-scrollbar">
            {hotelsData.map((hotel) => (
              <button
                key={hotel.id}
                onClick={() => {
                  setSelectedHotelSlug(hotel.slug);
                  setActiveAttraction(null);
                }}
                className={`px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-200 ${
                  selectedHotelSlug === hotel.slug
                    ? 'bg-amber-500 text-slate-950 shadow-sm'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {hotel.city}
              </button>
            ))}
          </div>
        </div>

        {/* Desktop Split Layout (LEFT: Interactive Map, RIGHT: Vertical List) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Map Canvas */}
          <div className="lg:col-span-7 bg-slate-900 rounded-2xl overflow-hidden shadow-xl border border-slate-800 relative h-[480px] sm:h-[540px] flex flex-col justify-between p-4 select-none">
            {/* Map Visual Background Simulation */}
            <div
              className="absolute inset-0 bg-[#0B1329] opacity-90 transition-transform duration-300"
              style={{
                backgroundImage: `radial-gradient(#1E293B 1.5px, transparent 1.5px), radial-gradient(#1E293B 1.5px, #0B1329 1.5px)`,
                backgroundSize: `${32 * zoomLevel}px ${32 * zoomLevel}px`,
                backgroundPosition: `0 0, ${16 * zoomLevel}px ${16 * zoomLevel}px`,
                transform: `scale(${zoomLevel})`
              }}
            />

            {/* Stylized road grid lines */}
            <svg className="absolute inset-0 w-full h-full pointer-events-none opacity-25" xmlns="http://www.w3.org/2000/svg">
              <path d="M0,150 Q300,180 600,120 T1200,200" fill="none" stroke="#64748B" strokeWidth="3" />
              <path d="M100,0 Q250,300 400,600" fill="none" stroke="#64748B" strokeWidth="2.5" />
              <path d="M500,0 Q450,280 700,600" fill="none" stroke="#64748B" strokeWidth="2" strokeDasharray="6,6" />
              <circle cx="50%" cy="50%" r="140" fill="none" stroke="#F59E0B" strokeWidth="1" strokeDasharray="4,4" opacity="0.4" />
            </svg>

            {/* Map Controls Header */}
            <div className="relative z-10 flex items-center justify-between">
              <div className="bg-slate-950/90 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-white/10 text-white flex items-center gap-2 text-xs font-bold">
                <div className="w-2.5 h-2.5 rounded-full bg-amber-500 animate-pulse" />
                <span>{currentHotel.name}</span>
              </div>

              <div className="flex items-center gap-1.5 bg-slate-950/90 backdrop-blur-md p-1 rounded-xl border border-white/10">
                <button
                  onClick={() => setZoomLevel((z) => Math.min(1.5, z + 0.15))}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                  title="Zoom In"
                  aria-label="Zoom in"
                >
                  <ZoomIn className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setZoomLevel((z) => Math.max(0.8, z - 0.15))}
                  className="p-1.5 rounded-lg text-slate-300 hover:text-white hover:bg-white/10"
                  title="Zoom Out"
                  aria-label="Zoom out"
                >
                  <ZoomOut className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Center: Hotel Marker (Yellow iStay Icon) */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center cursor-pointer group">
              <div className="relative">
                <div className="w-12 h-12 rounded-full bg-amber-500 shadow-2xl shadow-amber-500/50 flex items-center justify-center text-slate-950 font-black border-2 border-white transform group-hover:scale-110 transition-transform">
                  <span className="text-xs font-black tracking-tighter">iStay</span>
                </div>
                <div className="w-3 h-3 bg-amber-500 rotate-45 mx-auto -mt-1 border-r border-b border-white" />
              </div>
              <div className="bg-slate-950/90 text-white text-[10px] font-bold px-2.5 py-1 rounded-md mt-1 shadow-md border border-amber-500/30 whitespace-nowrap">
                {currentHotel.name}
              </div>
            </div>

            {/* Orbiting Attraction Pins (Blue / Secondary) */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              {attractions.slice(0, 6).map((att, idx) => {
                // Calculated radial coordinates around center
                const angles = [35, 120, 210, 290, 75, 170];
                const angle = (angles[idx % angles.length] * Math.PI) / 180;
                const distanceRadius = 140 + (idx % 3) * 35;
                const xPercent = 50 + (Math.cos(angle) * distanceRadius) / 5;
                const yPercent = 50 + (Math.sin(angle) * distanceRadius) / 6;

                const isSelected = activeAttraction?.name === att.name;

                return (
                  <div
                    key={idx}
                    style={{ left: `${xPercent}%`, top: `${yPercent}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 pointer-events-auto cursor-pointer"
                    onClick={() => handleAttractionClick(att)}
                  >
                    <div className="flex flex-col items-center group">
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center shadow-lg border-2 transition-transform transform group-hover:scale-125 ${
                          isSelected
                            ? 'bg-amber-400 text-slate-950 border-white scale-110 ring-4 ring-amber-400/30'
                            : 'bg-blue-600 text-white border-white'
                        }`}
                      >
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="bg-slate-900/90 backdrop-blur-xs text-[9px] font-bold text-slate-200 px-2 py-0.5 rounded shadow border border-slate-700 whitespace-nowrap mt-1 group-hover:text-amber-400 transition-colors">
                        {att.name}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Bottom Floating Info Card if Attraction Selected */}
            <div className="relative z-20">
              {activeAttraction ? (
                <div className="bg-slate-950/95 backdrop-blur-md p-4 rounded-xl border border-amber-500/40 text-white flex items-center justify-between shadow-2xl animate-fade-in">
                  <div className="flex items-center gap-3">
                    <img
                      src={activeAttraction.image}
                      alt={activeAttraction.name}
                      className="w-12 h-12 rounded-lg object-cover border border-slate-700"
                    />
                    <div>
                      <h4 className="text-sm font-extrabold text-white">{activeAttraction.name}</h4>
                      <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
                        <span className="text-amber-400">{activeAttraction.category}</span>
                        <span>•</span>
                        <span>{activeAttraction.distance}</span>
                        <span>•</span>
                        <span>{activeAttraction.travelTime}</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href={getGoogleMapsDirectionsUrl(activeAttraction.name, currentHotel.name, currentHotel.city)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-3.5 py-2 rounded-lg text-xs uppercase tracking-wider flex items-center gap-1.5 transition-colors shrink-0"
                  >
                    <span>DIRECTIONS</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              ) : (
                <div className="bg-slate-950/80 backdrop-blur-md py-2 px-4 rounded-xl border border-slate-800 text-slate-400 text-xs flex items-center justify-between">
                  <span>Click any pin or list item to inspect travel time & directions</span>
                  <Compass className="w-4 h-4 text-amber-500" />
                </div>
              )}
            </div>
          </div>

          {/* Right Column: Vertical Attraction List */}
          <div className="lg:col-span-5 space-y-3 max-h-[540px] overflow-y-auto pr-1">
            <div className="text-xs font-black uppercase tracking-widest text-slate-400 px-1">
              Top Locations Near {currentHotel.name} ({attractions.length})
            </div>

            {attractions.map((item, idx) => {
              const isSelected = activeAttraction?.name === item.name;

              return (
                <div
                  key={idx}
                  onClick={() => handleAttractionClick(item)}
                  className={`group p-3.5 rounded-2xl border transition-all duration-200 cursor-pointer flex items-center justify-between ${
                    isSelected
                      ? 'bg-amber-50/70 border-amber-400 shadow-md'
                      : 'bg-white border-slate-100 hover:border-slate-300 hover:bg-slate-50 shadow-xs'
                  }`}
                >
                  <div className="flex items-center gap-3.5">
                    {/* Thumbnail */}
                    <div className="w-14 h-14 rounded-xl overflow-hidden bg-slate-100 shrink-0 border border-slate-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        loading="lazy"
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                    </div>

                    {/* Details */}
                    <div>
                      <h4 className="text-sm font-extrabold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {item.name}
                      </h4>
                      <div className="text-[11px] font-semibold text-amber-600">
                        {item.category}
                      </div>
                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1 font-medium">
                        <span className="flex items-center gap-1">
                          <Navigation className="w-3 h-3 text-slate-400" />
                          {item.distance}
                        </span>
                        <span>•</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3 text-slate-400" />
                          {item.travelTime}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* View Details Arrow */}
                  <div className="pl-2">
                    <div className="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-amber-500 group-hover:text-slate-950 text-slate-600 flex items-center justify-center transition-colors">
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NearbyAttractions;
