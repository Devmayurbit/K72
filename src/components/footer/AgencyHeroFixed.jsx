// src/pages/AgencyHeroMarquee.jsx
import React, { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const IMAGES = [
  "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
  "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
];

const AgencyHeroMarquee = () => {
  const wrapRef = useRef(null);
  const stackRef = useRef(null);
  const marqueesRef = useRef([]);
  const imgsRef = useRef([]);

  // helper to push marquee refs
  const setMarqueeRef = (el, i) => {
    if (el) marqueesRef.current[i] = el;
  };
  const setImgRef = (el, i) => {
    if (el) imgsRef.current[i] = el;
  };

  useGSAP(() => {
    // Crossfade slideshow for images
    gsap.set(imgsRef.current, { opacity: 0 });
    if (imgsRef.current[0]) gsap.set(imgsRef.current[0], { opacity: 1 });

    const fadeTl = gsap.timeline({ repeat: -1, repeatDelay: 0, defaults: { ease: "power2.inOut" } });
    imgsRef.current.forEach((_, i) => {
      const next = (i + 1) % imgsRef.current.length;
      fadeTl
        .to(imgsRef.current[i], { opacity: 0, duration: 1.2 }, "+=2.8")
        .to(imgsRef.current[next], { opacity: 1, duration: 1.2 }, "<");
    });

    // Infinite marquee loops (one left-to-right, one right-to-left)
    marqueesRef.current.forEach((row, idx) => {
      if (!row) return;
      // duplicate content once for seamless loop
      const inner = row.querySelector(".marquee-track");
      if (!inner) return;
      const clone = inner.cloneNode(true);
      row.appendChild(clone);

      // measure width of one track
      const trackWidth = inner.getBoundingClientRect().width;

      // animate x from 0 to -trackWidth (or reverse), then repeat seamlessly
      const dir = idx % 2 === 0 ? -1 : 1; // alternate directions
      gsap.fromTo(
        row.children,
        { x: 0 },
        {
          x: dir * -trackWidth,
          duration: 12,
          ease: "none",
          repeat: -1,
          modifiers: {
            x: (x) => {
              // keep values modulo trackWidth to avoid drift
              const val = parseFloat(x);
              const mod = ((val % (dir * -trackWidth)) + (dir * -trackWidth)) % (dir * -trackWidth);
              return `${mod}px`;
            },
          },
        }
      );
    });

    // Optional: image parallax on scroll, text unaffected
    gsap.to(stackRef.current, {
      yPercent: -6,
      ease: "none",
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.5,
      },
    });
  });

  return (
    <section
      ref={wrapRef}
      className="relative min-h-[95vh] w-full bg-black text-[#d2ff38] overflow-hidden"
    >
      {/* Top marquee */}
      <div
        ref={(el) => setMarqueeRef(el, 0)}
        className="relative w-full overflow-hidden whitespace-nowrap py-4 md:py-6"
      >
        <div className="marquee-track inline-flex gap-8 md:gap-12 text-[9vw] md:text-[6vw] lg:text-[4.5vw] font-extrabold uppercase">
          <span>Isabeau Beauchemin</span>
          <span>Directrice Production</span>
          <span>Isabeau Beauchemin</span>
          <span>Directrice Production</span>
        </div>
      </div>

      {/* Portrait stack with crossfade */}
      <div
        ref={stackRef}
        className="relative mx-auto w-[86vw] md:w-[56vw] lg:w-[42vw] aspect-[3/4] mt-[6vh] md:mt-[8vh] rounded-2xl overflow-hidden"
      >
        {IMAGES.map((src, i) => (
          <img
            key={i}
            ref={(el) => setImgRef(el, i)}
            src={src}
            alt={`Portrait ${i + 1}`}
            className="absolute inset-0 h-full w-full object-cover will-change-transform"
          />
        ))}
        <div className="pointer-events-none absolute bottom-4 right-4">
          <div className="bg-[#d2ff38] text-black px-3 py-1.5 rounded-full text-xs md:text-sm tracking-wide">
            Directrice de Production
          </div>
        </div>
      </div>

      {/* Bottom marquee */}
      <div
        ref={(el) => setMarqueeRef(el, 1)}
        className="relative w-full overflow-hidden whitespace-nowrap py-4 md:py-6 mt-[6vh]"
      >
        <div className="marquee-track inline-flex gap-8 md:gap-12 text-[9vw] md:text-[6vw] lg:text-[4.5vw] font-extrabold uppercase">
          <span>Isabeau Beauchemin</span>
          <span>Créativité — Culture — Stratégie</span>
          <span>Isabeau Beauchemin</span>
          <span>Créativité — Culture — Stratégie</span>
        </div>
      </div>
    </section>
  );
};

export default AgencyHeroMarquee;
