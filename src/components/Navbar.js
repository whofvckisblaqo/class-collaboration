'use client';
import React, { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">
        
        {/* Logo */}
        <div className="text-xl font-black tracking-tighter bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent cursor-pointer">
          PROJECT_X
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          <a href="/" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Home</a>
          <a href="/services" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Services</a>
          <a href="/contact" className="text-sm font-medium text-slate-400 hover:text-white transition-colors">Contact</a>
          <button className="bg-indigo-600 hover:bg-indigo-500 px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg shadow-indigo-500/20">
            Get Started
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-white/5 px-6 py-8 space-y-6 flex flex-col items-center">
          <a href="/" className="text-lg font-medium text-slate-300" onClick={() => setIsOpen(false)}>Home</a>
          <a href="#services" className="text-lg font-medium text-slate-300" onClick={() => setIsOpen(false)}>Services</a>
          <a href="#contact" className="text-lg font-medium text-slate-300" onClick={() => setIsOpen(false)}>Contact</a>
          <button className="w-full bg-indigo-600 py-3 rounded-xl font-bold">Get Started</button>
        </div>
      )}
    </nav>
  );
}