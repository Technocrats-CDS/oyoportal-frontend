import InspectorDirectory from "@/components/lga-inspectors/InspectorDirectory";

export const metadata = {
	title: "LGA Inspectors",
	description: "Oyo state support directory and LGA contact points",
};

export default function LgaInspectorsPage() {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="mx-auto max-w-7xl space-y-8">
					<div className="max-w-3xl space-y-3">
						<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
							LGA inspectors
						</span>
						<h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
							Office contacts and escalation points for Oyo LGAs
						</h1>
						<p className="max-w-2xl text-base leading-relaxed text-slate-600">
							Use this directory as a starting point for support, then switch to
							the contact page if you need a phone line, email address, or map
							link.
						</p>
					</div>

					<InspectorDirectory />
				</div>
			</section>
		</div>
	);
}
