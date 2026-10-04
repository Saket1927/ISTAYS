import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { hotelsData } from '../data/hotels';
import { useBooking } from '../context/BookingContext';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const { openBookingModal } = useBooking();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#0B0F17] text-slate-300 pt-16 pb-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-800/80">
          {/* Brand Col */}
          <div className="lg:col-span-4 space-y-4">
            <Logo variant="white" />
            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pr-4">
              iStay Hotels is a contemporary business hospitality brand designed for corporate teams, leisure travellers, and families seeking smart comfort, vibrant dining, and prime city locations.
            </p>

            {/* Newsletter Subscription */}
            <div className="pt-2">
              <span className="text-xs font-black uppercase tracking-wider text-amber-400 block mb-2">
                Stay Connected • Exclusive Updates
              </span>
              {subscribed ? (
                <div className="p-3 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-semibold flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Thank you for subscribing to iStay updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    placeholder="Enter your email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 bg-slate-900 border border-slate-700 px-3.5 py-2.5 rounded-xl text-xs text-white placeholder:text-slate-500 focus:outline-none focus:border-amber-500"
                  />
                  <button
                    type="submit"
                    className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-4 py-2.5 rounded-xl text-xs uppercase tracking-wider transition-colors shrink-0"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Our Hotels (Exactly 5 properties) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
              Our Hotels
            </h4>
            <ul className="space-y-2 text-xs">
              {hotelsData.map((h) => (
                <li key={h.id}>
                  <Link
                    to={`/hotels/${h.slug}`}
                    className="text-slate-300 hover:text-amber-400 transition-colors flex items-center justify-between"
                  >
                    <span className="truncate">{h.name}</span>
                    {h.isOpeningSoon && (
                      <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-500/20 text-amber-300">
                        Opening Soon
                      </span>
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
              Explore
            </h4>
            <ul className="space-y-2 text-xs">
              <li><Link to="/" className="hover:text-amber-400 transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-amber-400 transition-colors">About Us</Link></li>
              <li><Link to="/rooms" className="hover:text-amber-400 transition-colors">Rooms & Suites</Link></li>
              <li><Link to="/dining" className="hover:text-amber-400 transition-colors">Dining Concepts</Link></li>
              <li><Link to="/meetings-events" className="hover:text-amber-400 transition-colors">Meetings & Events</Link></li>
              <li><Link to="/destinations" className="hover:text-amber-400 transition-colors">Destinations</Link></li>
              <li><Link to="/gallery" className="hover:text-amber-400 transition-colors">Photo Gallery</Link></li>
              <li><Link to="/offers" className="hover:text-amber-400 transition-colors">Special Offers</Link></li>
              <li><Link to="/contact" className="hover:text-amber-400 transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Dining & Contact info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-black uppercase tracking-widest text-amber-400">
              Dining Concepts
            </h4>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>• Utsavam — Traditional Indian Dining</li>
              <li>• Moxa Xpress — Fast, Fresh, Flavourful</li>
              <li>• Xtra Grab & Go — Instant Travel Pantry</li>
              <li>• Kalpavrixa Restaurant — All-Day Dining</li>
            </ul>

            <div className="pt-3 border-t border-slate-800 space-y-2 text-xs">
              <div className="flex items-center gap-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>Hyderabad • Bangalore • Haveri • Haridwar</span>
              </div>
              <div className="flex items-center gap-2 text-slate-300">
                <Mail className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                <span>reservations@istayhotels.in (Client Details Pending)</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Policies & Quick Actions */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div>
            © {new Date().getFullYear()} iStay Hotels. All rights reserved. Designed for Modern Travellers.
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about" className="hover:text-amber-400 transition-colors">Careers</Link>
            <Link to="/about" className="hover:text-amber-400 transition-colors">Privacy Policy</Link>
            <Link to="/about" className="hover:text-amber-400 transition-colors">Terms & Conditions</Link>
            <button
              onClick={() => openBookingModal()}
              className="text-amber-400 font-bold hover:underline"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
