import React, { useState } from 'react';
import { WAYANAD_ATTRACTIONS, RESORT_IMAGES } from '../data/resortData';
import { MapPin, Navigation, Clock, Calendar, Compass, Phone, ArrowRight, Sun, CloudRain, Wind } from 'lucide-react';

interface SanctuaryScreenProps {
  onOpenBooking: () => void;
}

export const SanctuaryScreen: React.FC<SanctuaryScreenProps> = ({ onOpenBooking }) => {
  const [selectedAttractionId, setSelectedAttractionId] = useState<string>('edakkal-caves');

  const selectedAttraction = WAYANAD_ATTRACTIONS.find(a => a.id === selectedAttractionId) || WAYANAD_ATTRACTIONS[0];

  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* Hero Banner */}
      <section className="relative w-full -mt-20 pt-32 pb-16 bg-[#032517] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={RESORT_IMAGES.aerialSanctuary}
            alt="Wayanad Western Ghats rainforest sanctuary"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#032517] via-[#032517]/70 to-[#032517]/40"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold mb-2">
            Regional Exploration Guide
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F2] tracking-tight max-w-3xl mb-4 font-normal">
            Wayanad Rainforest Sanctuary
          </h1>
          <p className="text-base sm:text-lg text-[#f0eee7]/85 max-w-2xl font-light leading-relaxed">
            Perched at 3,500 feet elevation in northern Kerala, Wayanad is a verdant mountainous terrain sculpted by ancient neolithic cultures, mist-laden peaks, and rich biodiversity.
          </p>
        </div>
      </section>

      {/* Interactive Excursion Calculator & Distance Hub */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-6 z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#c1c8c2]/50">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#c1c8c2]/40 mb-6">
            <div>
              <span className="text-xs uppercase font-semibold text-[#765934] tracking-widest">
                Excursion Planner
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#032517] mt-0.5">
                Proximity From Miracle Holidays (Kommayad)
              </h2>
            </div>
            <a
              href="tel:+919207050305"
              className="inline-flex items-center gap-1.5 bg-[#f0eee7] hover:bg-[#eae8e1] text-[#032517] px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Phone className="w-4 h-4 text-[#765934]" />
              <span>Arrange Private Chauffeur</span>
            </a>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Attractions tabs */}
            <div className="lg:col-span-5 space-y-2">
              <span className="text-xs text-[#726758] uppercase font-semibold tracking-wider block mb-2">
                Select Destination
              </span>
              {WAYANAD_ATTRACTIONS.map(attraction => {
                const isSelected = attraction.id === selectedAttractionId;
                return (
                  <button
                    key={attraction.id}
                    onClick={() => setSelectedAttractionId(attraction.id)}
                    className={`w-full p-4 rounded-xl border text-left transition-all cursor-pointer flex items-center justify-between ${
                      isSelected
                        ? 'border-[#032517] bg-[#f0eee7] shadow-sm ring-1 ring-[#032517]'
                        : 'border-[#c1c8c2]/40 bg-white hover:bg-[#f6f4ed]'
                    }`}
                  >
                    <div>
                      <h4 className="font-serif text-lg font-medium text-[#032517]">
                        {attraction.name}
                      </h4>
                      <span className="text-xs text-[#726758] block mt-0.5">
                        {attraction.category}
                      </span>
                    </div>

                    <div className="text-right shrink-0">
                      <span className="text-xs font-semibold text-[#765934] block">
                        {attraction.driveTime}
                      </span>
                      <span className="text-[11px] text-[#726758]">
                        {attraction.distanceKm} km
                      </span>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Selected Attraction Spotlight */}
            <div className="lg:col-span-7 bg-[#f6f4ed] p-6 lg:p-8 rounded-2xl border border-[#c1c8c2]/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-semibold bg-[#032517] text-white px-3 py-1 rounded-full uppercase tracking-wider">
                      {selectedAttraction.driveTime}
                    </span>
                    <span className="text-xs font-medium text-[#726758]">
                      ({selectedAttraction.distanceKm} km from resort gates)
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-[#765934] uppercase tracking-wider">
                    {selectedAttraction.category}
                  </span>
                </div>

                <h3 className="font-serif text-3xl font-medium text-[#032517] mb-3">
                  {selectedAttraction.name}
                </h3>

                <p className="text-sm text-[#424843] leading-relaxed mb-6">
                  {selectedAttraction.description}
                </p>

                <div className="space-y-3 mb-6">
                  <span className="text-xs uppercase font-semibold text-[#765934] tracking-wider block">
                    Sightseeing Highlights
                  </span>
                  <ul className="space-y-2">
                    {selectedAttraction.highlights.map((h, i) => (
                      <li key={i} className="text-xs text-[#424843] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#765934]"></span>
                        <span>{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-white rounded-lg text-xs text-[#726758] flex items-center gap-2">
                  <Clock className="w-4 h-4 text-[#765934] shrink-0" />
                  <span><strong>Ideal Visiting Hours:</strong> {selectedAttraction.bestTimeToVisit}</span>
                </div>
              </div>

              <div className="pt-6 border-t border-[#c1c8c2]/40 mt-6 flex flex-wrap items-center justify-between gap-4">
                <span className="text-xs text-[#726758]">Resort chauffeur available with AC SUV/Sedan</span>
                <a
                  href="tel:+919207050305"
                  className="bg-[#032517] hover:bg-[#765934] text-white text-xs font-semibold px-5 py-2.5 rounded-lg uppercase tracking-wider transition-colors inline-flex items-center gap-1.5 shadow-sm"
                >
                  <Compass className="w-4 h-4" />
                  <span>Book This Excursion</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Climate & Seasons in Wayanad */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs text-[#765934] uppercase tracking-widest font-semibold">
            When To Visit
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#032517] font-normal mt-1">
            Wayanad’s Seasonal Charms
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#c1c8c2]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e4e2dc] flex items-center justify-center text-[#032517] mb-4">
                <Wind className="w-5 h-5 text-[#765934]" />
              </div>
              <span className="text-xs uppercase font-semibold text-[#765934] tracking-wider block">
                October to February
              </span>
              <h4 className="font-serif text-2xl font-medium text-[#032517] mt-1 mb-2">
                The Misty Winter Chill
              </h4>
              <p className="text-xs text-[#424843] leading-relaxed">
                Crisp 15°C – 22°C temperatures with blankets of morning fog sweeping over coffee plantations. Perfect for infinity pool swimming, outdoor campfires, and high-altitude hiking.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c1c8c2]/30 text-xs text-[#726758]">
              Most Popular Season
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#c1c8c2]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e4e2dc] flex items-center justify-center text-[#032517] mb-4">
                <CloudRain className="w-5 h-5 text-[#765934]" />
              </div>
              <span className="text-xs uppercase font-semibold text-[#765934] tracking-wider block">
                June to September
              </span>
              <h4 className="font-serif text-2xl font-medium text-[#032517] mt-1 mb-2">
                Emerald Monsoon Magic
              </h4>
              <p className="text-xs text-[#424843] leading-relaxed">
                The Western Ghats burst into intense green life with roaring waterfalls, petrichor scents, and romantic rain drumming against villa terracotta eaves. Ideal for Ayurvedic rejuvenation.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c1c8c2]/30 text-xs text-[#726758]">
              Best for Ayurveda &amp; Serenity
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-md border border-[#c1c8c2]/40 flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#e4e2dc] flex items-center justify-center text-[#032517] mb-4">
                <Sun className="w-5 h-5 text-[#765934]" />
              </div>
              <span className="text-xs uppercase font-semibold text-[#765934] tracking-wider block">
                March to May
              </span>
              <h4 className="font-serif text-2xl font-medium text-[#032517] mt-1 mb-2">
                Breezy Highland Summer
              </h4>
              <p className="text-xs text-[#424843] leading-relaxed">
                Sunny blue skies with gentle breezes at 3,500 feet elevation, significantly cooler than the coastal Kerala plains. Great for family boating on Banasura Sagar dam.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-[#c1c8c2]/30 text-xs text-[#726758]">
              Great for Family Vacations
            </div>
          </div>

        </div>
      </section>

    </div>
  );
};
