import Link from "next/link";

const navLinks = [
  { label: "CDS Groups", href: "/cds-groups" },
  { label: "States and LGA", href: "/states-and-lga" },
  { label: "Careers and Placements", href: "/careers-and-placements" },
  { label: "Social Forum", href: "/social-forum" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background border-b border-[#E2E8F0]">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl flex h-20 items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="size-8 rounded bg-[#02B290] flex items-center justify-center">
            <span className="material-icons text-white text-[20px]">
              school
            </span>
          </div>
          <span className="text-xl font-bold tracking-tight text-[#02B290]">
            NYSC
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:border-b-2 hover:border-[#02B290] hover:text-[#02B290] transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="flex-1 w-full max-w-sm hidden md:block">
          <div className="relative">
            <span className="material-icons absolute left-3 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              search
            </span>
            <input
              type="search"
              placeholder="Search resources..."
              className="w-full h-10 pl-10 pr-4 rounded-md bg-white border-none outline-none focus:ring-2 focus:ring-[#02B290]/50 transition-all"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
