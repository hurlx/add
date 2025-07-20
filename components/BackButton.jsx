'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function BackButton() {
  const router = useRouter();
  const pathname = usePathname();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    // Show the button only if not on home page
    setShowButton(pathname !== '/');
  }, [pathname]);

  if (!showButton) return null;

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push('/'); // fallback
    }
  };

  return (
    <button
      onClick={handleBack}
      className="fixed top-4 left-4 z-50 px-4 py-2 bg-white/60 text-gray-500 cursor-pointer duration-300 transition-colors rounded hover:bg-white/95"
    >
      ◀ رجوع
    </button>
  );
}