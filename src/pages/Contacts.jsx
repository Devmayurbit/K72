import React, { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Contact() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    // Lock body scroll
    document.body.style.overflow = "hidden";
    // Marquee (infinite scroll loop)
    const marquee = marqueeRef.current;
    gsap.to(marquee, {
      xPercent: -50,
      repeat: -1,
      duration: 12,
      ease: "linear"
    });
    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <div style={{
      background: "#000", minHeight: "100vh", color: "white", position: "relative", overflow: "hidden",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"
    }}>
      <header style={{ padding: "2rem 0", textAlign: "center", width: "100%" }}>
        <h1 style={{
          fontSize: "clamp(2.5rem, 7vw, 8rem)",
          margin: 0, fontWeight: "bold", letterSpacing: "-0.03em"
        }}>
          POUR<br />PARLER POUR<br />PARLER
        </h1>
        <div style={{ fontSize: "1.3rem", margin: "1.5rem auto" }}>
          Dans un écran ou un bureau.<br />Chez vous. Chez nous.<br />Partout.
        </div>
        <div style={{ fontSize: "1.1rem", fontWeight: "bold" }}>
          525 Av. Viger O – Suite 400<br />
          Montréal, QC H2Z 1G6 →
        </div>
      </header>

      {/* Responsive Marquee */}
      <div style={{
        width: "100%", overflow: "hidden", height: "16vw", maxHeight: "90px", background: "transparent",
        margin: "40px auto", position: "relative"
      }}>
        <div
          ref={marqueeRef}
          style={{
            display: "inline-block", whiteSpace: "nowrap", fontWeight: 900,
            fontSize: "clamp(1rem, 5vw, 3rem)", color: "#111",
            background: "#D3FD50", height: "100%", lineHeight: "90px"
          }}
        >
          <span style={{ marginRight: "5vw" }}>
            .K72.CA BONJOUR .K72.CA BONJOUR .K72.CA BONJOUR .K72.CA BONJOUR
          </span>
          <span>
            .K72.CA BONJOUR .K72.CA BONJOUR .K72.CA BONJOUR .K72.CA BONJOUR
          </span>
        </div>
      </div>
    </div>
  );
}
