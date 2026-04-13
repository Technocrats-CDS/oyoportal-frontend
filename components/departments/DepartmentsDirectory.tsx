import Image from "next/image";
import Link from "next/link";

import { departmentProfiles, stateCoordinatorProfile } from "@/lib/departments";

export default function DepartmentsDirectory() {
	return (
		<section className="w-full px-4 md:px-6 lg:px-8 py-10">
			<div className="mx-auto max-w-7xl space-y-8">
				<article className="overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-sm">
					<div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
						<div className="relative min-h-80 lg:min-h-full">
							<Image
								src={stateCoordinatorProfile.image}
								alt={stateCoordinatorProfile.imageAlt}
								fill
								className="object-cover"
								priority
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
							<div className="absolute left-5 top-5 inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
								State coordinator
							</div>
							<div className="absolute inset-x-5 bottom-5">
								<span className="inline-flex rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
									Leadership spotlight
								</span>
								<h2 className="mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
									{stateCoordinatorProfile.name}
								</h2>
								<p className="mt-2 max-w-xl text-sm leading-relaxed text-white/80 sm:text-base">
									{stateCoordinatorProfile.title}
								</p>
							</div>
						</div>

						<div className="p-6 sm:p-8 lg:p-10">
							<div className="flex items-center gap-3">
								<div className="size-12 rounded-2xl bg-brand-50 flex items-center justify-center">
									<span className="material-icons text-brand text-[22px]">
										verified_user
									</span>
								</div>
								<div>
									<p className="text-xs font-semibold uppercase tracking-[0.22em] text-brand">
										NYSC Oyo leadership
									</p>
									<h3 className="text-xl font-bold text-heading">
										What the state coordinator oversees
									</h3>
								</div>
							</div>

							<p className="mt-5 text-sm leading-relaxed text-slate-600 sm:text-base">
								{stateCoordinatorProfile.summary}
							</p>

							<div className="mt-6 grid gap-3 sm:grid-cols-3">
								{stateCoordinatorProfile.highlights.map((highlight) => (
									<div
										key={highlight}
										className="rounded-2xl border border-slate-100 bg-slate-50/70 px-4 py-3 text-sm font-semibold text-heading"
									>
										{highlight}
									</div>
								))}
							</div>

							<div className="mt-6 flex flex-col gap-3 sm:flex-row">
								<Link
									href="/contact"
									className="btn btn--brand btn--size-default rounded-xl font-semibold text-sm"
								>
									Contact state office
								</Link>
								<Link
									href="/guides#state-coordinator"
									className="btn btn--outline-brand btn--size-default rounded-xl font-semibold text-sm"
								>
									Read leadership note
								</Link>
							</div>
						</div>
					</div>
				</article>

				<div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5">
					{departmentProfiles.map((department) => (
						<article
							key={department.name}
							className="group overflow-hidden rounded-2xl border border-slate-100 bg-white shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg"
						>
							<div className="relative h-40 overflow-hidden">
								<Image
									src={department.image}
									alt={department.imageAlt}
									fill
									className="object-cover transition-transform duration-700 group-hover:scale-105"
								/>
								<div className="absolute inset-0 bg-linear-to-t from-black/75 via-black/20 to-transparent" />
								<div className="absolute left-3 right-3 bottom-3 space-y-2">
									<span className="inline-flex rounded-full bg-white/15 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-white backdrop-blur-sm">
										{department.focusLabel}
									</span>
									<h3 className="text-lg font-bold tracking-tight text-white leading-tight">
										{department.name}
									</h3>
								</div>
							</div>

							<div className="p-4">
								<div className="flex items-center justify-between gap-3">
									<p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand">
										Department head
									</p>
									<span className="rounded-full bg-brand-50 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.18em] text-brand">
										Scaffolded
									</span>
								</div>
								<h4 className="mt-2 text-base font-bold text-heading leading-tight">
									{department.headName}
								</h4>
								<p className="text-xs font-medium text-slate-500">
									{department.headTitle}
								</p>
								<p className="mt-3 text-xs leading-relaxed text-slate-500 line-clamp-2">
									{department.summary}
								</p>

								<div className="mt-3 flex flex-wrap gap-2">
									{department.responsibilities
										.slice(0, 2)
										.map((responsibility) => (
											<span
												key={responsibility}
												className="rounded-full bg-slate-50 px-2.5 py-1 text-[10px] leading-tight text-slate-500"
											>
												{responsibility}
											</span>
										))}
								</div>

								<div className="mt-4 flex items-center justify-between gap-3 border-t border-slate-100 pt-3">
									<span className="text-[9px] font-semibold uppercase tracking-[0.2em] text-slate-400 line-clamp-1">
										{department.contactHint}
									</span>
									<Link
										href="/contact"
										className="inline-flex items-center gap-1 text-xs font-semibold text-brand hover:underline shrink-0"
									>
										Contact desk
										<span className="material-icons text-[14px]">
											chevron_right
										</span>
									</Link>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
