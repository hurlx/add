"use client";
import { use, useState, useEffect } from "react";
import { products } from "@/app/Lib/data";

export default function BagDetailPage(props) {
	const { slug } = use(props.params);

	const bag = products.find((item) => item.slug === slug);

	const [selectedImage, setSelectedImage] = useState(bag?.images?.[0]);
	const [selectedColor, setSelectedColor] = useState(bag?.colors?.[0]);

	if (!bag) {
		return <main className="p-10 text-xl">المنتج غير موجود</main>;
	}

	const [isMobile, setIsMobile] = useState(false);
	useEffect(() => {
		setIsMobile(/Android|iPhone|iPad|iPod/i.test(navigator.userAgent));
	}, []);

	const phone = "963997206837";

	const generateOrderMessage = () => {
		const colorName = selectedColor?.name || bag.colors[0]?.name || "غير معروف";
		return `مرحباً، أود طلب حقيبة "${bag.name}" باللون ${colorName}. السعر: $${bag.price}. هل هي متوفرة؟`;
	};

	const encodedMessage = encodeURIComponent(generateOrderMessage());
	const whatsappURL = isMobile
		? `whatsapp://send?phone=${phone}&text=${encodedMessage}`
		: `https://web.whatsapp.com/send?phone=${phone}&text=${encodedMessage}`;

	return (
		<main dir="rtl" className="min-h-screen mt-3 p-10 text-right">
			<div className="max-w-4xl mx-auto flex flex-col items-center justify-center">
				<h1 className="text-3xl font-bold mb-4">{bag.name}</h1>

				{selectedImage && (
					<img
						src={selectedImage}
						alt="صورة الحقيبة"
						className="w-[500px] rounded-xl mb-6 shadow-md transition duration-300"
					/>
				)}

				<p className="text-lg text-gray-700 mb-2">{bag.shortDescription}</p>
				<p className="text-xl font-semibold">${bag.price}</p>
				<p className="text-sm text-gray-500 mt-2">التصنيف: {bag.tag}</p>

				<div className="mt-6 flex flex-col items-center">
					<h3 className="text-lg font-semibold mb-2">اختر اللون المناسب لك</h3>
					<div className="flex gap-4">
						{bag.colors.map((color, index) => (
							<div
								key={index}
								className={`flex items-center gap-2 cursor-pointer ${
									selectedColor?.hex === color.hex
										? "opacity-100"
										: "opacity-60"
								}`}
								onClick={() => setSelectedColor(color)}
							>
								<div
									className={`w-6 h-6 rounded-full border-2 ${
										selectedColor?.hex === color.hex
											? "border-black"
											: "border-gray-300"
									}`}
									style={{ backgroundColor: color.hex }}
									title={color.name}
								/>
								<span className="text-sm text-gray-700">{color.name}</span>
							</div>
						))}
					</div>
				</div>

                {/* 👇 CHANGES ARE HERE */}
				<div className="flex gap-4 mt-6 overflow-x-auto flex-nowrap w-full justify-center pb-2 scrollbar-hide"> {/* Added overflow-x-auto, flex-nowrap, w-full, justify-center, pb-2 */}
					{bag.images?.map((img, i) => (
						<img
							key={i}
							src={img}
							alt={`صورة مصغرة-${i}`}
							onClick={() => setSelectedImage(img)}
							className={`flex-shrink-0 w-20 h-20 rounded-md object-cover cursor-pointer border-2 ${ // Added flex-shrink-0
								selectedImage === img ? "border-black" : "border-transparent"
							}`}
						/>
					))}
				</div>

				<a
					href={whatsappURL}
					target="_blank"
					rel="noopener noreferrer"
					className="relative mt-10 inline-block group"
				>
					<div className="flex items-center gap-3 px-6 py-3 rounded-full bg-[#25D366] text-white font-bold text-lg shadow-lg transition-all duration-300 ease-in-out group-hover:bg-[#1ebe57] group-hover:shadow-2xl group-hover:scale-105 active:scale-95 overflow-hidden">
						<img src="/icons/whatsapp.svg" alt="WhatsApp" className="w-6 h-6" />
						<span className="relative z-10">الطلب عبر واتساب</span>

						{/* Shine Effect */}
						<span className="absolute left-0 top-0 w-full h-full bg-gradient-to-r from-white/20 to-white/0 opacity-0 group-hover:opacity-80 blur-md animate-shine pointer-events-none" />
					</div>

					{/* Animation Keyframes */}
					<style>{`
    @keyframes shine {
      0% { transform: translateX(-100%); }
      100% { transform: translateX(200%); }
    }
    .animate-shine {
      animation: shine 1.8s linear infinite;
    }
  `}</style>				</a>
			</div>
		</main>
	);
}
