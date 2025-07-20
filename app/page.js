"use client";

import { useRouter } from "next/navigation";
import { useTransition, useState } from "react";
import GradualGallery from "@/components/GradualGallery";
import Header from "@/components/Header";
import ShowcaseStackSlider from "@/components/ImageSlider";
import Info from "@/components/Info";
import Item from "@/components/Item";
import Test from "@/components/Test";

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

export default function Home() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [clicked, setClicked] = useState(null);

  // Define the sliders data here:
  const sliders = [
    {
      slug: "gg",
      images: [
       "/images/1/Coffee.jpg",
      "/images/1/Brown.jpg",
      "/images/1/Kaki.jpg",
        ],
    },
    {
      slug: "aa",
      images: [
       "/images/2/Black.jpg",
      "/images/2/Kaki.jpg",
      "/images/2/White.jpg",
      ],
    },
    {
      slug: "ab",
      images: [
        "/images/4/Black.jpg",
      "/images/4/Brown.jpg",
      "/images/4/White.jpg",
      ],
    },
  ];

  const handleClick = (slug, index) => {
    setClicked(index);
    startTransition(() => {
      router.push(`/Bag/${slug}`);
    });
  };

  return (
    <div className="overflow-hidden select-none">
      <Header />
      <Info />
      <Item />
      <GradualGallery />
      <Test />

      <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
        {sliders.map(({ slug, images }, index) => (
          <div
  key={slug}
  onClick={() => handleClick(slug, index)}
  className="cursor-pointer relative"
>
  {isPending && clicked === index && (
    <div className="absolute inset-0 z-20 bg-white/70 flex items-center justify-center rounded-xl">
      <Spinner />
    </div>
  )}
  <ShowcaseStackSlider images={images} />
</div>
        ))}
      </div>
    </div>
  );
}
