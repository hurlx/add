"use client";

import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const updateAngle = (clientX, clientY, element) => {
    const rect = element.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    let angle = (Math.atan2(y, x) * 180) / Math.PI;
    angle = (angle + 360) % 360;
    element.style.setProperty("--start", `${angle + 60}deg`);
  };

  const handleMouseMove = (i) => (e) => {
    const element = cardRefs.current[i];
    if (!element) return;
    updateAngle(e.clientX, e.clientY, element);
  };

  const handleTouchMove = (i) => (e) => {
    const element = cardRefs.current[i];
    if (!element || !e.touches.length) return;
    const { clientX, clientY } = e.touches[0];
    updateAngle(clientX, clientY, element);
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

