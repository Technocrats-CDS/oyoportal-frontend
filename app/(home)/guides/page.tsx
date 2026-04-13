import Link from "next/link";

import EssentialGuides from "@/components/home/EssentialGuides";
import OutboundLink from "@/components/shared/OutboundLink";
import { stakeholders } from "@/lib/oyo-content";

const guideSections = [
	{
		id: "housing",
		title: "Housing in Ibadan",
		intro:
			"Shortlist flats near your PPA and compare rent, commute, and security.",
		points: [
			"Check the distance first, then compare the basics before paying.",
		],
	},
	{
		id: "safety",
		title: "Safety tips",
		intro: "Keep movement simple and lean on trusted transport options.",
		points: ["Avoid late-night travel and save the support lines early."],
	},
	{
		id: "transport",
		title: "Transportation",
		intro: "Pick routes that fit your schedule and budget.",
		points: ["Use major parks or verified ride-hailing when moving around."],
	},
	{
		id: "markets",
		title: "Local markets",
		intro: "Use major markets for groceries, tailoring, and essentials.",
		points: ["Compare prices at a few stalls before buying in bulk."],
	},
	{
		id: "saed",
		title: "SAED support",
		intro: "Treat SAED as practical planning and keep your notes handy.",
		points: ["Choose a track that fits your interests and time."],
	},
	{
		id: "partners",
		title: "Verified local partners",
		intro: "Verify any partner before you pay or sign.",
		points: ["Prefer partners with a clear address and map link."],
	},
	{
		id: "state-coordinator",
		title: "State coordinator profile",
		intro: "Use this section for the official escalation path.",
		points: ["Check contact and FAQ pages before raising routine issues."],
	},
];

export const metadata = {
	title: "Guides",
	description: "Practical Oyo service-year guides for corps members",
};

export default function GuidesPage() {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="mx-auto max-w-7xl space-y-8">
					<div className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
						<div className="space-y-3">
							<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
								Service guides
							</span>
							<h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
								Practical notes for settling into Oyo State
							</h1>
							<p className="max-w-2xl text-base leading-relaxed text-slate-600">
								Start with the guide preview, then open each section below for
								housing, safety, transport, market, SAED, and stakeholder notes.
							</p>
						</div>

						<div className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm">
							<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
								Quick actions
							</h2>
							<div className="mt-3 flex flex-col gap-2 text-xs font-semibold">
								<Link href="/contact" className="text-brand hover:underline">
									Contact the office
								</Link>
								<Link href="/faq" className="text-brand hover:underline">
									Read the FAQ
								</Link>
								<OutboundLink
									href="https://portal.nysc.org.ng/nysc"
									trackingLabel="guides-portal-link"
									className="text-brand hover:underline"
								>
									Open the national portal
								</OutboundLink>
							</div>
						</div>
					</div>

					<EssentialGuides />

					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{guideSections.map((section) => (
							<article
								key={section.id}
								id={section.id}
								className="rounded-2xl border border-slate-100 bg-white p-4 shadow-sm"
							>
								<h2 className="text-base font-bold text-heading">
									{section.title}
								</h2>
								<p className="mt-2 text-xs leading-relaxed text-slate-500 line-clamp-2">
									{section.intro}
								</p>
								<ul className="mt-3 space-y-1.5 text-xs leading-relaxed text-slate-500">
									{section.points.map((point) => (
										<li key={point} className="flex gap-2">
											<span className="mt-1 size-1.5 rounded-full bg-brand" />
											<span>{point}</span>
										</li>
									))}
								</ul>
							</article>
						))}
					</div>

					<div className="rounded-3xl border border-slate-100 bg-linear-to-r from-brand-50 to-white p-5 shadow-sm">
						<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
							<div>
								<h2 className="text-lg font-bold text-heading">
									Need a direct introduction?
								</h2>
								<p className="mt-2 max-w-2xl text-xs leading-relaxed text-slate-500">
									These contacts and partners are a starting point. Always
									verify the details through the state office before making
									payments or travel plans.
								</p>
							</div>
							<div className="flex flex-col gap-2 text-xs font-semibold">
								<Link href="/contact" className="text-brand hover:underline">
									Open contacts
								</Link>
								<Link
									href={stakeholders[0].href}
									className="text-brand hover:underline"
								>
									{stakeholders[0].label}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
