import React, { useState } from 'react';
import { RESORT_MENU } from '../data/resortData';
import { MenuItem } from '../types';
import { X, Plus, Minus, ShoppingBag, Utensils, Clock, Check, MessageSquare } from 'lucide-react';

interface OrderDiningModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const OrderDiningModal: React.FC<OrderDiningModalProps> = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [cart, setCart] = useState<{ [id: string]: number }>({
    'm3': 1,
    'm5': 1,
    'm7': 2
  });
  const [villaLocation, setVillaLocation] = useState('Blueberry Glass House');
  const [notes, setNotes] = useState('');
  const [isOrdered, setIsOrdered] = useState(false);

  if (!isOpen) return null;

  const categories = ['All', 'Breakfast', 'Mains', 'Beverages', 'Desserts'];

  const filteredItems = activeCategory === 'All' 
    ? RESORT_MENU 
    : RESORT_MENU.filter(item => item.category === activeCategory);

  const updateQuantity = (itemId: string, delta: number) => {
    setCart(prev => {
      const current = prev[itemId] || 0;
      const next = current + delta;
      if (next <= 0) {
        const copy = { ...prev };
        delete copy[itemId];
        return copy;
      }
      return { ...prev, [itemId]: next };
    });
  };

  const cartItemsCount = Object.values(cart).reduce((a, b) => a + b, 0);
  
  const subtotal = Object.entries(cart).reduce((sum, [id, qty]) => {
    const item = RESORT_MENU.find(m => m.id === id);
    return sum + (item ? item.price * qty : 0);
  }, 0);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsOrdered(true);
  };

  const handleWhatsAppOrder = () => {
    const summaryItems = Object.entries(cart).map(([id, qty]) => {
      const item = RESORT_MENU.find(m => m.id === id);
      return `• ${qty}x ${item?.name} (₹${(item ? item.price * qty : 0)})`;
    }).join('\n');

    const msg = encodeURIComponent(
      `Hello Miracle Holidays Kitchen,\nI would like to place an in-room dining order:\n\n` +
      `Location: ${villaLocation}\n` +
      `Items:\n${summaryItems}\n\n` +
      `Special Requests: ${notes || 'None'}\n` +
      `Total: ₹${subtotal.toLocaleString('en-IN')}\n\n` +
      `Please prepare and deliver.`
    );
    window.open(`https://wa.me/919207050305?text=${msg}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 md:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#fbf9f2] rounded-2xl shadow-2xl overflow-hidden border border-[#c1c8c2]/50 max-h-[92vh] flex flex-col">
        
        {/* Header */}
        <div className="bg-[#032517] text-[#ffffff] px-6 py-4 flex items-center justify-between shrink-0">
          <div>
            <span className="text-[11px] text-[#ffddb6] uppercase tracking-widest font-semibold block">
              In-Villa &amp; Poolside Dining
            </span>
            <h3 className="font-serif text-2xl font-normal text-[#FAF8F2]">
              Order Malabar Cuisine &amp; Plantation Brews
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-full hover:bg-white/10 text-[#ffffff] transition-colors focus:outline-none"
            aria-label="Close dining order modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto p-6 md:p-8 flex-1">
          {isOrdered ? (
            <div className="text-center py-10 max-w-md mx-auto flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#1b3b2b] text-[#c7ebd4] flex items-center justify-center mb-4">
                <Check className="w-8 h-8" />
              </div>
              <span className="text-xs uppercase tracking-widest font-semibold text-[#765934]">
                Order Sent to Resort Kitchen
              </span>
              <h4 className="font-serif text-3xl font-medium text-[#032517] mt-1 mb-2">
                Simmering with Fresh Spices
              </h4>
              <p className="text-sm text-[#424843] mb-6 leading-relaxed">
                Your order is being handcrafted by resident culinary masters and will be delivered to <strong className="text-[#032517]">{villaLocation}</strong> within 35–45 minutes.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 w-full justify-center">
                <button
                  onClick={handleWhatsAppOrder}
                  className="inline-flex items-center justify-center gap-2 bg-[#765934] hover:bg-[#B58A57] text-[#ffffff] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Ticket to WhatsApp</span>
                </button>
                <button
                  onClick={onClose}
                  className="inline-flex items-center justify-center gap-2 bg-[#032517] text-[#ffffff] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider transition-colors"
                >
                  <span>Close Window</span>
                </button>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              
              {/* Menu items side */}
              <div className="lg:col-span-7 flex flex-col gap-4">
                
                {/* Category navigation tabs */}
                <div className="flex flex-wrap items-center gap-2 border-b border-[#c1c8c2]/40 pb-3">
                  {categories.map(cat => (
                    <button
                      key={cat}
                      onClick={() => setActiveCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                        activeCategory === cat
                          ? 'bg-[#032517] text-white shadow-sm'
                          : 'bg-[#f0eee7] text-[#424843] hover:bg-[#eae8e1]'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                {/* Items listing */}
                <div className="space-y-3">
                  {filteredItems.map(item => {
                    const qty = cart[item.id] || 0;
                    return (
                      <div
                        key={item.id}
                        className="bg-white p-4 rounded-xl border border-[#c1c8c2]/50 shadow-sm flex items-start justify-between gap-4"
                      >
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${
                              item.dietary === 'Veg' ? 'bg-emerald-100 text-emerald-800' :
                              item.dietary === 'Vegan' ? 'bg-teal-100 text-teal-800' :
                              'bg-amber-100 text-amber-800'
                            }`}>
                              {item.dietary}
                            </span>
                            {item.isSignature && (
                              <span className="text-[10px] font-semibold uppercase tracking-wider text-[#765934]">
                                Estate Signature
                              </span>
                            )}
                          </div>
                          <h5 className="font-serif text-base font-medium text-[#032517]">
                            {item.name}
                          </h5>
                          <p className="text-xs text-[#726758] line-clamp-2 mt-0.5 leading-relaxed">
                            {item.description}
                          </p>
                          <span className="font-serif font-semibold text-sm text-[#765934] mt-2 block">
                            ₹{item.price.toLocaleString('en-IN')}
                          </span>
                        </div>

                        {/* Quantity controls */}
                        <div className="flex items-center gap-2 shrink-0 bg-[#f0eee7] rounded-lg p-1 border border-[#c1c8c2]/40">
                          {qty > 0 ? (
                            <>
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="w-7 h-7 rounded bg-white hover:bg-[#eae8e1] flex items-center justify-center text-[#032517] transition-colors"
                                aria-label="Decrease quantity"
                              >
                                <Minus className="w-3.5 h-3.5" />
                              </button>
                              <span className="text-xs font-bold w-5 text-center text-[#032517]">
                                {qty}
                              </span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="w-7 h-7 rounded bg-white hover:bg-[#eae8e1] flex items-center justify-center text-[#032517] transition-colors"
                                aria-label="Increase quantity"
                              >
                                <Plus className="w-3.5 h-3.5" />
                              </button>
                            </>
                          ) : (
                            <button
                              onClick={() => updateQuantity(item.id, 1)}
                              className="px-3 py-1 bg-[#032517] hover:bg-[#765934] text-white text-xs font-medium rounded transition-colors"
                            >
                              Add
                            </button>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

              </div>

              {/* Order tray summary side */}
              <div className="lg:col-span-5 bg-[#f0eee7] p-6 rounded-xl border border-[#c1c8c2]/50 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-[#c1c8c2]/40 mb-4">
                    <div className="flex items-center gap-2 text-[#032517] font-serif text-lg font-medium">
                      <ShoppingBag className="w-5 h-5 text-[#765934]" />
                      <span>Your Order Tray ({cartItemsCount})</span>
                    </div>
                    <span className="text-xs text-[#726758] flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>30-45 min</span>
                    </span>
                  </div>

                  {cartItemsCount === 0 ? (
                    <div className="py-8 text-center text-xs text-[#726758]">
                      Your tray is currently empty.<br />Select mouth-watering Malabar dishes on the left.
                    </div>
                  ) : (
                    <div className="space-y-2 mb-4 max-h-56 overflow-y-auto pr-1">
                      {Object.entries(cart).map(([id, qty]) => {
                        const item = RESORT_MENU.find(m => m.id === id);
                        if (!item) return null;
                        return (
                          <div key={id} className="flex justify-between items-center text-xs text-[#1b1c18] py-1 border-b border-[#c1c8c2]/20">
                            <span className="font-medium line-clamp-1">{qty}× {item.name}</span>
                            <span className="font-serif font-semibold text-[#765934] shrink-0 ml-2">
                              ₹{(item.price * qty).toLocaleString('en-IN')}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  )}

                  {/* Delivery Location */}
                  <div className="space-y-3 pt-3 border-t border-[#c1c8c2]/40">
                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                        Delivery Destination
                      </label>
                      <select
                        value={villaLocation}
                        onChange={(e) => setVillaLocation(e.target.value)}
                        className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-xs text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                      >
                        <option>Blueberry Glass House</option>
                        <option>Blackberry Villa</option>
                        <option>Mulberry Heritage Suite</option>
                        <option>Valley Infinity Pool Deck</option>
                        <option>Clubhouse Lounge</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-[11px] uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                        Chef Instructions
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Mild spice, extra coconut chutney, lemon wedges"
                        value={notes}
                        onChange={(e) => setNotes(e.target.value)}
                        className="w-full bg-white border border-[#c1c8c2] rounded-lg px-3 py-2 text-xs text-[#1b1c18] focus:border-[#765934] focus:outline-none"
                      />
                    </div>

                    <div className="pt-2 flex justify-between items-baseline">
                      <span className="font-medium text-sm text-[#032517]">Tray Total</span>
                      <span className="font-serif text-2xl font-bold text-[#765934]">
                        ₹{subtotal.toLocaleString('en-IN')}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="pt-6 space-y-2">
                  <button
                    disabled={cartItemsCount === 0}
                    onClick={handlePlaceOrder}
                    className="w-full py-3 bg-[#032517] hover:bg-[#765934] disabled:opacity-50 text-white font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors shadow-md flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Utensils className="w-4 h-4" />
                    <span>Dispatch Order to Kitchen</span>
                  </button>

                  <button
                    disabled={cartItemsCount === 0}
                    onClick={handleWhatsAppOrder}
                    className="w-full py-2.5 bg-white hover:bg-[#fbf9f2] disabled:opacity-50 text-[#032517] border border-[#c1c8c2] font-semibold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#765934]" />
                    <span>Send Order via WhatsApp</span>
                  </button>
                </div>

              </div>

            </div>
          )}
        </div>

      </div>
    </div>
  );
};
