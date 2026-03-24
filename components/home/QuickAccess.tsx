import Link from "next/link";

export default function QuickAccess() {
	return (
		<section className="w-full px-4 md:px-6 lg:px-8 py-12">
			<div className="container mx-auto max-w-7xl">
				<h2 className="text-xl font-bold text-heading mb-8">Quick Access</h2>

				<div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
					{/* Main Cards (LGA, PPA, Job Board) */}
					<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-6">
						{/* LGA Card */}
						<div className="card border border-[#E2E8F0] flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
							<div className="size-12 rounded-md bg-[#137FEC]/10 flex items-center justify-center text-brand">
								<span className="material-icons text-[24px]">school</span>
							</div>
							<div className="flex-1">
								<h3 className="text-brand font-semibold mb-2">LGA</h3>
								<p className="text-sm leading-tight mb-6">
									Locate Your Local government area, and know your local
									government Inspector
								</p>
							</div>
							<Link
								href="/lga"
								className="btn btn--size-default w-full text-center bg-linear-brand text-white font-semibold bg-size-[200%_200%] bg-left hover:bg-right transition-all duration-500"
							>
								Find my LGA
							</Link>
						</div>

						{/* PPA Card */}
						<div className="card border border-[#E2E8F0] flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
							<div className="size-12 rounded-xl bg-[#EAF4FD] flex items-center justify-center text-[#137FEC]">
								<span className="material-icons text-[24px]">business</span>
							</div>
							<div className="flex-1">
								<h3 className="text-[#137FEC] font-semibold mb-2">PPA</h3>
								<p className="text-sm leading-tight mb-6">
									Locate Your Local government area, and know your local
									government Inspector
								</p>
							</div>
							<Link
								href="/ppa"
								className="btn btn--size-default w-full text-center bg-linear-to-r from-[#137FEC] to-[#12E3E3] text-white font-semibold bg-size-[200%_200%] bg-left hover:bg-right transition-all duration-500"
							>
								Find my PPA
							</Link>
						</div>

						{/* Job Board Card */}
						<div className="card border border-[#E2E8F0] flex flex-col items-start gap-4 hover:shadow-md transition-shadow">
							<div className="size-12 rounded-xl bg-[#FEF1E8] flex items-center justify-center text-[#F97316]">
								<span className="material-icons text-[24px]">work</span>
							</div>
							<div className="flex-1">
								<h3 className="text-[#F97316] font-semibold mb-2">Job Board</h3>
								<p className="text-sm leading-tight mb-6">
									Locate Your Local government area, and know your local
									government Inspector
								</p>
							</div>
							<Link
								href="/jobs"
								className="btn btn--size-default w-full text-center bg-linear-to-r from-[#F97316] to-[#F2B119] text-white font-semibold bg-size-[200%_200%] bg-left hover:bg-right transition-all duration-500"
							>
								Job Openings
							</Link>
						</div>
					</div>

					{/* Side Links */}
					<div className="lg:col-span-4 card border border-[#E2E8F0] flex flex-col justify-between">
						<Link
							href="/clearance"
							className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-all"
						>
							<div className="size-12 shrink-0 rounded-lg bg-[#137FEC]/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white group-hover:shadow-md transition-all duration-300">
								<span className="material-icons text-[24px]">school</span>
							</div>
							<div className="flex-1">
								<h4 className="text-gray-900 font-bold text-sm group-hover:text-brand transition-colors">
									Monthly clearance News
								</h4>
								<p className="text-gray-500 text-xs text-balance mt-1">
									Find Dates for biometrics across all local governments
								</p>
							</div>
						</Link>

						<Link
							href="/news"
							className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-all"
						>
							<div className="size-12 shrink-0 rounded-lg bg-[#137FEC]/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white group-hover:shadow-md transition-all duration-300">
								<span className="material-icons text-[24px]">description</span>
							</div>
							<div className="flex-1">
								<h4 className="text-gray-900 font-bold text-sm group-hover:text-brand transition-colors">
									CDS and SAED News
								</h4>
								<p className="text-gray-500 text-xs text-balance mt-1">
									All CDS and SAED News and Updates
								</p>
							</div>
						</Link>

						<Link
							href="/internships"
							className="group flex items-center gap-4 p-3 -mx-3 rounded-xl hover:bg-slate-50 transition-all"
						>
							<div className="size-12 shrink-0 rounded-lg bg-[#137FEC]/10 flex items-center justify-center text-brand group-hover:bg-brand group-hover:text-white group-hover:shadow-md transition-all duration-300">
								<span className="material-icons text-[24px]">cases</span>
							</div>
							<div className="flex-1">
								<h4 className="text-gray-900 font-bold text-sm group-hover:text-brand transition-colors">
									Available Internship Positions
								</h4>
								<p className="text-gray-500 text-xs text-balance mt-1">
									Find Dates for biometrics across all local governments
								</p>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
