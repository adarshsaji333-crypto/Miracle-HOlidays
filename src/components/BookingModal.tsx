import React, { useState } from 'react';
import { RESORT_SUITES } from '../data/resortData';
import { X, Calendar, Users, Check, Sparkles, Phone, MessageSquare, ShieldCheck } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialSuiteId?: string;
  initialDates?: { checkIn: string; checkOut: string };
  initialGuests?: string;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  initialSuiteId,
  initialDates,
  initialGuests
}) => {
  const [selectedSuiteId, setSelectedSuiteId] = useState<string>(initialSuiteId || 'blackberry-villa');
  const [checkIn, setCheckIn] = useState<string>(initialDates?.checkIn || '2025-04-18');
  const [checkOut, setCheckOut] = useState<string>(initialDates?.checkOut || '2025-04-21');
  const [adults, setAdults] = useState<number>(2);
  const [children, setChildren] = useState<number>(1);
  
  // Add-ons
  const [addons, setAddons] = useState({
    ayurveda: false,
    candlelightDinner: false,
    guidedTrek: true,
    airportTransfer: false
  });

  // Guest Info
  const [guestName, setGuestName] = useState('');
  const [guestEmail, setGuestEmail] = useState('');
  const [guestPhone, setGuestPhone] = useState('');
  const [specialRequests, setSpecialRequests] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');

  if (!isOpen) return null;

  const currentSuite = RESORT_SUITES.find(s => s.id === selectedSuiteId) || RESORT_SUITES[0];

  // Calculate nights
  const dIn = new Date(checkIn);
  const dOut = new Date(checkOut);
  const diffTime = Math.max(1000 * 60 * 60 * 24, dOut.getTime() - dIn.getTime());
  const nights = Math.max(1, Math.round(diffTime / (1000 * 60 * 60 * 24)));

  const baseSuiteTotal = currentSuite.pricePerNight * nights;
  const ayurvedaCost = addons.ayurveda ? 1800 * adults : 0;
  const dinnerCost = addons.candlelightDinner ? 2500 : 0;
  const trekCost = addons.guidedTrek ? 1200 : 0;
  const transferCost = addons.airportTransfer ? 2800 : 0;
  const addonsTotal = ayurvedaCost + dinnerCost + trekCost + transferCost;
  
  const subtotal = baseSuiteTotal + addonsTotal;
  const taxes = Math.round(subtotal * 0.12);
  const grandTotal = subtotal + taxes;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = 'MH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Miracle Holidays Sanctuary,\nI would like to reserve a stay:\n\n` +
      `• Suite: ${currentSuite.name}\n` +
      `• Dates: ${checkIn} to ${checkOut} (${nights} night${nights > 1 ? 's' : ''})\n` +
      `• Guests: ${adults} Adults, ${children} Children\n` +
      `• Add-ons: ${addons.candlelightDinner ? 'Candlelit Dinner, ' : ''}${addons.ayurveda ? 'Ayurvedic Spa, ' : ''}${addons.guidedTrek ? 'Plantation Trek, ' : ''}${addons.airportTransfer ? 'Airport Pickup, ' : ''}\n` +
      `• Guest Name: ${guestName || 'Inquirer'}\n` +
      `• Phone: ${guestPhone || 'Provided'}\n` +
      `• Total Est.: ₹${grandTotal.toLocaleString('en-IN')}\n\n` +
      `Please confirm availability.`
    );
    window.open(`https://wa.me/919207050305?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#fbf9f2] rounded-2xl shadow-2xl overflow-hidden border border-[#c1c8c2]/50 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#032517] text-[#ffffff] px-6 py-5 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] text-[#ffddb6] uppercase tracking-widest font-semibold block">
              Direct Sanctuary Concierge
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#FAF8F2]">
              Reserve Your Stay at Miracle Holidays
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full hover:bg-white/10 text-[#ffffff] transition-colors focus:outline-none"
            aria-label="Close booking modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 md:p-8 flex-1">
          {isSubmitted ? (
            <div className="text-center py-8 max-w-lg mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#1b3b2b] text-[#c7ebd4] flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#765934]">
                Reservation Request Recorded
              </span>
              <h4 className="font-serif text-3xl font-medium text-[#032517] mt-1 mb-2">
                We Await You in the Misty Hills
              </h4>
              <p className="text-sm text-[#424843] mb-4 leading-relaxed">
                Thank you, <strong className="text-[#032517]">{guestName || 'Valued Guest'}</strong>. Your provisional reference is <span className="font-mono font-bold text-[#032517] bg-[#eae8e1] px-2 py-0.5 rounded">{bookingRef}</span>. Our concierge desk is reviewing your reservation for <strong className="text-[#032517]">{currentSuite.name}</strong> ({checkIn} to {checkOut}).
              </p>

              <div className="bg-[#f0eee7] p-5 rounded-xl text-left w-full mb-6 text-sm text-[#1b1c18] border border-[#c1c8c2]/40">
                <div className="flex justify-between py-1 border-b border-[#c1c8c2]/30">
                  <span className="text-[#726758]">Dates:</span>
                  <span className="font-medium">{checkIn} → {checkOut} ({nights} nights)</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#c1c8c2]/30">
                  <span className="text-[#726758]">Party:</span>
                  <span className="font-medium">{adults} Adults, {children} Children</span>
                </div>
                <div className="flex justify-between py-1 border-b border-[#c1c8c2]/30">
                  <span className="text-[#726758]">Estimated Total:</span>
                  <span className="font-serif font-bold text-base text-[#032517]">₹{grandTotal.toLocaleString('en-IN')}</span>
                </div>
                <div className="mt-2 text-xs text-[#726758]">
                  • Complimentary authentic Kerala breakfast is included.<br />
                  • 24-Hour complimentary cancellation up to 48h prior to arrival.
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <button
                  onClick={handleWhatsAppDirect}
                  className="inline-flex items-center justify-center gap-2 bg-[#765934] hover:bg-[#B58A57] text-[#ffffff] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Details to WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 bg-[#032517] hover:bg-[#1b3b2b] text-[#ffffff] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Return to Website</span>
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Left Column: Form Details */}
              <div className="lg:col-span-7 flex flex-col gap-6">
                
                {/* 1. Suite Category Selector */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-2">
                    1. Select Sanctuary Suite
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {RESORT_SUITES.map((suite) => {
                      const isSelected = suite.id === selectedSuiteId;
                      return (
                        <div
                          key={suite.id}
                          onClick={() => setSelectedSuiteId(suite.id)}
                          className={`cursor-pointer rounded-xl p-3 border transition-all text-left flex flex-col justify-between ${
                            isSelected
                              ? 'border-[#032517] bg-[#f0eee7] shadow-sm ring-1 ring-[#032517]'
                              : 'border-[#c1c8c2]/50 bg-white hover:border-[#765934]'
                          }`}
                        >
                          <div>
                            <div className="flex items-center justify-between">
                              <span className="font-serif font-medium text-[15px] text-[#032517]">
                                {suite.name}
                              </span>
                              {isSelected && <Check className="w-4 h-4 text-[#032517]" />}
                            </div>
                            <span className="text-[11px] text-[#726758] block mt-0.5 line-clamp-1">
                              {suite.occupancy}
                            </span>
                          </div>
                          <div className="mt-2 pt-2 border-t border-[#c1c8c2]/30">
                            <span className="font-serif font-semibold text-sm text-[#765934]">
                              ₹{suite.pricePerNight.toLocaleString('en-IN')}
                            </span>
                            <span className="text-[10px] text-[#726758]"> / night</span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* 2. Dates & Guests */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                      Check-In Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                        className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                      Check-Out Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        required
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                        className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                      Adults (12+ yrs)
                    </label>
                    <select
                      value={adults}
                      onChange={(e) => setAdults(Number(e.target.value))}
                      className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                    >
                      <option value={1}>1 Adult</option>
                      <option value={2}>2 Adults</option>
                      <option value={3}>3 Adults</option>
                      <option value={4}>4 Adults</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                      Children (0-11 yrs)
                    </label>
                    <select
                      value={children}
                      onChange={(e) => setChildren(Number(e.target.value))}
                      className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                    >
                      <option value={0}>0 Children</option>
                      <option value={1}>1 Child</option>
                      <option value={2}>2 Children</option>
                      <option value={3}>3 Children</option>
                    </select>
                  </div>
                </div>

                {/* 3. Bespoke Add-ons */}
                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-2">
                    Bespoke Sanctuary Experiences &amp; Add-ons
                  </label>
                  <div className="space-y-2">
                    <label className="flex items-center justify-between p-3 rounded-lg border border-[#c1c8c2]/50 bg-white hover:bg-[#f6f4ed] cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addons.candlelightDinner}
                          onChange={(e) => setAddons({ ...addons, candlelightDinner: e.target.checked })}
                          className="w-4 h-4 text-[#032517] rounded accent-[#032517]"
                        />
                        <div>
                          <span className="text-sm font-medium text-[#032517] block">
                            Poolside Candlelit 5-Course Dinner
                          </span>
                          <span className="text-xs text-[#726758]">
                            Malabar seafood or vegetarian feast on infinity deck
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#765934]">
                        +₹2,500
                      </span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-lg border border-[#c1c8c2]/50 bg-white hover:bg-[#f6f4ed] cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addons.ayurveda}
                          onChange={(e) => setAddons({ ...addons, ayurveda: e.target.checked })}
                          className="w-4 h-4 text-[#032517] rounded accent-[#032517]"
                        />
                        <div>
                          <span className="text-sm font-medium text-[#032517] block">
                            Ayurvedic Rejuvenation Abhyanga (60 min)
                          </span>
                          <span className="text-xs text-[#726758]">
                            Traditional warm herbal oil therapy by master therapist
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#765934]">
                        +₹1,800/person
                      </span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-lg border border-[#c1c8c2]/50 bg-white hover:bg-[#f6f4ed] cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addons.guidedTrek}
                          onChange={(e) => setAddons({ ...addons, guidedTrek: e.target.checked })}
                          className="w-4 h-4 text-[#032517] rounded accent-[#032517]"
                        />
                        <div>
                          <span className="text-sm font-medium text-[#032517] block">
                            Guided Private Plantation &amp; Birding Walk
                          </span>
                          <span className="text-xs text-[#726758]">
                            Exclusive naturalist tour of 25-acre spice groves
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#765934]">
                        +₹1,200
                      </span>
                    </label>

                    <label className="flex items-center justify-between p-3 rounded-lg border border-[#c1c8c2]/50 bg-white hover:bg-[#f6f4ed] cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <input
                          type="checkbox"
                          checked={addons.airportTransfer}
                          onChange={(e) => setAddons({ ...addons, airportTransfer: e.target.checked })}
                          className="w-4 h-4 text-[#032517] rounded accent-[#032517]"
                        />
                        <div>
                          <span className="text-sm font-medium text-[#032517] block">
                            Kannur (CNN) or Calicut (CCJ) Private Chauffeur Pickup
                          </span>
                          <span className="text-xs text-[#726758]">
                            Comfortable SUV transfer directly to sanctuary gates
                          </span>
                        </div>
                      </div>
                      <span className="text-xs font-semibold text-[#765934]">
                        +₹2,800
                      </span>
                    </label>
                  </div>
                </div>

                {/* 4. Guest Details */}
                <div className="space-y-3 pt-2 border-t border-[#c1c8c2]/40">
                  <span className="text-xs uppercase tracking-wider font-semibold text-[#726758] block">
                    Guest Information
                  </span>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="Full Name *"
                      value={guestName}
                      onChange={(e) => setGuestName(e.target.value)}
                      className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                    />
                    <input
                      type="tel"
                      required
                      placeholder="Phone / WhatsApp Number *"
                      value={guestPhone}
                      onChange={(e) => setGuestPhone(e.target.value)}
                      className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                    />
                  </div>
                  <input
                    type="email"
                    required
                    placeholder="Email Address *"
                    value={guestEmail}
                    onChange={(e) => setGuestEmail(e.target.value)}
                    className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                  />
                  <textarea
                    rows={2}
                    placeholder="Special requests (anniversary, dietary requirements, early check-in, etc.)"
                    value={specialRequests}
                    onChange={(e) => setSpecialRequests(e.target.value)}
                    className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-sm text-[#1b1c18] focus:border-[#765934] focus:outline-none resize-none"
                  ></textarea>
                </div>

              </div>

              {/* Right Column: Visual Summary & Tariff Calculation */}
              <div className="lg:col-span-5 flex flex-col justify-between bg-[#f0eee7] rounded-xl p-6 border border-[#c1c8c2]/50">
                <div>
                  <div className="relative rounded-lg overflow-hidden h-44 mb-4 shadow-sm">
                    <img
                      src={currentSuite.image}
                      alt={currentSuite.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 left-2 bg-[#032517]/85 text-white text-[10px] uppercase font-semibold px-2 py-0.5 rounded tracking-wider">
                      {currentSuite.badge}
                    </div>
                  </div>

                  <h4 className="font-serif text-xl font-medium text-[#032517]">
                    {currentSuite.name}
                  </h4>
                  <p className="text-xs text-[#726758] mb-4">
                    {currentSuite.bedType} • {currentSuite.occupancy}
                  </p>

                  <div className="space-y-2 border-t border-[#c1c8c2]/40 pt-3 text-sm">
                    <div className="flex justify-between text-[#424843]">
                      <span>₹{currentSuite.pricePerNight.toLocaleString('en-IN')} × {nights} night{nights > 1 ? 's' : ''}</span>
                      <span className="font-medium text-[#032517]">₹{baseSuiteTotal.toLocaleString('en-IN')}</span>
                    </div>

                    {addonsTotal > 0 && (
                      <div className="flex justify-between text-[#424843]">
                        <span>Selected Add-ons</span>
                        <span className="font-medium text-[#032517]">₹{addonsTotal.toLocaleString('en-IN')}</span>
                      </div>
                    )}

                    <div className="flex justify-between text-[#424843]">
                      <span>Taxes &amp; Eco Cess (12%)</span>
                      <span className="font-medium text-[#032517]">₹{taxes.toLocaleString('en-IN')}</span>
                    </div>

                    <div className="pt-3 border-t border-[#c1c8c2]/50 flex justify-between items-baseline">
                      <span className="font-semibold text-base text-[#032517]">Estimated Total</span>
                      <span className="font-serif text-2xl font-bold text-[#765934]">
                        ₹{grandTotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>

                  <div className="mt-4 p-3 bg-white/70 rounded-lg text-xs text-[#726758] space-y-1">
                    <div className="flex items-center gap-1.5 text-[#032517] font-medium">
                      <ShieldCheck className="w-4 h-4 text-[#765934]" />
                      <span>Direct Booking Inclusions:</span>
                    </div>
                    <p>• Complimentary Malabar Breakfast for all guests</p>
                    <p>• Unlimited Valley-Facing Infinity Pool access</p>
                    <p>• Free Wi-Fi &amp; Plantation tour</p>
                  </div>
                </div>

                <div className="pt-6 space-y-3">
                  <button
                    type="submit"
                    className="w-full py-3.5 bg-[#032517] hover:bg-[#765934] text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Confirm Direct Reservation</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="w-full py-2.5 bg-white hover:bg-[#FAF8F2] text-[#032517] border border-[#c1c8c2] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#765934]" />
                    <span>Inquire via WhatsApp Desk</span>
                  </button>

                  <div className="text-center">
                    <a
                      href="tel:+919207050305"
                      className="inline-flex items-center gap-1 text-[11px] text-[#726758] hover:text-[#032517] font-medium"
                    >
                      <Phone className="w-3 h-3 text-[#765934]" />
                      <span>Prefer to speak? Call +91 9207050305</span>
                    </a>
                  </div>
                </div>

              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
