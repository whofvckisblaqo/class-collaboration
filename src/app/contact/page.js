"use client";

import React, { useEffect, useState } from 'react';
import { Mail, Phone, MapPin, Send, Globe, MessageSquare, Clock, ShieldCheck } from 'lucide-react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ProfessionalContact() {
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: 'ease-in-out',
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <div className="min-h-screen bg-#171717 text-slate-900 font-sans selection:bg-blue-100 selection:text-blue-900">
      
      {/* 1. HERO SECTION: Gray to White Gradient */}
      <header className="relative pt-20 pb-12 px-6">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-down">
          <span className="inline-block px-4 py-1.5 mb-6 text-xs font-bold tracking-[0.2em] uppercase text-blue-700 bg-slate-300 rounded-full">
            Available Worldwide
          </span>
          <h1 className="text-4xl md:text-7xl font-bold tracking-tight text-slate-300 mb-6">
            Let's connect.
          </h1>
          <p className="text-lg md:text-xl text-slate-200 max-w-3xl mx-auto leading-relaxed">
            Whether you’re looking for a partnership, technical support, or a 
            consultation, our team is ready to respond with precision.
          </p>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 2. CONTACT BENTO BOXES (Left Column) */}
          <div className="lg:col-span-5 space-y-6" data-aos="fade-right">
            
            {/* Main Office Card */}
            <div className="p-8 bg-blue-800/50 text-white rounded-[2rem] shadow-2xl transition-all hover:scale-[1.01]">
              <h2 className="text-2xl font-semibold mb-8">Global Headquarters</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-800/50 rounded-xl"><MapPin size={22} /></div>
                  <p className="text-blue-100">One World Trade Center, New York, NY 10007</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-800/50 rounded-xl"><Phone size={22} /></div>
                  <p className="text-blue-100">+1 (212) 555-0198</p>
                </div>
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-blue-800/50 rounded-xl"><Mail size={22} /></div>
                  <p className="text-blue-100">concierge@firm.com</p>
                </div>
              </div>
            </div>

            {/* Quick Stats/Info Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-6 bg-slate-300 border border-slate-100 rounded-[1.5rem] flex flex-col items-center text-center">
                <Clock className="text-blue-900 mb-3" size={28} />
                <h4 className="font-bold text-sm uppercase tracking-tighter text-slate-400">Response Time</h4>
                <p className="text-blue-950 font-medium font-mono text-lg">&lt; 2 Hours</p>
              </div>
              <div className="p-6 bg-slate-300 border border-slate-100 rounded-[1.5rem] flex flex-col items-center text-center">
                <ShieldCheck className="text-blue-900 mb-3" size={28} />
                <h4 className="font-bold text-sm uppercase tracking-tighter text-slate-400">Security</h4>
                <p className="text-blue-950 font-medium text-lg">AES-256 Encrypted</p>
              </div>
              <div className="p-6 bg-slate-300 border border-slate-100 rounded-[1.5rem] flex flex-col items-center text-center">
                <MessageSquare className="text-blue-900 mb-3" size={28} />
                <h4 className="font-bold text-sm uppercase tracking-tighter text-slate-400">Live Chat</h4>
                <p className="text-blue-950 font-medium text-lg">24/7 Available</p>
              </div>
              <div className="p-6 bg-slate-300 border border-slate-100 rounded-[1.5rem] flex flex-col items-center text-center">
                <Globe className="text-blue-900 mb-3" size={28} />
                <h4 className="font-bold text-sm uppercase tracking-tighter text-slate-400">Language</h4>
                <p className="text-blue-950 font-medium text-lg">15+ Supported</p>
              </div>
            </div>
          </div>

          {/* 3. INTERACTIVE CONTACT FORM (Right Column) */}
          <div className="lg:col-span-7" data-aos="fade-left" data-aos-delay="200">
            <div className="bg-blue-800/50 p-8 md:p-12 rounded-[2rem] border border-slate-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.08)]">
              {submitted ? (
                <div className="h-[500px] flex flex-col items-center justify-center text-center transition-all animate-in fade-in zoom-in">
                  <div className="w-20 h-20 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Send size={40} className="animate-bounce" />
                  </div>
                  <h3 className="text-3xl font-bold text-blue-950">Inquiry Received</h3>
                  <p className="text-slate-500 mt-2">A specialist will reach out to you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Full Name</label>
                      <input required type="text" className="w-full bg-slate-300 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-900 transition-all outline-none" placeholder="John Smith" />
                    </div>
                    <div className="space-y-3">
                      <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Email Address</label>
                      <input required type="email" className="w-full bg-slate-300 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-900 transition-all outline-none" placeholder="john@company.com" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Service Required</label>
                    <select className="w-full bg-slate-300 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-900 transition-all outline-none appearance-none">
                      <option>Strategic Consulting</option>
                      <option>Technical Implementation</option>
                      <option>Security Audit</option>
                      <option>Other Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-3">
                    <label className="text-sm font-bold text-slate-400 uppercase tracking-widest ml-1">Message</label>
                    <textarea required rows={5} className="w-full bg-slate-300 border-none rounded-2xl px-6 py-4 focus:ring-2 focus:ring-blue-900 transition-all outline-none resize-none" placeholder="Describe your vision or challenge..."></textarea>
                  </div>

                  <button type="submit" className="w-full bg-[#1D5FBF] hover:bg-blue-800 text-white font-bold py-5 rounded-2xl flex items-center justify-center gap-4 transition-all hover:shadow-xl hover:shadow-blue-800/50 active:scale-[0.98]">
                    Deliver Message
                    <Send size={20} />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}