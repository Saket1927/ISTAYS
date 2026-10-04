import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import {
  MapPin,
  Calendar,
  Sparkles,
  CheckCircle2,
  Clock,
  Phone,
  Mail,
  Share2,
  Navigation,
  Compass,
  Building,
  ArrowRight,
  ShieldCheck,
  Send
} from 'lucide-react';
import { hotelsData } from '../data/hotels';
import { useBooking } from '../context/BookingContext';
import BookingWidget from '../components/BookingWidget';
import RoomCard from '../components/RoomCard';
import DiningCard from '../components/DiningCard';
import AmenityGrid from '../components/AmenityGrid';
import EventsSection from '../components/EventsSection';
import NearbyAttractions from '../components/NearbyAttractions';
import SpecialOffers from '../components/SpecialOffers';
import GuestReviews from '../components/GuestReviews';
import FinalCTA from '../components/FinalCTA';
import WhyStayGrid from '../components/WhyStayGrid';

export const HotelDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { openBookingModal, openEnquiryModal, openLightbox } = useBooking();

  // Find hotel by slug
  const hotel = hotelsData.find((h) => h.slug === slug);

  // Form states for Property Contact Form
  const [contactName, setContactName] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [contactMessage, setContactMessage] = useState('');
  const [isContactSent, setIsContactSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!hotel) {
    return (
      <div className="min-h-screen pt-32 pb-20 flex flex-col items-center justify-center bg-white text-center px-4">
        <h2 className="text-3xl font-black text-slate-900 mb-2">Property Not Found</h2>
        <p className="text-slate-600 mb-6">The requested hotel property does not exist.</p>
        <Link
          to="/hotels"
          className="bg-amber-500 text-slate-950 font-bold px-6 py-3 rounded-full text-xs uppercase tracking-wider"
        >
          View All Hotels
        </Link>
      </div>
    );
  }

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Global redirect to official Orange Tiger Hospitality portal
    window.location.href = 'https://www.orangetigerhotels.com/?search';
  };

  return (
    <div className="bg-white">
      {/* 01. HOTEL HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center bg-slate-950 text-white overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 z-0">
          <img
            src={hotel.heroImage}
            alt={hotel.name}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-slate-950/40" />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/80 via-transparent to-slate-950/60" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          {hotel.isOpeningSoon ? (
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-widest mb-6 shadow-xl animate-pulse">
              <Clock className="w-3.5 h-3.5" />
              <span>OPENING SOON IN {hotel.city.toUpperCase()}</span>
            </div>
          ) : (
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/15 text-amber-400 text-xs font-bold uppercase tracking-widest mb-6">
              <MapPin className="w-3.5 h-3.5" />
              <span>{hotel.city}, {hotel.state}</span>
            </div>
          )}

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tight text-white uppercase leading-[1.08] mb-4">
            {hotel.name}
          </h1>

          <p className="text-base sm:text-xl text-slate-200 font-normal tracking-wide max-w-2xl mb-8 leading-relaxed">
            {hotel.shortDescription}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {hotel.isOpeningSoon ? (
              <button
                onClick={() => openEnquiryModal(`Advance Enquiry: ${hotel.name}`)}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-xl transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4" />
                <span>REGISTER INTEREST & ENQUIRE</span>
              </button>
            ) : (
              <button
                onClick={() => openBookingModal(hotel.slug)}
                className="w-full sm:w-auto bg-amber-500 hover:bg-amber-400 text-slate-950 font-black px-8 py-4 rounded-full text-xs uppercase tracking-widest shadow-xl shadow-amber-500/20 transition-all transform hover:-translate-y-0.5 active:scale-95 flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>BOOK THIS HOTEL</span>
              </button>
            )}

            <a
              href="#about-property"
              className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/25 font-bold px-8 py-4 rounded-full text-xs uppercase tracking-widest transition-all hover:border-white flex items-center justify-center gap-2"
            >
              <span>EXPLORE PROPERTY</span>
            </a>
          </div>
        </div>
      </section>

      {/* 02. BOOKING WIDGET (Only active for bookable, disabled placeholder for opening soon) */}
      {!hotel.isOpeningSoon ? (
        <BookingWidget />
      ) : (
        <div className="max-w-4xl mx-auto px-4 -mt-8 relative z-20">
          <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 sm:p-6 text-center shadow-lg">
            <div className="inline-flex items-center gap-2 text-amber-900 font-extrabold text-sm uppercase tracking-wider mb-1">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>{hotel.name} — OPENING SOON</span>
            </div>
            <p className="text-xs text-amber-800 max-w-xl mx-auto">
              This property is currently in development and opening soon. Preview planned accommodations and register for advance reservations below.
            </p>
          </div>
        </div>
      )}

      {/* 03. ABOUT PROPERTY */}
      <section id="about-property" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500">
                <Sparkles className="w-3.5 h-3.5" />
                <span>PROPERTY OVERVIEW</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                {hotel.name}
              </h2>

              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                {hotel.overview}
              </p>

              {/* Perfect For */}
              {hotel.perfectFor && (
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-3">
                    Perfect For
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                    {hotel.perfectFor.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-100 text-xs font-semibold text-slate-800"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Location Advantages */}
              {hotel.locationAdvantages && (
                <div className="pt-4 border-t border-slate-100">
                  <h3 className="text-xs font-black uppercase tracking-widest text-slate-900 mb-3">
                    Strategic Location Advantages
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {hotel.locationAdvantages.map((adv, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                        <span>{adv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Right: Property Card Highlights */}
            <div className="lg:col-span-5 space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 shadow-xl border border-slate-200">
                <img
                  src={hotel.cardImage || hotel.heroImage}
                  alt={hotel.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="bg-[#F8FAFC] rounded-2xl p-6 border border-slate-100 space-y-3">
                <div className="text-xs font-black uppercase tracking-wider text-slate-400">
                  Quick Details
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Destination:</span>
                  <span className="font-bold text-slate-900">{hotel.city}, {hotel.state}</span>
                </div>
                <div className="flex justify-between text-xs py-1 border-b border-slate-200/60">
                  <span className="text-slate-500">Operational Status:</span>
                  <span className={`font-bold ${hotel.isOpeningSoon ? 'text-amber-600' : 'text-emerald-600'}`}>
                    {hotel.isOpeningSoon ? 'Opening Soon' : 'Operational & Bookable'}
                  </span>
                </div>
                <div className="flex justify-between text-xs py-1">
                  <span className="text-slate-500">Room Categories:</span>
                  <span className="font-bold text-slate-900">{hotel.rooms.length} Configurations</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 04. PROPERTY HIGHLIGHTS */}
      <section className="py-12 bg-[#F8FAFC] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <span className="text-xs font-black uppercase tracking-widest text-amber-500">
              KEY HIGHLIGHTS
            </span>
            <h3 className="text-xl sm:text-2xl font-black text-slate-900 uppercase tracking-tight mt-1">
              At {hotel.name}
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {(hotel.locationAdvantages || []).slice(0, 8).map((hl, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2.5 p-3.5 rounded-xl bg-white border border-slate-100 shadow-xs"
              >
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span className="text-xs font-bold text-slate-800 truncate">{hl}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 05. WHY STAY */}
      <WhyStayGrid />

      {/* 06. ROOMS & SUITES (Property-specific) */}
      <section id="property-rooms" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>ACCOMMODATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              ROOMS & SUITES
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              {hotel.isOpeningSoon
                ? 'Planned room categories engineered for maximum comfort and business utility.'
                : 'Modern rooms with thoughtful amenities for a seamless stay.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {hotel.rooms.map((room) => (
              <RoomCard
                key={room.id}
                room={room}
                hotelSlug={hotel.slug}
                isOpeningSoon={hotel.isOpeningSoon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 07. PROPERTY DINING */}
      <section id="property-dining" className="py-20 bg-[#F8FAFC] border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>CULINARY VENUES</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 uppercase tracking-tight">
              DINING EXPERIENCES AT {hotel.name}
            </h2>
            <p className="mt-3 text-sm sm:text-base text-slate-600">
              In-house restaurants and grab-and-go options for quick bites, corporate lunches, and traditional flavours.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {hotel.dining.map((item, idx) => (
              <div
                key={idx}
                className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute top-3 left-3 bg-slate-900/80 backdrop-blur-md text-amber-400 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                    {item.type}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <h4 className="text-lg font-black text-slate-900 uppercase mb-1">
                      {item.name}
                    </h4>
                    <p className="text-xs font-semibold text-amber-600 mb-3">
                      {item.tagline}
                    </p>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 08. AMENITIES (Property-specific) */}
      <AmenityGrid
        customAmenities={hotel.facilities}
        title={`AMENITIES AT ${hotel.name}`}
        subtitle={`Verified hotel facilities available for all staying guests.`}
      />

      {/* 09. MEETINGS & EVENTS */}
      <EventsSection />

      {/* 10 & 11. NEARBY ATTRACTIONS & INTERACTIVE MAP */}
      <NearbyAttractions defaultHotelSlug={hotel.slug} />

      {/* 12. GALLERY */}
      {hotel.gallery && hotel.gallery.length > 0 && (
        <section className="py-20 bg-[#F8FAFC] border-t border-slate-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500 mb-2">
                <Sparkles className="w-3.5 h-3.5" />
                <span>VISUAL TOUR</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                {hotel.name} GALLERY
              </h2>
              <p className="mt-2 text-sm text-slate-600">
                Click any photograph to view high-resolution details.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {hotel.gallery.map((img, idx) => (
                <div
                  key={idx}
                  onClick={() => openLightbox(img)}
                  className="group relative rounded-2xl overflow-hidden aspect-[4/3] bg-slate-100 border border-slate-200 cursor-pointer shadow-xs hover:shadow-xl transition-all"
                >
                  <img
                    src={img.url}
                    alt={img.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-3 text-white">
                    <span className="text-xs font-bold">{img.title}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 13. REVIEWS */}
      <GuestReviews />

      {/* 14. SPECIAL OFFERS */}
      <SpecialOffers />

      {/* 15. CONTACT PROPERTY */}
      <section id="contact-property" className="py-20 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left: Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-amber-500">
                <Sparkles className="w-3.5 h-3.5" />
                <span>DIRECT ASSISTANCE</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 uppercase tracking-tight">
                CONTACT {hotel.name}
              </h2>

              <p className="text-sm text-slate-600 leading-relaxed">
                Have a question about your booking, airport transfer, or corporate rates? Our team is available 24×7 to assist you.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div className="text-xs">
                    <strong className="block text-slate-900">Hotel Address</strong>
                    <span className="text-slate-600">{hotel.name}, {hotel.city}, {hotel.state}, India (Client Details Pending)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" />
                  <div className="text-xs">
                    <strong className="block text-slate-900">Telephone / WhatsApp Desk</strong>
                    <span className="text-slate-600">+91 040 0000 0000 (Client Data Pending)</span>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-100">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" />
                  <div className="text-xs">
                    <strong className="block text-slate-900">Reservations Email</strong>
                    <span className="text-slate-600">reservations.{hotel.slug}@istayhotels.in</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Contact Form */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
              <h3 className="text-lg font-black text-slate-900 mb-1">
                Send Direct Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the details below and our front desk will reply promptly.
              </p>

              {isContactSent ? (
                <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                  <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                  <h4 className="text-base font-bold text-emerald-900">Message Received</h4>
                  <p className="text-xs text-emerald-700">Thank you. Our duty manager has received your message and will respond shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleContactSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={contactName}
                        onChange={(e) => setContactName(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="john@example.com"
                        value={contactEmail}
                        onChange={(e) => setContactEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={contactPhone}
                      onChange={(e) => setContactPhone(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows="3"
                      required
                      placeholder="Ask about room availability, check-in policies, group requirements..."
                      value={contactMessage}
                      onChange={(e) => setContactMessage(e.target.value)}
                      className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white font-extrabold py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-md transition-colors flex items-center justify-center gap-2"
                  >
                    <Send className="w-3.5 h-3.5 text-amber-400" />
                    <span>SEND MESSAGE</span>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 16. FINAL CTA */}
      <FinalCTA />
    </div>
  );
};

export default HotelDetail;
