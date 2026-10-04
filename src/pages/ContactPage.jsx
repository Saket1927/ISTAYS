import React, { useState, useEffect } from 'react';
import { Sparkles, MapPin, Phone, Mail, Send, CheckCircle2, MessageSquare, ExternalLink } from 'lucide-react';
import { hotelsData } from '../data/hotels';
import FinalCTA from '../components/FinalCTA';
import { useBooking } from '../context/BookingContext';

export const ContactPage = () => {
  const { openBookingModal } = useBooking();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [selectedHotel, setSelectedHotel] = useState('jubilee-hills');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white pt-24">
      {/* Header */}
      <section className="py-16 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>24×7 GUEST ASSISTANCE</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase tracking-tight">
            CONTACT iSTAY HOTELS
          </h1>
          <p className="mt-4 text-base text-slate-300 max-w-2xl mx-auto">
            Get in touch with our central reservations desk or connect directly with our properties in Hyderabad, Bangalore, Haveri, and Haridwar.
          </p>
        </div>
      </section>

      {/* Main Contact Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Left: Central Desks & Quick Actions */}
            <div className="lg:col-span-5 space-y-6">
              <span className="text-xs font-black uppercase tracking-widest text-amber-500">
                GET IN TOUCH
              </span>
              <h2 className="text-3xl font-black text-slate-900 uppercase tracking-tight">
                WE'RE HERE TO ASSIST YOUR STAY
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Whether you're planning an executive stay, corporate room blocks, dining reservations, or seeking travel directions, our hospitality team is available round the clock.
              </p>

              {/* Direct Desks */}
              <div className="space-y-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Central Reservations</h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">+91 040 0000 0000</p>
                    <span className="text-[11px] text-slate-500">(Placeholder • Official Client Details Pending)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-amber-500 text-slate-950 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">Reservations & Corporate Support</h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">contact@istayhotels.in</p>
                    <span className="text-[11px] text-slate-500">(Placeholder • Official Client Details Pending)</span>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500 text-white flex items-center justify-center shrink-0">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-black uppercase tracking-widest text-slate-400">WhatsApp Quick Concierge</h4>
                    <p className="text-sm font-bold text-slate-900 mt-0.5">Connect on WhatsApp Desk</p>
                    <span className="text-[11px] text-slate-500">Fast replies for travel guidance</span>
                  </div>
                </div>
              </div>

              {/* Quick Book Now Action */}
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => openBookingModal()}
                  className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-black py-3.5 rounded-xl text-xs uppercase tracking-widest shadow-md transition-colors"
                >
                  ONLINE RESERVATIONS DESK
                </button>
              </div>
            </div>

            {/* Right: Comprehensive Contact Form */}
            <div className="lg:col-span-7 bg-[#F8FAFC] rounded-3xl p-6 sm:p-10 border border-slate-200/80 shadow-sm">
              <h3 className="text-xl font-black text-slate-900 mb-1">
                Send Us a Message
              </h3>
              <p className="text-xs text-slate-500 mb-6">
                Fill in the form below and we will get back to you shortly.
              </p>

              {submitted ? (
                <div className="p-8 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                  <h4 className="text-lg font-black text-emerald-900">Message Received</h4>
                  <p className="text-xs text-emerald-700 max-w-md mx-auto">
                    Thank you <strong className="text-emerald-950">{name}</strong>. Your enquiry has been received and forwarded to our guest assistance team.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                        Your Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-amber-500"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                        Select Preferred Property
                      </label>
                      <select
                        value={selectedHotel}
                        onChange={(e) => setSelectedHotel(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-white border border-slate-200 rounded-xl text-xs font-semibold text-slate-900 focus:outline-none focus:border-amber-500"
                      >
                        {hotelsData.map((h) => (
                          <option key={h.id} value={h.slug}>
                            {h.name} ({h.city})
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-1">
                      Your Message *
                    </label>
                    <textarea
                      rows="4"
                      required
                      placeholder="Please let us know how we can assist you..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
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

      {/* Property Directory */}
      <section className="py-16 bg-[#F8FAFC] border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 uppercase tracking-tight">
              PROPERTY DIRECTORY
            </h3>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Find exact addresses and connectivity details for all 5 iStay Hotels properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {hotelsData.map((h) => (
              <div key={h.id} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-xs flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-bold text-amber-600">{h.city}, {h.state}</span>
                    {h.isOpeningSoon && (
                      <span className="text-[9px] font-black uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                        Opening Soon
                      </span>
                    )}
                  </div>
                  <h4 className="text-base font-black text-slate-900 mb-2">{h.name}</h4>
                  <p className="text-xs text-slate-600 mb-4">{h.overview.slice(0, 100)}...</p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Map & Directions</span>
                  <a
                    href={`https://maps.google.com/?q=${encodeURIComponent(h.name + ' ' + h.city)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-amber-600 hover:text-amber-700 inline-flex items-center gap-1"
                  >
                    <span>Google Maps</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
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

export default ContactPage;
