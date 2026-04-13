import Link from "next/link";

export const metadata = {
	title: "Terms of Use",
	description: "Terms for using the OyoPortal web experience",
};

const termsDownload = encodeURIComponent(
	[
		"OyoPortal Terms of Use Summary",
		"- Use the site for verified information and support only.",
		"- Keep shared links and source references intact when possible.",
		"- External services and portals follow their own policies and availability windows.",
	].join("\n"),
);

const termsSections = [
	{
		title: "Use the site responsibly",
		body: "Use OyoPortal for verified information, service-year support, and official updates. Do not rely on it as a substitute for final state office instructions.",
	},
	{
		title: "Respect the content source",
		body: "Keep the links and references intact when sharing pages. If you quote a support note, point back to the relevant route so the latest copy is always visible.",
	},
	{
		title: "External services",
		body: "Some tasks require external services such as the national portal or map providers. Those services follow their own policies and availability windows.",
	},
	{
		title: "Updates",
		body: "These terms may change as the portal grows. The footer links always point to the latest policy pages on the site.",
	},
];

export default function TermsOfUsePage() {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="mx-auto max-w-4xl space-y-8">
					<div className="space-y-3">
						<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
							Terms of use
						</span>
						<h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
							Rules for using the OyoPortal web experience
						</h1>
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
							Last updated: April 13, 2026
						</p>
					</div>

					<div className="space-y-4">
						{termsSections.map((section) => (
							<article
								key={section.title}
								className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
							>
								<h2 className="text-lg font-bold text-heading">
									{section.title}
								</h2>
								<p className="mt-3 text-sm leading-relaxed text-slate-600">
									{section.body}
								</p>
							</article>
						))}
					</div>

					<div className="rounded-3xl border border-slate-100 bg-slate-50 p-6">
						<h2 className="text-xl font-bold text-heading">
							Need the latest support route?
						</h2>
						<p className="mt-2 text-sm leading-relaxed text-slate-600">
							Open the contact page or FAQ if you need help with registration,
							timetable questions, or state office support.
						</p>
						<div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
							<Link href="/contact" className="text-brand hover:underline">
								Contact
							</Link>
							<Link href="/faq" className="text-brand hover:underline">
								FAQ
							</Link>
							<a
								href={`data:text/plain;charset=utf-8,${termsDownload}`}
								download="oyo-terms-of-use-summary.txt"
								className="text-brand hover:underline"
							>
								Download terms summary
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
