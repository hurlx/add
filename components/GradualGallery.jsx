"use client";

import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import AnimatedTitle from "./AnimatedTitle";

const Spinner = () => (
  <div className="flex items-center justify-center w-full h-full">
    <svg
      className="animate-spin h-10 w-10 text-gray-600"
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
  </div>
);

export default function GradualGallery() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [clickedIndex, setClickedIndex] = useState(null);

  // Define your image links and slugs here
  const images = [
    { src: "/images/1/Kaki.jpg", slug: "gg" },
    { src: "/images/2/White.jpg", slug: "aa" },
    { src: "/images/4/White.jpg", slug: "ab" },
  ];

  const handleClick = (slug, index) => {
    setClickedIndex(index);
    startTransition(() => {
      router.push(`/Bag/${slug}`);
    });
  };

  return (
    <div className="mt-20 select-none z-10">
      <h1 dir="rtl" className=" font-bold z-10">
        <AnimatedTitle title={`كل قطعة... حكايةُ ذوق`} isArabic />
      </h1>
      <div className="flex justify-center gap-6 px-6 py-10 pb-16 sel z-10">
        {images.map(({ src, slug }, index) => (
          <div
            key={index}
            onClick={() => handleClick(slug, index)}
            className={`relative cursor-pointer rounded-xl shadow-lg overflow-hidden ${
              index === 1 ? "sm:hidden md:block max-sm:hidden" : ""
            } ${
              index === 0 ? "translate-y-6" : ""
            } ${index === 2 ? "-translate-y-6 max-sm:hidden" : ""} w-[400px] h-[550px]`}
          >
            {isPending && clickedIndex === index && (
              <div className="absolute inset-0 z-20 bg-white/70 flex items-center justify-center">
                <Spinner />
              </div>
            )}
            <img
              src={src}
              alt={`Bag view ${index + 1}`}
              className="w-full h-full object-cover rounded-xl z-10"
              draggable="false"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
