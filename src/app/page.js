import React from 'react';
import { LayoutGrid, Rocket, Shield, Zap, ArrowRight, GitHub } from 'lucide-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-indigo-500/30">
      
      {/* Navbar */}
      <nav className="flex justify-between items-center px-6 py-8 max-w-7xl mx-auto">
        <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">
          BENTO_
        </div>
        <div className="flex gap-4">
          <button className="bg-white/5 hover:bg-white/10 px-4 py-2 rounded-lg text-sm transition-all border border-white/10">
            Login
          </button>
          <button className="bg-indigo-600 hover:bg-indigo-500 px-4 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
            Get Started
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 pb-20">
        
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
        <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-full md:h-[600px]">
          
          {/* Large Feature Card */}
          <div className="md:col-span-2 md:row-span-2 bg-gradient-to-br from-indigo-600 to-violet-700 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer overflow-hidden relative">
            <div className="relative z-10">
              <Zap className="w-12 h-12 mb-6" />
              <h2 className="text-3xl font-bold mb-4">Ultra Fast Performance</h2>
              <p className="text-indigo-100/80 max-w-xs text-lg">
                Built on the latest Next.js features for sub-second load times and SEO optimization.
              </p>
            </div>
            <div className="relative z-10 flex items-center gap-2 font-semibold">
              Explore Performance <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </div>
            {/* Background Decoration */}
            <div className="absolute -right-10 -bottom-10 w-64 h-64 bg-white/10 rounded-full blur-3xl group-hover:scale-125 transition-transform duration-700" />
          </div>

          {/* Secondary Card 1 */}
          <div className="md:col-span-2 bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/[0.08] transition-colors flex items-center justify-between">
            <div>
              <Shield className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-xl font-bold">Secure by Default</h3>
              <p className="text-slate-400 text-sm mt-1">Enterprise-grade protection for every user.</p>
            </div>
            <div className="hidden sm:block h-20 w-32 bg-emerald-400/10 rounded-xl border border-emerald-400/20" />
          </div>

          {/* Small Card 1 */}
          <div className="bg-white/5 border border-white/10 rounded-3xl p-6 hover:border-indigo-500/50 transition-all flex flex-col items-center justify-center text-center">
            <Rocket className="w-8 h-8 text-indigo-400 mb-3" />
            <h3 className="font-bold">Scale</h3>
            <p className="text-xs text-slate-500">Go from 0 to 1M users.</p>
          </div>

          {/* Small Card 2 (GitHub Link) */}
          <div className="bg-[#171717] border border-white/5 rounded-3xl p-6 hover:bg-black transition-all flex flex-col items-center justify-center text-center group">
            <GitHub className="w-8 h-8 text-white mb-3 group-hover:scale-110 transition-transform" />
            <h3 className="font-bold">Open Source</h3>
            <p className="text-xs text-slate-500">Check the source code.</p>
          </div>

        </div>
      </main>

      {/* Footer Branding */}
      <footer className="border-t border-white/5 py-10 text-center">
        <p className="text-slate-600 text-sm italic">
          Designed for high-impact developers. 2026.
        </p>
      </footer>
    </div>
  );
}