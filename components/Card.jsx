"use client";

import React, { useState, useRef, useEffect } from "react";
import AnimatedTitle from "./AnimatedTitle";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import Card from "@/components/Card";

gsap.registerPlugin(ScrollTrigger);

const Info = () => {
	const sectionRef = useRef(null);
	const cardWrapperRef = useRef(null);

	useGSAP(() => {
		// Animate the whole section (fade in)
		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0, y: 50 },
			{
				opacity: 1,
				y: 0,
				duration: 1.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 80%",
					toggleActions: "play none none reverse",
				},
			}
		);

		// Animate cards inside .cards-container
		gsap.fromTo(
			cardWrapperRef.current.querySelectorAll(".card-wrapper"), // Or whatever your card item class is
			{ opacity: 0, y: 40 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				stagger: 0.2,
				ease: "power3.out",
				scrollTrigger: {
					trigger: sectionRef.current,
					start: "top 85%",
				},
			}
		);
	}, []);

	return (
		<div ref={sectionRef}>
			<h1 dir="rtl" className="text-black font-bold text-3xl text-center mb-12">
				<AnimatedTitle title="الأناقة تبدأ من هنا" isArabic />
			</h1>

			<div ref={cardWrapperRef}>
				<Card />
			</div>
		</div>
	);
};

export default Info;
