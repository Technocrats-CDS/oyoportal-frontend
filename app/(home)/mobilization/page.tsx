import Link from "next/link";
import dayjs from "dayjs";

import OutboundLink from "@/components/shared/OutboundLink";
import { mobilizationSchedule } from "@/lib/oyo-content";

export const metadata = {
	title: "Mobilization",
	description: "Oyo mobilization timetable, clearance notes, and download",
};

const scheduleJson = encodeURIComponent(
	JSON.stringify(mobilizationSchedule, null, 2),
);

export default function MobilizationPage() {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="mx-auto max-w-7xl space-y-8">
					<div className="grid gap-6 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
						<div className="space-y-3">
							<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
								Mobilization timetable
							</span>
							<h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
								Key dates for arrival, screening, and state follow-up
							</h1>
							<p className="max-w-2xl text-base leading-relaxed text-slate-600">
								Use this timetable to plan your reporting window, check the
								venue, and keep track of the next Oyo support checkpoint.
							</p>
						</div>

						<div className="flex flex-col gap-3 sm:flex-row lg:justify-end print:hidden">
							<a
								href={`data:application/json;charset=utf-8,${scheduleJson}`}
								download="oyo-mobilization-schedule.json"
								className="btn btn--brand btn--size-default rounded-xl font-semibold text-sm"
							>
								Download JSON
							</a>
						</div>
					</div>

					<div className="rounded-3xl border border-slate-100 bg-white shadow-sm print:shadow-none print:border-slate-300">
						<div className="overflow-x-auto">
							<table className="w-full border-collapse text-left">
								<thead className="bg-slate-50/90 text-xs uppercase tracking-[0.2em] text-slate-500">
									<tr>
										<th className="px-5 py-4">Date</th>
										<th className="px-5 py-4">Event</th>
										<th className="px-5 py-4">Venue</th>
										<th className="px-5 py-4">Audience</th>
										<th className="px-5 py-4">Note</th>
									</tr>
								</thead>
								<tbody>
									{mobilizationSchedule.map((item, index) => (
										<tr
											key={`${item.date}-${item.title}`}
											className={
												index % 2 === 0 ? "bg-white" : "bg-slate-50/50"
											}
										>
											<td className="whitespace-nowrap px-5 py-4 text-sm font-semibold text-heading">
												{dayjs(item.date).format("DD MMM YYYY")}
											</td>
											<td className="px-5 py-4 text-sm text-slate-600">
												{item.title}
											</td>
											<td className="px-5 py-4 text-sm text-slate-600">
												{item.venue}
											</td>
											<td className="px-5 py-4 text-sm text-slate-600">
												{item.audience}
											</td>
											<td className="px-5 py-4 text-sm text-slate-500">
												{item.note}
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					</div>

					<div className="grid gap-4 md:grid-cols-3">
						<div className="card">
							<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
								What to bring
							</h2>
							<p className="mt-3 text-sm leading-relaxed text-slate-600">
								Keep your original documents, photocopies, and registration slip
								together before you leave for the venue.
							</p>
						</div>
						<div className="card">
							<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
								Follow up
							</h2>
							<p className="mt-3 text-sm leading-relaxed text-slate-600">
								If your deployment or clearance changes, use the contact page
								for the latest state office lines and map links.
							</p>
						</div>
						<div className="card">
							<h2 className="text-sm font-semibold uppercase tracking-[0.18em] text-brand">
								Need help?
							</h2>
							<div className="mt-3 flex flex-col gap-3 text-sm">
								<Link
									href="/faq"
									className="font-semibold text-brand hover:underline"
								>
									Read the FAQ
								</Link>
								<OutboundLink
									href="https://portal.nysc.org.ng/nysc"
									trackingLabel="mobilization-portal-link"
									className="font-semibold text-brand hover:underline"
								>
									Open the portal
								</OutboundLink>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
