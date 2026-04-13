"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

import OutboundLink from "@/components/shared/OutboundLink";

const navLinks = [
	{ label: "CDS Groups", href: "/cds-groups" },
	{ label: "LGAs", href: "/states-and-lga" },
	{ label: "Departments", href: "/departments" },
	{ label: "Mobilization", href: "/mobilization" },
	{ label: "FAQ", href: "/faq" },
	{ label: "Careers", href: "/careers-and-placements" },
];

export default function Header() {
	const [mobileOpen, setMobileOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-xl border-b border-slate-100/80">
			<div className="w-full max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex h-16 items-center justify-between gap-4">
				<Link
					href="/"
					className="flex items-center gap-2.5 shrink-0"
					aria-label="Home"
				>
					<Image
						src="/nysc-logo.png"
						alt="OyoKopa logo"
						width={36}
						height={36}
					/>
					<span className="text-lg font-bold tracking-tight text-heading">
						Oyo<span className="text-brand">Kopa</span>
					</span>
				</Link>

				<nav className="hidden lg:flex items-center gap-1">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="px-3.5 py-2 text-sm font-medium text-slate-600 hover:text-brand rounded-lg hover:bg-slate-50 transition-all"
						>
							{link.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-3">
					<div className="relative hidden md:block">
						<span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px]">
							search
						</span>
						<input
							type="search"
							aria-label="Search resources"
							placeholder="Search..."
							className="w-56 lg:w-64 h-9 pl-9 pr-10 rounded-lg bg-slate-50 border border-slate-200/80 outline-none focus:ring-2 focus:ring-(--brand-100) focus:border-brand text-sm text-heading placeholder:text-slate-400 transition-all"
						/>
						<kbd className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[10px] text-slate-400 bg-white border border-slate-200 px-1.5 py-0.5 rounded font-mono">
							⌘K
						</kbd>
					</div>

					<button
						type="button"
						onClick={() => setMobileOpen((prev) => !prev)}
						className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg hover:bg-slate-100 transition-colors"
						aria-label="Toggle menu"
						aria-expanded={mobileOpen}
					>
						<span className="material-icons text-heading text-[22px]">
							{mobileOpen ? "close" : "menu"}
						</span>
					</button>
				</div>
			</div>
			{mobileOpen && (
				<div className="lg:hidden border-t border-slate-100 bg-white animate-fade-in">
					<nav className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
						{navLinks.map((link) => (
							<Link
								key={link.href}
								href={link.href}
								onClick={() => setMobileOpen(false)}
								className="px-4 py-3 text-sm font-medium text-slate-700 rounded-lg hover:bg-slate-50 hover:text-brand transition-all"
							>
								{link.label}
							</Link>
						))}
						<div className="pt-3 border-t border-slate-100 mt-2">
							<OutboundLink
								href="https://portal.nysc.org.ng/nysc"
								trackingLabel="header-mobile-portal"
								className="btn btn--brand btn--size-default w-full rounded-lg font-semibold text-sm"
							>
								Go to NYSC Portal
							</OutboundLink>
						</div>
					</nav>
				</div>
			)}
		</header>
	);
}
