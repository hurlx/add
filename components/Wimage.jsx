"use client";

import { useState, useEffect, useRef } from "react";
import gsap from "gsap";

const slides = [
	{
		image: "/images/viral-amazon-bag-updated-lead3.jpg",
		title: "تصاميم تُكمل إطلالتك",
	},
	{
		image: "/images/viral-amazon-bag-updated-lead3.jpg",
		title: "أناقة تُرافقك أينما كنت",
	},
	{
		image: "/images/viral-amazon-bag-updated-lead3.jpg",
		title: "اختر حقيبتك المفضلة",
	},
];

const Wimage = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const imageRef = useRef(null);
	const textRef = useRef(null);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		// Animate text fade-up
		gsap.fromTo(
			textRef.current,
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
		);
	}, [currentSlide]);

	return (
		<div className="flex justify-center items-center bg-[#faebf2] h-screen ">
			<div className="w-[94%] h-[24rem] flex items-center justify-center overflow-hidden">
				<div className="relative w-full h-full max-h-[100vh] max-w-[100vw] overflow-hidden rounded-xl">
					<div className="absolute inset-0 z-0">
						{slides.map((slide, index) => (
							<img
								key={index}
								ref={index === currentSlide ? imageRef : null}
								src={slide.image}
								alt={`Slide ${index + 1}`}
								className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
									index === currentSlide ? "opacity-100" : "opacity-0"
								}`}
							/>
						))}
					</div>
				</div>
				
			</div>
		</div>
	);
};
export default Wimage;
