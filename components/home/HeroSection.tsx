"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section className="relative w-full overflow-hidden bg-[#022c22]">
			<div className="absolute inset-0">
				<Image
					src="/hero-image.png"
					alt="NYSC corps parade"
					fill
					className="object-cover object-center opacity-30"
					priority
					loading="eager"
				/>
				<div className="absolute inset-0 bg-linear-to-br from-[#022c22] via-[#064e3b]/90 to-[#059669]/40" />
			</div>

			<div className="absolute top-20 right-[10%] w-72 h-72 bg-[#34d399]/10 rounded-full blur-3xl" />
			<div className="absolute bottom-10 left-[5%] w-48 h-48 bg-[#f59e0b]/8 rounded-full blur-2xl" />

			<div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 lg:py-24">
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
					<div className="lg:col-span-7 text-center lg:text-left">
						<div className="inline-flex items-center gap-2.5 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-white/10">
							<span className="relative flex h-2 w-2">
								<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#fbbf24] opacity-75" />
								<span className="relative inline-flex rounded-full h-2 w-2 bg-[#fbbf24]" />
							</span>
							<span className="text-xs text-white/90 font-medium tracking-wide">
								Service Year: Batch A &bull; Stream I
							</span>
						</div>

						<h1 className="text-3xl sm:text-4xl lg:text-[3.25rem] font-extrabold text-white leading-[1.15] mb-3 tracking-tight">
							Stay informed&nbsp;
							<br className="lg:hidden" />
							and prepared
						</h1>
						<p className="text-gradient text-xl sm:text-2xl font-bold mb-5">
							NYSC announcements &amp; mobilization info
						</p>

						<p className="text-base text-white/70 max-w-lg mb-8 leading-relaxed mx-auto lg:mx-0">
							A curated hub for service updates, CDS groups, placement notices
							and helpful guides — built for corps members in Oyo State.
						</p>

						<div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-3">
							<a
								href="https://portal.nysc.org.ng/nysc"
								target="_blank"
								rel="noopener noreferrer"
								className="btn btn--size-lg btn--brand w-full sm:w-auto font-semibold rounded-xl px-8 py-3 text-sm"
							>
								Go to Your Portal
							</a>

							<Link
								href="/cds-groups"
								className="btn btn--size-lg bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold rounded-xl px-8 py-3 w-full sm:w-auto text-center text-sm hover:bg-white/20 transition-all"
							>
								Explore CDS Groups
							</Link>
						</div>

						<div className="flex items-center justify-center lg:justify-start gap-8 mt-10 pt-8 border-t border-white/10">
							{[
								{ value: "33", label: "LGAs Covered" },
								{ value: "500+", label: "CDS Groups" },
								{ value: "2K+", label: "Active Members" },
							].map((stat) => (
								<div key={stat.label} className="text-center lg:text-left">
									<p className="text-xl font-bold text-white">{stat.value}</p>
									<p className="text-xs text-white/50 mt-0.5">{stat.label}</p>
								</div>
							))}
						</div>
					</div>

					<div className="lg:col-span-5 hidden lg:flex justify-end">
						<div className="relative">
							<div className="w-80 h-110 relative">
								<Image
									src="/female-corps-member.png"
									alt="Corps member"
									fill
									className="object-cover object-bottom"
									priority
									loading="eager"
								/>
							</div>
							<div className="absolute -left-12 bottom-12 bg-white/95 backdrop-blur-lg rounded-xl p-4 shadow-lg animate-float">
								<div className="flex items-center gap-3">
									<div className="w-10 h-10 rounded-lg bg-(--brand-50) flex items-center justify-center">
										<span className="material-icons text-brand text-[18px]">
											groups
										</span>
									</div>
									<div>
										<p className="text-xs font-bold text-heading">
											Active Corps Members
										</p>
										<p className="text-[11px] text-slate-500">
											2,400+ serving in Oyo
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
