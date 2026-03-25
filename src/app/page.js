import React from 'react';
import Navbar from '@/components/Navbar';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30 font-sans">
      
      {/* Reusable Navbar */}
      <Navbar />

      {/* Main Content - Added pt-24 so content doesn't hide under the fixed Navbar */}
      <main className="max-w-7xl mx-auto px-6 pb-20 pt-24">
        
        {/* Hero Section */}
        <div className="text-center mb-20 mt-12">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            The future is <span className="text-indigo-500">modular.</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
            Stop building boring layouts. Use a grid-based system that highlights 
            what matters most in a compact, beautiful interface.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:min-h-[600px]">
          
          {/* Large Feature Card (Purple) */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative min-h-[400px]">
            <div className="relative z-10">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-6"><path d="M4 14.71 13 3l-2 8h9l-9 11.71 2-8z"/></svg>
              <h2 className="text-3xl font-bold mb-4">Ultra Fast Performance</h2>
              <p className="text-indigo-100/80 max-w-xs text-lg">
                Built on the latest Next.js features for sub-second load times and SEO optimization.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 font-semibold">
              Explore Performance 
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-2 transition-transform"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
            </div>
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
          </div>

          {/* Secondary Card (Security) */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-colors flex items-center justify-between">
            <div>
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#34d399" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-4"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/></svg>
              <h3 className="text-xl font-bold">Secure by Default</h3>
              <p className="text-slate-400 text-sm mt-1">Enterprise-grade protection for every user.</p>
            </div>
            <div className="hidden sm:block h-20 w-32 bg-emerald-400/10 rounded-xl border border-emerald-400/20" />
          </div>

          {/* Small Card (Rocket) */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500/50 transition-all flex flex-col items-center justify-center text-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.5-1 1-4c2 0 3 0 3 0"/><path d="M12 15v5s1 .5 4 1c0-2 0-3 0-3"/></svg>
            <h3 className="font-bold">Scale</h3>
            <p className="text-xs text-slate-500">Go from 0 to 1M users.</p>
          </div>

          {/* Small Card (GitHub) */}
          <div className="bg-[#171717] border border-white/5 rounded-3xl p-6 hover:bg-black transition-all flex flex-col items-center justify-center text-center group">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3 group-hover:scale-110 transition-transform"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.28 1.15-.28 2.35 0 3.5-.73 1.02-1.08 2.25-1 3.5 0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
            <h3 className="font-bold">Open Source</h3>
            <p className="text-xs text-slate-500">Check the source code.</p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-10 text-center">
        <p className="text-slate-600 text-sm italic">
          Designed for high-impact developers. 2026.
        </p>
      </footer>
    </div>
  );
}