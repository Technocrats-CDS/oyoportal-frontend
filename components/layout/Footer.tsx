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
    <footer className="bg-[#020617] text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 xl:gap-16">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="size-8 rounded bg-[#02B290] flex items-center justify-center">
                <span className="material-icons text-white text-[20px]">
                  school
                </span>
              </div>
              <span className="text-xl font-bold">NYSC</span>
            </div>
            <p className="text-sm text-gray-400 mt-2 max-w-xs leading-relaxed">
              Providing a digital home for Nigeria&apos;s future leaders during
              their service to the nation.
            </p>
          </div>

          {footerSections.map((section) => (
            <div key={section.title} className="flex flex-col gap-4">
              <h4 className="text-xs font-bold tracking-wider text-gray-300 uppercase">
                {section.title}
              </h4>
              <ul className="flex flex-col gap-3 text-sm text-white">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-white/80 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="flex flex-col gap-4">
            <h4 className="text-xs font-bold tracking-wider text-gray-300 uppercase">
              Social Media
            </h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.name}
                  href={social.href}
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center hover:bg-white/80 transition-colors"
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
              className="text-[#FFD700] font-bold mt-2 hover:underline"
            >
              nyscsupport.oyo@nysc.gov.ng
            </a>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#94A3B8]">
          <p>
            &copy; {new Date().getFullYear()} National Youth Service Corps,
            Nigeria. All Rights Reserved.
          </p>
          <div className="font-bold flex items-center gap-6">
            {bottomLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <a
              href="https://www.nysc.gov.ng/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Official Website
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
