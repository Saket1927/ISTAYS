import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Phone, Calendar, ChevronDown, MapPin } from 'lucide-react';
import Logo from './Logo';
import { useBooking } from '../context/BookingContext';
import { hotelsData } from '../data/hotels';

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHotelsDropdownOpen, setIsHotelsDropdownOpen] = useState(false);
  const location = useLocation();
  const { openBookingModal } = useBooking();

  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsHotelsDropdownOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Hotels', path: '/hotels', hasDropdown: true },
    { name: 'Destinations', path: '/destinations' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Meetings & Events', path: '/meetings-events' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' }
  ];

  const mobileNavLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Our Hotels', path: '/hotels' },
    { name: 'Rooms', path: '/rooms' },
    { name: 'Dining', path: '/dining' },
    { name: 'Amenities', path: '/#amenities' },
    { name: 'Meetings & Events', path: '/meetings-events' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Offers', path: '/offers' },
    { name: 'Contact', path: '/contact' }
  ];

  const headerTheme = isScrolled || !isHomePage ? 'light' : 'dark';

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          headerTheme === 'light'
            ? 'bg-white/95 backdrop-blur-md shadow-md py-3 text-slate-900 border-b border-slate-100'
            : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent py-5 text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Logo variant={headerTheme === 'light' ? 'dark' : 'white'} />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden xl:flex items-center space-x-1 lg:space-x-6 text-sm font-medium">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => link.hasDropdown && setIsHotelsDropdownOpen(true)}
                onMouseLeave={() => link.hasDropdown && setIsHotelsDropdownOpen(false)}
              >
                <Link
                  to={link.path}
                  className={`flex items-center gap-1 py-2 px-1 transition-colors duration-200 ${
                    location.pathname === link.path
                      ? 'text-amber-500 font-semibold'
                      : headerTheme === 'light'
                      ? 'text-slate-700 hover:text-amber-500'
                      : 'text-white/90 hover:text-amber-400'
                  }`}
                >
                  {link.name}
                  {link.hasDropdown && <ChevronDown className="w-3.5 h-3.5 opacity-70 group-hover:rotate-180 transition-transform duration-200" />}
                </Link>

                {/* Dropdown for Hotels */}
                {link.hasDropdown && (
                  <div className="absolute top-full left-0 w-72 bg-white rounded-xl shadow-xl border border-slate-100 py-3 px-2 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 text-slate-900">
                    <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-3 py-1">
                      Our Properties
                    </div>
                    {hotelsData.map((hotel) => (
                      <Link
                        key={hotel.id}
                        to={`/hotels/${hotel.slug}`}
                        className="flex items-center justify-between px-3 py-2.5 rounded-lg hover:bg-slate-50 transition-colors text-xs font-semibold text-slate-800"
                      >
                        <div className="flex flex-col">
                          <span>{hotel.name}</span>
                          <span className="text-[10px] font-normal text-slate-500">{hotel.city}</span>
                        </div>
                        {hotel.isOpeningSoon && (
                          <span className="text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 tracking-wider">
                            Soon
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <button
              onClick={() => openBookingModal()}
              className={`p-2.5 rounded-full transition-colors ${
                headerTheme === 'light'
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              title="Search & Book"
              aria-label="Search and Book"
            >
              <Search className="w-4 h-4" />
            </button>

            <button
              onClick={() => openBookingModal()}
              className="bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold px-5 py-2.5 rounded-full text-xs uppercase tracking-wider shadow-sm hover:shadow transition-all duration-200 transform active:scale-95 flex items-center gap-2"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>BOOK NOW</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex xl:hidden items-center gap-3">
            <button
              onClick={() => openBookingModal()}
              className="bg-amber-500 text-slate-950 font-bold px-3.5 py-1.5 rounded-full text-xs uppercase tracking-wider"
            >
              Book
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg transition-colors ${
                headerTheme === 'light' ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle navigation menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Navigation */}
      <div
        className={`fixed inset-0 z-40 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 xl:hidden ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 bottom-0 w-[300px] sm:w-[360px] bg-white z-50 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-out xl:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Mobile Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between">
          <Logo variant="dark" />
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="p-1.5 rounded-lg text-slate-500 hover:bg-slate-100"
            aria-label="Close menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Links Scrollable */}
        <div className="flex-1 overflow-y-auto px-5 py-4 space-y-1">
          <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Navigation</div>
          {mobileNavLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
                location.pathname === link.path
                  ? 'bg-amber-50 text-amber-600'
                  : 'text-slate-800 hover:bg-slate-50'
              }`}
            >
              {link.name}
            </Link>
          ))}

          {/* Quick Properties in Mobile Menu */}
          <div className="pt-4 border-t border-slate-100 mt-4">
            <div className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2">Our Properties</div>
            <div className="space-y-1">
              {hotelsData.map((h) => (
                <Link
                  key={h.id}
                  to={`/hotels/${h.slug}`}
                  className="flex items-center justify-between px-3 py-2 rounded-lg text-xs font-medium text-slate-700 hover:bg-slate-50"
                >
                  <span className="truncate">{h.name}</span>
                  {h.isOpeningSoon ? (
                    <span className="text-[9px] px-1.5 py-0.5 rounded bg-amber-100 text-amber-800 font-bold">
                      Soon
                    </span>
                  ) : (
                    <span className="text-[10px] text-slate-400">{h.city}</span>
                  )}
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile CTA */}
        <div className="p-5 border-t border-slate-100 bg-slate-50 space-y-2">
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              openBookingModal();
            }}
            className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs uppercase tracking-wider shadow-sm text-center"
          >
            BOOK NOW
          </button>
          <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
            <MapPin className="w-3.5 h-3.5 text-amber-500" />
            <span>Hyderabad • Bangalore • Haveri • Haridwar</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
