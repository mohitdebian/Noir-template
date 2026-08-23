'use client';

import Image from 'next/image';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

function Sidebar({ 
  isLeftOnMobile = false,
  hideOnMobile = false
}: { 
  isLeftOnMobile?: boolean,
  hideOnMobile?: boolean
}) {
  const positionClasses = isLeftOnMobile 
    ? 'left-0 md:left-auto md:right-0 pl-4 md:pl-0 md:pr-4' 
    : 'right-0 pr-4';

  const linePosition = isLeftOnMobile 
    ? 'left-10 md:left-auto md:right-10' 
    : 'right-10';

  const displayClasses = hideOnMobile 
    ? 'hidden md:flex' 
    : 'flex';

  return (
    <div className={`${displayClasses} absolute top-1/2 -translate-y-1/2 flex-col gap-8 z-50 pointer-events-auto ${positionClasses}`}>
      <div className={`absolute top-0 bottom-0 w-[1px] bg-white/10 -z-10 ${linePosition}`}></div>
      
      <a href="#shakes" className="flex flex-col items-center gap-1 group cursor-pointer decoration-transparent">
        <div className="w-12 h-12 rounded-xl border border-white/20 overflow-hidden relative group-hover:border-[#c89040] transition bg-[#1a1210]">
          <Image src="/imgs/strawberry.png" alt="Signature Shakes" fill className="object-cover" />
        </div>
        <span className="text-[0.55rem] leading-tight text-center tracking-widest text-white/70 group-hover:text-[#c89040] transition w-14">
          SIGNATURE<br/>SHAKES
        </span>
      </a>
      
      <a href="#baked" className="flex flex-col items-center gap-1 group cursor-pointer decoration-transparent">
        <div className="w-12 h-12 rounded-xl border border-white/20 overflow-hidden relative group-hover:border-[#c89040] transition bg-[#1a1210]">
          <Image src="/imgs/burger.png" alt="Freshly Baked" fill className="object-cover" />
        </div>
        <span className="text-[0.55rem] leading-tight text-center tracking-widest text-white/70 group-hover:text-[#c89040] transition w-14">
          FRESHLY<br/>BAKED
        </span>
      </a>
      
      <a href="#coffee" className="flex flex-col items-center gap-1 group cursor-pointer decoration-transparent">
        <div className="w-12 h-12 rounded-xl border border-white/20 overflow-hidden relative group-hover:border-[#c89040] transition bg-[#1a1210]">
          <Image src="/imgs/Almond Croissants.png" alt="Specialty Coffee" fill className="object-cover" />
        </div>
        <span className="text-[0.55rem] leading-tight text-center tracking-widest text-white/70 group-hover:text-[#c89040] transition w-14">
          SPECIALTY<br/>COFFEE
        </span>
      </a>
    </div>
  );
}

