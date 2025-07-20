"use client";
import { useState } from "react";
import Link from "next/link";

export default function GlassMorphCard({ product }) {
	const [hovered, setHovered] = useState(false);

	return (
		<div
			onMouseEnter={() => setHovered(true)}
			onMouseLeave={() => setHovered(false)}
			className="group rounded-xl overflow-hidden shadow-xl transition-transform duration-300 hover:-translate-y-2 cursor-pointer"
		>
			<Link href={`/Bag/${product.slug}`} className="block">
				<div className="relative w-full h-[460px] max-sm:h-[430px]">
					{/* Default image */}
					<img
						src={product.image}
						alt={product.name}
						draggable="false"
						className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
							hovered ? "opacity-0" : "opacity-100"
						}`}
					/>
					{/* Hover image */}
					<img
						src={product.hoverImage}
						draggable="false"
						alt={`${product.name} alternate view`}
						className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
							hovered ? "opacity-100" : "opacity-0"
						}`}
					/>

					{/* Glass Morph Info */}
					<div className="absolute bottom-0 w-full p-5 bg-white/30 backdrop-blur-lg text-gray-500">
						<h3 className="text-lg font-semibold drop-shadow">{product.name}</h3>
						<p className="text-sm text-gray-500 mb-3">
							{product.shortDescription}
						</p>
						<div className="flex justify-between items-center">
						<span className="text-md font-bold">$ {product.price}</span>
					</div>
					</div>
				</div>
			</Link>
		</div>
	);
}
