import React, { useState } from 'react';
import { RESORT_IMAGES, RESORT_SUITES, RESORT_EXPERIENCES, WAYANAD_ATTRACTIONS, GUEST_REVIEWS } from '../data/resortData';
import { SuiteItem, ScreenType } from '../types';
import { 
  Calendar, Users, Bed, Search, Check, Star, ArrowRight, Phone, MessageSquare, 
  MapPin, Utensils, Waves, Sparkles, Compass, Eye, Heart, ExternalLink, Camera
} from 'lucide-react';

interface OverviewScreenProps {
  onOpenBooking: (suiteId?: string, dates?: { checkIn: string; checkOut: string }, guests?: string) => void;
  onOpenSuiteDetails: (suite: SuiteItem) => void;
  onOpenDiningOrder: () => void;
  onNavigate: (screen: ScreenType) => void;
}

export const OverviewScreen: React.FC<OverviewScreenProps> = ({
  onOpenBooking,
  onOpenSuiteDetails,
  onOpenDiningOrder,
  onNavigate
}) => {
  const [heroCheckIn, setHeroCheckIn] = useState('2025-04-18');
  const [heroCheckOut, setHeroCheckOut] = useState('2025-04-21');
  const [heroGuests, setHeroGuests] = useState('2 Adults, 2 Children');
  const [heroSuite, setHeroSuite] = useState('all');

  const handleHeroBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onOpenBooking(
      heroSuite === 'all' ? undefined : heroSuite,
      { checkIn: heroCheckIn, checkOut: heroCheckOut },
      heroGuests
    );
  };

  return (
    <div className="flex flex-col w-full">
      
      {/* 1. HERO SECTION WITH CINEMATIC SANCTUARY PANORAMA */}
      <section className="relative w-full min-h-[92vh] flex flex-col justify-between -mt-20 pt-28 pb-12 overflow-hidden bg-[#032517] text-[#FAF8F2]">
        
        {/* Background Image & Scrim */}
        <div className="absolute inset-0 z-0">
          <img
            src={RESORT_IMAGES.aerialSanctuary}
            alt="Aerial panoramic view of Miracle Holidays Wayanad resort nestled among misty hills and reflection lotus pond"
            className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#032517] via-[#032517]/60 to-[#032517]/30 mix-blend-multiply"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#032517]/85 via-transparent to-[#032517]/50"></div>
        </div>

        {/* Live Canopy Micro-widget (Floating right top) */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-12 pt-4 hidden sm:flex justify-end">
          <div className="inline-flex items-center gap-2.5 bg-[#fbf9f2]/90 backdrop-blur-md px-4 py-1.5 rounded-full shadow-lg border border-[#c1c8c2]/30 text-[#032517]">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
            <span className="text-[11px] uppercase tracking-widest font-semibold text-[#032517]">
              Kommayad Sanctuary • 3,500 FT Elevation
            </span>
            <span className="opacity-40">•</span>
            <span className="text-[12px] font-medium text-[#765934]">21°C Fresh Mist</span>
          </div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] w-full mx-auto px-6 lg:px-12 my-auto py-10 lg:py-16">
          <div className="max-w-3xl flex flex-col gap-4">
            
            <div className="inline-flex items-center gap-2 text-[#ffddb6] tracking-widest text-[12px] uppercase font-semibold">
              <span className="w-6 h-px bg-[#ffddb6]"></span>
              <span>Escape to Paradise • Wayanad, Kerala</span>
            </div>

            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F2] tracking-tight leading-[1.08] text-balance font-normal">
              The Traditional Sanctuary Amongst Misty Rainforested Hills
            </h1>

            <p className="text-base sm:text-lg text-[#f0eee7]/90 max-w-2xl font-light leading-relaxed">
              Discover authentic Kerala heritage enveloped by ancient emerald canopy, whispering cardamom estates, and mirror ponds at 3,500 feet elevation in the Western Ghats.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-2 text-[13px] text-[#ffddb6]">
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#ffddb6]" />
                <span className="text-[#f0eee7]">Best Direct Tariff Guarantee</span>
              </div>
              <span className="text-[#ffddb6]/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#ffddb6]" />
                <span className="text-[#f0eee7]">Complimentary Malabar Breakfast</span>
              </div>
              <span className="text-[#ffddb6]/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <Check className="w-4 h-4 text-[#ffddb6]" />
                <span className="text-[#f0eee7]">Infinity Pool &amp; Forest Trails</span>
              </div>
            </div>

          </div>
        </div>

        {/* Floating Reservation Concierge Bar */}
        <div className="relative z-20 max-w-[1440px] w-full mx-auto px-6 lg:px-12">
          <div className="w-full bg-[#ffffff]/95 backdrop-blur-xl rounded-xl shadow-[0_20px_50px_rgba(15,38,27,0.25)] p-4 lg:p-6 text-[#1b1c18] border border-[#c1c8c2]/40">
            <form onSubmit={handleHeroBookingSubmit} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 items-end">
              
              {/* Check In */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#726758] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#765934]" />
                  <span>Check-In Date</span>
                </label>
                <input
                  type="date"
                  value={heroCheckIn}
                  onChange={(e) => setHeroCheckIn(e.target.value)}
                  className="w-full bg-[#f6f4ed] px-3 py-2.5 rounded-lg text-[#032517] text-sm outline-none focus:bg-white border border-transparent focus:border-[#765934]"
                />
              </div>

              {/* Check Out */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#726758] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-[#765934]" />
                  <span>Check-Out Date</span>
                </label>
                <input
                  type="date"
                  value={heroCheckOut}
                  onChange={(e) => setHeroCheckOut(e.target.value)}
                  className="w-full bg-[#f6f4ed] px-3 py-2.5 rounded-lg text-[#032517] text-sm outline-none focus:bg-white border border-transparent focus:border-[#765934]"
                />
              </div>

              {/* Guests */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#726758] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Users className="w-3.5 h-3.5 text-[#765934]" />
                  <span>Guests</span>
                </label>
                <select
                  value={heroGuests}
                  onChange={(e) => setHeroGuests(e.target.value)}
                  className="w-full bg-[#f6f4ed] px-3 py-2.5 rounded-lg text-[#032517] text-sm outline-none focus:bg-white border border-transparent focus:border-[#765934] cursor-pointer"
                >
                  <option value="2 Adults, 0 Children">2 Adults, 0 Children</option>
                  <option value="2 Adults, 2 Children">2 Adults, 2 Children</option>
                  <option value="4 Adults, 2 Children">4 Adults, 2 Children</option>
                  <option value="1 Adult (Solo Retreat)">1 Adult (Solo Retreat)</option>
                </select>
              </div>

              {/* Sanctuary Suite */}
              <div className="flex flex-col gap-1">
                <label className="text-[11px] text-[#726758] uppercase tracking-widest font-semibold flex items-center gap-1.5">
                  <Bed className="w-3.5 h-3.5 text-[#765934]" />
                  <span>Sanctuary Suite</span>
                </label>
                <select
                  value={heroSuite}
                  onChange={(e) => setHeroSuite(e.target.value)}
                  className="w-full bg-[#f6f4ed] px-3 py-2.5 rounded-lg text-[#032517] text-sm outline-none focus:bg-white border border-transparent focus:border-[#765934] cursor-pointer"
                >
                  <option value="all">All Suites &amp; Villas</option>
                  <option value="blackberry-villa">Blackberry Villa</option>
                  <option value="blueberry-glasshouse">Blueberry Glass House</option>
                  <option value="mulberry-suite">Mulberry Heritage Suite</option>
                </select>
              </div>

              {/* Action Button */}
              <div>
                <button
                  type="submit"
                  className="w-full h-[44px] bg-[#032517] hover:bg-[#765934] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg cursor-pointer"
                >
                  <Search className="w-4 h-4" />
                  <span>Reserve Sanctuary</span>
                </button>
              </div>

            </form>
          </div>
        </div>

      </section>

      {/* 2. QUICK HIGHLIGHT STATS TICKER */}
      <section className="w-full bg-[#f6f4ed] py-8 border-b border-[#c1c8c2]/30 shadow-sm">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            
            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl text-[#032517]">
                3,500<span className="text-[#765934] text-2xl font-light">ft</span>
              </span>
              <span className="text-[11px] text-[#726758] uppercase tracking-widest font-medium mt-1">
                High-Altitude Ghats Canopy
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl text-[#032517]">
                100%
              </span>
              <span className="text-[11px] text-[#726758] uppercase tracking-widest font-medium mt-1">
                Eco-Conscious Teak Architecture
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl text-[#032517]">
                4.9<span className="text-[#765934] text-2xl">★</span>
              </span>
              <span className="text-[11px] text-[#726758] uppercase tracking-widest font-medium mt-1">
                Verified Guest Serenity Index
              </span>
            </div>

            <div className="flex flex-col items-center">
              <span className="font-serif text-3xl sm:text-4xl text-[#032517]">
                24/7
              </span>
              <span className="text-[11px] text-[#726758] uppercase tracking-widest font-medium mt-1">
                Dedicated Butler &amp; Travel Concierge
              </span>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR STORY & ESSENCE (ASYMMETRIC EDITORIAL WITH CLIFFSIDE INFINITY POOL) */}
      <section className="w-full py-16 lg:py-24 bg-[#fbf9f2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left: Image Vignette Layering */}
            <div className="lg:col-span-7 relative">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[16/10] bg-[#0F261B]">
                <img
                  src={RESORT_IMAGES.infinityPool}
                  alt="Stunning mountain cliffside infinity pool at Miracle Holidays overlooking lush green mist-covered rainforest tea plantations"
                  className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700 ease-out"
                />
              </div>

              {/* Overlapping botanical quote card */}
              <div className="bg-white p-6 rounded-xl shadow-xl max-w-sm sm:-mt-16 sm:ml-8 relative z-10 border-l-4 border-[#765934] hidden sm:block">
                <div className="flex items-center gap-1 text-[#B58A57] mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#B58A57]" />
                  ))}
                </div>
                <p className="font-serif text-lg text-[#032517] italic leading-snug">
                  “Watching morning mist swirl across the infinity pool with hot Malabar coffee was pure transcendence.”
                </p>
                <span className="block text-[11px] text-[#726758] uppercase tracking-widest mt-2">
                  — Guest Stay, March 2025
                </span>
              </div>
            </div>

            {/* Right: Narrative Copy */}
            <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="inline-flex items-center gap-2 text-[#765934] text-xs uppercase tracking-widest font-semibold">
                <span className="w-6 h-px bg-[#765934]"></span>
                <span>Our Heritage &amp; Landscape</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl text-[#032517] tracking-tight leading-tight font-normal">
                A Cultural Gem in the Heart of Wayanad
              </h2>

              <p className="text-[16px] text-[#424843] leading-relaxed">
                Welcome to <strong className="text-[#032517] font-semibold">Miracle Holidays Resort, Wayanad</strong>—your gateway to nature’s pristine sanctuary. Surrounded by mist-draped peaks and age-old tropical foliage, our resort marries ancient Kerala woodworking with understated contemporary luxury.
              </p>

              <p className="text-sm text-[#424843] leading-relaxed">
                Unwind in handcrafted villas adorned with antique teak, breathe clean Ghats air beside the cliffside infinity pool, savor estate-grown organic delicacies, and take guided excursions to sacred Edakkal Caves and Banasura Sagar Dam.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <a
                  href="tel:+919207050305"
                  className="inline-flex items-center gap-2 bg-[#032517] hover:bg-[#765934] text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition-all shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Speak with Resort Host</span>
                </a>

                <button
                  onClick={() => onNavigate('experiences-and-amenities')}
                  className="text-xs font-semibold text-[#765934] hover:text-[#032517] transition-colors flex items-center gap-1.5 uppercase tracking-wider cursor-pointer"
                >
                  <span>Explore Amenities</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 4. SUITES & VILLAS SHOWCASE */}
      <section className="w-full py-16 lg:py-24 bg-[#f6f4ed]" id="suites">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-2xl flex flex-col gap-2">
              <div className="inline-flex items-center gap-2 text-[#765934] text-xs uppercase tracking-widest font-semibold">
                <span className="w-6 h-px bg-[#765934]"></span>
                <span>Bespoke Accommodations</span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#032517] tracking-tight font-normal">
                Rooms &amp; Suites Designed for Deep Serenity
              </h2>
              <p className="text-sm text-[#424843]">
                Fresh linens, curated wall art, and hand-picked minibars keep your stay simple, smart, and sophisticated.
              </p>
            </div>

            <button
              onClick={() => onNavigate('accommodations')}
              className="inline-flex items-center gap-2 text-[#032517] hover:text-[#765934] text-xs uppercase tracking-wider font-semibold transition-colors cursor-pointer"
            >
              <span>View All 3 Suite Styles</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Suite Cards Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RESORT_SUITES.map((suite) => {
              const isGlasshouse = suite.id === 'blueberry-glasshouse';
              return (
                <div
                  key={suite.id}
                  className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 flex flex-col justify-between group ${
                    isGlasshouse ? 'ring-2 ring-[#B58A57]/60' : ''
                  }`}
                >
                  <div>
                    {/* Image with badges */}
                    <div className="relative aspect-[16/11] overflow-hidden bg-[#0F261B]">
                      <img
                        src={suite.image}
                        alt={suite.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      />
                      <div className="absolute top-4 left-4 bg-[#032517]/85 backdrop-blur-md text-white text-[11px] uppercase tracking-wider px-3 py-1 rounded-md font-medium">
                        {suite.badge}
                      </div>
                      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#032517] text-xs px-2.5 py-1 rounded-md font-bold shadow-sm flex items-center gap-1">
                        <Star className="w-3.5 h-3.5 text-[#765934] fill-[#765934]" />
                        <span>{suite.rating}</span>
                      </div>
                    </div>

                    {/* Suite details */}
                    <div className="p-6 flex flex-col gap-3">
                      <div className="flex items-center justify-between">
                        <h3 className="font-serif text-2xl font-medium text-[#032517]">
                          {suite.name}
                        </h3>
                        {isGlasshouse && (
                          <span className="text-[11px] uppercase font-semibold text-[#765934] tracking-wider">
                            Popular Choice
                          </span>
                        )}
                      </div>

                      <p className="text-xs sm:text-sm text-[#424843] leading-relaxed line-clamp-3">
                        {suite.description}
                      </p>

                      {/* Attributes */}
                      <div className="grid grid-cols-2 gap-2 text-xs text-[#1b1c18] py-2 border-y border-[#c1c8c2]/30">
                        <div className="flex items-center gap-2 text-[#424843]">
                          <Users className="w-4 h-4 text-[#765934] shrink-0" />
                          <span>{suite.occupancy}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#424843]">
                          <Bed className="w-4 h-4 text-[#765934] shrink-0" />
                          <span className="line-clamp-1">{suite.bedType}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#424843]">
                          <Eye className="w-4 h-4 text-[#765934] shrink-0" />
                          <span className="line-clamp-1">{suite.view}</span>
                        </div>
                        <div className="flex items-center gap-2 text-[#424843]">
                          <Waves className="w-4 h-4 text-[#765934] shrink-0" />
                          <span>Pool &amp; Spa Access</span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {suite.amenities.slice(0, 3).map((am, i) => (
                          <span key={i} className="text-[11px] bg-[#f0eee7] text-[#032517] px-2.5 py-0.5 rounded">
                            {am}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="p-6 pt-0 flex items-center justify-between border-t border-[#c1c8c2]/20 mt-2">
                    <div>
                      <span className="text-[10px] uppercase text-[#726758] block tracking-wider">
                        Includes Breakfast
                      </span>
                      <span className="font-serif text-xl font-bold text-[#032517]">
                        From ₹{suite.pricePerNight.toLocaleString('en-IN')}
                        <span className="text-xs text-[#726758] font-sans font-normal"> / night</span>
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => onOpenSuiteDetails(suite)}
                        className="px-3 py-2 text-xs font-semibold text-[#032517] hover:text-[#765934] transition-colors cursor-pointer"
                        title="View Full Tour"
                      >
                        Details
                      </button>
                      <button
                        onClick={() => onOpenBooking(suite.id)}
                        className="bg-[#032517] hover:bg-[#765934] text-white text-xs font-semibold px-4 py-2 rounded-lg uppercase tracking-wider transition-colors inline-flex items-center gap-1 shadow-sm cursor-pointer"
                      >
                        <span>Reserve</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 5. EXPERIENCES & SANCTUARY AMENITIES BENTO */}
      <section className="w-full py-16 lg:py-24 bg-[#fbf9f2]" id="experiences">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-14 flex flex-col gap-2">
            <span className="text-xs text-[#765934] uppercase tracking-widest font-semibold">
              Curated Indulgence
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#032517] tracking-tight font-normal">
              The Miracle Holidays Sanctuary Experiences
            </h2>
            <p className="text-sm text-[#424843]">
              Experience new levels of comfort with our wide range of tailored sanctuary rituals, nature treks, and wellness amenities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {RESORT_EXPERIENCES.map((exp) => (
              <div
                key={exp.id}
                className="bg-[#f6f4ed] p-8 rounded-2xl flex flex-col justify-between gap-6 hover:bg-[#f0eee7] transition-all duration-300 shadow-sm hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#032517] text-white flex items-center justify-center shadow-md">
                    <Sparkles className="w-5 h-5 text-[#ffddb6]" />
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#765934] bg-white/80 px-2.5 py-1 rounded">
                    {exp.category}
                  </span>
                </div>

                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#032517] mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-[#424843] leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#c1c8c2]/30 flex items-center justify-between text-xs text-[#726758]">
                  <span>{exp.timeSlot}</span>
                  <span className="font-semibold text-[#032517]">{exp.price || 'Included'}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <button
              onClick={() => onNavigate('experiences-and-amenities')}
              className="inline-flex items-center gap-2 bg-[#032517] hover:bg-[#765934] text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition-colors shadow-md cursor-pointer"
            >
              <span>Explore Complete Daily Schedule &amp; Spa Menu</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>

      {/* 6. RESTAURANT & BAR: THE ART OF FINE DINING */}
      <section className="w-full py-16 lg:py-24 bg-[#032517] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-[#032517] via-[#1b3b2b]/90 to-[#032517]"></div>
        
        <div className="relative max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Visual presentation */}
            <div className="lg:col-span-6 relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl bg-[#1b3b2b]">
                <img
                  src={RESORT_IMAGES.malabarDining}
                  alt="Exquisite Kerala gastronomic dinner table set outdoors with candlelight and clay pots"
                  className="w-full h-[420px] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>

              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-[#fbf9f2] text-[#032517] p-4 rounded-xl shadow-xl border border-[#c1c8c2]/40">
                <Utensils className="w-7 h-7 text-[#765934]" />
                <div>
                  <span className="font-serif font-bold text-base block text-[#032517]">100% Organic Spices</span>
                  <span className="text-xs text-[#726758]">Harvested on resort grounds</span>
                </div>
              </div>
            </div>

            {/* Narrative copy */}
            <div className="lg:col-span-6 flex flex-col gap-4">
              <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold">
                Restaurant &amp; Bar
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F2] tracking-tight font-normal">
                The Art of Fine Dining
              </h2>
              <p className="text-sm sm:text-base text-[#f0eee7]/85 leading-relaxed font-light">
                Savor a delightful array of cuisines, from spicy Malabar pepper chicken and fresh pearl spot pollichathu to estate Arabica roasts and international favorites prepared with organic farm ingredients.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1b3b2b] flex items-center justify-center shrink-0 mt-0.5">
                    <Utensils className="w-4 h-4 text-[#ffddb6]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#FAF8F2] font-medium">Authentic Malabar Flavors</h4>
                    <p className="text-xs text-[#f0eee7]/75">Slow-cooked stews, fragrant Tellicherry pepper curries, and freshly steamed appams prepared by resident culinary masters.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1b3b2b] flex items-center justify-center shrink-0 mt-0.5">
                    <Sparkles className="w-4 h-4 text-[#ffddb6]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#FAF8F2] font-medium">Estate Arabica &amp; Robusta Brews</h4>
                    <p className="text-xs text-[#f0eee7]/75">Sun-dried estate coffee beans hand-roasted daily for an aromatic sensory start to misty Wayanad mornings.</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#1b3b2b] flex items-center justify-center shrink-0 mt-0.5">
                    <Heart className="w-4 h-4 text-[#ffddb6]" />
                  </div>
                  <div>
                    <h4 className="font-serif text-base text-[#FAF8F2] font-medium">Private Poolside Candlelit Suppers</h4>
                    <p className="text-xs text-[#f0eee7]/75">Romantic bespoke multi-course menus served on our infinity pool deck overlooking the tranquil starry valley.</p>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-4">
                <button
                  onClick={onOpenDiningOrder}
                  className="inline-flex items-center gap-2 bg-[#765934] hover:bg-[#B58A57] text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition-colors shadow-md cursor-pointer"
                >
                  <Utensils className="w-4 h-4" />
                  <span>Order Lunch &amp; Dinner Online</span>
                </button>
                <button
                  onClick={() => onNavigate('dining')}
                  className="text-xs uppercase tracking-wider text-[#ffddb6] hover:underline font-semibold"
                >
                  View Full A La Carte Menu →
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* 7. WAYANAD ATTRACTIONS GUIDE */}
      <section className="w-full py-16 lg:py-24 bg-[#fbf9f2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <span className="text-xs text-[#765934] uppercase tracking-widest font-semibold">
                Gateway to Nature's Paradise
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#032517] tracking-tight font-normal mt-1">
                Explore the Magic of Wayanad
              </h2>
            </div>
            <div className="inline-flex items-center gap-2 bg-[#f0eee7] px-4 py-2 rounded-full text-xs text-[#032517] font-medium">
              <Compass className="w-4 h-4 text-[#765934]" />
              <span>Private chauffeur excursions arranged upon request</span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {WAYANAD_ATTRACTIONS.map(attraction => (
              <div
                key={attraction.id}
                className="bg-[#f6f4ed] rounded-xl p-6 flex flex-col justify-between hover:shadow-md transition-shadow"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-semibold text-[#032517] bg-[#f0eee7] px-2.5 py-1 rounded-full">
                      {attraction.driveTime}
                    </span>
                    <MapPin className="w-4 h-4 text-[#765934]" />
                  </div>
                  <h4 className="font-serif text-xl font-medium text-[#032517] mb-1">
                    {attraction.name}
                  </h4>
                  <p className="text-xs text-[#424843] leading-relaxed">
                    {attraction.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#c1c8c2]/30 flex items-center justify-between text-[11px] text-[#726758] uppercase">
                  <span>{attraction.category}</span>
                  <span className="text-[#032517] font-semibold">{attraction.distanceKm} km</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. GUEST VOICES & VERIFIED REFLECTIONS */}
      <section className="w-full py-16 lg:py-24 bg-[#f6f4ed]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-xl mx-auto mb-14 flex flex-col gap-2">
            <div className="flex items-center justify-center gap-1 text-[#B58A57]">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#B58A57]" />
              ))}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#032517] tracking-tight font-normal">
              Cherished Memories of Sanctuary
            </h2>
            <p className="text-sm text-[#424843]">
              Real experiences from travelers discovering calm amidst the Wayanad mist.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {GUEST_REVIEWS.map(review => (
              <div
                key={review.id}
                className="bg-white p-6 rounded-2xl shadow-sm flex flex-col justify-between"
              >
                <div className="flex flex-col gap-2">
                  <span className="font-serif text-4xl text-[#765934] opacity-30 leading-none">“</span>
                  <p className="text-sm text-[#1b1c18] leading-relaxed -mt-2">
                    {review.review}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#f0eee7] flex items-center justify-between">
                  <div>
                    <span className="font-medium text-sm text-[#032517] block">
                      {review.guestName}
                    </span>
                    <span className="text-xs text-[#726758]">
                      {review.location} • {review.suiteStayed}
                    </span>
                  </div>
                  <Check className="w-4 h-4 text-[#765934]" />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. INSTAGRAM COMMUNITY & VISUAL GALLERY */}
      <section className="w-full py-16 bg-[#fbf9f2]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs text-[#765934] uppercase tracking-widest font-semibold">
                Social Sanctuary
              </span>
              <h3 className="font-serif text-2xl text-[#032517]">
                Follow Us on Instagram
              </h3>
            </div>
            <a
              href="https://www.instagram.com/miracleholidays_wayanad"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-[#032517] hover:text-[#765934] uppercase tracking-wider font-semibold transition-colors"
            >
              <span>@miracleholidays_wayanad</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="relative aspect-square overflow-hidden rounded-xl group bg-[#0F261B]">
              <img
                src={RESORT_IMAGES.aerialSanctuary}
                alt="Morning mist rising above sanctuary roofs"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#032517]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Camera className="w-7 h-7" />
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl group bg-[#0F261B]">
              <img
                src={RESORT_IMAGES.infinityPool}
                alt="Cliffside infinity pool at dusk"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#032517]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Camera className="w-7 h-7" />
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl group bg-[#0F261B]">
              <img
                src={RESORT_IMAGES.blueberryGlasshouse}
                alt="Blueberry Glasshouse illuminated at twilight"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#032517]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Camera className="w-7 h-7" />
              </div>
            </div>

            <div className="relative aspect-square overflow-hidden rounded-xl group bg-[#0F261B]">
              <img
                src={RESORT_IMAGES.blackberryVilla}
                alt="Teak timber master bedroom view"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-[#032517]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center text-white">
                <Camera className="w-7 h-7" />
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 10. DIRECT BOOKING CONCIERGE CALLOUT BANNER */}
      <section className="w-full bg-[#1b3b2b] text-white py-16">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="bg-[#032517] p-8 lg:p-12 rounded-2xl shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border-l-4 border-[#765934]">
            
            <div className="max-w-2xl flex flex-col gap-2">
              <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold">
                Bespoke Kerala Hospitality
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F2] tracking-tight font-normal">
                Ready to Experience the Miracle of Wayanad?
              </h2>
              <p className="text-sm text-[#f0eee7]/80">
                Contact our dedicated front desk concierge for custom package itineraries, plantation trek bookings, and direct booking discounts.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href="tel:+919207050305"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#765934] hover:bg-[#B58A57] text-white text-xs font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors shadow-lg"
              >
                <Phone className="w-4 h-4" />
                <span>+91 9207050305</span>
              </a>

              <a
                href="https://wa.me/919207050305"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF8F2] hover:bg-white text-[#032517] text-xs font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-colors shadow-md"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Host</span>
              </a>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
