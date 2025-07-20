"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import gsap from "gsap";
import AnimatedTitle1 from "./AnimatedTitle1";

const slides = [
	{ image: "/images/3/2.jpg", title: "تصاميم تُكمل إطلالتك" },
	{ image: "/images/3/3.jpg", title: "أناقة تُرافقك أينما كنت" },
	{ image: "/images/3/4.jpg", title: "اختر حقيبتك المفضلة" },
];

const Header = () => {
	const [currentSlide, setCurrentSlide] = useState(0);
	const [loading, setLoading] = useState(false);
	const [showArrow, setShowArrow] = useState(true); // controls arrow visibility
	const imageRef = useRef(null);
	const textRef = useRef(null);
	const router = useRouter();

	// Slide auto change
	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prev) => (prev + 1) % slides.length);
		}, 5000);
		return () => clearInterval(interval);
	}, []);

	// Animate text on slide change
	useEffect(() => {
		gsap.fromTo(
			textRef.current,
			{ y: 40, opacity: 0 },
			{ y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 0.3 }
		);
	}, [currentSlide]);

	// Scroll listener to hide arrow on scroll
	useEffect(() => {
		const onScroll = () => {
			if (window.scrollY > 30) {
				setShowArrow(false);
			} else {
				setShowArrow(true);
			}
		};
		window.addEventListener("scroll", onScroll);
		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	const handleClick = () => {
		setLoading(true);
		router.push("/Bag");
	};

	return (
		<div
			id="hero"
			className="relative flex justify-center sm:mt-7 max-sm:-mt-20 items-center h-screen"
		>
			<div className="w-full h-[90%] max-sm:h-[60%] flex items-center justify-center overflow-hidden">
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

					<div className="absolute inset-0 z-10 flex flex-col items-center justify-center text-center px-6 gap-6">
						<h1
							ref={textRef}
							dir="rtl"
							className="text-4xl font-bold text-black drop-shadow-lg"
						>
							<AnimatedTitle1 title={slides[currentSlide].title} isArabic />
						</h1>

						<button
							onClick={handleClick}
							disabled={loading}
							className={`relative px-8 py-3 rounded-xl bg-pink-400/40 backdrop-blur-md border border-white/30 text-white font-semibold tracking-wide overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-pink-400/50 ${
								loading ? "cursor-not-allowed opacity-70" : ""
							}`}
							aria-label="Shop Now"
						>
							<span className="absolute top-0 left-[-50%] w-[50%] h-full bg-gradient-to-r from-white/40 to-transparent blur-md opacity-0 pointer-events-none transition-opacity duration-500 hover:opacity-80 animate-shine"></span>
							<span className="relative z-10">
								{loading ? "جارٍ التحميل..." : "تسوقي الآن"}
							</span>
						</button>
					</div>
				</div>
			</div>

			{/* Down Arrow for small screens */}
			<div
				className={`fixed bottom-20 left-1/2 -translate-x-1/2 text-pink-400 text-4xl select-none max-sm:block hidden transition-opacity duration-500 ${
					showArrow ? "opacity-100" : "opacity-0 pointer-events-none"
				}`}
				aria-label="Scroll down"
			>
				{/* You can replace this SVG with any arrow icon */}
				<svg
					xmlns="http://www.w3.org/2000/svg"
					className="h-10 w-10 animate-bounce"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
					strokeWidth={2}
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M19 9l-7 7-7-7"
					/>
				</svg>
			</div>

			<style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(200%);
          }
        }
        .animate-shine {
          animation-play-state: paused;
          animation: shine 2s linear infinite;
        }
        button:hover .animate-shine {
          animation-play-state: running;
        }
      `}</style>
		</div>
	);
};

export default Header;
