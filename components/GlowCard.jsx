"use client";

import { useRef } from "react";

const GlowCard = ({
  card,
  index,
  children,
  style = {},
  className = "",
  ...rest
}) => {
  const cardRefs = useRef([]);

  const updateAngle = (clientX, clientY, el) => {
    const rect = el.getBoundingClientRect();
    const x = clientX - rect.left - rect.width / 2;
    const y = clientY - rect.top - rect.height / 2;
    let angle = (Math.atan2(y, x) * 180) / Math.PI;
    angle = (angle + 360) % 360;
    // set CSS custom-prop, always include “deg”
    el.style.setProperty("--start", `${angle + 60}deg`);
  };

  const handleMouseMove = (i) => (e) => {
    const el = cardRefs.current[i];
    if (el) updateAngle(e.clientX, e.clientY, el);
  };

  const handleTouchMove = (i) => (e) => {
    const el = cardRefs.current[i];
    if (!el || !e.touches.length) return;
    const { clientX, clientY } = e.touches[0];
    updateAngle(clientX, clientY, el);
  };

  // default style you need, merged with whatever user passed in
  const mergedStyle = {
    touchAction: "pan-y",
    "--start": "60deg",   // initial position
    ...style,
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onTouchMove={handleTouchMove(index)}
      className={
        "carde carde-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column " +
        className
      }
      style={mergedStyle}
      {...rest}
    >
      <div className="glow"></div>
      {children}
    </div>
  );
};

export default GlowCard;

