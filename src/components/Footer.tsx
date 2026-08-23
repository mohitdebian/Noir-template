import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full bg-[#0a0908] border-t border-white/5 pt-16 pb-8 px-6 relative z-50">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row justify-between gap-12 mb-16">
        
        {/* Brand */}
        <div className="flex flex-col max-w-sm">
          <Link href="/" className="flex flex-col mb-6 group w-max">
            <h1 className="text-3xl tracking-widest text-white group-hover:text-white/80 transition" style={{ fontFamily: 'var(--font-playfair)' }}>NOIR</h1>
            <span className="text-[0.65rem] tracking-[0.4em] text-[#c89040] ml-1 mt-1">CAFÉ</span>
          </Link>
          <p className="text-white/50 text-[0.85rem] leading-relaxed mb-8">
            A cozy space for great coffee, delicious food, and even better conversations. Handcrafted to make your everyday moments better.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-black hover:bg-white hover:border-white transition">IG</a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-black hover:bg-white hover:border-white transition">FB</a>
            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-black hover:bg-white hover:border-white transition">X</a>
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-16 sm:gap-24">
          <div className="flex flex-col gap-4">
            <h4 className="text-[#c89040] text-[0.65rem] tracking-[0.25em] uppercase font-semibold mb-3">Explore</h4>
            <Link href="/" className="text-white/60 hover:text-white text-sm transition tracking-wide">Home</Link>
            <Link href="/menu" className="text-white/60 hover:text-white text-sm transition tracking-wide">Our Menu</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition tracking-wide">Our Story</Link>
            <Link href="#" className="text-white/60 hover:text-white text-sm transition tracking-wide">Reservations</Link>
          </div>
          
          <div className="flex flex-col gap-4">
            <h4 className="text-[#c89040] text-[0.65rem] tracking-[0.25em] uppercase font-semibold mb-3">Visit Us</h4>
            <p className="text-white/60 text-sm tracking-wide leading-relaxed">
              123 Noir Avenue<br/>Coffee District, NY 10012
            </p>
            <p className="text-white/60 text-sm tracking-wide leading-relaxed mt-2">
              <span className="text-white/80">Mon - Sun</span><br/>8:00 AM - 10:00 PM
            </p>
            <a href="mailto:hello@noircafe.com" className="text-white/60 hover:text-[#c89040] text-sm transition mt-2 tracking-wide">hello@noircafe.com</a>
          </div>
        </div>
        
      </div>
      
      {/* Bottom Bar */}
      <div className="max-w-6xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
        <p className="text-white/30 text-[0.7rem] tracking-widest uppercase">
          © {new Date().getFullYear()} NOIR CAFE. All rights reserved.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-white/30 hover:text-white text-[0.7rem] tracking-widest uppercase transition">Privacy Policy</Link>
          <Link href="#" className="text-white/30 hover:text-white text-[0.7rem] tracking-widest uppercase transition">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
}
