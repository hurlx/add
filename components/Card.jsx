"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const cardsData = [
  {
    id: 1,
    frontImage: "/images/4/Black.jpg",
    backImage: "/images/4/White.jpg",
  },
  {
    id: 2,
    frontImage: "/images/2/Kaki.jpg",
    backImage: "/images/2/Phosphorescent.jpg",
  },
  {
    id: 3,
    frontImage: "/images/1/Kaki.jpg",
    backImage: "/images/1/Coffee.jpg",
  },
];

export default function Cards() {
  const [flippedCards, setFlippedCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const toggleFlip = (id) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  const handleClick = () => {
    setLoading(true);
    router.push("/Bag");
  };

  return (
    <section className="p-6">
     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            onClick={() => toggleFlip(card.id)}
            // 👇 Sizing changes here to match original CSS:
            // - `w-full`: Matches width: 100%
            // - `max-w-[300px]`: Matches max-width: 300px (using arbitrary value for exactness)
            // - `aspect-[5/7]`: Matches aspect-ratio: 5 / 7
            // - `perspective-1000`: Matches perspective. (Tailwind default is 1000px, 1500px would require custom config).
            // - Removed `sm:aspect-auto` and `sm:h-80` as the original relied solely on aspect-ratio for height.
            className={`card flex flex-col cursor-pointer relative perspective-1000 
                        w-full max-w-[300px] aspect-[5/7]
                        ${flippedCards.includes(card.id) ? "flipped" : ""} 
                        ${index === 0 ? "active-card" : ""}`
            }
          >
            <div className="card-wrapper w-full h-64 perspective">
              <div className="flip-card-inner w-full h-full relative transition-transform duration-500 transform-style-preserve-3d"
                   style={{
                     transform: flippedCards.includes(card.id)
                       ? "rotateY(180deg)"
                       : "rotateY(0deg)",
                   }}>
                {/* Front */}
                <div className="flip-card-front absolute w-full h-full backface-hidden">
                  <img
                    src={card.frontImage}
                    alt={`Front of Card ${card.id}`}
                    draggable="false"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>

                {/* Back */}
                <div className="flip-card-back absolute w-full h-full backface-hidden transform rotate-y-180">
                  <img
                    src={card.backImage}
                    alt={`Back of Card ${card.id}`}
                    draggable="false"
                    className="w-full h-full object-cover rounded-xl"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Centered Button */}
      <div className="w-full flex justify-center mt-8">
        <button
          onClick={handleClick}
          disabled={loading}
          className={`relative px-6 py-3 text-lg font-semibold text-pink-600 transition duration-300 transform ${
            loading ? "opacity-50 cursor-not-allowed" : "hover:text-pink-400 hover:scale-110"
          }`}
        >
          <span className="relative z-10">
            {loading ? "جارٍ التحميل..." : "اشتري الآن"}
          </span>
          <span
            aria-hidden="true"
            className="absolute inset-0 rounded pointer-events-none opacity-0 transition-opacity duration-300 hover:opacity-80 hover:blur-sm hover:shadow-pink-500"
          />
        </button>
      </div>
    </section>
  );
}
