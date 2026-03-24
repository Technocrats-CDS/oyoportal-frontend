import Link from "next/link";
import Image from "next/image";

export default function InfoSections() {
	const events = [
		{
			month: "OCT",
			day: "24",
			title: "State-wide Sanitation Exercise",
			time: "07:30 AM • Ikeja Environs",
		},
		{
			month: "OCT",
			day: "27",
			title: "Skills Acquisition (SAED) Seminar",
			time: "10:00 AM • NYSC Orient. Camp",
		},
		{
			month: "NOV",
			day: "02",
			title: "Governor's Honors Briefing",
			time: "12:00 PM • State House",
		},
	];

	return (
		<section className="w-full px-4 md:px-6 lg:px-8 py-8">
			<div className="container mx-auto max-w-7xl">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Upcoming Events */}
					<div className="card border border-[#E2E8F0] flex flex-col">
						<div className="flex justify-between items-center mb-6">
							<h3 className="text-heading font-bold text-xl">
								Upcoming Events
							</h3>
							<span className="material-icons text-[#137FEC] text-2xl">
								event
							</span>
						</div>

						<div className="flex flex-col gap-5 flex-1">
							{events.map((event) => (
								<div key={event.title} className="flex gap-4">
									<div className="flex flex-col items-center justify-center bg-[#137FEC]/10 w-12 h-14 rounded-lg shrink-0">
										<span className="text-[#02B290] font-bold text-xs leading-tight">
											{event.month}
										</span>
										<span className="text-[#02B290] font-bold text-xl leading-tight">
											{event.day}
										</span>
									</div>
									<div>
										<h4 className="text-heading font-bold text-sm mb-1">
											{event.title}
										</h4>
										<p className="text-[#64748B] text-[11px] mb-1.5">
											{event.time}
										</p>
										<button
											type="button"
											className="btn btn--size-sm inline-flex items-center gap-1 text-[#137FEC] bg-transparent font-bold hover:text-[#137FEC]/80 transition-colors"
										>
											<span className="material-icons text-xs!">
												notifications_none
											</span>
											Remind Me
										</button>
									</div>
								</div>
							))}
						</div>

						<Link
							href="/calendar"
							className="btn btn--size-default w-full mt-6 bg-[#E7F2FD] border border-[#137FEC]/20 text-[#137FEC] font-bold text-sm hover:bg-[#137FEC]/20 transition-colors"
						>
							View Calendar
						</Link>
					</div>

					{/* PCM Guides and Tips */}
					<div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col">
						<h3 className="text-heading font-bold text-xl mb-6">
							PCM Guides and Tips
						</h3>
						<div className="flex flex-col gap-4 text-sm flex-1 leading-relaxed">
							<p>
								You are strictly advised not to travel at night. Break your
								journey once it is 6pm.
							</p>
							<p>
								Ensure you board vehicles from designated parks and not by the
								road side. You must be security conscious.
							</p>
							<p>
								You can visit the NYSC official website{" "}
								<span className="text-[#137FEC] font-bold hover:cursor-pointer hover:text-[#137FEC]/80 transition-colors">
									<a
										href="http://www.nysc.gov.ng"
										target="_blank"
										rel="noopener noreferrer"
									>
										www.nysc.gov.ng
									</a>
								</span>{" "}
								for the contacts of the NYSC State Coordinators.
							</p>
						</div>
						<Link
							href="/guides"
							className="w-full text-center py-2.5 mt-6 rounded-lg bg-[#E7F2FD] border border-[#137FEC]/20 text-[#137FEC] font-bold text-sm hover:bg-[#137FEC]/20 transition-colors"
						>
							View All
						</Link>
					</div>

					{/* State Coordinator */}
					<div className="bg-white rounded-2xl p-6 shadow-sm border border-[#E2E8F0] flex flex-col">
						<h3 className="text-heading font-bold text-xl mb-6">
							State Coordinator
						</h3>
						<div className="flex items-center gap-4 mb-6">
							<div className="size-14 rounded-full bg-slate-200 overflow-hidden shrink-0">
								<Image
									src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
									alt="State Coordinator"
									width={56}
									height={56}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h4 className="text-heading font-bold">
									Barr. Yetunde Olayinka
								</h4>
								<p className="text-[#64748B] text-xs mt-0.5">
									State Coordinator, Lagos
								</p>
							</div>
						</div>
						<div className="text-sm flex-1 leading-relaxed">
							&quot;Welcome to OYO State NYSC. We are committed to making your
							service year productive and impactful. Stay focused and serve with
							pride.&quot;
						</div>
						<Link
							href="/coordinator"
							className="w-full text-center py-2.5 mt-6 rounded-lg bg-[#E7F2FD] border border-[#137FEC]/20 text-[#137FEC] font-bold text-sm hover:bg-[#137FEC]/20 transition-colors"
						>
							Read Full Message
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
