import Image from "next/image";
import Link from "next/link";

const footerSections = [
	{
		title: "Portal Links",
		links: [
			{ name: "CDS Groups", href: "/cds-groups" },
			{ name: "Jobs and Placements", href: "/states-and-lga" },
			{ name: "LGA and locations", href: "/careers-and-placements" },
			{ name: "Social Forum", href: "/social-forum" },
		],
	},
	{
		title: "Support",
		links: [
			{ name: "FAQ Section", href: "faq" },
			{ name: "Guide and Tips", href: "guide-and-tips" },
			{ name: "LGA Inspectors List", href: "lga-inspectors" },
			{ name: "Contact State Office", href: "contact" },
		],
	},
];

const socialLinks = [
	{ name: "x", icon: "/x.svg", href: "#" },
	{ name: "instagram", icon: "/instagram.svg", href: "#" },
];

const bottomLinks = [
	{ name: "Privacy Policy", href: "privacy-policy" },
	{ name: "Terms of Use", href: "terms-of-use" },
];

export default function Footer() {
	return (
		<footer className="bg-[#0b0b0f] text-white pt-12 pb-8">
			<div className="w-full px-4 md:px-6 lg:px-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-16">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2">
							<div className="w-10 h-10 relative">
								<Image
									src="/nysc-logo.png"
									alt="OyoKopa logo"
									fill
									className="object-cover"
								/>
							</div>
							<span className="text-xl font-bold">OyoKopa</span>
						</div>
						<p className="text-sm text-white/75 mt-2 max-w-xs leading-relaxed">
							Providing a digital home for Nigeria's future leaders during their
							service to the nation.
						</p>
					</div>

					{footerSections.map((section) => (
						<div key={section.title} className="flex flex-col gap-4">
							<h4 className="text-xs font-bold tracking-wider text-white/90 uppercase">
								{section.title}
							</h4>
							<ul className="flex flex-col gap-3 text-sm text-white/90">
								{section.links.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="hover:text-white transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="flex flex-col gap-4">
						<h4 className="text-xs font-bold tracking-wider text-white/90 uppercase">
							Social Media
						</h4>
						<div className="flex gap-4">
							{socialLinks.map((social) => (
								<Link
									key={social.name}
									href={social.href}
									className="btn btn--size-icon rounded-full bg-white flex items-center justify-center hover:bg-gray-100 transition-colors"
									aria-label={social.name}
								>
									<Image
										src={social.icon}
										alt={social.name}
										width={20}
										height={20}
									/>
								</Link>
							))}
						</div>
						<a
							href="mailto:nyscsupport.oyo@nysc.gov.ng"
							className="text-[#B7791F] font-bold mt-2 hover:underline"
						>
							nyscsupport.oyo@nysc.gov.ng
						</a>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-[#1f2937] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/60">
					<p>&copy; {new Date().getFullYear()} OyoKopa. All Rights Reserved.</p>
					<div className="font-medium flex items-center gap-6">
						{bottomLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="hover:text-white/90 transition-colors"
							>
								{link.name}
							</Link>
						))}
						<a
							href="https://www.nysc.gov.ng/"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:text-white/90 transition-colors"
						>
							Official Website
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
