import OutboundLink from "@/components/shared/OutboundLink";
import { supportContacts } from "@/lib/oyo-content";

export const metadata = {
	title: "Contact",
	description: "Oyo support lines, email addresses, and map links",
};

export default function ContactPage() {
	return (
		<div className="flex min-h-screen w-full flex-col overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 py-12">
				<div className="mx-auto max-w-7xl space-y-8">
					<div className="max-w-3xl space-y-3">
						<span className="inline-flex items-center rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold uppercase tracking-[0.22em] text-brand">
							Contact support
						</span>
						<h1 className="text-3xl font-extrabold tracking-tight text-heading sm:text-4xl">
							State office and camp support lines for Oyo corps members
						</h1>
						<p className="max-w-2xl text-base leading-relaxed text-slate-600">
							Use these contact cards to reach the correct desk, send an email,
							or jump to a map link before you head out.
						</p>
					</div>

					<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
						{supportContacts.map((contact) => (
							<article
								key={contact.name}
								className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
							>
								<div className="flex items-start justify-between gap-3">
									<div>
										<h2 className="text-lg font-bold text-heading">
											{contact.name}
										</h2>
										<p className="text-xs uppercase tracking-[0.18em] text-brand">
											{contact.role}
										</p>
									</div>
									<div className="size-10 rounded-xl bg-brand-50 flex items-center justify-center">
										<span className="material-icons text-brand text-[18px]">
											call
										</span>
									</div>
								</div>

								<p className="mt-4 text-sm leading-relaxed text-slate-600">
									{contact.summary}
								</p>

								<dl className="mt-5 space-y-3 text-sm">
									<div>
										<dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
											Phone
										</dt>
										<dd className="mt-1 font-semibold text-heading">
											<a
												href={`tel:${contact.phone.replace(/\s+/g, "")}`}
												className="hover:text-brand hover:underline"
											>
												{contact.phone}
											</a>
										</dd>
									</div>
									<div>
										<dt className="text-xs uppercase tracking-[0.18em] text-slate-400">
											Email
										</dt>
										<dd className="mt-1 font-semibold text-heading">
											<a
												href={`mailto:${contact.email}`}
												className="hover:text-brand hover:underline"
											>
												{contact.email}
											</a>
										</dd>
									</div>
								</dl>

								<div className="mt-5">
									<OutboundLink
										href={contact.mapHref}
										trackingLabel={`contact-map-${contact.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
										className="inline-flex items-center gap-1 text-sm font-semibold text-brand hover:underline"
									>
										Open map link
										<span className="material-icons text-[16px]">
											chevron_right
										</span>
									</OutboundLink>
								</div>
							</article>
						))}
					</div>
				</div>
			</section>
		</div>
	);
}
