import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { BookingProvider } from './context/BookingContext';
import Header from './components/Header';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import EnquiryModal from './components/EnquiryModal';
import RoomDetailModal from './components/RoomDetailModal';
import LightboxModal from './components/LightboxModal';

// Pages
import Home from './pages/Home';
import Hotels from './pages/Hotels';
import HotelDetail from './pages/HotelDetail';
import Rooms from './pages/Rooms';
import DiningPage from './pages/DiningPage';
import EventsPage from './pages/EventsPage';
import DestinationsPage from './pages/DestinationsPage';
import GalleryPage from './pages/GalleryPage';
import OffersPage from './pages/OffersPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export const App = () => {
  return (
    <BookingProvider>
      <div className="min-h-screen flex flex-col justify-between bg-[#FAFAFA] font-sans antialiased text-slate-900 selection:bg-amber-400 selection:text-black">
        <ScrollToTop />
        <Header />

        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hotels" element={<Hotels />} />
            <Route path="/hotels/:slug" element={<HotelDetail />} />
            <Route path="/rooms" element={<Rooms />} />
            <Route path="/dining" element={<DiningPage />} />
            <Route path="/meetings-events" element={<EventsPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/gallery" element={<GalleryPage />} />
            <Route path="/offers" element={<OffersPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            {/* Catch-all fallback route */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />

        {/* Global Modals */}
        <BookingModal />
        <EnquiryModal />
        <RoomDetailModal />
        <LightboxModal />
      </div>
    </BookingProvider>
  );
};

export default App;
