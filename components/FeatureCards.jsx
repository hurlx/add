import { abilities } from "@/constants";
import GlowCard from "./GlowCard";
const FeatureCards = () => (
	<section id="testimonials" className="flex-center pt-16 bg-[#faebf2] ">
		<div className="w-full h-full md:px-10 px-5">
			<div className="lg:columns-3 md:columns-2 columns-1 mt-16">
				{abilities.map(({ id, title, desc }) => (
					<GlowCard key={id}>
						<div className=" rounded-xl p-8 flex flex-col gap-4">
							<h3 className="text-[#000000] text-2xl font-semibold mt-2">
								{title}
							</h3>
							<p className="text-[#999999] text-lg">{desc}</p>
						</div>
					</GlowCard>
				))}
			</div>
		</div>
	</section>
);

export default FeatureCards;
