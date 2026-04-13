import Link from "next/link";
import OutboundLink from "@/components/shared/OutboundLink";
import dayjs from "dayjs";

import {
	featuredLinks,
	mobilizationSchedule,
	stakeholders,
} from "@/lib/oyo-content";

export default function InfoSections() {
	const upcomingDates = mobilizationSchedule.slice(0, 3);
	const quickLinks = featuredLinks;

	return (
		<section className="w-full px-4 md:px-6 lg:px-8 py-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					<div className="card flex flex-col">
						<div className="flex justify-between items-center mb-5">
							<h3 className="text-heading font-bold text-lg">Upcoming Dates</h3>
							<div className="size-9 rounded-lg bg-blue-50 flex items-center justify-center">
								<span className="material-icons text-blue-500 text-[18px]">
									event
								</span>
							</div>
						</div>

						<div className="flex flex-col gap-4 flex-1">
							{upcomingDates.map((event) => (
								<div
									key={`${event.date}-${event.title}`}
									className="flex gap-3.5"
								>
									<div className="flex flex-col items-center justify-center bg-(--brand-50) w-12 h-14 rounded-lg shrink-0">
										<span className="text-brand font-bold text-[10px] uppercase leading-tight">
											{dayjs(event.date).format("MMM")}
										</span>
										<span className="text-brand font-bold text-lg leading-tight">
											{dayjs(event.date).format("DD")}
										</span>
									</div>
									<div>
										<h4 className="text-heading font-semibold text-sm mb-1 leading-snug">
											{event.title}
										</h4>
										<p className="text-slate-400 text-xs mb-1.5">
											{event.venue}
										</p>
										<p className="text-xs text-slate-500 leading-relaxed">
											{event.note}
										</p>
									</div>
								</div>
							))}
						</div>

						<Link
							href="/mobilization"
							className="btn btn--outline-brand btn--size-default w-full mt-5 rounded-lg font-semibold text-xs"
						>
							View Mobilization
						</Link>
					</div>

					<div className="card flex flex-col">
						<div className="flex justify-between items-center mb-5">
							<h3 className="text-heading font-bold text-lg">Quick Links</h3>
							<div className="size-9 rounded-lg bg-amber-50 flex items-center justify-center">
								<span className="material-icons text-amber-500 text-[18px]">
									link
								</span>
							</div>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 gap-3 flex-1">
							{quickLinks.map((link) => {
								const sharedClassName =
									"group flex flex-col justify-between gap-3 rounded-xl border border-slate-100 bg-slate-50/60 p-4 hover:bg-white hover:border-brand/20 transition-all";

								return link.external ? (
									<OutboundLink
										key={link.title}
										href={link.href}
										trackingLabel={link.trackingLabel}
										target="_blank"
										rel="noopener noreferrer"
										className={sharedClassName}
									>
										<span className="inline-flex size-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
											<span className="material-icons text-[20px]">
												{link.icon}
											</span>
										</span>
										<div>
											<h4 className="text-sm font-semibold text-heading group-hover:text-brand transition-colors">
												{link.title}
											</h4>
											<p className="mt-1 text-xs leading-relaxed text-slate-500">
												{link.description}
											</p>
										</div>
									</OutboundLink>
								) : (
									<Link
										key={link.title}
										href={link.href}
										className={sharedClassName}
									>
										<span className="inline-flex size-10 items-center justify-center rounded-xl bg-white text-brand shadow-sm">
											<span className="material-icons text-[20px]">
												{link.icon}
											</span>
										</span>
										<div>
											<h4 className="text-sm font-semibold text-heading group-hover:text-brand transition-colors">
												{link.title}
											</h4>
											<p className="mt-1 text-xs leading-relaxed text-slate-500">
												{link.description}
											</p>
										</div>
									</Link>
								);
							})}
						</div>
					</div>

					<div className="card flex flex-col">
						<div className="flex justify-between items-center mb-5">
							<h3 className="text-heading font-bold text-lg">
								Stakeholders & Contacts
							</h3>
							<div className="size-9 rounded-lg bg-(--brand-50) flex items-center justify-center">
								<span className="material-icons text-brand text-[18px]">
									person
								</span>
							</div>
						</div>

						<div className="flex flex-col gap-4 flex-1">
							{stakeholders.map((stakeholder, index) => (
								<div
									key={stakeholder.name}
									className={`flex gap-3 rounded-xl p-3 ${index < stakeholders.length - 1 ? "border-b border-slate-100 pb-4" : ""}`}
								>
									<div className="size-11 rounded-xl bg-(--brand-50) flex items-center justify-center shrink-0">
										<span className="material-icons text-brand text-[18px]">
											badge
										</span>
									</div>
									<div className="min-w-0 flex-1">
										<h4 className="text-heading font-semibold text-sm leading-tight">
											{stakeholder.name}
										</h4>
										<p className="text-xs uppercase tracking-wider text-slate-400 mt-1">
											{stakeholder.role}
										</p>
										<p className="text-sm leading-relaxed text-slate-600 mt-2">
											{stakeholder.summary}
										</p>
										<Link
											href={stakeholder.href}
											className="inline-flex items-center gap-1 text-brand text-xs font-semibold mt-3 hover:underline"
										>
											{stakeholder.label}
											<span className="material-icons text-[14px]">
												chevron_right
											</span>
										</Link>
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
