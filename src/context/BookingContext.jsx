import React, { createContext, useContext, useState } from 'react';

const BookingContext = createContext();

export const BookingProvider = ({ children }) => {
  // Search parameters for booking widget
  const [selectedDestination, setSelectedDestination] = useState('jubilee-hills');
  
  // Format today + tomorrow dates as YYYY-MM-DD
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const [checkInDate, setCheckInDate] = useState(formatDate(today));
  const [checkOutDate, setCheckOutDate] = useState(formatDate(tomorrow));
  const [guests, setGuests] = useState({ adults: 2, children: 0, rooms: 1 });
  const [promoCode, setPromoCode] = useState('');
  
  // Modals state
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);
  const [isEnquiryModalOpen, setIsEnquiryModalOpen] = useState(false);
  const [enquirySubject, setEnquirySubject] = useState('General Enquiry');
  const [activeRoomDetail, setActiveRoomDetail] = useState(null);
  const [activeLightboxImage, setActiveLightboxImage] = useState(null);
  const [selectedHotelForBooking, setSelectedHotelForBooking] = useState(null);

  const openBookingModal = (hotelSlug = null, preselectedRoom = null) => {
    if (hotelSlug) {
      setSelectedDestination(hotelSlug);
    }
    if (preselectedRoom) {
      setActiveRoomDetail(preselectedRoom);
    }
    setIsBookingModalOpen(true);
  };

  const closeBookingModal = () => {
    setIsBookingModalOpen(false);
  };

  const openEnquiryModal = (subject = 'Meetings & Events Enquiry') => {
    setEnquirySubject(subject);
    setIsEnquiryModalOpen(true);
  };

  const closeEnquiryModal = () => {
    setIsEnquiryModalOpen(false);
  };

  const openRoomDetail = (room) => {
    setActiveRoomDetail(room);
  };

  const closeRoomDetail = () => {
    setActiveRoomDetail(null);
  };

  const openLightbox = (imageObj) => {
    setActiveLightboxImage(imageObj);
  };

  const closeLightbox = () => {
    setActiveLightboxImage(null);
  };

  return (
    <BookingContext.Provider
      value={{
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
        isBookingModalOpen,
        openBookingModal,
        closeBookingModal,
        isEnquiryModalOpen,
        enquirySubject,
        openEnquiryModal,
        closeEnquiryModal,
        activeRoomDetail,
        openRoomDetail,
        closeRoomDetail,
        activeLightboxImage,
        openLightbox,
        closeLightbox,
        selectedHotelForBooking,
        setSelectedHotelForBooking
      }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBooking = () => {
  const context = useContext(BookingContext);
  if (!context) {
    throw new Error('useBooking must be used within a BookingProvider');
  }
  return context;
};
