import React, { useState } from 'react';
import { SuiteItem } from '../types';
import { X, Check, Star, Users, Maximize, Eye, Bed, Sparkles, ArrowRight } from 'lucide-react';

interface SuiteDetailModalProps {
  suite: SuiteItem | null;
  onClose: () => void;
  onBookSuite: (suiteId: string) => void;
}

export const SuiteDetailModal: React.FC<SuiteDetailModalProps> = ({ suite, onClose, onBookSuite }) => {
  const [activeImageIdx, setActiveImageIdx] = useState(0);

  if (!suite) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#fbf9f2] rounded-2xl shadow-2xl overflow-hidden border border-[#c1c8c2]/50 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#032517] text-[#ffffff] px-6 py-4 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-3">
            <span className="text-xs uppercase tracking-widest text-[#ffddb6] font-medium">
              Sanctuary Showcase
            </span>
            <span className="opacity-40">•</span>
            <span className="font-serif text-xl font-medium text-[#FAF8F2]">
              {suite.name}
            </span>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#ffffff] transition-colors focus:outline-none"
            aria-label="Close suite details"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="overflow-y-auto p-6 md:p-8 flex-1 space-y-6">
          
          {/* Main Gallery Showcase */}
          <div className="space-y-3">
            <div className="relative rounded-xl overflow-hidden aspect-[16/9] shadow-md bg-[#0F261B]">
              <img
                src={suite.gallery[activeImageIdx] || suite.image}
                alt={`${suite.name} sanctuary view`}
                className="w-full h-full object-cover transition-all duration-300"
              />
              <div className="absolute top-4 left-4 bg-[#032517]/85 backdrop-blur-md text-[#ffffff] text-xs uppercase tracking-wider px-3 py-1 rounded-md font-semibold">
                {suite.badge}
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md text-[#032517] text-xs px-2.5 py-1 rounded-md font-bold shadow-sm flex items-center gap-1">
                <Star className="w-3.5 h-3.5 text-[#765934] fill-[#765934]" />
                <span>{suite.rating}</span>
                <span className="text-[#726758] font-normal">({suite.reviewsCount} reviews)</span>
              </div>
            </div>

            {/* Thumbnail selector */}
            <div className="grid grid-cols-4 gap-2">
              {suite.gallery.map((imgUrl, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIdx(idx)}
                  className={`relative rounded-lg overflow-hidden aspect-[16/10] border-2 transition-all cursor-pointer ${
                    activeImageIdx === idx ? 'border-[#765934] ring-2 ring-[#765934]/30' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={imgUrl} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
          </div>

          {/* Quick Specifications Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 bg-[#f0eee7] p-4 rounded-xl text-center text-xs text-[#1b1c18]">
            <div className="flex flex-col items-center">
              <Users className="w-4 h-4 text-[#765934] mb-1" />
              <span className="text-[#726758] uppercase text-[10px] tracking-wider">Occupancy</span>
              <span className="font-semibold mt-0.5">{suite.occupancy}</span>
            </div>
            <div className="flex flex-col items-center">
              <Bed className="w-4 h-4 text-[#765934] mb-1" />
              <span className="text-[#726758] uppercase text-[10px] tracking-wider">Bed Type</span>
              <span className="font-semibold mt-0.5">{suite.bedType}</span>
            </div>
            <div className="flex flex-col items-center">
              <Maximize className="w-4 h-4 text-[#765934] mb-1" />
              <span className="text-[#726758] uppercase text-[10px] tracking-wider">Suite Area</span>
              <span className="font-semibold mt-0.5">{suite.sizeSqFt} sq. ft</span>
            </div>
            <div className="flex flex-col items-center">
              <Eye className="w-4 h-4 text-[#765934] mb-1" />
              <span className="text-[#726758] uppercase text-[10px] tracking-wider">Outlook</span>
              <span className="font-semibold mt-0.5">{suite.view}</span>
            </div>
          </div>

          {/* Detailed Narrative */}
          <div>
            <h4 className="font-serif text-2xl font-medium text-[#032517] mb-2">
              Sanctuary Description
            </h4>
            <p className="text-[15px] leading-relaxed text-[#424843]">
              {suite.longDescription}
            </p>
          </div>

          {/* Key Architectural & Room Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#765934] mb-3">
                Architectural Highlights
              </h5>
              <ul className="space-y-2 text-sm text-[#424843]">
                {suite.keyFeatures.map((feat, i) => (
                  <li key={i} className="flex items-start gap-2.5">
                    <Sparkles className="w-4 h-4 text-[#765934] shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h5 className="text-xs uppercase tracking-wider font-semibold text-[#765934] mb-3">
                Included Amenities &amp; Services
              </h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-[#424843]">
                {suite.amenities.map((amenity, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-[#1b3b2b] shrink-0" />
                    <span>{amenity}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Footer Tariff & CTA */}
        <div className="bg-[#f0eee7] px-6 py-4 border-t border-[#c1c8c2]/50 flex flex-col sm:flex-row items-center justify-between gap-4 shrink-0">
          <div>
            <span className="text-[11px] text-[#726758] uppercase tracking-wider block">
              Direct Sanctuary Tariff (Breakfast Included)
            </span>
            <div className="flex items-baseline gap-1">
              <span className="font-serif text-2xl font-bold text-[#032517]">
                ₹{suite.pricePerNight.toLocaleString('en-IN')}
              </span>
              <span className="text-xs text-[#726758]">/ night + taxes</span>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto">
            <button
              onClick={() => {
                onClose();
                onBookSuite(suite.id);
              }}
              className="w-full sm:w-auto bg-[#032517] hover:bg-[#765934] text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 shadow-md cursor-pointer"
            >
              <span>Book This Sanctuary</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
