'use client';

import { navLinks } from '@/constants';
import { useEffect, useRef } from 'react';

const Navbar = () => {
  const navRef = useRef(null);
  let lastScrollY = useRef(0);

  // Scroll hide/show nav
  useEffect(() => {
    const onScroll = () => {
      const current = window.scrollY;
      if (!navRef.current) return;

      if (current > lastScrollY.current + 5) {
        navRef.current.style.transform = 'translateY(-150%)'; // hide upward
      } else if (current < lastScrollY.current - 5) {
        navRef.current.style.transform = 'translateY(0%)'; // show
      }

      lastScrollY.current = current;
    };

    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleSocialClick = (social) => {
    if (social.name === 'Home') {
      const hero = document.getElementById('hero');
      if (hero) {
        hero.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (social.url) {
      window.open(social.url, '_blank');
    }
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-5 left-0 right-0 mx-auto w-fit z-40 transition-transform duration-500 ease-out"
    >
      <div className="mx-auto w-fit">
        <div className="bg social-wrapper h-14 w-[32rem] max-sm:w-[25rem] overflow-hidden rounded-xl items-center justify-around flex">
          <div className="socials flex items-center gap-2">
            <nav className="desktop">
          <ul>
            {navLinks.map((social, index) => (
                <li key={index}
                onClick={() => handleSocialClick(social)}
                 className="group">
                <a>
                  <span>{social.name}</span>
                  <span className="underline" />
                </a>
              </li>
))}
</ul>
        </nav>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;