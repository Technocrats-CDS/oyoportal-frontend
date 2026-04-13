export interface HeroStat {
	value: string;
	label: string;
}

export interface QuickAccessCard {
	title: string;
	description: string;
	href: string;
	icon: string;
	trackingLabel: string;
	external?: boolean;
}

export interface FeaturedLink {
	title: string;
	description: string;
	href: string;
	icon: string;
	group: string;
	trackingLabel: string;
	external?: boolean;
}

export interface Stakeholder {
	name: string;
	role: string;
	summary: string;
	href: string;
	label: string;
}

export interface GuideCard {
	title: string;
	description: string;
	href: string;
	icon: string;
}

export interface FaqItem {
	question: string;
	answer: string;
}

export interface FaqSection {
	title: string;
	description: string;
	items: FaqItem[];
}

export interface MobilizationEntry {
	date: string;
	title: string;
	venue: string;
	audience: string;
	note: string;
}

export interface SupportContact {
	name: string;
	role: string;
	summary: string;
	phone: string;
	email: string;
	mapHref: string;
}

export const oyoHeroEvent = {
	title: "Oyo Orientation Countdown",
	description:
		"Track the next Oyo State orientation and clearance window from one place.",
	location: "NYSC Orientation Camp, Oyo State",
	targetDate: "2026-10-24T07:30:00+01:00",
	primaryCta: {
		label: "Go to Your Portal",
		href: "https://portal.nysc.org.ng/nysc",
		trackingLabel: "hero-portal-cta",
	},
	secondaryCta: {
		label: "View Mobilization Dates",
		href: "/mobilization",
	},
	tertiaryCta: {
		label: "Explore CDS Groups",
		href: "/cds-groups",
	},
};

export const heroStats: HeroStat[] = [
	{ value: "33", label: "LGAs Covered" },
	{ value: "500+", label: "CDS Groups" },
	{ value: "2K+", label: "Active Members" },
];

export const quickAccessCards: QuickAccessCard[] = [
	{
		title: "CDS Groups",
		description:
			"Browse active CDS groups, meeting updates, and project activity across Oyo.",
		href: "/cds-groups",
		icon: "groups",
		trackingLabel: "quick-access-cds",
	},
	{
		title: "SAED Support",
		description:
			"Find skills acquisition guidance, orientation notes, and useful service-year tips.",
		href: "/guides#saed",
		icon: "school",
		trackingLabel: "quick-access-saed",
	},
	{
		title: "Departments",
		description:
			"Meet the state coordinator and the NYSC Oyo department leads.",
		href: "/departments",
		icon: "badge",
		trackingLabel: "quick-access-departments",
	},
	{
		title: "Registration",
		description:
			"Open the national portal to complete registration and service-year checks.",
		href: "https://portal.nysc.org.ng/nysc",
		icon: "assignment_turned_in",
		trackingLabel: "quick-access-registration",
		external: true,
	},
];

export const featuredLinks: FeaturedLink[] = [
	{
		title: "Departments directory",
		description: "Meet the state coordinator and the office department leads.",
		href: "/departments",
		icon: "badge",
		group: "Leadership",
		trackingLabel: "featured-link-departments",
	},
	{
		title: "Mobilization timetable",
		description: "Key dates, venue notes, and printable schedule information.",
		href: "/mobilization",
		icon: "event_note",
		group: "Resources",
		trackingLabel: "featured-link-mobilization",
	},
	{
		title: "FAQ and self-service",
		description:
			"Fast answers for arrival, clearance, and registration questions.",
		href: "/faq",
		icon: "quiz",
		group: "Resources",
		trackingLabel: "featured-link-faq",
	},
	{
		title: "State contacts",
		description:
			"Office lines, map links, and support channels for corps members.",
		href: "/contact",
		icon: "call",
		group: "Contacts",
		trackingLabel: "featured-link-contact",
	},
	{
		title: "Service guides",
		description:
			"Housing, safety, transport, and food guidance for Oyo placements.",
		href: "/guides",
		icon: "menu_book",
		group: "Resources",
		trackingLabel: "featured-link-guides",
	},
	{
		title: "Certificate verification",
		description:
			"Open the national portal for verification and registration tasks.",
		href: "https://portal.nysc.org.ng/nysc",
		icon: "verified_user",
		group: "Forms",
		trackingLabel: "featured-link-verification",
		external: true,
	},
	{
		title: "Payments and listings",
		description: "Jump to the official portal for any payment-related action.",
		href: "https://portal.nysc.org.ng/nysc",
		icon: "payments",
		group: "Forms",
		trackingLabel: "featured-link-payments",
		external: true,
	},
];

