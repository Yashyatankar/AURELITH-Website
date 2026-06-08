export default function Footer() {
  return (
    <footer style={{ background: "#0a0805", fontFamily: "'Cormorant Garamond', serif" }}>

      {/* Wordmark Band */}
      <div className="relative border-t border-b border-[#c9a87c22] px-12 py-12 overflow-hidden">
        <svg className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] pointer-events-none" width="500" height="180" viewBox="0 0 500 180">
          <ellipse cx="250" cy="90" rx="240" ry="70" fill="none" stroke="#c9a87c" strokeWidth="1"/>
          <ellipse cx="250" cy="90" rx="180" ry="50" fill="none" stroke="#c9a87c" strokeWidth="0.5"/>
          <line x1="10" y1="90" x2="490" y2="90" stroke="#c9a87c" strokeWidth="0.5"/>
        </svg>
        <div className="flex items-center justify-between flex-wrap gap-6">
          <div>
            <div className="font-['Cinzel'] text-[52px] font-normal text-[#e8d5b0] tracking-[0.12em] leading-none">AURELITH</div>
            <div className="font-['Cormorant_Garamond'] italic text-[14px] font-light text-[#c9a87c66] tracking-[0.2em] mt-1.5">Fine Jewellery · Est. MMXXIII</div>
          </div>
          <div className="text-right">
            <div className="font-['Cormorant_Garamond'] italic text-[18px] font-light text-[#c9a87c88] leading-relaxed max-w-[280px]">
              "Crafted for those who<br />carry beauty quietly."
            </div>
          </div>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-[2fr_1fr_1fr_1.4fr] border-b border-[#c9a87c22]">

        {/* Newsletter */}
        <div className="px-12 py-10 border-r border-[#c9a87c22]">
          <div className="w-6 h-px bg-[#c9a87c] mb-3.5" />
          <div className="font-['Cinzel'] text-[11px] tracking-[0.25em] text-[#c9a87c88] uppercase mb-2">The Inner Circle</div>
          <p className="text-[15px] font-light text-[#e8d5b0aa] leading-relaxed mb-5">
            Receive early access to new collections, private viewings, and stories from our ateliers.
          </p>
          <input
            type="email"
            placeholder="Your email address"
            className="w-full bg-transparent border-0 border-b border-[#c9a87c33] focus:border-[#c9a87c88] text-[#e8d5b0] font-['Cormorant_Garamond'] text-[14px] font-light py-2 outline-none placeholder-[#c9a87c44] tracking-[0.05em]"
          />
          <button
            type="button"
            className="mt-3.5 bg-transparent border border-[#c9a87c44] text-[#c9a87c] font-['Cinzel'] text-[10px] tracking-[0.2em] px-6 py-2.5 hover:bg-[#c9a87c11] hover:border-[#c9a87c] transition-all duration-200"
          >
            Subscribe →
          </button>
        </div>

        {/* Collections */}
        <div className="px-8 py-10 border-r border-[#c9a87c22]">
          <div className="font-['Cinzel'] text-[11px] tracking-[0.25em] text-[#c9a87c88] uppercase mb-5">Collections</div>
          {["The Solstice Edit", "Celestial Series", "Bridal Atelier", "Heritage Pieces", "Limited Editions", "Bespoke"].map(link => (
            <a key={link} href="#" className="block font-['Cormorant_Garamond'] text-[13px] font-light text-[#c9a87c88] hover:text-[#c9a87c] tracking-[0.08em] mb-2.5 transition-colors duration-200 no-underline">{link}</a>
          ))}
        </div>

        {/* Maison */}
        <div className="px-8 py-10 border-r border-[#c9a87c22]">
          <div className="font-['Cinzel'] text-[11px] tracking-[0.25em] text-[#c9a87c88] uppercase mb-5">Maison</div>
          {["Our Story", "The Craft", "Sustainability", "Press", "Careers", "Contact"].map(link => (
            <a key={link} href="#" className="block font-['Cormorant_Garamond'] text-[13px] font-light text-[#c9a87c88] hover:text-[#c9a87c] tracking-[0.08em] mb-2.5 transition-colors duration-200 no-underline">{link}</a>
          ))}
        </div>

        {/* Visit + Social */}
        <div className="px-10 py-10">
          <div className="font-['Cinzel'] text-[11px] tracking-[0.25em] text-[#c9a87c88] uppercase mb-5">Visit Us</div>
          <p className="font-['Cormorant_Garamond'] text-[14px] font-light text-[#e8d5b0aa] leading-[1.8] mb-0">12 Peddar Road, Cumballa Hill</p>
          <p className="font-['Cormorant_Garamond'] text-[14px] font-light text-[#e8d5b0aa] leading-[1.8] mb-0">Mumbai, Maharashtra 400026</p>
          <p className="font-['Cormorant_Garamond'] text-[13px] font-light text-[#c9a87c66] mb-7">Mon – Sat · 10am – 7pm</p>

          <div className="w-6 h-px bg-[#c9a87c33] mb-5" />
          <div className="font-['Cinzel'] text-[11px] tracking-[0.25em] text-[#c9a87c88] uppercase mb-3.5">Follow</div>
          <div className="flex gap-2.5">
            {/* Instagram */}
            <div className="w-[34px] h-[34px] border border-[#c9a87c33] rounded-full flex items-center justify-center hover:border-[#c9a87c] hover:bg-[#c9a87c11] transition-all duration-200 cursor-pointer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a87c" strokeWidth="1.5" strokeLinecap="round">
                <rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.5" fill="#c9a87c"/>
              </svg>
            </div>
            {/* Pinterest */}
            <div className="w-[34px] h-[34px] border border-[#c9a87c33] rounded-full flex items-center justify-center hover:border-[#c9a87c] hover:bg-[#c9a87c11] transition-all duration-200 cursor-pointer">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#c9a87c" strokeWidth="1.5" strokeLinecap="round">
                <path d="M12 2C6.48 2 2 6.48 2 12c0 4.24 2.65 7.86 6.39 9.29-.09-.78-.17-1.98.04-2.83.18-.77 1.23-5.22 1.23-5.22s-.31-.63-.31-1.56c0-1.46.85-2.55 1.9-2.55.9 0 1.33.67 1.33 1.48 0 .9-.57 2.25-.87 3.5-.25 1.04.52 1.89 1.54 1.89 1.85 0 3.09-2.37 3.09-5.18 0-2.14-1.44-3.64-3.5-3.64-2.38 0-3.78 1.79-3.78 3.63 0 .72.28 1.49.62 1.91.07.08.08.16.06.24l-.23.95"/>
              </svg>
            </div>
            {/* WhatsApp */}
            <div className="w-[34px] h-[34px] border border-[#c9a87c33] rounded-full flex items-center justify-center hover:border-[#c9a87c] hover:bg-[#c9a87c11] transition-all duration-200 cursor-pointer">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#c9a87c" strokeWidth="1.5" strokeLinecap="round">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
              </svg>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="flex items-center justify-between px-12 py-5 flex-wrap gap-3">
        <span className="font-['Cormorant_Garamond'] text-[12px] font-light text-[#c9a87c44] tracking-[0.08em]">
          © 2025 Aurelith. All rights reserved.
        </span>
        <div className="flex gap-6">
          {["Privacy Policy", "Terms of Service", "Shipping & Returns"].map(link => (
            <a key={link} href="#" className="font-['Cormorant_Garamond'] text-[12px] font-light text-[#c9a87c44] hover:text-[#c9a87c] no-underline tracking-[0.08em] transition-colors duration-200">{link}</a>
          ))}
        </div>
        <div className="flex items-center gap-2">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
            <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" stroke="#c9a87c44" strokeWidth="1" fill="none"/>
          </svg>
          <span className="font-['Cinzel'] text-[9px] tracking-[0.2em] text-[#c9a87c44]">BIS HALLMARKED · 22K</span>
        </div>
      </div>

    </footer>
  );
}