import { useRef, useCallback } from "react";

const products = [
  { id: 1, name: "Solstice Pendant", price: "₹42,000", image: "/Images/Product-1.jpg" },
  { id: 2, name: "Aurel Chain", price: "₹38,500", image: "/Images/Product-2.jpg" },
  { id: 3, name: "Luminary Ring", price: "₹28,000", image: "/Images/Product-3.jpg" },
  { id: 4, name: "Celestia Bangle", price: "₹55,000", image: "/Images/Product-4.jpg" },
  { id: 5, name: "Orbit Earrings", price: "₹19,500", image: "/Images/Product-5.jpg" },
  { id: 6, name: "Veil Bracelet", price: "₹33,000", image: "/Images/Product-6.jpg" },
  { id: 7, name: "Halo Choker", price: "₹47,000", image: "/Images/Product-7.jpg" },
  { id: 8, name: "Nova Brooch", price: "₹25,000", image: "/Images/Product-8.jpg" },
  { id: 9, name: "Eclipse Cuff", price: "₹30,500", image: "/Images/Product-9.jpg" },
  { id: 10, name: "Radiance Anklet", price: "₹22,000", image: "/Images/Product-10.jpg" },
  { id: 11, name: "Stellar Ring", price: "₹27,500", image: "/Images/Product-11.jpg" },
];

function ProductCard({ product }) {
  const cardRef = useRef(null);
  const rafRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      const card = cardRef.current;
      if (!card) return;
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -8;
      const rotateY = ((x - centerX) / centerX) * 8;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;

      const shine = card.querySelector(".card-shine");
      if (shine) {
        const shineX = (x / rect.width) * 100;
        const shineY = (y / rect.height) * 100;
        shine.style.background = `radial-gradient(circle at ${shineX}% ${shineY}%, rgba(201,168,124,0.15) 0%, transparent 60%)`;
      }
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(800px) rotateX(0deg) rotateY(0deg) scale(1)";
    const shine = card.querySelector(".card-shine");
    if (shine) shine.style.background = "transparent";
  }, []);

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative flex-shrink-0 w-[280px] h-[380px] rounded-2xl overflow-hidden border border-[#c9a87c22] cursor-pointer"
      style={{
        background: "#0d0b08",
        transition: "transform 0.15s ease",
        transformStyle: "preserve-3d",
        willChange: "transform",
      }}
    >
      <div className="card-shine absolute inset-0 z-20 pointer-events-none" />

      <img
        src={product.image}
        alt={product.name}
        className="absolute inset-0 w-full h-full object-cover opacity-60"
      />

      <div
        className="absolute inset-0 z-10"
        style={{ background: "linear-gradient(to top, #0a0805ee 0%, #0a080540 50%, transparent 100%)" }}
      />

      <div className="absolute top-3 left-3 w-3 h-3 border-t border-l border-[#c9a87c55] z-30" />
      <div className="absolute bottom-3 right-3 w-3 h-3 border-b border-r border-[#c9a87c55] z-30" />

      <div className="absolute bottom-0 left-0 right-0 z-30 p-5">
        <div className="w-6 h-px bg-[#c9a87c] mb-2" />
        <h3 className="font-['Cinzel'] text-[15px] font-normal text-[#e8d5b0] leading-snug">
          {product.name}
        </h3>
        <p className="font-['Inter'] text-[13px] font-light text-[#c9a87c] mt-1 tracking-wider">
          {product.price}
        </p>
      </div>
    </div>
  );
}

export default function CollectionSection() {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section className="w-full py-20 px-6 md:px-12" style={{ background: "#0a0805" }}>

      <div className="flex items-end justify-between mb-10">
        <div>
          <span className="font-['Inter'] text-[10px] font-light tracking-[0.3em] text-[#c9a87c88] uppercase block mb-2">
            Handcrafted Pieces
          </span>
          <h2 className="font-['Cinzel'] text-3xl md:text-4xl font-normal text-[#e8d5b0] leading-tight">
            The Collection
          </h2>
        </div>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => scroll(-1)}
            className="w-10 h-10 rounded-full border border-[#c9a87c44] flex items-center justify-center hover:border-[#c9a87c] hover:bg-[#c9a87c11] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="#c9a87c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            type="button"
            onClick={() => scroll(1)}
            className="w-10 h-10 rounded-full border border-[#c9a87c44] flex items-center justify-center hover:border-[#c9a87c] hover:bg-[#c9a87c11] transition-all duration-200"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 3l5 5-5 5" stroke="#c9a87c" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Carousel — outer div clips, inner div scrolls */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollRef}
          className="flex gap-5 overflow-x-auto pb-4 collection-scroll"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>

    </section>
  );
}