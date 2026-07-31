'use client';
import { useState } from 'react';

import { ArrowRight, Send } from 'lucide-react';
import data from '@/lib/data.json';

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', service: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    }, 3000);
  };

  const {
    formLabel, formNameLabel, formNamePlaceholder,
    formEmailLabel, formEmailPlaceholder, formPhoneLabel, formPhonePlaceholder,
    formServiceLabel, formServicePlaceholder, formServicesOptions,
    formMessageLabel, formMessagePlaceholder, formBtnSubmit, formBtnSuccess
  } = data.contactFaq;

  const { address, phone, email, hours } = data.footer;

  return (
    <>

      <main className="bg-dark min-h-screen pt-[140px] pb-24 relative overflow-hidden">
        {/* Subtle background texture */}
        <div className="absolute inset-0 opacity-[0.03]"
          style={{ backgroundImage: 'radial-gradient(circle, #C8960C 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

        <div className="site-container relative z-10">
          <div className="mb-16 md:mb-24 text-center flex flex-col items-center">
            <p className="section-label mb-4">{data.contactPage.label}</p>
            <h1 className="display-heading text-[32px] min-[400px]:text-[44px] md:text-[64px] text-white leading-tight">
              {data.contactPage.titleLine1} <span className="text-gold italic font-light">{data.contactPage.titleLine2}</span>
            </h1>
            <p className="text-white/60 text-[14px] md:text-[15px] max-w-2xl mx-auto mt-6 leading-relaxed">
              {data.contactPage.description}
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_400px] gap-12 lg:gap-20 items-start">
            
            {/* ── Dark Luxury Form ── */}
            <div className="bg-black/40 border border-border-dark/50 p-6 sm:p-10 rounded-sm shadow-2xl relative">
              {/* StyleSeat Direct Booking Banner */}
              <div className="mb-8 p-5 rounded-sm bg-gold/10 border border-gold/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <span className="text-gold font-mono text-[10.5px] font-bold tracking-widest uppercase block mb-0.5">INSTANT ONLINE BOOKING</span>
                  <p className="text-white font-bold text-[14px]">Book Directly via StyleSeat</p>
                </div>
                <a
                  href="https://www.styleseat.com/m/v/410muscletherapy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-gold px-6 py-3 text-[12px] font-bold tracking-wider flex-shrink-0"
                >
                  BOOK ON STYLESEAT <ArrowRight size={13} className="ml-1" />
                </a>
              </div>

              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                
                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{formNameLabel}</label>
                  <input type="text" required value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder={formNamePlaceholder} className="w-full bg-dark border border-border-dark px-4 py-4 text-white text-[13.5px] focus:border-gold focus:outline-none transition-all rounded-sm placeholder:text-white/20" />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{formEmailLabel}</label>
                    <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder={formEmailPlaceholder} className="w-full bg-dark border border-border-dark px-4 py-4 text-white text-[13.5px] focus:border-gold focus:outline-none transition-all rounded-sm placeholder:text-white/20" />
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{formPhoneLabel}</label>
                    <input type="tel" required value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} placeholder={formPhonePlaceholder} className="w-full bg-dark border border-border-dark px-4 py-4 text-white text-[13.5px] focus:border-gold focus:outline-none transition-all rounded-sm placeholder:text-white/20" />
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{formServiceLabel}</label>
                  <select required value={formData.service} onChange={(e) => setFormData({ ...formData, service: e.target.value })} className="w-full bg-dark border border-border-dark px-4 py-4 text-white/70 text-[13.5px] focus:border-gold focus:outline-none transition-colors rounded-sm appearance-none cursor-pointer">
                    <option value="" disabled>{formServicePlaceholder}</option>
                    {formServicesOptions.map((opt) => (
                      <option key={opt.value} value={opt.value}>{opt.label}</option>
                    ))}
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-white/40 text-[10px] font-bold tracking-widest uppercase">{formMessageLabel}</label>
                  <textarea rows="4" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder={formMessagePlaceholder} className="w-full bg-dark border border-border-dark px-4 py-4 text-white text-[13.5px] focus:border-gold focus:outline-none transition-all rounded-sm resize-none placeholder:text-white/20" />
                </div>

                <button type="submit" disabled={submitted} className="btn-gold justify-center py-4.5 w-full mt-4">
                  {submitted ? (
                    <span className="flex items-center gap-2">{formBtnSuccess} <ArrowRight size={14} /></span>
                  ) : (
                    <span className="flex items-center gap-2 group">{formBtnSubmit} <Send size={12} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" /></span>
                  )}
                </button>
              </form>
            </div>

            {/* ── Contact Details ── */}
            <div className="flex flex-col gap-10">
              <div className="bg-black/40 border border-border-dark/50 p-8 rounded-sm shadow-2xl">
                <h3 className="text-white font-bold text-[14px] tracking-widest uppercase mb-8">{data.contactPage.infoHeading}</h3>
                <ul className="flex flex-col gap-8">
                  {[
                    { label: data.contactPage.infoAddressLabel, value: address },
                    { label: data.contactPage.infoPhoneLabel, value: phone },
                    { label: data.contactPage.infoEmailLabel, value: email },
                    { label: data.contactPage.infoHoursLabel, value: hours },
                  ].map((item, i) => (
                    <li key={i} className="flex flex-col gap-1.5 border-l-2 border-gold/30 pl-4 hover:border-gold transition-colors duration-300">
                      <span className="text-gold text-[10px] font-bold tracking-widest uppercase">{item.label}</span>
                      <span className="text-white/70 text-[13.5px] leading-relaxed whitespace-pre-line">{item.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="h-[250px] bg-black/40 border border-border-dark/50 relative flex items-center justify-center rounded-sm shadow-2xl">
                 <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(0deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px), repeating-linear-gradient(90deg, #fff 0px, #fff 1px, transparent 1px, transparent 20px)' }} />
                 <span className="relative z-10 text-gold/40 text-[11px] font-bold tracking-widest uppercase">{data.contactPage.mapLabel}</span>
              </div>
            </div>
            
          </div>
        </div>
      </main>

    </>
  );
}
