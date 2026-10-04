import React, { useState } from 'react';
import { X, Calendar, MapPin, Users, CheckCircle2, AlertCircle, ShieldCheck, Sparkles } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { hotelsData } from '../data/hotels';

export const BookingModal = () => {
  const {
    isBookingModalOpen,
    closeBookingModal,
    selectedDestination,
    setSelectedDestination,
    checkInDate,
    setCheckInDate,
    checkOutDate,
    setCheckOutDate,
    guests,
    setGuests,
    promoCode,
    setPromoCode,
    activeRoomDetail
  } = useBooking();

  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [bookingReference, setBookingReference] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  if (!isBookingModalOpen) return null;

  const currentHotel = hotelsData.find((h) => h.slug === selectedDestination) || hotelsData[0];
  const todayStr = new Date().toISOString().split('T')[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!checkInDate || checkInDate < todayStr) {
      setErrorMessage('Please select a valid check-in date.');
      return;
    }
    if (!checkOutDate || checkOutDate <= checkInDate) {
      setErrorMessage('Check-out date must be strictly after check-in.');
      return;
    }

    if (currentHotel.isOpeningSoon) {
      setErrorMessage(`${currentHotel.name} is Opening Soon and not currently accepting direct reservations. Please submit an advance enquiry.`);
      return;
    }

    // Global redirect to official Orange Tiger Hospitality reservations portal
    window.location.href = 'https://www.orangetigerhotels.com/?search';
  };

  const handleReset = () => {
    setIsConfirmed(false);
    closeBookingModal();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center font-black text-sm">
              iStay
            </div>
            <div>
              <h3 className="text-lg font-black tracking-tight text-white">
                Reserve Your Stay
              </h3>
              <p className="text-xs text-amber-400 font-medium">
                {currentHotel.name} • {currentHotel.city}
              </p>
            </div>
          </div>

          <button
            onClick={closeBookingModal}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto flex-1">
          {isConfirmed ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h4 className="text-2xl font-black text-slate-900">
                Reservation Request Received!
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you <strong className="text-slate-900">{guestName}</strong>. Your reservation request for <strong className="text-slate-900">{currentHotel.name}</strong> has been logged.
              </p>

              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-left max-w-md mx-auto space-y-2 text-xs">
                <div className="flex justify-between">
                  <span className="text-slate-500">Booking Reference:</span>
                  <span className="font-extrabold text-amber-600">{bookingReference}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Dates:</span>
                  <span className="font-bold text-slate-800">{checkInDate} to {checkOutDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Guests:</span>
                  <span className="font-bold text-slate-800">{guests.adults + guests.children} Guests, {guests.rooms} Room(s)</span>
                </div>
                {activeRoomDetail && (
                  <div className="flex justify-between">
                    <span className="text-slate-500">Room Category:</span>
                    <span className="font-bold text-slate-800">{activeRoomDetail.name}</span>
                  </div>
                )}
              </div>

              <p className="text-xs text-slate-400 italic">
                Our front office team will connect with your confirmation details shortly.
              </p>

              <div className="pt-4">
                <button
                  type="button"
                  onClick={handleReset}
                  className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-3 rounded-full text-xs uppercase tracking-wider"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {errorMessage && (
                <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-medium rounded-xl flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Destination selector */}
              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                  Selected Property
                </label>
                <select
                  value={selectedDestination}
                  onChange={(e) => setSelectedDestination(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-bold text-slate-900 focus:outline-none focus:border-amber-500"
                >
                  {hotelsData.map((h) => (
                    <option key={h.id} value={h.slug}>
                      {h.name} {h.isOpeningSoon ? ' (Opening Soon)' : ''}
                    </option>
                  ))}
                </select>
              </div>

              {/* Checkin / Checkout grid */}
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Check-in Date
                  </label>
                  <input
                    type="date"
                    min={todayStr}
                    value={checkInDate}
                    onChange={(e) => setCheckInDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Check-out Date
                  </label>
                  <input
                    type="date"
                    min={checkInDate}
                    value={checkOutDate}
                    onChange={(e) => setCheckOutDate(e.target.value)}
                    required
                    className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              {/* Guest Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Your Full Name"
                    value={guestName}
                    onChange={(e) => setGuestName(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="name@company.com"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Mobile Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="+91 98765 43210"
                    value={guestPhone}
                    onChange={(e) => setGuestPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>

                <div>
                  <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                    Promo / Corporate Code
                  </label>
                  <input
                    type="text"
                    placeholder="Optional Code"
                    value={promoCode}
                    onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                    className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 uppercase placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                  Special Requests / Notes
                </label>
                <textarea
                  rows="2"
                  placeholder="Airport pickup request, high floor, twin beds, etc."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full px-3.5 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                />
              </div>

              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-md shadow-amber-500/20 transition-colors"
                >
                  CONFIRM RESERVATION REQUEST
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;
