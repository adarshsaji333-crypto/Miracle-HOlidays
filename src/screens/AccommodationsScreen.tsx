import React, { useState } from 'react';
import { RESORT_SUITES, RESORT_IMAGES } from '../data/resortData';
import { SuiteItem } from '../types';
import { 
  Bed, Users, Maximize, Eye, Check, Star, ArrowRight, ShieldCheck, 
  Sparkles, Coffee, Wifi, Waves, Wind, Tv
} from 'lucide-react';

interface AccommodationsScreenProps {
  onOpenBooking: (suiteId?: string) => void;
  onOpenSuiteDetails: (suite: SuiteItem) => void;
}

export const AccommodationsScreen: React.FC<AccommodationsScreenProps> = ({
  onOpenBooking,
  onOpenSuiteDetails
}) => {
  const [filter, setFilter] = useState<string>('all');
  const [stayNights, setStayNights] = useState<number>(2);

  const filteredSuites = filter === 'all' 
    ? RESORT_SUITES 
    : RESORT_SUITES.filter(s => s.id.includes(filter));

  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* Screen Hero Banner */}
      <section className="relative w-full -mt-20 pt-32 pb-16 bg-[#032517] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={RESORT_IMAGES.aerialMorning}
            alt="Wayanad rainforest morning mist over resort suites"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#032517] via-[#032517]/70 to-[#032517]/40"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold mb-2">
            Sanctuary Living • Wayanad
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F2] tracking-tight max-w-3xl mb-4 font-normal">
            Bespoke Villas &amp; Glasshouses
          </h1>
          <p className="text-base sm:text-lg text-[#f0eee7]/85 max-w-2xl font-light leading-relaxed">
            Crafted from ancient reclaimed timber, stone, and floor-to-ceiling glass to awaken all senses to the tranquil morning birdsong of the Western Ghats.
          </p>

          {/* Filter segment tabs */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-2 p-1.5 bg-[#fbf9f2]/15 backdrop-blur-md rounded-xl border border-white/20">
            <button
              onClick={() => setFilter('all')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'all' ? 'bg-[#fbf9f2] text-[#032517] shadow-sm' : 'text-white hover:text-[#ffddb6]'
              }`}
            >
              All Sanctuaries
            </button>
            <button
              onClick={() => setFilter('blueberry')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'blueberry' ? 'bg-[#fbf9f2] text-[#032517] shadow-sm' : 'text-white hover:text-[#ffddb6]'
              }`}
            >
              Blueberry Glass House
            </button>
            <button
              onClick={() => setFilter('blackberry')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'blackberry' ? 'bg-[#fbf9f2] text-[#032517] shadow-sm' : 'text-white hover:text-[#ffddb6]'
              }`}
            >
              Blackberry Timber Villa
            </button>
            <button
              onClick={() => setFilter('mulberry')}
              className={`px-4 py-2 rounded-lg text-xs font-semibold uppercase tracking-wider transition-all cursor-pointer ${
                filter === 'mulberry' ? 'bg-[#fbf9f2] text-[#032517] shadow-sm' : 'text-white hover:text-[#ffddb6]'
              }`}
            >
              Mulberry Heritage Suite
            </button>
          </div>
        </div>
      </section>

      {/* Main Suite Showcase Cards */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-6 z-20 space-y-12">
        {filteredSuites.map((suite, idx) => {
          const isReverse = idx % 2 === 1;
          return (
            <div
              key={suite.id}
              className="bg-white rounded-2xl shadow-xl overflow-hidden border border-[#c1c8c2]/50 hover:shadow-2xl transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 items-stretch ${isReverse ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Column */}
                <div className={`lg:col-span-6 relative bg-[#0F261B] min-h-[340px] ${isReverse ? 'lg:order-2' : ''}`}>
                  <img
                    src={suite.image}
                    alt={suite.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-[#032517]/85 backdrop-blur-md text-white text-xs uppercase tracking-wider px-3 py-1 rounded-md font-semibold">
                    {suite.badge}
                  </div>
                  <div className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-md text-[#032517] text-xs px-3 py-1.5 rounded-lg shadow-md flex items-center gap-1.5 font-medium">
                    <Star className="w-4 h-4 text-[#765934] fill-[#765934]" />
                    <span className="font-bold">{suite.rating}</span>
                    <span className="text-[#726758]">({suite.reviewsCount} verified reviews)</span>
                  </div>
                </div>

                {/* Details Column */}
                <div className={`lg:col-span-6 p-8 lg:p-10 flex flex-col justify-between ${isReverse ? 'lg:order-1' : ''}`}>
                  <div>
                    <div className="flex items-center justify-between gap-4 mb-2">
                      <span className="text-xs uppercase tracking-wider font-semibold text-[#765934]">
                        {suite.tagline}
                      </span>
                      <span className="text-xs text-[#726758]">{suite.sizeSqFt} sq. ft.</span>
                    </div>

                    <h2 className="font-serif text-3xl font-medium text-[#032517] mb-3">
                      {suite.name}
                    </h2>

                    <p className="text-sm text-[#424843] leading-relaxed mb-6">
                      {suite.longDescription}
                    </p>

                    {/* Specifications grid */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 p-4 bg-[#f6f4ed] rounded-xl text-xs text-[#1b1c18] mb-6">
                      <div>
                        <span className="text-[#726758] block text-[10px] uppercase">Occupancy</span>
                        <span className="font-semibold text-[#032517]">{suite.occupancy}</span>
                      </div>
                      <div>
                        <span className="text-[#726758] block text-[10px] uppercase">Bedding</span>
                        <span className="font-semibold text-[#032517] line-clamp-1">{suite.bedType}</span>
                      </div>
                      <div>
                        <span className="text-[#726758] block text-[10px] uppercase">Forest View</span>
                        <span className="font-semibold text-[#032517] line-clamp-1">{suite.view}</span>
                      </div>
                    </div>

                    {/* Key features bullets */}
                    <div className="space-y-2 mb-6">
                      <span className="text-xs uppercase font-semibold text-[#765934] tracking-wider block">
                        Included Suite Comforts
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#424843]">
                        {suite.amenities.slice(0, 6).map((item, i) => (
                          <div key={i} className="flex items-center gap-2">
                            <Check className="w-3.5 h-3.5 text-[#1b3b2b] shrink-0" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Tariff & Actions */}
                  <div className="pt-6 border-t border-[#c1c8c2]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <div>
                      <span className="text-[11px] text-[#726758] uppercase block">
                        Direct Tariff • Complimentary Breakfast
                      </span>
                      <div className="flex items-baseline gap-1">
                        <span className="font-serif text-2xl font-bold text-[#032517]">
                          ₹{suite.pricePerNight.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-[#726758]">/ night + 12% GST</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => onOpenSuiteDetails(suite)}
                        className="px-4 py-2.5 rounded-lg border border-[#c1c8c2] text-[#032517] hover:bg-[#f6f4ed] text-xs font-semibold uppercase tracking-wider transition-colors cursor-pointer"
                      >
                        Suite Tour
                      </button>
                      <button
                        onClick={() => onOpenBooking(suite.id)}
                        className="bg-[#032517] hover:bg-[#765934] text-white px-6 py-2.5 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md inline-flex items-center gap-1.5 cursor-pointer"
                      >
                        <span>Reserve</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Feature Comparison Matrix */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs text-[#765934] uppercase tracking-widest font-semibold">
            Side-By-Side Comparison
          </span>
          <h3 className="font-serif text-3xl text-[#032517] mt-1 font-normal">
            Find Your Ideal Sanctuary Setting
          </h3>
        </div>

        <div className="overflow-x-auto bg-white rounded-xl shadow-md border border-[#c1c8c2]/50">
          <table className="w-full text-left text-sm text-[#424843]">
            <thead className="bg-[#f0eee7] text-xs uppercase tracking-wider text-[#032517]">
              <tr>
                <th className="p-4 font-semibold">Sanctuary Feature</th>
                <th className="p-4 font-semibold">Blueberry Glass House</th>
                <th className="p-4 font-semibold">Blackberry Timber Villa</th>
                <th className="p-4 font-semibold">Mulberry Heritage Suite</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#c1c8c2]/30">
              <tr>
                <td className="p-4 font-medium text-[#032517]">Style &amp; Architecture</td>
                <td className="p-4">360° Glass Pavilion on Stilts</td>
                <td className="p-4">Handcrafted Kerala Timber Villa</td>
                <td className="p-4">Traditional Terracotta Cottage</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-[#032517]">Best For</td>
                <td className="p-4">Couples &amp; Honeymooners</td>
                <td className="p-4">Families &amp; Nature Seekers</td>
                <td className="p-4">Families &amp; Heritage Lovers</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-[#032517]">Occupancy</td>
                <td className="p-4">2 Adults</td>
                <td className="p-4">2 Adults, 2 Children</td>
                <td className="p-4">2 Adults, 2 Children</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-[#032517]">Private Outdoor Deck / Verandah</td>
                <td className="p-4 text-emerald-700 font-semibold">Cantilevered Stargazing Deck</td>
                <td className="p-4 text-emerald-700 font-semibold">Rainforest Balcony</td>
                <td className="p-4 text-emerald-700 font-semibold">Heritage Lotus Pond Verandah</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-[#032517]">Separate Living Lounge</td>
                <td className="p-4 text-[#726758]">Glass Salon Space</td>
                <td className="p-4 text-emerald-700 font-semibold">Dedicated Living Room</td>
                <td className="p-4 text-emerald-700 font-semibold">Family Salon Room</td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-[#032517]">Complimentary Kerala Breakfast</td>
                <td className="p-4"><Check className="w-4 h-4 text-emerald-700" /></td>
                <td className="p-4"><Check className="w-4 h-4 text-emerald-700" /></td>
                <td className="p-4"><Check className="w-4 h-4 text-emerald-700" /></td>
              </tr>
              <tr>
                <td className="p-4 font-medium text-[#032517]">Base Direct Rate</td>
                <td className="p-4 font-serif font-bold text-base text-[#765934]">₹9,500 / night</td>
                <td className="p-4 font-serif font-bold text-base text-[#765934]">₹7,500 / night</td>
                <td className="p-4 font-serif font-bold text-base text-[#765934]">₹8,000 / night</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

    </div>
  );
};
