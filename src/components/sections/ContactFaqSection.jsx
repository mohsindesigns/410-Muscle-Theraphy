'use client';
import { useState } from 'react';
import data from '@/lib/data.json';
import { Send, ArrowRight, ShieldCheck, Clock, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ContactFaqSection() {
  const [openIdx, setOpenIdx] = useState(0);

  const {
    label,
    title,
    description,
    faqLabel,
    faqTitle,
    formLabel,
    formTitle,
    formClinicPortal,
    formNameLabel,
    formNamePlaceholder,
    formEmailLabel,
    formEmailPlaceholder,
    formPhoneLabel,
    formPhonePlaceholder,
    formServiceLabel,
    formServicePlaceholder,
    formMessageLabel,
    formMessagePlaceholder,
    formBtnSubmit,
    formBtnSuccess,
    formSuccessToast,
    trustHipa,
    trustResponse,
    formServicesOptions,
    faqs
  } = data.contactFaq;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact-support" className="bg-[#FAF9F5] py-20 md:py-28 overflow-hidden relative border-t border-[#EBEAE6]">
      
      {/* Decorative clean grid background */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      <div className="site-container relative">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-12 lg:gap-20 items-start">

          {/* ── Left Column: Luxury Form Card ──────────── */}
          <div className="w-full h-fit">
            <p className="section-label text-gold-dark mb-4">{formLabel}</p>
            <h2 className="display-heading text-[30px] min-[400px]:text-[36px] md:text-[44px] text-dark leading-tight mb-8">
              {formTitle.split('<br />')[0]}<br />
              <span className="text-gold-dark italic font-light">{formTitle.split('<br />')[1] || 'Consultation.'}</span>
            </h2>

            {/* Form wrapper */}
            <div className="bg-white border border-[#EBEAE6] p-5 min-[400px]:p-8 md:p-10 rounded-sm shadow-xl relative h-fit transition-all duration-300">
              
              {/* Gold frame accent in top-right */}
              <div className="absolute top-0 right-0 w-8 h-8 m-4 opacity-40">
                <div className="absolute top-0 right-0 w-full h-[1px] bg-gold-dark" />
                <div className="absolute top-0 right-0 h-full w-[1px] bg-gold-dark" />
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                {/* Name */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-dark/45 text-[10px] font-bold tracking-widest uppercase">
                    {formNameLabel}
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={formNamePlaceholder}
                    className="w-full bg-[#FAF9F5] border border-[#E2E1DD] px-4 py-3.5 text-dark text-[13.5px] focus:border-gold-dark focus:outline-none transition-all rounded-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  {/* Email */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="email" className="text-dark/45 text-[10px] font-bold tracking-widest uppercase">
                      {formEmailLabel}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder={formEmailPlaceholder}
                      className="w-full bg-[#FAF9F5] border border-[#E2E1DD] px-4 py-3.5 text-dark text-[13.5px] focus:border-gold-dark focus:outline-none transition-all rounded-sm"
                    />
                  </div>

                  {/* Phone */}
                  <div className="flex flex-col gap-2">
                    <label htmlFor="phone" className="text-dark/45 text-[10px] font-bold tracking-widest uppercase">
                      {formPhoneLabel}
                    </label>
                    <input
                      id="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder={formPhonePlaceholder}
                      className="w-full bg-[#FAF9F5] border border-[#E2E1DD] px-4 py-3.5 text-dark text-[13.5px] focus:border-gold-dark focus:outline-none transition-all rounded-sm"
                    />
                  </div>
                </div>

                {/* Service Select */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="service" className="text-dark/45 text-[10px] font-bold tracking-widest uppercase">
                    {formServiceLabel}
                  </label>
                  <select
                    id="service"
                    required
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#FAF9F5] border border-[#E2E1DD] px-4 py-3.5 text-dark/70 text-[13.5px] focus:border-gold-dark focus:outline-none transition-colors rounded-sm appearance-none cursor-pointer"
                  >
                    <option value="" disabled>{formServicePlaceholder}</option>
                    {formServicesOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                  <label htmlFor="message" className="text-dark/45 text-[10px] font-bold tracking-widest uppercase">
                    {formMessageLabel}
                  </label>
                  <textarea
                    id="message"
                    rows="3"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={formMessagePlaceholder}
                    className="w-full bg-[#FAF9F5] border border-[#E2E1DD] px-4 py-3.5 text-dark text-[13.5px] focus:border-gold-dark focus:outline-none transition-all rounded-sm resize-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={submitted}
                  className="btn-gold justify-center py-4 w-full text-[11.5px] font-bold shadow-lg tracking-widest group relative overflow-hidden transition-all duration-300 mt-2"
                >
                  {submitted ? (
                    <span className="flex items-center gap-2">
                      {formBtnSuccess} <ArrowRight size={14} />
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      {formBtnSubmit} <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </span>
                  )}
                </button>
              </form>

              {/* Trust Indicators */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-between mt-6 pt-6 border-t border-[#EBEAE6]">
                <div className="flex items-center gap-2 text-dark/45 text-[11px] font-semibold">
                  <ShieldCheck size={14} className="text-gold-dark flex-shrink-0" />
                  <span>{trustHipa}</span>
                </div>
                <div className="flex items-center gap-2 text-dark/45 text-[11px] font-semibold">
                  <Clock size={14} className="text-gold-dark flex-shrink-0" />
                  <span>{trustResponse}</span>
                </div>
              </div>

              {/* Success Notification Alert */}
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute inset-x-6 bottom-6 bg-gold text-dark font-bold text-[12px] tracking-wide uppercase px-6 py-4 flex items-center justify-between shadow-2xl rounded-sm border border-gold"
                  >
                    <span>{formSuccessToast}</span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* ── Right Column: Editorial Underlined FAQs ──── */}
          <div className="w-full">
            <p className="section-label text-gold-dark mb-4">{faqLabel}</p>
            <h2 className="display-heading text-[30px] min-[400px]:text-[36px] md:text-[44px] text-dark leading-tight mb-10">
              {faqTitle.split('<br />')[0]}<br />
              <span className="text-gold-dark italic font-light">{faqTitle.split('<br />')[1] || 'Information.'}</span>
            </h2>

            {/* Accordion Layout */}
            <div className="flex flex-col border-t border-[#E2E1DD]">
              {faqs.map((faq, i) => {
                const isOpen = openIdx === i;

                return (
                  <div
                    key={i}
                    className={`border-b border-[#E2E1DD] py-5 md:py-6 transition-all duration-300
                      ${isOpen ? 'bg-white/40' : ''}`}
                  >
                    <button
                      onClick={() => setOpenIdx(isOpen ? null : i)}
                      className="w-full text-left flex items-start gap-5 group px-3 md:px-4"
                    >
                      {/* Monospace gold number */}
                      <span className={`text-[12px] md:text-[13px] font-mono font-bold tracking-widest mt-1.5 transition-colors duration-300
                        ${isOpen ? 'text-gold-dark' : 'text-dark/25 group-hover:text-dark/45'}`}>
                        {i < 9 ? `0${i + 1}` : i + 1}
                      </span>
                      
                      {/* Question */}
                      <span className={`text-[15.5px] md:text-[16.5px] font-semibold flex-1 transition-all duration-300
                        ${isOpen ? 'text-dark font-medium translate-x-1' : 'text-dark/70 group-hover:text-dark group-hover:translate-x-1'}`}>
                        {faq.q}
                      </span>
                      
                      {/* Icon */}
                      <span className={`text-gold-dark mt-1.5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-dark' : 'group-hover:scale-110'}`}>
                        {isOpen ? <Minus size={15} /> : <Plus size={15} />}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                          className="overflow-hidden"
                        >
                          <div className="pl-12 md:pl-14 pr-4 pt-3 pb-2">
                            <div className="border-l-2 border-gold-dark/45 pl-4 py-0.5">
                              <p className="text-dark/55 text-[13.5px] leading-relaxed">
                                {faq.a}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
