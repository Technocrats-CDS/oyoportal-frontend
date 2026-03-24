"use client";

import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
	return (
		<section
			className="relative w-screen m-0 p-0 overflow-hidden"
			style={{
				marginLeft: "calc(50% - 50vw)",
				marginRight: "calc(50% - 50vw)",
			}}
		>
			<div className="relative w-full min-h-[640px] flex items-center">
				{/* Background image + overlay */}
				<div className="absolute inset-0 -z-10">
					<Image
						src="/hero-image.png"
						alt="NYSC corps parade"
						fill
						className="object-cover object-center"
						priority
						loading="eager"
					/>
					<div className="absolute inset-0 bg-gradient-to-r from-[#001f18]/80 via-[#013026]/50 to-transparent" />
				</div>

				<div className="relative z-10 container mx-auto max-w-[1400px] px-4 md:px-6 lg:px-8 pt-0 pb-12">
					<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
						<div className="lg:col-span-7 text-center lg:text-left">
							<div className="inline-flex items-center gap-3 bg-white/10 px-3 py-1 rounded-full mb-4">
								<span
									className="w-2 h-2 rounded-full bg-[#FFD700]"
									aria-hidden="true"
								></span>
								<span className="text-xs text-white font-semibold">
									Service Year: Batch A • Stream I
								</span>
							</div>

							<h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-4">
								Stay informed and prepared
								<span className="block text-gradient text-3xl sm:text-4xl font-extrabold mt-2">
									NYSC announcements & mobilization info
								</span>
							</h1>

							<p className="text-lg text-white/90 max-w-xl mb-6">
								A curated hub for service updates, CDS groups, placement notices
								and helpful guides — built for corps members.
							</p>

							<div className="flex flex-col sm:flex-row items-center lg:justify-start justify-center gap-4">
								<a
									href="https://portal.nysc.org.ng/nysc"
									target="_blank"
									rel="noopener noreferrer"
									className="btn btn--size-lg btn--brand w-full sm:w-auto font-semibold rounded-2xl shadow-lg px-6 py-3"
								>
									Go to Your Portal
								</a>

								<Link
									href="/learn-more"
									className="btn btn--size-lg bg-transparent border-2 border-white text-white font-semibold rounded-2xl px-6 py-3 w-full sm:w-auto text-center"
								>
									Learn More
								</Link>
							</div>
						</div>

						<div className="lg:col-span-5 hidden lg:flex justify-end">
							<div className="w-[380px] h-[480px] relative rounded-3xl overflow-hidden shadow-2xl transform-gpu hover:scale-[1.03] transition-all duration-300">
								<Image
									src="/female-corps-member.png"
									alt="Corps member standing with flag"
									fill
									className="object-cover object-bottom"
									priority
									loading="eager"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
