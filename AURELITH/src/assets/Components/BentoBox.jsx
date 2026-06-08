export default function BentoGrid() {
  return (
    <div
      className="w-full p-5 rounded-2xl"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(10, 1fr)",
        gridTemplateRows: "repeat(10, 52px)",
        gap: "10px",
        background: "#0a0805",
        border: "1px solid #c9a87c44",
      }}
    >
      {/* C1 — Brand Hero */}
      <div
        className="group relative rounded-xl overflow-hidden border border-[#c9a87c22] hover:border-[#c9a87c88] hover:scale-[1.012] transition-all duration-300 z-0 hover:z-10"
        style={{ gridColumn: "1/4", gridRow: "1/6", background: "radial-gradient(ellipse at 30% 70%, #1e1608 0%, #0a0805 70%)" }}
      >
        <video src="public/Videos/ModelVideo-2.mp4" autoPlay muted loop 
            className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300 "></video>
        <GoldShimmer />
        <CornerMark pos="tl" />
        <CornerMark pos="br" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <div className="w-8 h-px bg-[#c9a87c] mb-2" />
          <span className="font-['Inter'] text-[10px] font-light tracking-[0.2em] text-[#c9a87c88] uppercase mb-1">Est. MMXXIII</span>
          <h2 className="font-['Cinzel'] text-3xl font-normal text-[#e8d5b0] leading-tight">AURELITH</h2>
          <p className="font-['Inter'] text-[11px] font-light text-[#c9a87c66] mt-1.5 leading-relaxed">Fine jewellery, forged in silence.</p>
        </div>
      </div>

      {/* C2 — Feature Hero */}
      <div
        className="group relative rounded-xl overflow-hidden border border-[#c9a87c22] hover:border-[#c9a87c88] hover:scale-[1.012] transition-all duration-300 z-0 hover:z-10"
        style={{ gridColumn: "4/9", gridRow: "1/9", background: "#0d0b08" }}
      >
        <video src="public/Videos/ModelVideo-1.mp4" autoPlay muted loop 
            className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-100 transition-all duration-300"></video>
        <GoldShimmer />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <span className="inline-block font-['Inter'] text-[9px] tracking-[0.15em] uppercase text-[#c9a87c] border border-[#c9a87c44] rounded-full px-2.5 py-0.5 mb-2 w-fit">New Collection</span>
          <h2 className="font-['Cinzel'] text-2xl font-normal text-[#e8d5b0] leading-tight">The Solstice<br />Edit</h2>
          <p className="font-['Inter'] text-[11px] font-light text-[#c9a87c66] mt-1.5 leading-relaxed">Handcrafted in 22k gold. Limited to 40 pieces worldwide.</p>
        </div>
      </div>

      {/* C3 — Stat */}
      <div
        className="group relative rounded-xl overflow-hidden border border-[#c9a87c22] hover:border-[#c9a87c88] hover:scale-[1.012] transition-all duration-300 z-0 hover:z-10"
        style={{ gridColumn: "9/11", gridRow: "1/4", background: "#120f0a" }}
      >
        <GoldShimmer />
        <CornerMark pos="tl" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <span className="font-['Inter'] text-[10px] font-light tracking-[0.2em] text-[#c9a87c88] uppercase mb-1">Pieces crafted</span>
          <span className="font-['Cinzel'] text-4xl font-semibold text-[#c9a87c] leading-none">840+</span>
        </div>
      </div>

      {/* C4 — Material */}
      <div
        className="group relative rounded-xl overflow-hidden border border-[#c9a87c22] hover:border-[#c9a87c88] hover:scale-[1.012] transition-all duration-300 z-0 hover:z-10"
        style={{ gridColumn: "9/11", gridRow: "4/6", background: "#0f0d09" }}
      >
        <GoldShimmer />
        <div className="absolute inset-0 flex flex-col justify-center p-4">
          <span className="font-['Inter'] text-[10px] font-light tracking-[0.2em] text-[#c9a87c88] uppercase mb-1">Material</span>
          <span className="font-['Cinzel'] text-[12px] font-normal text-[#c9a87c] leading-snug">22k Gold · Platinum · Conflict-Free Diamonds</span>
        </div>
      </div>

      {/* C5 — Quote */}
      <div
        className="group relative rounded-xl overflow-hidden border border-[#c9a87c22] hover:border-[#c9a87c88] hover:scale-[1.012] transition-all duration-300 z-0 hover:z-10"
        style={{ gridColumn: "1/4", gridRow: "6/11", background: "#0d0b08" }}
      >
        <img src="/public/Images/Necklace-1.jpg" alt="Necklace" className="absolute inset-0 w-full h-full object-cover opacity-30 group-hover:opacity-100 transition-opacity duration-300" />
        <GoldShimmer />
        <CornerMark pos="br" />
        <div className="absolute inset-0 flex flex-col justify-end p-4">
          <span className="font-['Inter'] text-[10px] font-light tracking-[0.2em] text-[#c9a87c88] uppercase mb-1">Philosophy</span>
          <h3 className="font-['Cinzel'] text-[14px] font-normal text-[#e8d5b0] leading-relaxed">"Every piece holds<br />a quiet eternity."</h3>
          <p className="font-['Inter'] text-[11px] font-light text-[#c9a87c66] mt-2.5 leading-relaxed">We design for those who believe beauty should outlast the moment it was made for.</p>
        </div>
      </div>

      {/* C6 — CTA Strip */}
      <div
        className="group relative rounded-xl overflow-hidden border border-[#c9a87c22] hover:border-[#c9a87c88] hover:scale-[1.012] transition-all duration-300 z-0 hover:z-10"
        style={{ gridColumn: "4/9", gridRow: "9/11", background: "#110e09" }}
      >
        <GoldShimmer />
        <div className="absolute inset-0 flex flex-row items-center justify-between px-4">
          <div>
            <span className="font-['Inter'] text-[10px] font-light tracking-[0.2em] text-[#c9a87c88] uppercase block mb-0.5">Ready to wear</span>
            <span className="font-['Cinzel'] text-[14px] font-normal text-[#e8d5b0]">Explore the full collection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="font-['Cinzel'] text-[11px] text-[#c9a87c] tracking-[0.15em]">SHOP NOW</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M4 10h12M11 5l5 5-5 5" stroke="#c9a87c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* C7 — Awards + Shipping */}
      <div
        className="group relative rounded-xl overflow-hidden border border-[#c9a87c22] hover:border-[#c9a87c88] hover:scale-[1.012] transition-all duration-300 z-0 hover:z-10"
        style={{ gridColumn: "9/11", gridRow: "6/11", background: "#0f0d09" }}
      >
        <GoldShimmer />
        <CornerMark pos="tl" />
        <CornerMark pos="br" />
        <img src="/public/Images/Necklace-2.jpg" alt="Ring" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:opacity-100 transition-opacity duration-300 " />
        <div className="absolute inset-0 flex flex-col justify-between px-4 py-5">
          <div>
            <span className="font-['Inter'] text-[10px] font-light tracking-[0.2em] text-[#c9a87c88] uppercase block mb-1">Acclaim</span>
            <span className="font-['Cinzel'] text-[13px] font-normal text-[#e8d5b0] leading-snug block">Vogue India<br />Best Luxury Brand</span>
            <span className="font-['Inter'] text-[10px] text-[#c9a87c44] mt-1 block">2024</span>
          </div>
          <div className="w-px h-10 bg-[#c9a87c33] mx-auto" />
          <div>
            <span className="font-['Inter'] text-[10px] font-light tracking-[0.2em] text-[#c9a87c88] uppercase block mb-1">Shipping</span>
            <span className="font-['Cinzel'] text-[13px] font-normal text-[#e8d5b0] leading-snug block">Worldwide<br />White Glove</span>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Helpers ─────────────────────────────────────────────────

