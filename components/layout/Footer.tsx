import Image from "next/image";
import Link from "next/link";
import type { ComponentType, SVGProps } from "react";

import OutboundLink from "@/components/shared/OutboundLink";
import X from "@/public/x.svg";
import Instagram from "@/public/instagram.svg";

const footerSections = [
	{
		title: "Portal Links",
		links: [
			{ name: "CDS Groups", href: "/cds-groups" },
			{ name: "Jobs & Placements", href: "/careers-and-placements" },
			{ name: "LGA & Locations", href: "/states-and-lga" },
			{ name: "Departments", href: "/departments" },
		],
	},
	{
		title: "Support",
		links: [
			{ name: "FAQ Section", href: "/faq" },
			{ name: "Guides & Tips", href: "/guides" },
			{ name: "LGA Inspectors", href: "/lga-inspectors" },
			{ name: "Contact State Office", href: "/contact" },
		],
	},
];

const socialLinks: {
	name: string;
	icon: ComponentType<SVGProps<SVGSVGElement>>;
	href: string;
}[] = [
	{ name: "X", icon: X, href: "#" },
	{ name: "Instagram", icon: Instagram, href: "#" },
];

const bottomLinks = [
	{ name: "Privacy Policy", href: "/privacy-policy" },
	{ name: "Terms of Use", href: "/terms-of-use" },
];

export default function Footer() {
	return (
		<footer className="bg-[#0a0f1a] text-white">
			<div className="w-full bg-linear-to-r from-(--brand-700) to-(--brand-500)">
				<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
					<div>
						<h3 className="text-lg font-bold text-white">
							Ready for your service year?
						</h3>
						<p className="text-sm text-white/70 mt-1">
							Access your dashboard, check placements, and stay updated.
						</p>
					</div>
					<OutboundLink
						href="https://portal.nysc.org.ng/nysc"
						trackingLabel="footer-portal-cta"
						className="btn btn--size-lg bg-white text-(--brand-700) font-bold rounded-xl px-8 hover:bg-white/90 transition-colors shrink-0 text-sm"
					>
						Go to NYSC Portal
					</OutboundLink>
				</div>
			</div>

			<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 pt-12 pb-8">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-16">
					<div className="flex flex-col gap-4">
						<div className="flex items-center gap-2.5">
							<div className="w-9 h-9 relative">
								<Image
									src="/nysc-logo.png"
									alt="OyoKopa logo"
									fill
									className="object-cover"
								/>
							</div>
							<span className="text-lg font-bold">
								Oyo<span className="text-(--brand-400)">Kopa</span>
							</span>
						</div>
						<p className="text-sm text-white/50 mt-1 max-w-xs leading-relaxed">
							Providing a digital home for Nigeria&apos;s future leaders during
							their service to the nation.
						</p>
					</div>

					{footerSections.map((section) => (
						<div key={section.title} className="flex flex-col gap-4">
							<h4 className="text-xs font-bold tracking-wider text-white/40 uppercase">
								{section.title}
							</h4>
							<ul className="flex flex-col gap-2.5">
								{section.links.map((link) => (
									<li key={link.href}>
										<Link
											href={link.href}
											className="text-sm text-white/60 hover:text-white transition-colors"
										>
											{link.name}
										</Link>
									</li>
								))}
							</ul>
						</div>
					))}

					<div className="flex flex-col gap-4">
						<h4 className="text-xs font-bold tracking-wider text-white/40 uppercase">
							Connect
						</h4>
						<div className="flex gap-3">
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<Link
										key={social.name}
										href={social.href}
										className="w-9 h-9 rounded-lg bg-white/12 flex items-center justify-center hover:bg-white/24 transition-colors ring-1 ring-white/6"
										aria-label={social.name}
										title={social.name}
									>
										<Icon width={14} fill="white" />
									</Link>
								);
							})}
						</div>
						<a
							href="mailto:nyscsupport.oyo@nysc.gov.ng"
							className="text-sm text-(--brand-400) font-semibold mt-1 hover:underline"
						>
							nyscsupport.oyo@nysc.gov.ng
						</a>
					</div>
				</div>

				<div className="mt-10 pt-6 border-t border-white/8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/30">
					<p>&copy; {new Date().getFullYear()} OyoKopa. All Rights Reserved.</p>
					<div className="flex items-center gap-5">
						{bottomLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								className="hover:text-white/60 transition-colors"
							>
								{link.name}
							</Link>
						))}
						<OutboundLink
							href="https://www.nysc.gov.ng/"
							trackingLabel="footer-official-site"
							className="hover:text-white/60 transition-colors"
						>
							NYSC Official
						</OutboundLink>
					</div>
				</div>
			</div>
		</footer>
	);
}
