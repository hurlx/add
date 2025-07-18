"use client";

import { useState, useEffect, useRef } from "react";
import { useRouter }          from "next/navigation";
import gsap                   from "gsap";
import AnimatedTitle1         from "./AnimatedTitle1";

const slides = [
  { image: "/images/8.jpg", title: "تصاميم تُكمل إطلالتك" },
  { image: "/images/7.jpg", title: "أناقة تُرافقك أينما كنت" },
  { image: "/images/6.jpg", title: "اختر حقيبتك المفضلة" },
];

export default function Header() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading]         = useState(false);
  const [showArrow, setShowArrow]     = useState(true);
  const imageRef = useRef(null);
  const textRef  = useRef(null);
  const router   = useRouter();

  // auto-rotate
  useEffect(() => {
    const id = setInterval(
      () => setCurrentSlide(i => (i + 1) % slides.length),
      5000
    );
    return () => clearInterval(id);
  }, []);

  // text animation
  useEffect(() => {
    gsap.fromTo(
      textRef.current,
      { y: 40, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
    );
  }, [currentSlide]);

  // hide arrow on scroll
  useEffect(() => {
    const onScroll = () => setShowArrow(window.scrollY < 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = () => {
    setLoading(true);
    router.push("/Bag");
  };

  return (
    <>
      <div
        id="hero"
        className="relative flex justify-center sm:mt-7 max-sm:-mt-20 items-center h-screen"
      >
        {/* … all your markup here … */}
      </div>

      <style jsx>{`
        @keyframes shine {
          0%   { transform: translateX(-100%); }
          100% { transform: translateX(200%);  }
        }
        .animate-shine {
          animation-play-state: paused;
          animation: shine 2s linear infinite;
        }
        button:hover .animate-shine {
          animation-play-state: running;
        }
      `}</style>
    </>
  );
}
