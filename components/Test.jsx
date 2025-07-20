import { abilities } from "@/constants";
import GlowCard from "./GlowCard";

const Test = () => {
	return (
		<div
			dir="rtl"
			className="min-h-screen px-6 py-16 text-gray-800 relative z-10"
		>
			<section className="text-center mb-20">
				<h1 className="text-5xl font-bold mb-4">من نحن</h1>
				<p className="text-lg text-gray-500 max-w-2xl mx-auto">
					نحن متجر إلكتروني سوري متخصص في بيع الحقائب النسائية المستوردة .
نقدم لكِ تشكيلة واسعة من التصاميم العصرية والممييزة.

				</p>
			</section>

			<section className="max-w-4xl mx-auto mb-16">
				<h2 className="text-3xl font-semibold mb-4">ٱلية العمل</h2>
				<p className="text-gray-500 leading-relaxed">
					شحن لكافة المحافظات السورية توصيل مجاني الى باب المنزل داخل مدينة حمص
				</p>
			</section>

			<section className="max-w-4xl mx-auto mb-16">
				<h2 className="text-3xl font-semibold mb-4">قصتنا</h2>
				<p className="text-gray-500 leading-relaxed">
					قصتنا بدأت برغبتنا في خلق تجربة تسوق مميزة وموثوقة تمنحك
					الأناقة التي تستحقينها
				</p>
			</section>

			<section className="max-w-4xl mx-auto text-gray-500">
				<h2 className="text-3xl text-gray-800 font-semibold mb-4">لماذا نحن؟</h2>
				<div className="grid md:grid-cols-3 gap-6">
					<div className="p-6 rounded-xl bg-white shadow">
						<p>
							التميّز: كل قطعة في مجموعتنا فريدة وحصرية، ولا تجدينها في أي مكان
							آخر
						</p>
					</div>
					<div className="p-6 rounded-xl bg-white shadow">
						<p>
							نقدم لكِ تشكيلة واسعة من التصاميم العصرية والممييزة، مع حرصنا على
							اختيار أفضل المنتجات بعناية لتجمع بين الفخامة والسعر المناسب.
							هدفنا أن نوفر لكِ تجربة تسوق سهلة ومريحة داخل سوريا،
							مباشرة إلى باب منزلكِ
							</p>
					</div>
					<div className="p-6 rounded-xl bg-white shadow">
						<p>
							الجودة: نستخدم أقمشة فاخرة مختارة بعناية لنقدم حقائب تجمع بين
							الفخامة والمتانة في كل تفصيل
						</p>
					</div>
				</div>
			</section>
			<div className="lg:columns-3 md:columns-2 columns-1 mt-16">
				{abilities.map((abilities, index) => (
					<GlowCard card={abilities} key={index} index={index}>
						<div className="flex items-center gap-3">
							<div>
								<p className="font-bold">{abilities.title}</p>
								<p className="text-white-50">{abilities.desc}</p>
							</div>
						</div>
					</GlowCard>
				))}
			</div>
		</div>
	);
};

export default Test;