function GoldShimmer() {
  return (
    <div className="absolute top-0 left-[20%] right-[20%] h-px bg-gradient-to-r from-transparent via-[#c9a87c88] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
  );
}

function CornerMark({ pos }) {
  const base = "absolute w-3 h-3";
  const styles = {
    tl: "top-2.5 left-2.5 border-t border-l border-[#c9a87c44]",
    br: "bottom-2.5 right-2.5 border-b border-r border-[#c9a87c44]",
  };
  return <div className={`${base} ${styles[pos]}`} />;
}

function FacetSVG() {
  return (
    <svg
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[52%] opacity-[0.12]"
      width="180" height="180" viewBox="0 0 100 100"
    >
      <polygon points="50,5 95,27.5 95,72.5 50,95 5,72.5 5,27.5" fill="none" stroke="#c9a87c" strokeWidth="0.8" />
      <polygon points="50,15 85,32.5 85,67.5 50,85 15,67.5 15,32.5" fill="none" stroke="#c9a87c" strokeWidth="0.5" />
      <line x1="50" y1="5" x2="50" y2="95" stroke="#c9a87c" strokeWidth="0.4" />
      <line x1="5" y1="27.5" x2="95" y2="72.5" stroke="#c9a87c" strokeWidth="0.4" />
      <line x1="95" y1="27.5" x2="5" y2="72.5" stroke="#c9a87c" strokeWidth="0.4" />
      <circle cx="50" cy="50" r="8" fill="none" stroke="#c9a87c" strokeWidth="0.8" />
    </svg>
  );
}