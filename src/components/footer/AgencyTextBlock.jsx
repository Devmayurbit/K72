
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);

const AgencyTextBlock = () => {
  const wrapRef = useRef(null);

  useGSAP(() => {
    gsap.from(wrapRef.current.querySelectorAll("[data-reveal]"), {
      y: 24,
      opacity: 0,
      duration: 0.6,
      ease: "power2.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: wrapRef.current,
        start: "top 75%",
        toggleActions: "play none none reverse",
      },
    });
  });

  return (
    <section
      ref={wrapRef}
      className="w-full bg-white text-black px-6 md:px-10 lg:px-16 py-16 md:py-24"
    >
      {/* Heading + right list */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-start mb-12 md:mb-16">
        <h2
          data-reveal
          className="text-2xl md:text-3xl font-semibold tracking-tight"
        >
          Expertise
        </h2>

        <ul
          data-reveal
          className="md:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-2 text-lg md:text-xl"
        >
          <li>Stratégie</li>
          <li>Publicité</li>
          <li>Branding</li>
          <li>Design</li>
          <li>Contenu</li>
        </ul>
      </div>

      {/* Three columns of copy */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12 lg:gap-16 text-base md:text-lg leading-relaxed">
        <p data-reveal>
          Nos projets_ naissent dans l’humilité, grandissent dans la curiosité
          et vivent grâce à la créativité sous toutes ses formes.
        </p>
        <p data-reveal>
          Notre création_ bouillonne dans un environnement où le talent a le goût
          d’exploser. Où on se sent libre d’être la meilleure version de soi‑même.
        </p>
        <p data-reveal>
          Notre culture_ c’est l’ouverture aux autres. Point. Tout l’équipage
          participe à bâtir une agence dont on est fiers.
        </p>
      </div>
    </section>
  );
};

export default AgencyTextBlock;
