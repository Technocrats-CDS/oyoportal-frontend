import AdBanner from "@/components/home/AdBanner";
import FaqExplorer from "@/components/faq/FaqExplorer";

export const metadata = {
	title: "FAQ",
	description: "Answers to common Oyo service-year questions",
};

export default function FaqPage() {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="mx-auto max-w-7xl space-y-6">
					<div className="max-w-3xl space-y-3">
						<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
							Self-service
						</span>
						<h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
							Frequently asked questions for Oyo corps members
						</h1>
						<p className="max-w-2xl text-base leading-relaxed text-slate-600">
							Use the search bar and section filters to find answers about
							arrival, clearance, registration, and everyday service-year
							support.
						</p>
					</div>

					<FaqExplorer />
				</div>
			</section>

			<AdBanner />
		</div>
	);
}
