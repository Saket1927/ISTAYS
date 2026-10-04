import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Users, Tag, Search, MapPin, ChevronDown, AlertCircle } from 'lucide-react';
import { useBooking } from '../context/BookingContext';
import { hotelsData } from '../data/hotels';

export const BookingWidget = ({ className = "" }) => {
  const navigate = useNavigate();
  const {
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
    openBookingModal
  } = useBooking();

  const [isGuestPickerOpen, setIsGuestPickerOpen] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  // Format today's date as YYYY-MM-DD
  const todayStr = new Date().toISOString().split('T')[0];

  const handleCheckInChange = (e) => {
    const newCheckIn = e.target.value;
    setCheckInDate(newCheckIn);
    setErrorMessage('');

    // If checkout is before or equal to new checkin, automatically adjust checkout to checkin + 1 day
    if (newCheckIn >= checkOutDate) {
      const nextDay = new Date(newCheckIn);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOutDate(nextDay.toISOString().split('T')[0]);
    }
  };

  const handleCheckOutChange = (e) => {
    const newCheckOut = e.target.value;
    if (newCheckOut <= checkInDate) {
      setErrorMessage('Check-out date must be after check-in date.');
      return;
    }
    setErrorMessage('');
    setCheckOutDate(newCheckOut);
  };

  const handleSearch = (e) => {
    e.preventDefault();

    // Validation
    if (!checkInDate || checkInDate < todayStr) {
      setErrorMessage('Check-in date cannot be in the past.');
      return;
    }
    if (!checkOutDate || checkOutDate <= checkInDate) {
      setErrorMessage('Check-out date must be strictly after check-in date.');
      return;
    }

    const selectedHotel = hotelsData.find((h) => h.slug === selectedDestination);
    if (selectedHotel?.isOpeningSoon) {
      // Opening soon alert, navigate to hotel page
      navigate(`/hotels/${selectedDestination}`);
      return;
    }

    // Open booking modal with searched state
    openBookingModal(selectedDestination);
  };

  return (
    <div className={`relative z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 sm:-mt-14 ${className}`}>
      <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 border border-slate-100 p-4 sm:p-6 lg:p-6 transition-all">
        {errorMessage && (
          <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700 text-xs font-medium rounded-xl flex items-center gap-2">
            <AlertCircle className="w-4 h-4 shrink-0 text-red-500" />
            <span>{errorMessage}</span>
          </div>
        )}

        <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 lg:gap-4 items-center">
          {/* Destination */}
          <div className="lg:col-span-3">
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
              DESTINATION
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-500">
                <MapPin className="w-4 h-4" />
              </div>
              <select
                value={selectedDestination}
                onChange={(e) => setSelectedDestination(e.target.value)}
                className="w-full pl-9 pr-8 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors appearance-none cursor-pointer"
              >
                {hotelsData.map((hotel) => (
                  <option key={hotel.id} value={hotel.slug}>
                    {hotel.name} {hotel.isOpeningSoon ? ' (Opening Soon)' : ''}
                  </option>
                ))}
              </select>
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-slate-400">
                <ChevronDown className="w-4 h-4" />
              </div>
            </div>
          </div>

          {/* Check In */}
          <div className="lg:col-span-2">
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
              CHECK IN
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-500">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="date"
                min={todayStr}
                value={checkInDate}
                onChange={handleCheckInChange}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors cursor-pointer"
              />
            </div>
          </div>

          {/* Check Out */}
          <div className="lg:col-span-2">
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
              CHECK OUT
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-amber-500">
                <Calendar className="w-4 h-4" />
              </div>
              <input
                type="date"
                min={checkInDate}
                value={checkOutDate}
                onChange={handleCheckOutChange}
                required
                className="w-full pl-9 pr-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors cursor-pointer"
              />
            </div>
          </div>

          {/* Guests */}
          <div className="lg:col-span-2 relative">
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
              GUESTS
            </label>
            <button
              type="button"
              onClick={() => setIsGuestPickerOpen(!isGuestPickerOpen)}
              className="w-full flex items-center justify-between pl-3 pr-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors text-left"
            >
              <div className="flex items-center gap-2 truncate">
                <Users className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="truncate">
                  {guests.adults + guests.children} Guests, {guests.rooms} Rm
                </span>
              </div>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 shrink-0" />
            </button>

            {/* Guest selector dropdown popover */}
            {isGuestPickerOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-2xl border border-slate-100 p-4 z-30 space-y-3">
                {/* Adults */}
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div>
                    <div>Adults</div>
                    <div className="text-[10px] text-slate-400 font-normal">Ages 13+</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuests({ ...guests, adults: Math.max(1, guests.adults - 1) })}
                      className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="w-4 text-center font-bold">{guests.adults}</span>
                    <button
                      type="button"
                      onClick={() => setGuests({ ...guests, adults: Math.min(8, guests.adults + 1) })}
                      className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Children */}
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div>
                    <div>Children</div>
                    <div className="text-[10px] text-slate-400 font-normal">Ages 0-12</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuests({ ...guests, children: Math.max(0, guests.children - 1) })}
                      className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="w-4 text-center font-bold">{guests.children}</span>
                    <button
                      type="button"
                      onClick={() => setGuests({ ...guests, children: Math.min(6, guests.children + 1) })}
                      className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Rooms */}
                <div className="flex items-center justify-between text-xs font-semibold">
                  <div>
                    <div>Rooms</div>
                    <div className="text-[10px] text-slate-400 font-normal">Number of rooms</div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => setGuests({ ...guests, rooms: Math.max(1, guests.rooms - 1) })}
                      className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                    >
                      -
                    </button>
                    <span className="w-4 text-center font-bold">{guests.rooms}</span>
                    <button
                      type="button"
                      onClick={() => setGuests({ ...guests, rooms: Math.min(4, guests.rooms + 1) })}
                      className="w-7 h-7 rounded-lg border border-slate-200 flex items-center justify-center font-bold text-slate-700 hover:bg-slate-100"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setIsGuestPickerOpen(false)}
                  className="w-full bg-slate-900 text-white font-bold py-2 rounded-lg text-xs hover:bg-slate-800 transition-colors"
                >
                  Apply
                </button>
              </div>
            )}
          </div>

          {/* Promo Code */}
          <div className="lg:col-span-1 sm:col-span-1">
            <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
              PROMO
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Code"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value.toUpperCase())}
                className="w-full px-3 py-2.5 bg-slate-50 hover:bg-slate-100/80 border border-slate-200 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/20 focus:border-amber-500 transition-colors uppercase"
              />
            </div>
          </div>

          {/* Search Button */}
          <div className="lg:col-span-2 sm:col-span-2 pt-1 lg:pt-5">
            <button
              type="submit"
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3 px-4 rounded-xl text-xs uppercase tracking-widest shadow-md shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 active:scale-98 flex items-center justify-center gap-2"
            >
              <Search className="w-4 h-4" />
              <span>SEARCH</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BookingWidget;
