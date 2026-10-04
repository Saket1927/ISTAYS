import React, { useState, useEffect } from 'react';
import { Sparkles, Eye, Image as ImageIcon } from 'lucide-react';
import { masterGalleryCategories, masterGalleryItems } from '../data/hotels';
import { useBooking } from '../context/BookingContext';
import FinalCTA from '../components/FinalCTA';

export const GalleryPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { openLightbox } = useBooking();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredItems = selectedCategory === 'All'
    ? masterGalleryItems
    : masterGalleryItems.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>EXPLORE iSTAY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            VISUAL GALLERY
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Take a visual tour across our contemporary lobbies, smart rooms, suites, culinary venues, and meeting spaces.
          </p>
        </div>
      </section>

      {/* Categories Filter Bar */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center gap-2 overflow-x-auto no-scrollbar">
          {masterGalleryCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider whitespace-nowrap transition-all ${
                selectedCategory === cat
                  ? 'bg-amber-500 text-slate-950 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Masonry / Grid Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                onClick={() => openLightbox(item)}
                className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 cursor-pointer shadow-sm hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out"
                />
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 text-white">
                  <div className="flex justify-end">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white">
                      <Eye className="w-4 h-4" />
                    </div>
                  </div>

                  <div>
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-amber-400 block">
                      {item.category}
                    </span>
                    <h4 className="text-sm font-bold text-white">
                      {item.title}
                    </h4>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FinalCTA />
    </div>
  );
};

export default GalleryPage;
