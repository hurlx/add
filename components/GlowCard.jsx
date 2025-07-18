"use client";

import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  const handleTouchMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    if (e.touches.length === 0) return;

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    const touchX = touch.clientX - rect.left - rect.width / 2;
    const touchY = touch.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(touchY, touchX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onTouchMove={handleTouchMove(index)}
      className="carde carde-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
      'use client';

import { useRef } from "react";

const GlowCard = ({ card, index, children }) => {
  const cardRefs = useRef([]);

  const handleMouseMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const mouseX = e.clientX - rect.left - rect.width / 2;
    const mouseY = e.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(mouseY, mouseX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  const handleTouchMove = (index) => (e) => {
    const card = cardRefs.current[index];
    if (!card) return;
    if (e.touches.length === 0) return;

    const touch = e.touches[0];
    const rect = card.getBoundingClientRect();
    const touchX = touch.clientX - rect.left - rect.width / 2;
    const touchY = touch.clientY - rect.top - rect.height / 2;

    let angle = Math.atan2(touchY, touchX) * (180 / Math.PI);
    angle = (angle + 360) % 360;

    card.style.setProperty("--start", angle + 60);
  };

  return (
    <div
      ref={(el) => (cardRefs.current[index] = el)}
      onMouseMove={handleMouseMove(index)}
      onTouchMove={handleTouchMove(index)}
      className="carde carde-border timeline-card rounded-xl p-10 mb-5 break-inside-avoid-column"
      style={{ touchAction: "pan-y" }}
    >
      <div className="glow"></div>

      {children}
    </div>
  );
};

export default GlowCard;
    >
      <div className="glow"></div>

      {children}
    </div>
  );
};

export default GlowCard;
