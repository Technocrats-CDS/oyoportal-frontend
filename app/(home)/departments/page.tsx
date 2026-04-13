import Link from "next/link";

import AdBanner from "@/components/home/AdBanner";
import DepartmentsDirectory from "@/components/departments/DepartmentsDirectory";

export const metadata = {
	title: "Departments",
	description: "NYSC Oyo departments, department heads, and state coordinator",
};

export default function DepartmentsPage() {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 pt-12">
				<div className="mx-auto max-w-7xl space-y-6">
					<div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
						<div className="space-y-4">
							<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
								Oyo leadership
							</span>
							<h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
								Departments, state coordinator, and office leadership for Oyo
							</h1>
							<p className="max-w-2xl text-base leading-relaxed text-slate-600">
								This directory replaces the old news and forum pages. It keeps
								the state coordinator visible and groups the major NYSC Oyo
								departments into one place for quick reference.
							</p>
						</div>

						<div className="rounded-3xl border border-slate-100 bg-white p-5 shadow-sm">
							<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
								Quick actions
							</h2>
							<div className="mt-4 flex flex-col gap-3 text-sm font-semibold">
								<Link href="/contact" className="text-brand hover:underline">
									Contact the state office
								</Link>
								<Link
									href="/mobilization"
									className="text-brand hover:underline"
								>
									View mobilization timetable
								</Link>
								<Link href="/faq" className="text-brand hover:underline">
									Read the FAQ
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>

			<DepartmentsDirectory />
			<AdBanner />
		</div>
	);
}
