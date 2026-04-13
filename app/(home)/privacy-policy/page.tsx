import Link from "next/link";

export const metadata = {
	title: "Privacy Policy",
	description: "How OyoPortal handles cookies, analytics, and support data",
};

const policyDownload = encodeURIComponent(
	[
		"OyoPortal Privacy Policy Summary",
		"- Optional analytics can be declined from the cookie banner.",
		"- Support data is used only to route requests and keep the portal useful.",
		"- External links open in a new tab and follow the outbound tracking rules.",
	].join("\n"),
);

const policySections = [
	{
		title: "What we collect",
		body: "OyoPortal only needs enough data to show the site, remember optional analytics choices, and route support requests.",
	},
	{
		title: "How we use it",
		body: "We use the information to present the right Oyo content, improve navigation, and keep the support experience simple.",
	},
	{
		title: "Cookies and analytics",
		body: "The cookie banner lets you accept or decline optional analytics. If you decline, the tracking helper does not record outbound clicks.",
	},
	{
		title: "Third-party links",
		body: "External links such as the national portal or map providers open in a new tab and follow the same tracking rules as the rest of the site.",
	},
];

export default function PrivacyPolicyPage() {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="mx-auto max-w-4xl space-y-8">
					<div className="space-y-3">
						<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
							Privacy policy
						</span>
						<h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
							Privacy, cookies, and support data
						</h1>
						<p className="text-sm font-medium uppercase tracking-[0.18em] text-slate-400">
							Last updated: April 13, 2026
						</p>
					</div>

					<div className="space-y-4">
						{policySections.map((section) => (
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
							Questions about privacy?
						</h2>
						<p className="mt-2 text-sm leading-relaxed text-slate-600">
							If you want a manual review of this policy or a support request
							removed, use the contact page to reach the state desk.
						</p>
						<div className="mt-4 flex flex-wrap gap-4 text-sm font-semibold">
							<Link href="/contact" className="text-brand hover:underline">
								Open contact page
							</Link>
							<a
								href={`data:text/plain;charset=utf-8,${policyDownload}`}
								download="oyo-privacy-policy-summary.txt"
								className="text-brand hover:underline"
							>
								Download policy summary
							</a>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
