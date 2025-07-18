"use client";
import GlassMorphCard from "./End";

const products = [
  {
    name: "Aeris Edge Bag",
    shortDescription: "Sculptural form meets soft structure",
    image: "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
    hoverImage: "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
    price: 420,
    tag: "",
    id: "1",
    slug: 'tote'
  },
  {
    name: "Nova Mini Cross",
    shortDescription: "Sleek, lightweight daily essential",
    image: "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
    hoverImage: "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
    price: 280,
    tag: "",
    id: "2",
    slug: 'canvas-tote'
  },
  {
    name: "Orbit Tote",
    shortDescription: "Minimal tote with smart compartments",
    image: "/images/H0ae4bbef278548c2bd6c0ad514d2b96d8.jpg_720x720q50.jpg",
    hoverImage: "/images/H5d80da696dab429c913933ac36e0a34cF.jpg_720x720q50.jpg",
    price: 360,
    tag: "",
    id: "3",
    slug: 'canvas'
  },
  {
    name: "Orbit Tote",
    shortDescription: "Minimal tote with smart compartments",
    image: "/images/Brown.jpg",
    hoverImage: "/images/Coffee.jpg",
    price: 360,
    tag: "",
    id: "4",
    slug: 'gg'
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
