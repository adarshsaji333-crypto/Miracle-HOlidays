import React, { useState } from 'react';
import { RESORT_EXPERIENCES, RESORT_IMAGES } from '../data/resortData';
import { 
  Sparkles, Clock, Check, Calendar, Sun, Moon, MapPin, 
  ArrowRight, Heart, ShieldCheck, Phone, Waves, Flame
} from 'lucide-react';

interface ExperiencesScreenProps {
  onOpenBooking: () => void;
}

export const ExperiencesScreen: React.FC<ExperiencesScreenProps> = ({ onOpenBooking }) => {
  const [activeTab, setActiveTab] = useState<'all' | 'wellness' | 'nature' | 'leisure'>('all');
  const [selectedSpaTreatment, setSelectedSpaTreatment] = useState<string | null>(null);

  const spaTreatments = [
    {
      name: 'Abhyanga Herbal Body Oil Therapy',
      duration: '60 min',
      price: '₹1,800',
      description: 'Full-body synchronized rhythmic massage using customized warm herbal oils to relieve fatigue and invigorate the lymphatic system.'
    },
    {
      name: 'Shirodhara Mind Calming Stream',
      duration: '45 min',
      price: '₹2,200',
      description: 'Continuous gentle pouring of lukewarm medicated herbal oils onto the forehead third-eye point to melt anxiety, insomnia, and mental tension.'
    },
    {
      name: 'Elakkizhi (Warm Herbal Leaves Compress)',
      duration: '60 min',
      price: '₹2,400',
      description: 'Fomentation with boluses containing freshly picked medicinal leaves and herbs sautéed in medicated oils, ideal for joints and muscles.'
    },
    {
      name: 'Mukhalepam Botanical Herbal Facial',
      duration: '45 min',
      price: '₹1,500',
      description: 'Facial massage and cooling herbal paste application infused with sandalwood, saffron, and aloe vera for radiant skin rejuvenation.'
    }
  ];

  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* Hero Banner */}
      <section className="relative w-full -mt-20 pt-32 pb-16 bg-[#032517] text-white overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={RESORT_IMAGES.infinityPool}
            alt="Miracle Holidays infinity pool and wellness sanctuary"
            className="w-full h-full object-cover opacity-35 scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#032517] via-[#032517]/70 to-[#032517]/40"></div>
        </div>

        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold mb-2">
            Sanctuary Rituals &amp; Immersion
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F2] tracking-tight max-w-3xl mb-4 font-normal">
            Experiences &amp; Healing Amenities
          </h1>
          <p className="text-base sm:text-lg text-[#f0eee7]/85 max-w-2xl font-light leading-relaxed">
            From sunrise mist over the cliffside infinity pool to ancient Ayurvedic therapies and dusk campfires beneath unpolluted starlit skies.
          </p>
        </div>
      </section>

      {/* Daily Sanctuary Rhythm (Chronological Flow) */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-6 z-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 border border-[#c1c8c2]/50">
          
          <div className="flex items-center justify-between pb-6 border-b border-[#c1c8c2]/40 mb-6">
            <div>
              <span className="text-xs uppercase font-semibold text-[#765934] tracking-widest">
                A Day in the Misty Western Ghats
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl font-medium text-[#032517] mt-0.5">
                Daily Sanctuary Itinerary
              </h2>
            </div>
            <div className="hidden sm:flex items-center gap-2 text-xs text-[#726758] bg-[#f0eee7] px-3.5 py-1.5 rounded-full font-medium">
              <Clock className="w-3.5 h-3.5 text-[#765934]" />
              <span>Complimentary for all in-house guests</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            <div className="p-5 rounded-xl bg-[#f6f4ed] border border-[#c1c8c2]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#765934] font-semibold uppercase mb-2">
                  <span>06:30 AM – 07:30 AM</span>
                  <Sun className="w-4 h-4 text-[#765934]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#032517] mb-1">
                  Dawn Birds &amp; Yoga by Pond
                </h4>
                <p className="text-xs text-[#424843] leading-relaxed">
                  Gentle breathing and sun salutations on the lotus pond deck accompanied by the melodious calls of the Malabar whistling thrush.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f6f4ed] border border-[#c1c8c2]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#765934] font-semibold uppercase mb-2">
                  <span>08:00 AM – 10:30 AM</span>
                  <Sparkles className="w-4 h-4 text-[#765934]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#032517] mb-1">
                  Plantation Breakfast
                </h4>
                <p className="text-xs text-[#424843] leading-relaxed">
                  Hot steamed appams, velvety vegetable stew, freshly roasted Arabica coffee, and tropical fruits from neighboring groves.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f6f4ed] border border-[#c1c8c2]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#765934] font-semibold uppercase mb-2">
                  <span>11:00 AM – 03:00 PM</span>
                  <Waves className="w-4 h-4 text-[#765934]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#032517] mb-1">
                  Valley Infinity Pool Serenity
                </h4>
                <p className="text-xs text-[#424843] leading-relaxed">
                  Bask in warm mountain sunlight, submerge in clean spring water, and lounge with chilled fresh tender coconuts.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f6f4ed] border border-[#c1c8c2]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#765934] font-semibold uppercase mb-2">
                  <span>02:00 PM – 05:00 PM</span>
                  <Heart className="w-4 h-4 text-[#765934]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#032517] mb-1">
                  Ayurvedic Healing Therapies
                </h4>
                <p className="text-xs text-[#424843] leading-relaxed">
                  Personalized consultations and herbal bodywork administered in our timber-paneled treatment pavilion.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f6f4ed] border border-[#c1c8c2]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#765934] font-semibold uppercase mb-2">
                  <span>04:30 PM – 06:00 PM</span>
                  <Sparkles className="w-4 h-4 text-[#765934]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#032517] mb-1">
                  Naturalist Spice Trail
                </h4>
                <p className="text-xs text-[#424843] leading-relaxed">
                  Learn how cardamom, clove, vanilla, and Tellicherry pepper grow in harmony with Wayanad's indigenous forest ecosystem.
                </p>
              </div>
            </div>

            <div className="p-5 rounded-xl bg-[#f6f4ed] border border-[#c1c8c2]/30 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between text-xs text-[#765934] font-semibold uppercase mb-2">
                  <span>07:00 PM – 09:30 PM</span>
                  <Flame className="w-4 h-4 text-[#765934]" />
                </div>
                <h4 className="font-serif text-lg font-medium text-[#032517] mb-1">
                  Campfire Hearth &amp; Stargazing
                </h4>
                <p className="text-xs text-[#424843] leading-relaxed">
                  Gather around the stone fire pit under crystal clear night skies with acoustic songs, roasted treats, and spiced Sulaimani tea.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Detailed Ayurvedic Spa Menu Showcase */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
        <div className="bg-[#032517] text-white rounded-2xl p-8 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            
            <div className="lg:col-span-5 flex flex-col gap-3">
              <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold">
                Holistic Sanctuary Healing
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#FAF8F2] font-normal leading-tight">
                Authentic Ayurvedic Therapies
              </h2>
              <p className="text-sm text-[#f0eee7]/85 leading-relaxed">
                Ancient healing rooted in the sacred texts of Charaka Samhita. Each treatment uses freshly harvested plantation herbs, unrefined botanical oils, and traditional techniques passed down through generations.
              </p>
              
              <div className="pt-2 text-xs text-[#ffddb6] space-y-1">
                <p>• Prior reservation recommended to customize medicated oils</p>
                <p>• Complimentary herbal herbal teas following therapy</p>
              </div>

              <div className="pt-4">
                <a
                  href="tel:+919207050305"
                  className="inline-flex items-center gap-2 bg-[#765934] hover:bg-[#B58A57] text-white text-xs font-semibold px-6 py-3 rounded-lg uppercase tracking-wider transition-colors shadow-md"
                >
                  <Phone className="w-4 h-4" />
                  <span>Book Spa Consultation</span>
                </a>
              </div>
            </div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {spaTreatments.map((treatment, i) => (
                <div
                  key={i}
                  className="bg-white/10 backdrop-blur-md p-5 rounded-xl border border-white/15 hover:bg-white/15 transition-colors"
                >
                  <div className="flex justify-between items-baseline mb-2">
                    <span className="text-xs text-[#ffddb6] font-medium">{treatment.duration}</span>
                    <span className="font-serif text-lg font-bold text-white">{treatment.price}</span>
                  </div>
                  <h4 className="font-serif text-lg font-medium text-white mb-1">
                    {treatment.name}
                  </h4>
                  <p className="text-xs text-white/75 leading-relaxed">
                    {treatment.description}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* Signature Experiences Catalog */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
        <div className="text-center max-w-xl mx-auto mb-12">
          <span className="text-xs text-[#765934] uppercase tracking-widest font-semibold">
            All Amenities Included
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-[#032517] font-normal mt-1">
            Immerse In Every Corner of the Estate
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {RESORT_EXPERIENCES.map(exp => (
            <div
              key={exp.id}
              className="bg-white rounded-2xl shadow-lg border border-[#c1c8c2]/50 overflow-hidden flex flex-col justify-between"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-semibold uppercase tracking-wider text-[#765934]">
                    {exp.category}
                  </span>
                  <span className="text-xs text-[#726758]">{exp.timeSlot}</span>
                </div>
                <h3 className="font-serif text-2xl font-medium text-[#032517] mb-2">
                  {exp.title}
                </h3>
                <p className="text-sm text-[#424843] leading-relaxed">
                  {exp.longDescription}
                </p>
              </div>

              <div className="p-6 pt-0 border-t border-[#c1c8c2]/30 mt-4 flex items-center justify-between text-xs">
                <span className="font-medium text-[#726758]">Status: {exp.price || 'Included in Stay'}</span>
                <button
                  onClick={onOpenBooking}
                  className="font-semibold text-[#032517] hover:text-[#765934] uppercase tracking-wider transition-colors cursor-pointer"
                >
                  Reserve Experience →
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};
