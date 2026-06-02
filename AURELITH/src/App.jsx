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

      <div className=' absolute flex justify-center top-[10%] w-full h-screen'>
        <h1 className='text-[15vw] text-[#e8ddd5] opacity-20 font-cinzel font-bold'>
          AURELITH
        </h1>
      </div>

      {/* Text - left side on top of everything */}
      <div className="absolute bottom-[30%] translate-y-1/2 left-0
        flex flex-col items-start justify-center gap-6 px-16 z-20 w-1/2">

        <h1 className="text-6xl text-[#e8ddd5] leading-tight font-cinzel">
          Adorn the <span className="text-[#c9a87c]">Darkness</span> Within
        </h1>

        <h6 className="text-[#a09080] text-sm tracking-wide font-inter uppercase">
          New Collection — Autumn / Winter 2026
        </h6>

      </div>

      <div className="absolute bottom-[22%] translate-y-1/2 right-0
        flex flex-col items-start justify-center gap-6 pr-16 z-20 w-1/3">
        <p className="text-[#a09080] text-sm leading-relaxed max-w-md font-inter">
          At Aurelith, we believe that true elegance is born in the quiet hours — in the spaces between light and shadow where beauty reveals itself most honestly. Each piece in our collection is meticulously handcrafted by master artisans who understand that jewelry is not merely an adornment, but an extension of the self. We source only the finest ethically procured gemstones and precious metals, transforming raw earth into wearable art that endures across generations. For those who carry depth within them, who find poetry in darkness and power in stillness — Aurelith was made for you.
        </p>

        <div className="flex flex-row gap-4">
          <button className="border border-[#c9a87c] text-[#c9a87c] bg-black font-bold py-3 px-6 rounded-full hover:bg-[#e8ddd5] transition-colors font-cinzel">
            Explore Collection
          </button>

          <button className="border border-[#c9a87c] text-[#c9a87c] bg-black font-bold py-3 px-6 rounded-full hover:bg-[#e8ddd5] transition-colors font-cinzel">
            Contact
          </button>
        </div>
      </div>


    </div>
  </>
  )
}

export default App