export const stakeholders: Stakeholder[] = [
	{
		name: "Oyo State NYSC Secretariat",
		role: "State coordination",
		summary:
			"Primary escalation point for clearance, deployment, and service updates.",
		href: "/contact",
		label: "View support lines",
	},
	{
		name: "State Coordinator",
		role: "Program leadership",
		summary:
			"The state office provides the official service-year briefings and announcements.",
		href: "/guides#state-coordinator",
		label: "Read the profile",
	},
	{
		name: "Verified local partners",
		role: "Housing and logistics",
		summary:
			"Curated partners and resources for accommodation, transport, and settling in.",
		href: "/guides#partners",
		label: "Browse partners",
	},
];

export const guideCards: GuideCard[] = [
	{
		title: "Housing in Ibadan",
		description:
			"Find affordable and secure flats near your PPA in the major city centers.",
		href: "/guides#housing",
		icon: "home",
	},
	{
		title: "Safety Tips",
		description:
			"Emergency contacts, Amotekun posts, and safety protocols for Ogbomoso and Ibadan.",
		href: "/guides#safety",
		icon: "shield",
	},
	{
		title: "Transportation",
		description:
			"Navigate taxis, routes, and interstate parks without guesswork.",
		href: "/guides#transport",
		icon: "directions_car",
	},
	{
		title: "Local Markets",
		description:
			"Know the major markets for groceries, tailoring, and everyday supplies.",
		href: "/guides#markets",
		icon: "store",
	},
];

export const faqSections: FaqSection[] = [
	{
		title: "Arrival and clearance",
		description: "What to know before and after you get to Oyo State.",
		items: [
			{
				question: "When should I report to Oyo State?",
				answer:
					"Check the mobilization timetable, then report during the approved window with all required documents.",
			},
			{
				question: "Where do I complete clearance?",
				answer:
					"Clearance details are listed on the mobilization page and at the state office contact page.",
			},
		],
	},
	{
		title: "Registration and portal",
		description: "National portal steps and basic account help.",
		items: [
			{
				question: "How do I open the NYSC portal?",
				answer:
					"Use the registration button on the homepage or the portal link in the quick access cards.",
			},
			{
				question: "What if my browser session times out?",
				answer:
					"Refresh the page, sign in again, and review the FAQ before retrying the action.",
			},
		],
	},
	{
		title: "Service year support",
		description: "Useful support answers for life in Oyo State.",
		items: [
			{
				question: "Where can I get housing guidance?",
				answer:
					"Use the service guides page for accommodation, safety, transport, and market recommendations.",
			},
			{
				question: "Who should I contact for help?",
				answer:
					"Visit the contact page for the state office line, email address, and map links.",
			},
		],
	},
];

export const mobilizationSchedule: MobilizationEntry[] = [
	{
		date: "2026-10-24",
		title: "Arrival and first screening",
		venue: "NYSC Orientation Camp, Oyo State",
		audience: "Prospective corps members",
		note: "Report early, keep originals ready, and follow the camp desk instructions.",
	},
	{
		date: "2026-10-27",
		title: "Clearance briefing",
		venue: "State Secretariat, Ibadan",
		audience: "Batch A participants",
		note: "Bring photocopies, ID cards, and the completed registration slip.",
	},
	{
		date: "2026-10-31",
		title: "SAED orientation",
		venue: "Camp multipurpose hall",
		audience: "All participants",
		note: "Training tracks and facilitator notes are shared on the guides page.",
	},
	{
		date: "2026-11-03",
		title: "LGA office follow-up",
		venue: "Local government offices",
		audience: "Corps members in placement",
		note: "Confirm deployment details and ask for LGA-specific support if needed.",
	},
];

export const supportContacts: SupportContact[] = [
	{
		name: "State Office Help Desk",
		role: "General support",
		summary: "Use this line for clearance, redeployment, and portal issues.",
		phone: "+234 803 000 0000",
		email: "nyscsupport.oyo@nysc.gov.ng",
		mapHref: "https://maps.google.com/?q=NYSC+Secretariat+Ibadan",
	},
	{
		name: "Camp Operations Desk",
		role: "Arrival support",
		summary: "Use this line during orientation and camp-related updates.",
		phone: "+234 803 000 0001",
		email: "campdesk.oyo@nysc.gov.ng",
		mapHref: "https://maps.google.com/?q=NYSC+Orientation+Camp+Oyo",
	},
	{
		name: "Emergency and escalation",
		role: "Urgent cases",
		summary: "Use this channel for safety or urgent reporting needs.",
		phone: "+234 803 000 0002",
		email: "escalation.oyo@nysc.gov.ng",
		mapHref: "https://maps.google.com/?q=Oyo+State+Emergency+Services",
	},
];
