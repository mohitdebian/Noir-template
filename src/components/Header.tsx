'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const isAbsolute = pathname === '/menu';

  return (
    <>
      <header className={`${isAbsolute ? 'absolute' : 'fixed'} top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-8 pointer-events-none`}>
        <Link href="/" className="flex flex-col pointer-events-auto group">
          <h1 className="text-2xl tracking-widest text-white group-hover:text-white/80 transition" style={{ fontFamily: 'var(--font-playfair)' }}>NOIR</h1>
          <span className="text-[0.6rem] tracking-[0.3em] text-[#c89040] ml-1">CAFÉ</span>
        </Link>
        
        <div className="flex items-center gap-4 pointer-events-auto">
          <button className="hidden sm:block text-xs uppercase tracking-widest border border-white/30 rounded-full px-5 py-2 hover:bg-white/10 transition text-white">
            Book a Table ↗
          </button>
          <button onClick={() => setIsOpen(true)} className="w-10 h-10 border border-white/30 rounded-full flex flex-col justify-center items-center gap-1 hover:bg-white/10 transition cursor-pointer group">
            <span className="w-4 h-[1px] bg-white group-hover:w-5 transition-all"></span>
            <span className="w-4 h-[1px] bg-white group-hover:w-3 transition-all"></span>
            <span className="w-4 h-[1px] bg-white group-hover:w-5 transition-all"></span>
          </button>
        </div>
      </header>

      {/* Fullscreen Navigation Overlay */}
      <div 
        className={`fixed inset-0 z-[100] bg-black/95 backdrop-blur-xl transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] flex flex-col px-8 py-12 ${
          isOpen ? 'opacity-100 pointer-events-auto translate-y-0' : 'opacity-0 pointer-events-none -translate-y-4'
        }`}
      >
        <div className="flex justify-between items-center w-full max-w-5xl mx-auto">
          <Link href="/" onClick={() => setIsOpen(false)} className="flex flex-col">
            <h1 className="text-2xl tracking-widest text-white" style={{ fontFamily: 'var(--font-playfair)' }}>NOIR</h1>
            <span className="text-[0.6rem] tracking-[0.3em] text-[#c89040] ml-1">CAFÉ</span>
          </Link>
          <button onClick={() => setIsOpen(false)} className="w-10 h-10 border border-[#dfbe91]/40 rounded-full flex justify-center items-center hover:bg-[#dfbe91]/10 transition relative cursor-pointer group">
            <span className="w-4 h-[1px] bg-[#dfbe91] rotate-45 absolute group-hover:bg-white transition-colors"></span>
            <span className="w-4 h-[1px] bg-[#dfbe91] -rotate-45 absolute group-hover:bg-white transition-colors"></span>
          </button>
        </div>
        
        <nav className="flex flex-col items-center justify-center flex-1 gap-6 mt-12 pb-24">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl md:text-4xl text-white hover:text-[#c89040] transition hover:scale-105 transform duration-300" style={{ fontFamily: 'var(--font-playfair)' }}>Home</Link>
          <Link href="/menu" onClick={() => setIsOpen(false)} className="text-2xl md:text-4xl text-white hover:text-[#c89040] transition hover:scale-105 transform duration-300" style={{ fontFamily: 'var(--font-playfair)' }}>Our Menu</Link>
          <button onClick={() => { setIsOpen(false); alert('Opening Maps Directions...'); }} className="text-2xl md:text-4xl text-white hover:text-[#c89040] transition hover:scale-105 transform duration-300" style={{ fontFamily: 'var(--font-playfair)' }}>Directions</button>
          <Link href="#" onClick={() => setIsOpen(false)} className="text-2xl md:text-4xl text-white hover:text-[#c89040] transition hover:scale-105 transform duration-300" style={{ fontFamily: 'var(--font-playfair)' }}>Reservations</Link>
        </nav>
        
        <div className="flex flex-col items-center justify-center gap-3 pb-8">
          <p className="text-[#c89040] text-xs tracking-widest uppercase">Visit Us</p>
          <p className="text-white/50 text-[11px] text-center max-w-[200px] uppercase tracking-wider leading-relaxed">
            123 Noir Avenue, Coffee District<br/>Open Daily 8am - 10pm
          </p>
        </div>
      </div>
    </>
  );
}
