import React, { useState } from 'react';
import { X, CheckCircle2, Bed, Bath, Wifi, Tv, Coffee, Wind, Calendar, Sparkles, Eye } from 'lucide-react';
import { useBooking } from '../context/BookingContext';

export const RoomDetailModal = () => {
  const { activeRoomDetail, closeRoomDetail, openBookingModal } = useBooking();
  const [activeTab, setActiveTab] = useState('gallery'); // 'gallery' or '360'

  if (!activeRoomDetail) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/85 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[92vh] flex flex-col">
        {/* Modal Header */}
        <div className="p-4 sm:p-5 bg-slate-900 text-white flex items-center justify-between">
          <div>
            <div className="text-[10px] font-black uppercase tracking-widest text-amber-400">
              {activeRoomDetail.category || 'Room Category'}
            </div>
            <h3 className="text-xl font-black text-white">
              {activeRoomDetail.name}
            </h3>
          </div>

          <button
            onClick={closeRoomDetail}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto flex-1 space-y-6">
          {/* Visual Showcase (Photo Gallery or 360 Mode) */}
          <div className="relative rounded-2xl overflow-hidden aspect-[16/10] bg-slate-900">
            {activeTab === 'gallery' ? (
              <img
                src={activeRoomDetail.image}
                alt={activeRoomDetail.name}
                className="w-full h-full object-cover"
              />
            ) : (
              <div className="relative w-full h-full flex flex-col items-center justify-center bg-slate-950 text-white p-6 text-center">
                <div className="w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center mb-3 animate-spin" style={{ animationDuration: '10s' }}>
                  <Eye className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-white mb-1">360° Panoramic Virtual Tour</h4>
                <p className="text-xs text-slate-400 max-w-md">
                  Interactive panoramic walkthrough for {activeRoomDetail.name}. Drag or pan in 360 degrees to inspect room ergonomics and interior lighting.
                </p>
                <div className="mt-4 px-3 py-1 rounded-full bg-slate-800 text-[10px] uppercase font-mono text-amber-300 border border-slate-700">
                  Interactive 3D Preview Active
                </div>
              </div>
            )}

            {/* Tab switchers */}
            <div className="absolute top-3 right-3 flex items-center gap-1.5 bg-slate-950/80 backdrop-blur-md p-1 rounded-xl border border-white/10">
              <button
                type="button"
                onClick={() => setActiveTab('gallery')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors ${
                  activeTab === 'gallery' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                Gallery
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('360')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-colors flex items-center gap-1 ${
                  activeTab === '360' ? 'bg-amber-500 text-slate-950' : 'text-slate-300 hover:text-white'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>360° View</span>
              </button>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-slate-400 mb-1.5">
              Room Overview
            </h4>
            <p className="text-slate-700 text-sm leading-relaxed">
              {activeRoomDetail.description}
            </p>
          </div>

          {/* Bed & Bathroom specifications */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Bed className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                  Bed Configuration
                </span>
                <span className="text-xs font-bold text-slate-900">
                  {activeRoomDetail.bedType || 'King / Twin Bed Options'}
                </span>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-100 flex items-start gap-3">
              <div className="w-9 h-9 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center shrink-0">
                <Bath className="w-5 h-5" />
              </div>
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block">
                  En-Suite Bathroom
                </span>
                <span className="text-xs font-bold text-slate-900">
                  {activeRoomDetail.bathroom || 'Modern Rain Shower & Toiletries'}
                </span>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-3">
              Room Features & Amenities
            </h4>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {(activeRoomDetail.features || activeRoomDetail.amenities || []).map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 rounded-lg bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                  <span className="truncate">{feat}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer CTA */}
        <div className="p-4 sm:p-5 border-t border-slate-100 bg-slate-50 flex items-center justify-between gap-4">
          <button
            type="button"
            onClick={closeRoomDetail}
            className="px-5 py-2.5 rounded-xl border border-slate-300 text-slate-700 font-bold text-xs uppercase tracking-wider hover:bg-slate-200 transition-colors"
          >
            Close
          </button>

          <button
            type="button"
            onClick={() => {
              const currentRoom = activeRoomDetail;
              closeRoomDetail();
              openBookingModal(null, currentRoom);
            }}
            className="px-8 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-black text-xs uppercase tracking-widest shadow-md shadow-amber-500/20 transition-all duration-200 transform active:scale-95 flex items-center gap-2"
          >
            <Calendar className="w-4 h-4" />
            <span>BOOK THIS ROOM</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetailModal;
