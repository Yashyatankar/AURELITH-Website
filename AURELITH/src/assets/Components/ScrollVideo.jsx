import { useEffect, useRef, useState } from 'react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger); // move outside component

const TOTAL_FRAMES = 105;

const ScrollVideo = () => {
  const canvasRef = useRef(null);
  const imagesRef = useRef([]);
  const [loaded, setLoaded] = useState(false);

  // Step 1 — preload all frames
  useEffect(() => {
    let loadedCount = 0;
    const frameImages = [];

    for (let i = 1; i <= TOTAL_FRAMES; i++) {
      const img = new Image();
      img.src = `/frames/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount === TOTAL_FRAMES) {
          imagesRef.current = frameImages;
          setLoaded(true);
        }
      };
      frameImages.push(img); // push the Image object, not img.src
    }
  }, []);

  // Step 2 — setup GSAP scrub after frames are loaded
  useEffect(() => {
    if (!loaded) return;

    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const scale = window.devicePixelRatio || 1;

    canvas.width = 1920 * scale;
    canvas.height = 1080 * scale;
    context.scale(scale, scale);

    const frameIndex = { frame: 0 };

    // Draw a specific frame onto canvas
    const drawFrame = (index) => {
      const img = imagesRef.current[index];
      if (!img?.complete) return;
      context.clearRect(0, 0, canvas.width, canvas.height);
      context.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);
    };

    // Draw first frame immediately
    drawFrame(0);

    // GSAP scroll scrub
    gsap.to(frameIndex, {
      frame: TOTAL_FRAMES - 1,
      snap: "frame",
      ease: "none",
      scrollTrigger: {
        trigger: canvas,
        start: "top top",
        end: "+=200%",   // scroll 2x screen height to go through all frames
        scrub: 0.5,      // slight smoothing
        pin: true,       // pins the canvas while scrubbing
      },
      onUpdate: () => drawFrame(Math.round(frameIndex.frame)),
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, [loaded]);

  return (
    <section className="w-full bg-black">
      {!loaded && (
        <div className="flex items-center justify-center h-screen bg-black text-white text-sm tracking-widest">
          LOADING...
        </div>
      )}
      <canvas
        ref={canvasRef}
        className="w-full"
        style={{ display: loaded ? "block" : "none" }}
      />
    </section>
  );
};

export default ScrollVideo;