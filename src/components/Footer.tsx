import React from 'react';
import { ScreenType } from '../types';
import { RESORT_IMAGES } from '../data/resortData';
import { Phone, Mail, MapPin, Sparkles, Instagram, Camera, Compass } from 'lucide-react';

interface FooterProps {
  onNavigate: (screen: ScreenType) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <footer className="w-full bg-[#f6f4ed] text-[#1b1c18] pt-14 pb-10 border-t border-[#c1c8c2]/40 shadow-[0_-1px_12px_rgba(15,38,27,0.03)]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 mb-12">
          
          {/* Brand & Philosophy */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <img 
                src={RESORT_IMAGES.logo} 
                alt="Miracle Holidays Logo" 
                className="h-8 w-auto object-contain"
              />
              <span className="font-serif text-2xl font-semibold text-[#032517] tracking-wide">
                Miracle Holidays
              </span>
            </div>
            <p className="text-[14px] leading-relaxed text-[#424843] max-w-sm">
              An intimate botanical sanctuary set amidst ancient rainforests, mist-draped peaks, and cardamom trails in the heart of Kerala's Western Ghats.
            </p>
            <div className="inline-flex items-center gap-2 bg-[#f0eee7] px-3.5 py-1.5 rounded-full w-fit border border-[#c1c8c2]/40">
              <Sparkles className="w-4 h-4 text-[#765934]" />
              <span className="text-[12px] font-semibold text-[#032517] tracking-wider uppercase">
                Wayanad • 22°C Misty &amp; Serene
              </span>
            </div>
          </div>

          {/* The Sanctuary Experience */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-[12px] text-[#765934] uppercase tracking-widest font-semibold">
              The Sanctuary Experience
            </span>
            <ul className="flex flex-col gap-2 text-[13px] text-[#424843]">
              <li>
                <button 
                  onClick={() => onNavigate('experiences-and-amenities')}
                  className="hover:text-[#032517] transition-colors text-left flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#765934]"></span>
                  <span>Ayurvedic Holistic Healing Pavilion</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('accommodations')}
                  className="hover:text-[#032517] transition-colors text-left flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#765934]"></span>
                  <span>Blueberry Glass House &amp; Villas</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('experiences-and-amenities')}
                  className="hover:text-[#032517] transition-colors text-left flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#765934]"></span>
                  <span>Guided Ghats Botanical Treks</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('dining')}
                  className="hover:text-[#032517] transition-colors text-left flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#765934]"></span>
                  <span>Organic Estate-to-Table Malabar Cuisine</span>
                </button>
              </li>
              <li>
                <button 
                  onClick={() => onNavigate('experiences-and-amenities')}
                  className="hover:text-[#032517] transition-colors text-left flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-[#765934]"></span>
                  <span>Dusk Campfire &amp; Stargazing</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Sanctuary Address */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <span className="text-[12px] text-[#765934] uppercase tracking-widest font-semibold">
              Sanctuary Address
            </span>
            <p className="text-[13px] text-[#424843] leading-relaxed">
              Miracle Road, Kommayad,<br />
              Mananthavady, Wayanad,<br />
              Kerala 670645, India
            </p>
            <div className="flex flex-col gap-1.5 pt-1 text-[13px]">
              <a 
                className="text-[#032517] hover:text-[#765934] transition-colors font-medium flex items-center gap-2" 
                href="tel:+919207050305"
              >
                <Phone className="w-4 h-4 text-[#765934]" />
                <span>+91 9207050305</span>
              </a>
              <a 
                className="text-[#424843] hover:text-[#032517] transition-colors flex items-center gap-2" 
                href="mailto:concierge@miracleholidays.in"
              >
                <Mail className="w-4 h-4 text-[#765934]" />
                <span>concierge@miracleholidays.in</span>
              </a>
            </div>
          </div>

          {/* Concierge Hours & Socials */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <span className="text-[12px] text-[#765934] uppercase tracking-widest font-semibold">
              Concierge Hours
            </span>
            <p className="text-[13px] text-[#424843]">
              Front Desk: 24 Hours Daily<br />
              Private Transfers upon request
            </p>
            
            <div className="flex items-center gap-3 pt-2">
              <a 
                href="https://www.instagram.com/miracleholidays_wayanad" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram" 
                className="w-9 h-9 rounded-full bg-[#eae8e1] flex items-center justify-center text-[#424843] hover:bg-[#032517] hover:text-[#ffffff] transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <button 
                onClick={() => onNavigate('accommodations')}
                aria-label="Photo Gallery" 
                className="w-9 h-9 rounded-full bg-[#eae8e1] flex items-center justify-center text-[#424843] hover:bg-[#032517] hover:text-[#ffffff] transition-colors cursor-pointer"
              >
                <Camera className="w-4 h-4" />
              </button>
              <button 
                onClick={() => onNavigate('contact-and-location')}
                aria-label="Resort Location Map" 
                className="w-9 h-9 rounded-full bg-[#eae8e1] flex items-center justify-center text-[#424843] hover:bg-[#032517] hover:text-[#ffffff] transition-colors cursor-pointer"
              >
                <Compass className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom copyright & legal */}
        <div className="pt-6 border-t border-[#c1c8c2]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-[#726758] text-[13px]">
          <p>© 2025 Miracle Holidays Wayanad. All botanical rights preserved.</p>
          <div className="flex items-center gap-6">
            <button 
              onClick={() => alert("Privacy Charter: Miracle Holidays is committed to protecting guest privacy. No data is shared with third parties.")} 
              className="hover:text-[#032517] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button 
              onClick={() => alert("Terms of Stay: Check-in 1:00 PM / Check-out 11:00 AM. Quiet hours after 10:00 PM to honor forest wildlife tranquility.")} 
              className="hover:text-[#032517] transition-colors cursor-pointer"
            >
              Terms of Stay
            </button>
            <button 
              onClick={() => alert("Ecological Charter: Zero Single-Use Plastic, rainwater harvesting, 100% solar water heating, and indigenous bird sanctuary protection.")} 
              className="hover:text-[#032517] transition-colors cursor-pointer"
            >
              Ecological Charter
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
