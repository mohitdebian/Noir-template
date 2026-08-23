'use client';

import Image from 'next/image';
import Link from 'next/link';

import Footer from '../../components/Footer';
import { useState } from 'react';

const MENU_ITEMS = [
  { id: 1, name: 'Strawberry Shake', desc: 'Fresh strawberries, vanilla ice cream & cream', price: 249, category: 'Coffee', image: '/imgs/strawberry.png' },
  { id: 2, name: 'Noir Classic Burger', desc: 'Grilled beef, cheddar, special sauce', price: 299, category: 'Food', image: '/imgs/burger.png' },
  { id: 3, name: 'Avocado Toast', desc: 'Smashed avocado, chili flakes, cherry tomatoes', price: 199, category: 'Food', image: '/imgs/avacado-toast.png' },
  { id: 4, name: 'Shakshuka', desc: 'Eggs poached in spiced tomato sauce', price: 259, category: 'Food', image: '/imgs/Shakshuka.png' },
  { id: 5, name: 'Almond Croissant', desc: 'Freshly baked flaky pastry with almond cream', price: 149, category: 'Desserts', image: '/imgs/Almond Croissants.png' },
];

export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredItems = activeCategory === 'All' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <main className="min-h-screen w-full relative bg-black overflow-x-hidden">
      
      {/* Responsive Background Images */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {/* Mobile Image */}
        <div className="md:hidden absolute inset-0">
          <Image 
            src="/imgs/menu-background-phone.png" 
            alt="Menu Background" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Desktop Image */}
        <div className="hidden md:block absolute inset-0">
          <Image 
            src="/imgs/big-screen-menu-background.png" 
            alt="Menu Background" 
            fill 
            className="object-cover object-center"
            priority
          />
        </div>
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-black/60 md:bg-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-transparent to-black/90"></div>
      </div>

      

      {/* Main Content */}
      <div className="relative z-10 pt-32 pb-24 px-6 max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Page Title */}
        <h2 className="text-5xl md:text-6xl mb-4 text-white text-center" style={{ fontFamily: 'var(--font-playfair)' }}>
          Our <span className="text-noir-gold italic">Menu</span>
        </h2>
        
        {/* Star Divider */}
        <div className="flex items-center gap-3 mb-4">
          <div className="w-8 h-[1px] bg-noir-gold/30"></div>
          <span className="text-noir-gold text-xs">✦</span>
          <div className="w-8 h-[1px] bg-noir-gold/30"></div>
        </div>

        <p className="text-white/70 text-center text-sm max-w-xs mb-10">
          Handcrafted with love. Made to<br />make your moments better.
        </p>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 w-full">
          {[
            { id: 'All', icon: '🛎' },
            { id: 'Coffee', icon: '☕' },
            { id: 'Food', icon: '🍲' },
            { id: 'Desserts', icon: '🍰' },
          ].map(cat => {
            const isActive = activeCategory === cat.id;
            return (
              <button 
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`rounded-full border px-6 py-2 flex items-center gap-2 transition ${
                  isActive 
                    ? 'border-noir-gold bg-noir-gold/10' 
                    : 'border-white/20 hover:border-white/50'
                }`}
              >
                <span className={`text-lg leading-none mb-1 ${isActive ? 'text-noir-gold' : 'text-white/60'}`}>{cat.icon}</span>
                <span className={`text-xs tracking-wider uppercase ${isActive ? 'text-noir-gold' : 'text-white/70'}`}>{cat.id}</span>
              </button>
            )
          })}
        </div>

        {/* Section Header */}
        <div className="w-full flex justify-between items-end mb-6">
          <h3 className="text-noir-gold text-xs tracking-[0.2em] font-medium uppercase">Signature Picks</h3>
          <button className="text-white/60 text-xs tracking-wider hover:text-white transition flex items-center gap-2">
            View all <span>→</span>
          </button>
        </div>

        {/* Menu Grid */}
        <div className="w-full grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-black/40 border border-white/10 rounded-2xl p-3 flex flex-col gap-3 backdrop-blur-sm animate-in fade-in zoom-in duration-300">
              <div className="w-full aspect-square rounded-xl overflow-hidden relative">
                <Image src={item.image} alt={item.name} fill className="object-cover object-center" />
              </div>
              <div className="flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-white font-serif text-sm md:text-base mb-1" style={{ fontFamily: 'var(--font-playfair)' }}>{item.name}</h4>
                  <p className="text-white/50 text-[10px] md:text-xs leading-tight mb-3">{item.desc}</p>
                </div>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-noir-gold text-sm font-medium">₹{item.price}</span>
                  <button className="w-6 h-6 rounded-full border border-noir-gold/50 flex items-center justify-center text-noir-gold hover:bg-noir-gold hover:text-black transition">
                    <span className="text-xs mb-[1px]">+</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Full Menu Button */}
        <button className="rounded-full border border-noir-gold/50 px-10 py-4 text-noir-gold text-xs tracking-[0.2em] uppercase font-medium hover:bg-noir-gold hover:text-black transition flex items-center gap-3 group">
          <svg className="w-4 h-4 transition-colors group-hover:text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
          </svg>
          FULL MENU
        </button>
      </div>
      <Footer />
    </main>
  );
}
