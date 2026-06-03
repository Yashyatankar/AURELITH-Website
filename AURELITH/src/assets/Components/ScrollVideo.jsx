import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 105;

const ScrollVideo = () => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loaded, setLoaded] = useState(false);

  // Effect 1 — preload all frames into memory
  
  useEffect(() => {
    let loadedCount = 0;
    const frameImages = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/frame_${i.toString().padStart(3, '0')}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = frameImages;
          setLoaded(true);
        }
      };
      frameImages.push(img);
    }
  }, []);

  // Effect 2 — setup canvas + GSAP scrub once frames are ready
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    // Match canvas resolution to its rendered size × device pixel ratio
    const setupCanvas = () => {
      const scale = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      context.scale(scale, scale);
    };

    setupCanvas();

    const drawFrame = (index) => {
      const img = imagesRef.current[index];
      if (!img?.complete) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    };

    // Draw first frame immediately so canvas isn't blank
    drawFrame(0);

    const frameIndex = { frame: 0 };

    gsap.to(frameIndex, {
      frame: TOTAL_FRAMES - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=200%",
        scrub: 0.5,
        pin: true,
      },
      onUpdate: () => drawFrame(Math.round(frameIndex.frame)),
    });

    // Re-setup canvas on window resize to keep quality sharp
    window.addEventListener('resize', setupCanvas);

    return () => {
      ScrollTrigger.getAll().forEach(t => t.kill());
      window.removeEventListener('resize', setupCanvas);
    };
  }, [loaded]);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from("#about-us-text", {
      scrollTrigger: {
        trigger: "#about-us-text",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  return () => ctx.revert();
}, []);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from("#our-team", {
      scrollTrigger: {
        trigger: "#our-team",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
        markers: true,
      },

      x: -100,
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  return () => ctx.revert();
}, []);

useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from("#our-vision", {
      scrollTrigger: {
        trigger: "#our-vision",
        start: "top 50%",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      x: 200,
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  return () => ctx.revert();
}, []);


useEffect(() => {
  const ctx = gsap.context(() => {
    gsap.from("#our-services", {
      scrollTrigger: {
        trigger: "#our-services",
        start: "top 60%",
        end: "bottom top",
        scrub: true,
        markers: true,
      },
      x: -100,
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out"
    });
  });

  return () => ctx.revert();
}, []);


  return (
    <section className="relative w-full bg-black overflow-hidden">
      {!loaded && (
        <div className="flex items-center justify-center h-screen bg-black text-white text-sm tracking-widest ">
          LOADING...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full h-screen"
        style={{
          display: loaded ? "block" : "none",
          imageRendering: "crisp-edges",
        }}
      />
    
        <div className='absolute flex flex-col items-center justify-center top-[10%] w-full gap-4' id='about-us-text'>

            <h1 className='text-9xl font-bold text-[#c9a87c] font-cinzel'>Who we are<br /></h1>
            
            <p className='text-xl text-[#e8ddd5] font-inter'>Crafting immersive experiences where design meets purpose.</p>

        </div>

        <div className="absolute grid grid-cols-4 grid-rows-4 gap-10 w-full top-[30%] p-10" id='our-team'>


          <div className="col-span-2 row-span-1 flex flex-col items-start justify-center gap-6 px-16 z-20 w-full bg-[#c9a87c]">
   

            <p className="text-4xl text-[#8b5a3c] font-inter my-4 py-4">
                A diverse group of designers, developers, and creative thinkers united by a shared passion for excellence. Together we transform ideas into meaningful experiences through collaboration and innovation.
            </p>
          </div>

          <div className="col-span-2 row-span-3 flex flex-col items-start justify-center gap-6 px-16 z-20 w-full bg-[#c9a87c]" id ='our-vision'>


            <p className="text-4xl text-[#8b5a3c] font-inter">
                To push the boundaries of digital creativity and deliver unforgettable experiences — blending creativity, technology, and purpose to craft work that is visually striking, meaningful, and timeless.
            </p>
          </div>
          

          <div className="col-span-2 row-span-3 flex flex-col items-start justify-center gap-6 px-16 z-20 w-full bg-[#c9a87c]" id ='our-services'>
   

            <p className="text-4xl text-[#8b5a3c] font-inter">
              We help brands find their digital voice — combining creative direction with data-driven thinking to deliver work that resonates and performs.            </p>
          </div>

        </div>

    </section>
  );
};

export default ScrollVideo;