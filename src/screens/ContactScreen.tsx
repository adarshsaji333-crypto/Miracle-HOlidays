import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Plane, Car, Send, MessageSquare, Check, HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

export const ContactScreen: React.FC = () => {
  const [formName, setFormName] = useState('');
  const [formEmail, setFormEmail] = useState('');
  const [formPhone, setFormPhone] = useState('');
  const [formInquiryType, setFormInquiryType] = useState('Room Reservation');
  const [formMessage, setFormMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // FAQ Accordion state
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      q: 'What are the check-in and check-out timings?',
      a: 'Standard check-in is at 1:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to room availability and can be requested through our 24-hour concierge desk.'
    },
    {
      q: 'Is breakfast included with our stay?',
      a: 'Yes, all direct reservations made on our website include complimentary, freshly prepared authentic Kerala breakfast (appam, stew, puttu, dosas, tropical fruits, and estate coffee) for all registered guests.'
    },
    {
      q: 'How do we reach Miracle Holidays from the nearest airport?',
      a: 'The closest airport is Kannur International Airport (CNN), located 78 km (approx. 2 hours scenic drive) away. Calicut International Airport (CCJ) is 104 km away (approx. 3 hours). Private chauffeur luxury SUV and sedan transfers can be arranged directly by our front desk concierge.'
    },
    {
      q: 'Do you provide accommodations for personal drivers?',
      a: 'Yes, we have dedicated, clean staff driver quarters with washrooms and meals available at nominal charges on the property. Please inform us in advance so we can arrange suitable lodgings.'
    },
    {
      q: 'Is the resort family-friendly and suitable for elderly guests?',
      a: 'Absolutely. Blackberry Timber Villa and Mulberry Suite are specially appointed with spacious living areas for families. Our estate stone paths are gently graded, and our staff is always happy to assist elderly guests with resort buggy transport.'
    },
    {
      q: 'What is the resort policy on music and quiet hours?',
      a: 'To honor the nesting birdlife and tranquility of the Western Ghats rainforest, loud commercial music and high-decibel speakers are prohibited. Quiet sanctuary hours commence at 10:00 PM nightly.'
    }
  ];

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppInquiry = () => {
    const text = encodeURIComponent(
      `Hello Miracle Holidays Concierge Desk,\n` +
      `I would like to inquire about: ${formInquiryType}\n` +
      `Name: ${formName || 'Guest'}\n` +
      `Phone: ${formPhone || 'Not provided'}\n` +
      `Message: ${formMessage || 'General Inquiry'}`
    );
    window.open(`https://wa.me/919207050305?text=${text}`, '_blank');
  };

  return (
    <div className="flex flex-col w-full pb-20">
      
      {/* Hero Banner */}
      <section className="relative w-full -mt-20 pt-32 pb-16 bg-[#032517] text-white overflow-hidden">
        <div className="relative z-10 max-w-[1440px] mx-auto px-6 lg:px-12 text-center flex flex-col items-center">
          <span className="text-xs text-[#ffddb6] uppercase tracking-widest font-semibold mb-2">
            Sanctuary Concierge
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-[#FAF8F2] tracking-tight max-w-3xl mb-4 font-normal">
            Contact &amp; Location
          </h1>
          <p className="text-base sm:text-lg text-[#f0eee7]/85 max-w-2xl font-light leading-relaxed">
            Reach out to our round-the-clock front desk team in Kommayad, Mananthavady for custom stays, private transfers, and special celebration arrangements.
          </p>
        </div>
      </section>

      {/* Main Grid: Contact Cards & Form */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 -mt-6 z-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Coordinates & Information */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Contact Card */}
            <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-xl border border-[#c1c8c2]/50 space-y-5">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#765934] block">
                Sanctuary Address
              </span>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#765934] shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-serif text-lg font-medium text-[#032517]">
                    Miracle Holidays Resort
                  </h4>
                  <p className="text-sm text-[#424843] leading-relaxed">
                    Miracle Road, Kommayad,<br />
                    Mananthavady, Wayanad,<br />
                    Kerala 670645, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#c1c8c2]/30">
                <Phone className="w-5 h-5 text-[#765934] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#726758] block">Direct Reception / Reservations</span>
                  <a href="tel:+919207050305" className="text-base font-semibold text-[#032517] hover:text-[#765934]">
                    +91 9207050305
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#c1c8c2]/30">
                <Mail className="w-5 h-5 text-[#765934] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#726758] block">Email Concierge</span>
                  <a href="mailto:concierge@miracleholidays.in" className="text-sm font-medium text-[#032517] hover:text-[#765934]">
                    concierge@miracleholidays.in
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3 pt-3 border-t border-[#c1c8c2]/30">
                <Clock className="w-5 h-5 text-[#765934] shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs text-[#726758] block">Front Desk Hours</span>
                  <span className="text-sm font-medium text-[#032517]">
                    24 Hours Open Daily (All 365 Days)
                  </span>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href="https://wa.me/919207050305"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-[#032517] hover:bg-[#765934] text-white text-xs font-semibold uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp (+91 9207050305)</span>
                </a>
              </div>
            </div>

            {/* Airport & Transit Directions */}
            <div className="bg-[#f0eee7] rounded-2xl p-6 border border-[#c1c8c2]/50 space-y-4">
              <span className="text-xs uppercase tracking-wider font-semibold text-[#765934] block">
                Reaching The Sanctuary
              </span>

              <div className="space-y-3 text-xs text-[#424843]">
                <div className="flex items-start gap-2.5">
                  <Plane className="w-4 h-4 text-[#765934] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#032517] block">Kannur International Airport (CNN)</strong>
                    <span>78 km • approx. 2 hours drive via Nedumpoil Ghat pass</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Plane className="w-4 h-4 text-[#765934] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#032517] block">Calicut International Airport (CCJ)</strong>
                    <span>104 km • approx. 3 hours drive via Thamarassery Churam pass</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Car className="w-4 h-4 text-[#765934] shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-[#032517] block">From Bangalore (260 km)</strong>
                    <span>Via Mysore, Gundlupet, and scenic Bandipur tiger corridor</span>
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Inquiry Form */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-8 lg:p-10 shadow-xl border border-[#c1c8c2]/50">
            {submitted ? (
              <div className="text-center py-12 flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#1b3b2b] text-[#c7ebd4] flex items-center justify-center mb-4">
                  <Check className="w-8 h-8" />
                </div>
                <span className="text-xs uppercase tracking-widest font-semibold text-[#765934]">
                  Inquiry Dispatched
                </span>
                <h3 className="font-serif text-3xl font-medium text-[#032517] mt-1 mb-3">
                  Thank You for Writing
                </h3>
                <p className="text-sm text-[#424843] max-w-md mb-6 leading-relaxed">
                  Our front desk host in Kommayad has received your note regarding <strong className="text-[#032517]">{formInquiryType}</strong> and will connect via phone/WhatsApp shortly.
                </p>

                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleWhatsAppInquiry}
                    className="inline-flex items-center gap-2 bg-[#765934] text-white px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider shadow-md hover:bg-[#B58A57] transition-colors"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>Send Query Directly on WhatsApp</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="inline-flex items-center gap-2 bg-[#f0eee7] text-[#032517] px-6 py-3 rounded-lg text-xs font-semibold uppercase tracking-wider hover:bg-[#eae8e1] transition-colors"
                  >
                    <span>Send Another Message</span>
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <span className="text-xs uppercase tracking-widest font-semibold text-[#765934] block">
                    Direct Inquiry Form
                  </span>
                  <h3 className="font-serif text-3xl font-medium text-[#032517] mt-0.5">
                    Connect with the Resort Desk
                  </h3>
                  <p className="text-xs text-[#726758] mt-1">
                    Fill in your details and our team will get in touch within 2 hours.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Arjun Nair"
                      value={formName}
                      onChange={(e) => setFormName(e.target.value)}
                      className="w-full bg-[#f6f4ed] border border-[#c1c8c2] rounded-lg px-3.5 py-2.5 text-sm text-[#1b1c18] focus:bg-white focus:border-[#765934] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formPhone}
                      onChange={(e) => setFormPhone(e.target.value)}
                      className="w-full bg-[#f6f4ed] border border-[#c1c8c2] rounded-lg px-3.5 py-2.5 text-sm text-[#1b1c18] focus:bg-white focus:border-[#765934] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="arjun@example.com"
                      value={formEmail}
                      onChange={(e) => setFormEmail(e.target.value)}
                      className="w-full bg-[#f6f4ed] border border-[#c1c8c2] rounded-lg px-3.5 py-2.5 text-sm text-[#1b1c18] focus:bg-white focus:border-[#765934] focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                      Inquiry Category
                    </label>
                    <select
                      value={formInquiryType}
                      onChange={(e) => setFormInquiryType(e.target.value)}
                      className="w-full bg-[#f6f4ed] border border-[#c1c8c2] rounded-lg px-3.5 py-2.5 text-sm text-[#1b1c18] focus:bg-white focus:border-[#765934] focus:outline-none cursor-pointer"
                    >
                      <option>Room Reservation &amp; Availability</option>
                      <option>Honeymoon &amp; Romantic Package</option>
                      <option>Family Vacation &amp; Group Booking</option>
                      <option>Ayurvedic Wellness Retreat</option>
                      <option>Airport Chauffeur Transfer</option>
                      <option>Corporate Offsite / Photography</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider font-semibold text-[#726758] block mb-1">
                    Your Message / Specific Requirements
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about your proposed dates, number of guests, or special wishes..."
                    value={formMessage}
                    onChange={(e) => setFormMessage(e.target.value)}
                    className="w-full bg-[#f6f4ed] border border-[#c1c8c2] rounded-lg px-3.5 py-2.5 text-sm text-[#1b1c18] focus:bg-white focus:border-[#765934] focus:outline-none resize-none"
                  ></textarea>
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="w-full sm:w-auto bg-[#032517] hover:bg-[#765934] text-white text-xs font-semibold px-8 py-3.5 rounded-lg uppercase tracking-wider transition-all shadow-md inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Concierge</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppInquiry}
                    className="w-full sm:w-auto bg-[#f0eee7] hover:bg-[#eae8e1] text-[#032517] border border-[#c1c8c2] text-xs font-semibold px-6 py-3.5 rounded-lg uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4 text-[#765934]" />
                    <span>WhatsApp Direct</span>
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-20">
        <div className="text-center max-w-xl mx-auto mb-10">
          <span className="text-xs text-[#765934] uppercase tracking-widest font-semibold">
            Common Inquiries
          </span>
          <h3 className="font-serif text-3xl text-[#032517] mt-1 font-normal">
            Frequently Asked Questions
          </h3>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div
                key={index}
                className="bg-white rounded-xl border border-[#c1c8c2]/50 shadow-sm overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#f6f4ed] transition-colors cursor-pointer"
                >
                  <span className="font-serif text-lg font-medium text-[#032517]">
                    {faq.q}
                  </span>
                  {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#765934] shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#726758] shrink-0" />
                  )}
                </button>
                {isOpen && (
                  <div className="p-5 pt-0 text-sm text-[#424843] leading-relaxed border-t border-[#f0eee7] mt-1 bg-[#FAF8F2]">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