function BottomAction() {
  return (
    <>
      {/* Mobile CTA (Hidden on desktop) */}
      <div className="md:hidden absolute bottom-24 w-full flex justify-center z-50 pointer-events-auto">
        <Link href="/menu" className="group rounded-full border border-white/30 backdrop-blur-sm px-8 py-3.5 flex items-center justify-between hover:bg-noir-gold hover:border-noir-gold hover:text-black transition-all w-max min-w-[220px] text-white tracking-[0.2em] text-[0.7rem] uppercase font-semibold">
          Explore Our Menu 
          <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
        </Link>
      </div>
      
      {/* Desktop Scroll Indicator (Hidden on mobile) */}
      <div className="hidden md:flex absolute bottom-8 w-full flex-col items-center justify-center z-10 pointer-events-none">
        <div className="w-[1px] h-12 bg-white/20 mb-4"></div>
        <div className="w-5 h-8 border border-white/50 rounded-full flex flex-col items-center justify-center mb-3">
          <span className="text-white text-[11px] font-serif">!</span>
        </div>
        <span className="text-[0.55rem] tracking-[0.3em] text-white/70 uppercase">Scroll to explore</span>
        <span className="text-white/50 mt-1 font-light text-xl">⌄</span>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth relative bg-black">
      
      <Header />

      {/* SECTION 1: STRAWBERRY SHAKE */}
      <section id="shakes" className="h-screen w-full snap-start relative flex items-center">
        {/* Responsive Background Images */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Mobile Image */}
          <div className="md:hidden absolute inset-0">
            <Image 
              src="/imgs/strawberry.png" 
              alt="Strawberry Shake" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/imgs/strawberry-big-screen-img.png" 
              alt="Strawberry Shake" 
              fill 
              className="object-cover object-center"
              priority
            />
          </div>
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-12 md:px-24 w-full flex justify-between items-center pointer-events-none">
          
          {/* Left: Typography & CTAs (Hidden on mobile) */}
          <div className="max-w-md hidden md:block pointer-events-auto">
            <p className="text-noir-gold text-[0.6rem] tracking-[0.3em] font-semibold mb-6 uppercase">
              GOOD FOOD. GOOD MOOD.
            </p>
            
            <h2 className="text-[4rem] leading-[1.0] sm:text-6xl md:text-7xl mb-6 text-white text-glow" style={{ fontFamily: 'var(--font-playfair)' }}>
              More than <br />
              just <br />
              <span className="italic text-noir-gold">coffee.</span>
            </h2>
            
            <p className="text-white/80 text-[0.95rem] mb-10 max-w-[280px] leading-relaxed">
              A cozy space for great coffee, <br />
              delicious food and even <br />
              better conversations.
            </p>
            
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <Link href="/menu" className="group rounded-full border border-white/30 backdrop-blur-sm px-8 py-3.5 flex items-center justify-between hover:bg-noir-gold hover:border-noir-gold hover:text-black transition-all w-max min-w-[220px] text-white tracking-[0.2em] text-[0.7rem] uppercase font-semibold mt-2">
                Explore Our Menu 
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
              
              <button className="text-[0.9rem] text-white/90 flex items-center gap-4 hover:text-white transition w-max mt-1">
                <span className="w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-[0.6rem] pl-0.5">▶</span>
                Watch the Vibe
              </button>
            </div>
          </div>
        </div>
          
        {/* Mobile-only Typography */}
        <div className="md:hidden absolute top-32 left-6 z-10 pointer-events-auto flex flex-col items-start text-left max-w-[180px]">
          <h2 className="text-[2rem] text-white leading-[1.1] tracking-wide" style={{ fontFamily: 'var(--font-playfair)' }}>
            More than <br/> just a shake.
          </h2>
          <h2 className="text-[2rem] text-[#c89040] leading-[1.1] tracking-wide mb-4" style={{ fontFamily: 'var(--font-playfair)' }}>
            A moment <br/> to yourself.
          </h2>
          
          <div className="w-12 h-[1px] bg-[#c89040]/50 mb-4 flex items-center justify-center relative">
            <div className="absolute w-1 h-1 bg-[#c89040] rotate-45"></div>
          </div>
          
          <p className="text-white/70 text-[0.75rem] leading-relaxed mb-6">
            Creamy, dreamy and <br/>
            made with real <br/>
            strawberries. <br/>
            Pure comfort in <br/>
            every sip.
          </p>

          <div className="w-16 h-16 rounded-full border border-[#c89040]/40 flex flex-col items-center justify-center gap-1 text-[#c89040]">
            <span className="text-xs">🍓</span>
            <span className="text-[0.4rem] tracking-[0.2em] text-center uppercase leading-tight">Made with<br/>Real Fruit</span>
          </div>
        </div>
        
        <BottomAction />

        <Sidebar hideOnMobile />
      </section>

      {/* SECTION 2: BURGER */}
      <section id="baked" className="h-screen w-full snap-start relative flex items-center">
        {/* Responsive Background Images */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* Mobile Image */}
          <div className="md:hidden absolute inset-0">
            <Image 
              src="/imgs/burger.png" 
              alt="Burger" 
              fill 
              className="object-cover object-[80%_center]"
            />
          </div>
          {/* Desktop Image */}
          <div className="hidden md:block absolute inset-0">
            <Image 
              src="/imgs/burger-big-screen-background-img.png" 
              alt="Burger" 
              fill 
              className="object-cover object-center"
            />
          </div>
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-12 md:px-24 w-full flex justify-between items-center pointer-events-none">
          
          {/* Left: Typography & CTAs (Hidden on mobile) */}
          <div className="max-w-md hidden md:block pointer-events-auto">
            <p className="text-noir-gold text-[0.6rem] tracking-[0.3em] font-semibold mb-6 uppercase">
              SIGNATURE BITES
            </p>
            
            <h2 className="font-serif text-[4rem] leading-[1.0] sm:text-6xl md:text-7xl mb-6 text-white text-glow">
              Freshly <br />
              <span className="italic text-noir-gold">crafted.</span>
            </h2>
            
            <p className="text-white/80 text-[0.95rem] mb-10 max-w-[280px] leading-relaxed">
              Experience the perfect blend of flavors <br />
              with our signature burgers, <br />
              made fresh daily.
            </p>
            
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <Link href="/menu" className="group rounded-full border border-white/30 backdrop-blur-sm px-8 py-3.5 flex items-center justify-between hover:bg-noir-gold hover:border-noir-gold hover:text-black transition-all w-max min-w-[220px] text-white tracking-[0.2em] text-[0.7rem] uppercase font-semibold mt-2">
                Explore Our Menu 
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          
        </div>
        
        {/* Mobile-only Typography */}
        <div className="md:hidden absolute top-28 w-full left-0 z-10 pointer-events-auto flex flex-col items-center text-center px-4">
          <h2 className="text-3xl mb-1 text-white text-glow leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Savor the <span className="italic text-[#c89040]">Artistry</span>
          </h2>
          <p className="text-white/80 text-[0.7rem] max-w-[220px] leading-relaxed mt-1">
            Every ingredient chosen with purpose. Every bite designed to inspire.
          </p>
        </div>

        <BottomAction />

        <Sidebar isLeftOnMobile />
      </section>

      {/* SECTION 3: COFFEE (Added so the 3rd button works!) */}
      <section id="coffee" className="h-screen w-full snap-start relative flex items-center bg-[#1a1210]">
        {/* Responsive Background Images */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* We only have one image for this right now, so we'll use it for both */}
          <Image 
            src="/imgs/Almond Croissants.png" 
            alt="Specialty Coffee" 
            fill 
            className="object-cover object-center opacity-70"
          />
          {/* Subtle gradient overlays */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 px-6 sm:px-12 md:px-24 w-full flex justify-between items-center pointer-events-none">
          
          {/* Left: Typography & CTAs (Hidden on mobile) */}
          <div className="max-w-md hidden md:block pointer-events-auto">
            <p className="text-noir-gold text-[0.6rem] tracking-[0.3em] font-semibold mb-6 uppercase">
              MORNING BREWS
            </p>
            
            <h2 className="font-serif text-[4rem] leading-[1.0] sm:text-6xl md:text-7xl mb-6 text-white text-glow">
              Specialty <br />
              <span className="italic text-noir-gold">coffee.</span>
            </h2>
            
            <p className="text-white/80 text-[0.95rem] mb-10 max-w-[280px] leading-relaxed">
              Start your day right with our expertly <br />
              roasted beans and perfectly <br />
              paired pastries.
            </p>
            
            <div className="flex flex-col gap-4 mt-10 md:mt-0">
              <Link href="/menu" className="group rounded-full border border-white/30 backdrop-blur-sm px-8 py-3.5 flex items-center justify-between hover:bg-noir-gold hover:border-noir-gold hover:text-black transition-all w-max min-w-[220px] text-white tracking-[0.2em] text-[0.7rem] uppercase font-semibold mt-2">
                Explore Our Menu 
                <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
              </Link>
            </div>
          </div>
          
        </div>

        {/* Mobile-only Typography */}
        <div className="md:hidden absolute top-28 w-full left-0 z-10 pointer-events-auto flex flex-col items-center text-center px-4">
          <h2 className="text-3xl mb-1 text-white text-glow leading-tight" style={{ fontFamily: 'var(--font-playfair)' }}>
            Morning <span className="italic text-[#c89040]">Rituals</span>
          </h2>
          <p className="text-white/80 text-[0.7rem] max-w-[220px] leading-relaxed mt-1">
            Awaken your senses with our ethically sourced, masterfully roasted beans.
          </p>
        </div>

        <BottomAction />
        <Sidebar hideOnMobile />
      </section>

      {/* SECTION 4: FOOTER */}
      <section className="snap-start relative w-full h-auto bg-[#0a0908]">
        <Footer />
      </section>

    </main>
  );
}
