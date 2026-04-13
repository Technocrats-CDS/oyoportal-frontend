import Link from "next/link";

import OutboundLink from "@/components/shared/OutboundLink";
import { quickAccessCards } from "@/lib/oyo-content";

const supportLinks = [
	{
		title: "Mobilization timetable",
		desc: "Key camp and clearance dates in one place.",
		icon: "event_note",
		href: "/mobilization",
	},
	{
		title: "FAQ and support",
		desc: "Answers for arrival, clearance, and registration.",
		icon: "quiz",
		href: "/faq",
	},
	{
		title: "Contact the office",
		desc: "Reach the state desk, camp desk, or escalation channel.",
		icon: "call",
		href: "/contact",
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
					<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-5">
						{quickAccessCards.map((card) => {
							const actionClassName =
								"btn btn--brand btn--size-default w-full text-center rounded-lg font-semibold text-xs mt-2";

							return (
								<div
									key={card.title}
									className="card flex flex-col items-start gap-4"
								>
									<div className="size-11 rounded-xl bg-(--brand-50) flex items-center justify-center">
										<span className="material-icons text-[22px] text-brand">
											{card.icon}
										</span>
									</div>
									<div className="flex-1">
										<h3 className="text-heading font-bold text-[15px] mb-1.5">
											{card.title}
										</h3>
										<p className="text-sm leading-relaxed text-slate-500">
											{card.description}
										</p>
									</div>
									{card.external ? (
										<OutboundLink
											href={card.href}
											trackingLabel={card.trackingLabel}
											className={actionClassName}
										>
											{card.title}
										</OutboundLink>
									) : (
										<Link href={card.href} className={actionClassName}>
											{card.title}
										</Link>
									)}
								</div>
							);
						})}
					</div>

					<div className="lg:col-span-4 card flex flex-col justify-between gap-1">
						{supportLinks.map((link, index) => (
							<Link
								key={link.title}
								href={link.href}
								className={`group flex items-center gap-4 p-3 -mx-1 rounded-xl hover:bg-slate-50/80 transition-all ${
									index < supportLinks.length - 1
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
