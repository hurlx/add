"use client";

import { useRef } from "react";

const GlowCard = ({ index, children }) => {
  const cardRefs = useRef([]);

  const updateAngle = (clientX, clientY, card) => {
    const rect = card.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    let angle = ((Math.atan2(y, x) * 180) / Math.PI + 360) % 360;
    card.style.setProperty("--start", `${angle + 60}deg`);
  };

  const handleMouseMove = (idx) => (e) => {
    const card = cardRefs.current[idx];
    if (!card) return;
    updateAngle(e.clientX, e.clientY, card);
  };

  const handleTouchMove = (idx) => (e) => {
    const card = cardRefs.current[idx];
    if (!card || !e.touches.length) return;
    const { clientX, clientY } = e.touches[0];
    updateAngle(clientX, clientY, card);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onTouchMove={handleTouchMove(index)}
      className="carde carde-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
      style={{ touchAction: "pan-y", "--start": "60deg" }}
    >
      <div className="glow"></div>
      {children}
    </div>
  );
};

export default GlowCard;
