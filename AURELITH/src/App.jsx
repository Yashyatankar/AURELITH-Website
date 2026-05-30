import { useState } from 'react'
import Navbar from './Navbar'
import './index.css'
function App() {

  return (
    <>  

    <Navbar />
    <div className="relative h-screen w-full bg-[#0f0a0a] overflow-hidden">

      {/* Glow - centered */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
          w-[600px] h-[600px] rounded-full
          bg-gradient-to-r from-[#9a7830] to-[#e8ddd5]
          blur-[150px] opacity-30 animate-pulse"
      />
      {/* Image - centered */}
      <img
        src="/WomenPhoto.png"
        alt="Hero Image"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
        h-full object-contain opacity-90 z-10"
      />

      {/* Text - left side on top of everything */}
      <div className="absolute top-1/2 -translate-y-1/2 left-0
        flex flex-col items-start justify-center gap-6 px-16 z-20 w-1/2">

        <h1 className="text-6xl text-[#e8ddd5] leading-tight font-cinzel">
          Adorn the <span className="text-[#c9a87c]">Darkness</span> Within
        </h1>

        <p className="text-[#a09080] text-sm leading-relaxed max-w-md font-inter">
          Handcrafted fine jewelry for those who wear their mystery proudly. Each piece is a testament to the beauty found in shadows.
        </p>
        
        <div>
          <button className="border border-[#c9a87c] text-[#c9a87c] bg-black font-bold py-3 px-6 rounded-full hover:bg-[#e8ddd5] transition-colors font-cinzel">
            Explore Collection
          </button>
          
          <button></button>
        </div>

      </div>

    </div>
  </>
  )
}

export default App
