import Link from "next/link";

const mainCards = [
	{
		title: "Find my LGA",
		desc: "Locate your Local Government Area and know your LGA Inspector.",
		icon: "location_city",
		href: "/states-and-lga",
		color: "bg-[var(--brand-50)]",
		iconColor: "text-brand",
	},
	{
		title: "Find my PPA",
		desc: "Discover your Primary Place of Assignment and get directions.",
		icon: "business",
		href: "/ppa",
		color: "bg-blue-50",
		iconColor: "text-blue-600",
	},
	{
		title: "Job Board",
		desc: "Browse job openings from verified employers within Oyo State.",
		icon: "work_outline",
		href: "/careers-and-placements",
		color: "bg-amber-50",
		iconColor: "text-amber-600",
	},
];

const sideLinks = [
	{
		title: "Monthly Clearance",
		desc: "Biometrics dates across all local governments",
		icon: "event_available",
		href: "/clearance",
	},
	{
		title: "CDS & SAED News",
		desc: "Latest CDS and SAED news and updates",
		icon: "campaign",
		href: "/news",
	},
	{
		title: "Internship Positions",
		desc: "Available internships for corps members",
		icon: "trending_up",
		href: "/internships",
	},
];

export default function QuickAccess() {
	return (
		<section className="w-full px-4 md:px-6 lg:px-8 py-14">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center gap-3 mb-8">
					<div className="w-1 h-6 rounded-full bg-brand" />
					<h2 className="text-xl font-bold text-heading">Quick Access</h2>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-5">
						{mainCards.map((card) => (
							<div
								key={card.title}
								className="card flex flex-col items-start gap-4"
							>
								<div
									className={`size-11 rounded-xl ${card.color} flex items-center justify-center`}
								>
									<span
										className={`material-icons text-[22px] ${card.iconColor}`}
									>
										{card.icon}
									</span>
								</div>
								<div className="flex-1">
									<h3 className="text-heading font-bold text-[15px] mb-1.5">
										{card.title}
									</h3>
									<p className="text-sm leading-relaxed text-slate-500">
										{card.desc}
									</p>
								</div>
								<Link
									href={card.href}
									className="btn btn--brand btn--size-default w-full text-center rounded-lg font-semibold text-xs mt-2"
								>
									{card.title}
								</Link>
							</div>
						))}
					</div>

					<div className="lg:col-span-4 card flex flex-col justify-between gap-1">
						{sideLinks.map((link, index) => (
							<Link
								key={link.title}
								href={link.href}
								className={`group flex items-center gap-4 p-3 -mx-1 rounded-xl hover:bg-slate-50/80 transition-all ${
									index < sideLinks.length - 1
										? "border-b border-slate-100"
										: ""
								}`}
							>
								<div className="size-10 shrink-0 rounded-lg bg-(--brand-50) flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white transition-all duration-200">
									<span className="material-icons text-[20px]">
										{link.icon}
									</span>
								</div>
								<div className="flex-1 min-w-0">
									<h4 className="text-heading font-semibold text-sm group-hover:text-brand transition-colors leading-tight">
										{link.title}
									</h4>
									<p className="text-slate-400 text-xs mt-0.5 truncate">
										{link.desc}
									</p>
								</div>
								<span className="material-icons text-slate-300 text-[18px] group-hover:text-brand group-hover:translate-x-0.5 transition-all">
									chevron_right
								</span>
							</Link>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
