import React, { useState } from 'react';
import { ScreenType, SuiteItem } from './types';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { SuiteDetailModal } from './components/SuiteDetailModal';
import { OrderDiningModal } from './components/OrderDiningModal';
import { OverviewScreen } from './screens/OverviewScreen';
import { AccommodationsScreen } from './screens/AccommodationsScreen';
import { ExperiencesScreen } from './screens/ExperiencesScreen';
import { DiningScreen } from './screens/DiningScreen';
import { SanctuaryScreen } from './screens/SanctuaryScreen';
import { ContactScreen } from './screens/ContactScreen';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<ScreenType>('overview');

  // Booking Modal State
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [bookingSuiteId, setBookingSuiteId] = useState<string | undefined>(undefined);
  const [bookingDates, setBookingDates] = useState<{ checkIn: string; checkOut: string } | undefined>(undefined);
  const [bookingGuests, setBookingGuests] = useState<string | undefined>(undefined);

  // Suite Detail Modal
  const [selectedSuiteDetail, setSelectedSuiteDetail] = useState<SuiteItem | null>(null);

  // In-Villa Dining Order Modal
  const [isDiningOrderOpen, setIsDiningOrderOpen] = useState(false);

  const handleOpenBooking = (
    suiteId?: string, 
    dates?: { checkIn: string; checkOut: string }, 
    guests?: string
  ) => {
    setBookingSuiteId(suiteId);
    setBookingDates(dates);
    setBookingGuests(guests);
    setIsBookingOpen(true);
  };

  const handleOpenSuiteDetails = (suite: SuiteItem) => {
    setSelectedSuiteDetail(suite);
  };

  const handleNavigate = (screen: ScreenType) => {
    setCurrentScreen(screen);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#fbf9f2] text-[#1b1c18] font-sans antialiased selection:bg-[#765934] selection:text-white">
      
      {/* Fixed Luxury Sanctuary Header */}
      <Header
        currentScreen={currentScreen}
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Main Screen Content Viewport */}
      <main className="flex-1 w-full pt-20">
        {currentScreen === 'overview' && (
          <OverviewScreen
            onOpenBooking={handleOpenBooking}
            onOpenSuiteDetails={handleOpenSuiteDetails}
            onOpenDiningOrder={() => setIsDiningOrderOpen(true)}
            onNavigate={handleNavigate}
          />
        )}

        {currentScreen === 'accommodations' && (
          <AccommodationsScreen
            onOpenBooking={handleOpenBooking}
            onOpenSuiteDetails={handleOpenSuiteDetails}
          />
        )}

        {currentScreen === 'experiences-and-amenities' && (
          <ExperiencesScreen
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentScreen === 'dining' && (
          <DiningScreen
            onOpenDiningOrder={() => setIsDiningOrderOpen(true)}
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentScreen === 'wayanad-sanctuary' && (
          <SanctuaryScreen
            onOpenBooking={() => handleOpenBooking()}
          />
        )}

        {currentScreen === 'contact-and-location' && (
          <ContactScreen />
        )}
      </main>

      {/* Sanctuary Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking & Tariff Concierge Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={() => setIsBookingOpen(false)}
        initialSuiteId={bookingSuiteId}
        initialDates={bookingDates}
        initialGuests={bookingGuests}
      />

      {/* Suite Detail & Floor Plan Tour Modal */}
      <SuiteDetailModal
        suite={selectedSuiteDetail}
        onClose={() => setSelectedSuiteDetail(null)}
        onBookSuite={(suiteId) => handleOpenBooking(suiteId)}
      />

      {/* Room Service & Dining Order Drawer/Modal */}
      <OrderDiningModal
        isOpen={isDiningOrderOpen}
        onClose={() => setIsDiningOrderOpen(false)}
      />

    </div>
  );
}
