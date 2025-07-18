import React, { useState } from "react";

const cardsData = [
  {
    id: 1,
    frontImage: "/images/1.jpg",
    backImage: "/images/2.jpg",
  },
  {
    id: 2,
    frontImage: "/images/3.jpg",
    backImage: "/images/4.jpg",
  },
  {
    id: 3,
    frontImage: "/images/5.jpg",
    backImage: "/images/6.jpg",
  },
];

export default function Cards() {
  const [flippedCards, setFlippedCards] = useState([]);

  const toggleFlip = (id) => {
    setFlippedCards((prev) =>
      prev.includes(id) ? prev.filter((cardId) => cardId !== id) : [...prev, id]
    );
  };

  return (
    <section className="cards">
      <div className="cards-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            className={`card cursor-pointer  ${flippedCards.includes(card.id) ? "flipped" : ""} ${
              index === 0 ? "active-card" : ""
            }`}
            onClick={() => toggleFlip(card.id)}
          >
            <div className="card-wrapper">
              <div className="flip-card-inner select-none">
                {/* Front */}
                <div className="flip-card-front select-none">
                  <img
                    src={card.frontImage}
                    alt={`Front of Card ${card.id}`}
                    draggable="false"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "1rem",
                    }}
                  />
                </div>

                {/* Back */}
                <div className="flip-card-back select-none">
                  <img
                    src={card.backImage}
                    alt={`Back of Card ${card.id}`}
                    draggable="false"
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      borderRadius: "1rem",
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}