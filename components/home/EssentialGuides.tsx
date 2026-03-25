import Image from "next/image";
import Link from "next/link";

export default function EssentialGuides() {
	const guides = [
		{
			title: "Housing in Ibadan",
			desc: "Find affordable and secure flats near your PPA in the major city centers.",
			img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
			icon: "home",
		},
		{
			title: "Safety Tips",
			desc: "Emergency contacts, Amotekun posts, and safety protocols for Ogbomosho and Ibadan.",
			img: "https://plus.unsplash.com/premium_photo-1677529102407-0d075eb2cbb9?auto=format&fit=crop&q=80&w=800",
			icon: "shield",
		},
		{
			title: "Transportation",
			desc: "Navigating Bolt, Micra taxis, and interstate park routes efficiently.",
			img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?auto=format&fit=crop&q=80&w=800",
			icon: "directions_car",
		},
		{
			title: "Local Markets",
			desc: "Where to shop at Bodija, Oja'ba, and Aleshinloye at wholesale rates.",
			img: "https://images.unsplash.com/photo-1533900298318-6b8da08a523e?auto=format&fit=crop&q=80&w=800",
			icon: "store",
		},
	];

	return (
		<section className="w-full px-4 md:px-6 lg:px-8 py-16 bg-(--brand-50)/40">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center gap-3 mb-8">
					<div className="w-1 h-6 rounded-full bg-brand" />
					<h2 className="text-xl font-bold text-heading">Essential Guides</h2>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
					{guides.map((guide) => (
						<Link
							key={guide.title}
							href="#"
							className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
						>
							<div className="relative w-full h-40 overflow-hidden">
								<Image
									src={guide.img}
									alt={guide.title}
									fill
									className="object-cover group-hover:scale-105 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent" />
								<div className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur rounded-lg flex items-center justify-center shadow-sm">
									<span className="material-icons text-brand text-[16px]">
										{guide.icon}
									</span>
								</div>
							</div>
							<div className="p-5">
								<h3 className="text-heading font-bold text-[15px] mb-1.5 group-hover:text-brand transition-colors">
									{guide.title}
								</h3>
								<p className="text-sm text-slate-500 leading-relaxed">
									{guide.desc}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
