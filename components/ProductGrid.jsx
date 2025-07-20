"use client";
import GlassMorphCard from "./End";

const products = [
  {
    name: "Orbit Tote",
    shortDescription: "Minimal tote with smart compartments",
    image: "/images/1/Kaki.jpg",
    hoverImage: "/images/1/Coffee.jpg",
    price: 360,
    tag: "",
    id: "1",
    slug: 'gg'
  },
  {
    name: "Wavea",
    shortDescription: "حقيبة يد جلدية أنيقة ، بتصميم مموّج يدوي ومقبض علوي مجعد، مزودة بسلسلة ذهبية ووسم فاخر.",
    image: "/images/2/Kaki.jpg",
    hoverImage: "/images/2/White.jpg",
    price: 360,
    tag: "",
    id: "2",
    slug: 'aa'
  },
  // Add more products here
];

export default function ProductGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
      {products.map((product, index) => (
        <GlassMorphCard key={index} product={product} />
      ))}
    </div>
  );
}
