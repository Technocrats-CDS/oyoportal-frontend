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
		<section className="w-full px-4 md:px-6 lg:px-8 py-6">
			<div className="max-w-7xl mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
					{/* Upcoming Events */}
					<div className="card flex flex-col">
						<div className="flex justify-between items-center mb-5">
							<h3 className="text-heading font-bold text-lg">
								Upcoming Events
							</h3>
							<div className="size-9 rounded-lg bg-blue-50 flex items-center justify-center">
								<span className="material-icons text-blue-500 text-[18px]">
									event
								</span>
							</div>
						</div>

						<div className="flex flex-col gap-4 flex-1">
							{events.map((event) => (
								<div key={event.title} className="flex gap-3.5">
									<div className="flex flex-col items-center justify-center bg-(--brand-50) w-11 h-13 rounded-lg shrink-0">
										<span className="text-brand font-bold text-[10px] uppercase leading-tight">
											{event.month}
										</span>
										<span className="text-brand font-bold text-lg leading-tight">
											{event.day}
										</span>
									</div>
									<div>
										<h4 className="text-heading font-semibold text-sm mb-1 leading-snug">
											{event.title}
										</h4>
										<p className="text-slate-400 text-xs mb-1.5">
											{event.time}
										</p>
										<button
											type="button"
											className="inline-flex items-center gap-1 text-brand font-semibold text-xs hover:opacity-80 transition-opacity"
										>
											<span className="material-icons text-[14px]">
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
							className="btn btn--outline-brand btn--size-default w-full mt-5 rounded-lg font-semibold text-xs"
						>
							View Calendar
						</Link>
					</div>

					{/* PCM Guides and Tips */}
					<div className="card flex flex-col">
						<div className="flex justify-between items-center mb-5">
							<h3 className="text-heading font-bold text-lg">
								PCM Guides &amp; Tips
							</h3>
							<div className="size-9 rounded-lg bg-amber-50 flex items-center justify-center">
								<span className="material-icons text-amber-500 text-[18px]">
									lightbulb
								</span>
							</div>
						</div>
						<div className="flex flex-col gap-3.5 text-sm flex-1 leading-relaxed text-slate-600">
							<p>
								You are strictly advised not to travel at night. Break your
								journey once it is 6pm.
							</p>
							<p>
								Ensure you board vehicles from designated parks and not by the
								road side. You must be security conscious.
							</p>
							<p>
								Visit the NYSC official website{" "}
								<a
									href="https://www.nysc.gov.ng"
									target="_blank"
									rel="noopener noreferrer"
									className="text-brand font-semibold hover:underline"
								>
									www.nysc.gov.ng
								</a>{" "}
								for State Coordinators&apos; contacts.
							</p>
						</div>
						<Link
							href="/guides"
							className="btn btn--outline-brand btn--size-default w-full mt-5 rounded-lg font-semibold text-xs"
						>
							View All Guides
						</Link>
					</div>

					{/* State Coordinator */}
					<div className="card flex flex-col">
						<div className="flex justify-between items-center mb-5">
							<h3 className="text-heading font-bold text-lg">
								State Coordinator
							</h3>
							<div className="size-9 rounded-lg bg-(--brand-50) flex items-center justify-center">
								<span className="material-icons text-brand text-[18px]">
									person
								</span>
							</div>
						</div>
						<div className="flex items-center gap-3.5 mb-5">
							<div className="size-12 rounded-full bg-slate-200 overflow-hidden shrink-0 ring-2 ring-(--brand-100)">
								<Image
									src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200"
									alt="State Coordinator"
									width={48}
									height={48}
									className="w-full h-full object-cover"
								/>
							</div>
							<div>
								<h4 className="text-heading font-bold text-sm">
									Barr. Yetunde Olayinka
								</h4>
								<p className="text-slate-400 text-xs mt-0.5">
									State Coordinator, Oyo
								</p>
							</div>
						</div>
						<blockquote className="text-sm flex-1 leading-relaxed text-slate-600 italic border-l-2 border-(--brand-200) pl-4">
							&ldquo;Welcome to OYO State NYSC. We are committed to making your
							service year productive and impactful. Stay focused and serve with
							pride.&rdquo;
						</blockquote>
						<Link
							href="/coordinator"
							className="btn btn--outline-brand btn--size-default w-full mt-5 rounded-lg font-semibold text-xs"
						>
							Read Full Message
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
}
