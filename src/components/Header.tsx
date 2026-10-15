import React, { useState } from 'react';
import { ScreenType } from '../types';
import { RESORT_IMAGES } from '../data/resortData';
import { Phone, CalendarCheck, Menu, X, CloudFog } from 'lucide-react';

interface HeaderProps {
  currentScreen: ScreenType;
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentScreen, onNavigate, onOpenBooking }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; screen: ScreenType }[] = [
    { label: 'Overview', screen: 'overview' },
    { label: 'Accommodations', screen: 'accommodations' },
    { label: 'Experiences & Amenities', screen: 'experiences-and-amenities' },
    { label: 'Dining', screen: 'dining' },
    { label: 'Wayanad Sanctuary', screen: 'wayanad-sanctuary' },
    { label: 'Contact & Location', screen: 'contact-and-location' }
  ];

  const handleNavClick = (screen: ScreenType) => {
    onNavigate(screen);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#fbf9f2]/90 backdrop-blur-xl border-b border-[#c1c8c2]/30 shadow-[0_16px_36px_-12px_rgba(15,38,27,0.08)]">
      <div className="h-20 max-w-[1440px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Zone 1: Brand Wordmark & Weather Status */}
        <div className="flex items-center gap-4 shrink-0">
          <button 
            onClick={() => handleNavClick('overview')}
            className="flex items-center gap-3 text-left group focus:outline-none"
            aria-label="Miracle Holidays Wayanad Home"
          >
            <img 
              src={RESORT_IMAGES.logo} 
              alt="Miracle Holidays Luxury Resort Logo" 
              className="h-8 md:h-9 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <span className="font-serif text-xl sm:text-2xl font-semibold tracking-wide text-[#032517] hidden sm:inline-block">
              Miracle Holidays
            </span>
          </button>

          <div className="hidden xl:flex items-center gap-1.5 pl-3 border-l border-[#c1c8c2]/50 text-[#726758] text-[11px] font-medium uppercase tracking-wider">
            <CloudFog className="w-4 h-4 text-[#765934]" />
            <span>Wayanad 22°C</span>
            <span className="opacity-40">•</span>
            <span>Misty Canopy</span>
          </div>
        </div>

        {/* Zone 2: Navigation Links (Desktop) */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((item) => {
            const isActive = currentScreen === item.screen;
            return (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`text-[14px] whitespace-nowrap transition-all duration-200 py-1 ${
                  isActive
                    ? 'text-[#032517] font-semibold underline decoration-[#765934] decoration-2 underline-offset-8'
                    : 'text-[#424843] hover:text-[#032517] font-normal'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Direct Phone & Primary CTA */}
        <div className="flex items-center gap-4 shrink-0">
          <a 
            href="tel:+919207050305" 
            className="hidden sm:flex items-center gap-1.5 text-[#424843] hover:text-[#032517] transition-colors text-[13px] font-medium"
            title="Call Concierge"
          >
            <Phone className="w-4 h-4 text-[#765934]" />
            <span className="tracking-wider">+91 9207050305</span>
          </a>

          <button
            onClick={onOpenBooking}
            className="inline-flex items-center justify-center gap-2 bg-[#032517] hover:bg-[#765934] text-[#ffffff] text-[12px] font-semibold px-5 py-2.5 rounded-lg transition-all shadow-[0_4px_16px_rgba(3,37,23,0.18)] tracking-wider uppercase whitespace-nowrap cursor-pointer"
          >
            <CalendarCheck className="w-4 h-4" />
            <span>Book Your Stay</span>
          </button>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-[#032517] hover:bg-[#eae8e1] rounded-lg transition-colors focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#fbf9f2] border-b border-[#c1c8c2]/50 px-6 py-6 shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex items-center gap-2 pb-4 mb-4 border-b border-[#c1c8c2]/30 text-[#726758] text-xs font-medium">
            <CloudFog className="w-4 h-4 text-[#765934]" />
            <span>Wayanad Sanctuary • 3,500 ft Elevation • 22°C Misty</span>
          </div>

          <div className="flex flex-col gap-3">
            {navLinks.map((item) => (
              <button
                key={item.screen}
                onClick={() => handleNavClick(item.screen)}
                className={`text-left py-2.5 px-3 rounded-lg text-[15px] transition-colors ${
                  currentScreen === item.screen
                    ? 'bg-[#eae8e1] text-[#032517] font-semibold'
                    : 'text-[#424843] hover:bg-[#f6f4ed]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t border-[#c1c8c2]/30 flex flex-col gap-3">
            <a
              href="tel:+919207050305"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#f0eee7] text-[#032517] font-medium text-sm"
            >
              <Phone className="w-4 h-4 text-[#765934]" />
              <span>Call Front Desk: +91 9207050305</span>
            </a>
            <a
              href="https://wa.me/919207050305"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#032517] text-[#ffffff] font-medium text-sm uppercase tracking-wider"
            >
              <span>WhatsApp Concierge</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
