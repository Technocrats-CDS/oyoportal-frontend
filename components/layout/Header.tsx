import Link from "next/link";
import Image from "next/image";

const navLinks = [
	{ label: "CDS Groups", href: "/cds-groups" },
	{ label: "LGAs", href: "/states-and-lga" },
	{ label: "Careers and Placements", href: "/careers-and-placements" },
	{ label: "Social Forum", href: "/social-forum" },
];

export default function Header() {
	return (
		<header className="sticky top-0 z-50 w-full bg-background border-b border-[#E2E8F0]">
			<div className="w-full px-4 md:px-6 lg:px-8 flex h-20 items-center justify-between gap-6">
				<Link
					href="/"
					className="flex items-center gap-3 shrink-0"
					aria-label="Home"
				>
					<Image
						src="/nysc-logo.png"
						alt="OyoKopa logo"
						width={40}
						height={40}
					/>
					<span className="text-xl font-bold tracking-tight text-brand">
						OyoKopa
					</span>
				</Link>

				<nav className="hidden lg:flex items-center gap-6">
					{navLinks.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className="text-sm text-foreground/90 hover:text-brand transition"
						>
							{link.label}
						</Link>
					))}
				</nav>

				<div className="flex items-center gap-3 ml-auto">
					<div className="relative hidden md:block">
						<span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
							search
						</span>
						<input
							type="search"
							aria-label="Search resources"
							placeholder="Search resources..."
							className="input w-72 pl-10 pr-12 rounded-full bg-white border border-[#E6EEF0] shadow-sm outline-none focus:ring-2 focus:ring-[#02B290]/30 transition-all text-sm"
						/>
						<span className="absolute right-3 top-1/2 -translate-y-1/2 bg-gray-100 text-xs text-foreground/70 px-2 py-0.5 rounded-full">
							⌘K
						</span>
					</div>
				</div>
			</div>
		</header>
	);
}
