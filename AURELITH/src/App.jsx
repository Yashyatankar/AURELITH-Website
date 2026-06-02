import { useState } from 'react'
import Navbar from './Navbar'
import './index.css'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";
import { useEffect, useRef } from 'react';
import { useGSAP } from "@gsap/react";

function App() {
  
  gsap.registerPlugin(ScrollTrigger);

  useGSAP(() => {
    gsap.from("#hero-image", {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    });


    gsap.from("#aurelith-text", {

      y: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",

    })

    gsap.from("#hero-text", {
      yPercent: 100,
      opacity: 0,
      duration: 1.5,
      ease: "power2.out",
    })
  }, []);

  useGSAP(() => {



  }, []);

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
      <div
        
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50"
      >
        <img
          src="/WomenPhoto.png"
          alt="Hero Image"
          className="h-full w-[500px] object-contain object-center opacity-90 " id="hero-image"
        />
      </div>

      <div className=' absolute flex justify-center top-[10%] w-full h-screen '>
        <h1 className='text-[15vw] text-[#e8ddd5] opacity-20 font-cinzel font-bold z-10' id='aurelith-text'>
          AURELITH
        </h1>
      </div>

      {/* Text - left side on top of everything */}
      <div className="absolute bottom-[30%] translate-y-1/2 left-0
        flex flex-col items-start justify-center gap-6 px-16 z-20 w-1/2" id='hero-text'>

        <h1 className="text-6xl text-[#e8ddd5] leading-tight font-cinzel">
          Adorn the <span className="text-[#c9a87c]">Darkness</span> Within
        </h1>

        <h6 className="text-[#a09080] text-sm tracking-wide font-inter uppercase">
          New Collection — Autumn / Winter 2026
        </h6>

      </div>

      <div className="absolute bottom-[30%] translate-y-1/2 right-0
        flex flex-col items-start justify-center gap-6 pr-16 z-20 w-1/3" id='hero-text'>
        <p className="text-[#a09080] text-sm leading-relaxed max-w-md font-inter" >
          Aurelith creates handcrafted jewelry that embodies elegance, craftsmanship, and timeless beauty. Using ethically sourced gemstones and precious metals, each piece is designed to be a lasting expression of individuality and refined luxury.
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
