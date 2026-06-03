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

  return (
    <section className="w-full bg-black">
      {!loaded && (
        <div className="flex items-center justify-center h-screen bg-black text-white text-sm tracking-widest opacity-50">
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
    </section>
  );
};

export default ScrollVideo;