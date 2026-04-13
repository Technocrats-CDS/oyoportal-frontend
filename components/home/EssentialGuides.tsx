import Link from "next/link";

import { guideCards } from "@/lib/oyo-content";

export default function EssentialGuides() {
	return (
		<section className="w-full px-4 md:px-6 lg:px-8 py-12 bg-(--brand-50)/40">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between gap-4 mb-6">
					<div className="flex items-center gap-3">
						<div className="w-1 h-6 rounded-full bg-brand" />
						<h2 className="text-xl font-bold text-heading">Essential Guides</h2>
					</div>
					<Link
						href="/guides"
						className="text-sm font-semibold text-brand hover:underline"
					>
						View all guides
					</Link>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
					{guideCards.map((guide) => (
						<Link
							key={guide.title}
							href={guide.href}
							className="group bg-white rounded-xl overflow-hidden shadow-sm border border-slate-100 hover:shadow-md transition-all duration-300 hover:-translate-y-1 p-4"
						>
							<div className="size-9 rounded-xl bg-(--brand-50) flex items-center justify-center shadow-sm mb-3 group-hover:bg-brand group-hover:text-white transition-colors">
								<span className="material-icons text-brand text-[18px] group-hover:text-white transition-colors">
									{guide.icon}
								</span>
							</div>
							<div>
								<h3 className="text-heading font-bold text-sm mb-1 group-hover:text-brand transition-colors">
									{guide.title}
								</h3>
								<p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
									{guide.description}
								</p>
							</div>
						</Link>
					))}
				</div>
			</div>
		</section>
	);
}
