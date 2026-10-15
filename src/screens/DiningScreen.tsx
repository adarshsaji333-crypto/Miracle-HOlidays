import React from 'react';
import { RESORT_MENU, RESORT_IMAGES } from '../data/resortData';
import { Utensils, Coffee, Heart, Sparkles, Clock, Check, Phone, ShoppingBag, ArrowRight } from 'lucide-react';

interface DiningScreenProps {
  onOpenDiningOrder: () => void;
  onOpenBooking: () => void;
}

export const DiningScreen: React.FC<DiningScreenProps> = ({ onOpenDiningOrder, onOpenBooking }) => {
  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* Hero Banner */}
      <section className="relative w-full -mt-20 pt-32 pb-16 bg-[#032517] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={RESORT_IMAGES.malabarDining}
            alt="Authentic Malabar dining spread by candlelight"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#032517] via-[#032517]/70 to-[#032517]/40"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold mb-2">
            Estate-to-Table Gastronomy
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F2] tracking-tight max-w-3xl mb-4 font-normal">
            The Art of Fine Malabar Dining
          </h1>
          <p className="text-base sm:text-lg text-[#f0eee7]/85 max-w-2xl font-light leading-relaxed">
            Organic spices harvested right from our estate grounds, fresh coconut milk pressed at dawn, and heritage recipes prepared in cast-iron and clay pots.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenDiningOrder}
              className="inline-flex items-center gap-2 bg-[#765934] hover:bg-[#B58A57] text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition-colors shadow-lg cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4" />
              <span>Order Lunch &amp; Dinner Online</span>
            </button>
            <a
              href="tel:+919207050305"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition-colors backdrop-blur-md"
            >
              <Phone className="w-4 h-4" />
              <span>Reserve Candlelit Table</span>
            </a>
          </div>
        </div>
      </section>

      {/* Culinary Pillars */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-6 z-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#c1c8c2]/50">
            <div className="w-12 h-12 rounded-xl bg-[#032517] text-[#ffddb6] flex items-center justify-center mb-4">
              <Utensils className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#032517] mb-2">
              Estate-Grown Spices
            </h3>
            <p className="text-sm text-[#424843] leading-relaxed">
              Black pepper vines climbing jackfruit trees, wild green cardamom, and turmeric roots harvested on the estate flavor each curry with incomparable freshness.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#c1c8c2]/50">
            <div className="w-12 h-12 rounded-xl bg-[#765934] text-white flex items-center justify-center mb-4">
              <Coffee className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#032517] mb-2">
              Single-Origin Coffee
            </h3>
            <p className="text-sm text-[#424843] leading-relaxed">
              Our high-altitude shade-grown Arabica and Robusta beans are sun-dried, medium roasted, and freshly ground for our artisanal pour-overs and filter coffees.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl border border-[#c1c8c2]/50">
            <div className="w-12 h-12 rounded-xl bg-[#1b3b2b] text-[#ffddb6] flex items-center justify-center mb-4">
              <Heart className="w-6 h-6" />
            </div>
            <h3 className="font-serif text-2xl font-medium text-[#032517] mb-2">
              Private Dining Romance
            </h3>
            <p className="text-sm text-[#424843] leading-relaxed">
              Candlelit dinners arranged privately on our valley infinity pool deck or on your villa’s cantilevered verandah under flickering lanterns.
            </p>
          </div>

        </div>
      </section>

      {/* Featured Malabar Menu Showcase */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs text-[#765934] uppercase tracking-widest font-semibold">
              Authentic Flavors
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl text-[#032517] font-normal mt-1">
              Curated A La Carte Offerings
            </h2>
          </div>
          <button
            onClick={onOpenDiningOrder}
            className="inline-flex items-center gap-2 bg-[#032517] hover:bg-[#765934] text-white text-xs font-semibold px-6 py-2.5 rounded-lg uppercase tracking-wider transition-colors shadow-sm cursor-pointer"
          >
            <span>Open Room Service Ordering Tray</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESORT_MENU.map(item => (
            <div
              key={item.id}
              className="bg-white p-6 rounded-2xl shadow-md border border-[#c1c8c2]/40 flex flex-col justify-between hover:shadow-lg transition-shadow"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <span className={`text-[10px] font-bold px-2 py-0.5 rounded ${
                    item.dietary === 'Veg' ? 'bg-emerald-100 text-emerald-800' :
                    item.dietary === 'Vegan' ? 'bg-teal-100 text-teal-800' :
                    'bg-amber-100 text-amber-800'
                  }`}>
                    {item.dietary}
                  </span>
                  {item.isSignature && (
                    <span className="text-[10px] uppercase tracking-wider font-semibold text-[#765934]">
                      Resort Signature
                    </span>
                  )}
                </div>

                <h4 className="font-serif text-xl font-medium text-[#032517] mb-2">
                  {item.name}
                </h4>

                <p className="text-xs text-[#424843] leading-relaxed line-clamp-3">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#c1c8c2]/30 mt-4 flex items-center justify-between">
                <span className="font-serif text-xl font-bold text-[#765934]">
                  ₹{item.price.toLocaleString('en-IN')}
                </span>
                <button
                  onClick={onOpenDiningOrder}
                  className="text-xs font-semibold text-[#032517] hover:text-[#765934] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Add to Tray +
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Romantic Private Poolside Supper Banner */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
        <div className="bg-[#032517] text-white rounded-2xl overflow-hidden shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
            
            <div className="lg:col-span-6 p-8 lg:p-12 flex flex-col gap-4">
              <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold">
                Romantic Candlelight Experience
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-[#FAF8F2] font-normal leading-tight">
                Private Poolside Candlelit Suppers
              </h3>
              <p className="text-sm text-[#f0eee7]/85 leading-relaxed">
                Surprise your partner with an intimate table set at the edge of our valley infinity pool. As twilight descends over the hills, dine under the canopy with flower petal decorations, live acoustic accompaniment, and a bespoke 5-course chef’s tasting menu.
              </p>
              <div className="flex items-center gap-3 pt-2">
                <span className="font-serif text-2xl font-bold text-[#ffddb6]">₹2,500</span>
                <span className="text-xs text-[#f0eee7]/70">per couple • 24h advance reservation</span>
              </div>
              <div className="pt-2">
                <a
                  href="tel:+919207050305"
                  className="inline-flex items-center gap-2 bg-[#765934] hover:bg-[#B58A57] text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Reserve Romantic Dinner</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 h-full min-h-[350px]">
              <img
                src={RESORT_IMAGES.infinityPoolSecondary}
                alt="Romantic pool setting at Miracle Holidays"
                className="w-full h-full object-cover"
              />
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
