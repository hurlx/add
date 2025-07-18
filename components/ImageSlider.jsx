'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

const ShowcaseStackSlider = ({ images }) => {
  const [order, setOrder] = useState([0, 1, 2]);
  const refs = [useRef(null), useRef(null), useRef(null)];

  const animate = () => {
    const newOrder = [...order.slice(1), order[0]];

    refs.forEach((ref, i) => {
      if (!ref.current) return;
      const z = 3 - i;
      const scale = 1 - i * 0.05;
      const opacity = 1 - i * 0.2;
      gsap.to(ref.current, {
        zIndex: z,
        scale: scale,
        opacity: opacity,
        duration: 0.6,
        ease: 'power2.inOut',
      });
    });

    setTimeout(() => setOrder(newOrder), 600);
  };

  useEffect(() => {
    const interval = setInterval(animate, 3000);
    return () => clearInterval(interval);
  }, [order]);

  return (
    <div className="relative w-[400px] h-[300px] mx-auto mb-10">
      {order.map((imgIndex, i) => (
        <img
          key={imgIndex}
          ref={refs[i]}
          src={images[imgIndex]}
          className="absolute w-full h-full object-cover rounded-xl shadow-xl"
          style={{
            zIndex: 3 - i,
            transform: `scale(${1 - i * 0.05})`,
            opacity: 1 - i * 0.2,
            transition: 'all 0.5s ease',
          }}
        />
      ))}
    </div>
  );
};

export default ShowcaseStackSlider;
