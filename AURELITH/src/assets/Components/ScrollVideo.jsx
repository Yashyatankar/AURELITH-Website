import { useEffect, useRef } from 'react'; 
import React from 'react'
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const ScrollVideo = () => {

    const TOTAL_FRAMES = 105;

    const videoRef = useRef(null);
    const [img, setImg] = useState([]);

    useEffect(() => {

        const frameImages = [];

        for(let i = 1; i <= TOTAL_FRAMES; i++) {

            const img = new Image();
            img.src = `/public/frames/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
            frameImages.push(img.src);
        }
        setImg(frameImages);

    }, []);

    useEffect(() => {
        if(img.length === 0) return;

        const canvas = videoRef.current;
        const context = canvas.getContext('2d');

        const scale = window.devicePixelRatio || 1;
        canvas.width = 1920 * scale;
        canvas.height = 1080 * scale;
        context.scale(scale, scale);

        const frameIndex = { frame: 0 };

        const rederer = () => {
            const img = new Image(frameIndex.frame);

            if (img?.complete) {
                context.clearRect(0, 0, canvas.width, canvas.height);
                context.drawImage(img, 0, 0, canvas.width / scale, canvas.height / scale);
            }

            gsap.to(frameIndex, {
                frame: TOTAL_FRAMES - 1,
                snap: "frame",
                ease: "none",
                scrollTrigger: {
                    trigger: canvas,
                    start: "top top",
                    end: "bottom bottom",
                    scrub: true,
                }, onUpdate: rederer,
            });
        }

    }, []);


  return (
    <section className="relative h-screen w-full bg-[#000000] overflow-hidden" ref={videoRef}>

    </section>
  )
}

export default ScrollVideo