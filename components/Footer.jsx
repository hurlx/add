'use client';

import { useRouter } from 'next/navigation';
import { socialImgs } from '@/constants';
import { useEffect, useRef, useTransition, useState } from 'react';

const Spinner = () => (
  <svg
    className="animate-spin h-5 w-5 text-gray-600"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
    />
  </svg>
);

const Footer = () => {
  const footerRef = useRef(null);
  const lastScrollY = useRef(0);
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;

      if (!footerRef.current) return;

      if (Math.abs(current - lastScrollY.current) > 5) {
        if (current > lastScrollY.current) {
          footerRef.current.style.transform = 'translateY(150%)';
        } else {
          footerRef.current.style.transform = 'translateY(0%)';
        }
        lastScrollY.current = current;
      }
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSocialClick = (social) => {
    startTransition(() => {
      if (social.name === 'Home') {
        router.push('/');
      } else if (social.name === 'Bag') {
        router.push('/Bag');
      } else if (social.name === 'Email') {
        router.push('/Contact');
      } else if (social.name === 'Info') {
        router.push('/Detail');
      } else if (social.url) {
        window.open(social.url, '_blank');
      }
    });
  };

  return (
    <footer
      ref={footerRef}
      className="fixed bottom-5 left-0 right-0 mx-auto w-fit z-40 transition-transform duration-500 ease-out"
    >
      <div className="mx-auto w-fit relative">
        <div className="bg social-wrapper h-14 w-[17rem] overflow-visible rounded-xl flex items-center justify-around relative">
          <div className="socials flex items-center gap-2 relative">
            {socialImgs.map((socialImg, index) => (
              <div
                key={index}
                onClick={() => handleSocialClick(socialImg)}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`cursor-pointer size-10 flex flex-col items-center justify-center rounded-lg border border-[#ffffff] transition-colors duration-400 relative ${
                  isPending
                    ? 'opacity-50 pointer-events-none'
                    : 'hover:bg-[#e9afcd]'
                }`}
              >
                {/* Tooltip above this button */}
                {hoveredIndex === index && (
                  <div className="absolute -top-8 bg-[#d2cfdf] text-gray-800 text-xs px-3 py-1 rounded-lg shadow-lg whitespace-nowrap pointer-events-none">
                    {socialImg.name}
                  </div>
                )}

                {isPending ? (
                  <Spinner />
                ) : (
                  <img
                    src={socialImg.imgPath}
                    alt={socialImg.name || 'social icon'}
                    className="w-5 h-5 object-contain pointer-events-none"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
