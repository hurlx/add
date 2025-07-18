'use client';

import { gsap } from 'gsap';
import { useEffect, useRef } from 'react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import clsx from 'clsx';

gsap.registerPlugin(ScrollTrigger);

// Utility to detect Arabic characters
const isArabic = (text) => /[\u0600-\u06FF]/.test(text);

const AnimatedTitle = ({ title, containerClass }) => {
  const containerRef = useRef(null);
  const arabic = isArabic(title);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: '100 bottom',
          end: 'center bottom',
          toggleActions: 'play none none reverse',
        },
      });

      tl.to(
        containerRef.current.querySelectorAll('.animated-word'),
        {
          opacity: 1,
          transform: 'translate3d(0, 0, 0) rotateY(0deg) rotateX(0deg)',
          ease: 'power2.inOut',
          stagger: 0.02,
        },
        0
      );
    }, containerRef);

    return () => ctx.revert();
  }, [title]);

  return (
    <div
      ref={containerRef}
      className={clsx(
        'animated-title',
        containerClass,
        'text-white',
        arabic && 'rtl'
      )}
      dir={arabic ? 'rtl' : 'ltr'}
    >
      {title.split('\n')
        .map((line, lineIndex) => (
          <div
            key={lineIndex}
            className="flex-center max-w-full flex-wrap gap-2 px-10 md:gap-3"
          >
            {arabic
              ? line.split(' ').map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="animated-word inline-block mx-[2px]"
                    dangerouslySetInnerHTML={{ __html: word }}
                  />
                ))
              : line.split(' ').map((word, wordIndex) => (
                  <span
                    key={wordIndex}
                    className="animated-word inline-block mx-[2px]"
                    dangerouslySetInnerHTML={{ __html: word }}
                  />
                ))}
          </div>
        ))}
    </div>
  );
};

export default AnimatedTitle;