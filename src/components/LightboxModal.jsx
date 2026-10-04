import React from 'react';
import { X, MapPin, Tag } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const LightboxModal = () => {
  const { activeLightboxImage, closeLightbox } = useBooking();

  if (!activeLightboxImage) return null;

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-slate-950/95 backdrop-blur-md animate-fade-in"
      onClick={closeLightbox}
    >
      <button
        onClick={closeLightbox}
        className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors z-30"
        aria-label="Close image lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      <div
        className="relative max-w-5xl max-h-[85vh] overflow-hidden rounded-2xl shadow-2xl bg-black border border-white/10"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={activeLightboxImage.image || activeLightboxImage.url}
          alt={activeLightboxImage.title}
          className="max-h-[75vh] w-auto max-w-full object-contain mx-auto"
        />

        <div className="p-4 bg-slate-900/90 backdrop-blur-md text-white flex items-center justify-between">
          <div>
            <h4 className="text-sm sm:text-base font-extrabold text-white">
              {activeLightboxImage.title}
            </h4>
            <div className="flex items-center gap-3 text-xs text-slate-400 mt-0.5">
              <span className="text-amber-400 font-semibold">{activeLightboxImage.category}</span>
              {activeLightboxImage.hotelSlug && (
                <>
                  <span>•</span>
                  <span className="capitalize">{activeLightboxImage.hotelSlug.replace('-', ' ')}</span>
                </>
              )}
            </div>
          </div>

          <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
            iStay Hotels Visuals
          </div>
        </div>
      </div>
    </div>
  );
};

export default LightboxModal;
