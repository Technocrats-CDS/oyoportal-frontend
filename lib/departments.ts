export interface DepartmentProfile {
	name: string;
	headName: string;
	headTitle: string;
	summary: string;
	responsibilities: string[];
	image: string;
	imageAlt: string;
	focusLabel: string;
	contactHint: string;
}

export interface StateCoordinatorProfile {
	name: string;
	title: string;
	summary: string;
	image: string;
	imageAlt: string;
	highlights: string[];
}

export const stateCoordinatorProfile: StateCoordinatorProfile = {
	name: "Barr. Yetunde Olayinka",
	title: "State Coordinator, NYSC Oyo",
	summary:
		"Leads the state office, approves major service-year updates, and serves as the public face of NYSC Oyo.",
	image:
		"https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=1200",
	imageAlt: "Portrait placeholder for the Oyo State Coordinator",
	highlights: ["State leadership", "Official briefings", "Escalation point"],
};

export const departmentProfiles: DepartmentProfile[] = [
	{
		name: "Administration & Supply",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Handles records, office logistics, internal coordination, and general administrative support for the Oyo state office.",
		responsibilities: [
			"Files and internal memos",
			"Office coordination and logistics",
			"Supply and records tracking",
		],
		image:
			"https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for Administration and Supply",
		focusLabel: "Operations",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Planning, Research & Statistics",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Collects service data, tracks program outcomes, and prepares the internal reporting that supports state decisions.",
		responsibilities: [
			"Data collection and reporting",
			"Program research and evaluation",
			"Planning for state initiatives",
		],
		image:
			"https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for Planning, Research and Statistics",
		focusLabel: "Insights",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Community Development Service",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Supports CDS group coordination, community projects, and the service activities that connect corps members to local needs.",
		responsibilities: [
			"CDS coordination and meetings",
			"Community projects and approvals",
			"Service impact follow-up",
		],
		image:
			"https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for Community Development Service",
		focusLabel: "Community",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Skills Acquisition & Entrepreneurship Development",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Coordinates skills training, entrepreneurship awareness, and practical workshops for corps members in Oyo.",
		responsibilities: [
			"SAED workshop planning",
			"Entrepreneurship support and follow-up",
			"Training attendance tracking",
		],
		image:
			"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for SAED and entrepreneurship",
		focusLabel: "Training",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Public Relations & Protocol",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Manages public communications, official updates, and protocol around state events and public appearances.",
		responsibilities: [
			"Public statements and announcements",
			"Event protocol and coordination",
			"Media and image management",
		],
		image:
			"https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for Public Relations and Protocol",
		focusLabel: "Communications",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Welfare, Health & Safety",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Handles corps member welfare, health-related coordination, and basic safety concerns across the state office.",
		responsibilities: [
			"Welfare escalation and follow-up",
			"Health support coordination",
			"Safety notices and referrals",
		],
		image:
			"https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for welfare, health, and safety",
		focusLabel: "Care",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Accounts & Finance",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Tracks budgeting, approvals, and office expenditure support for the Oyo NYSC operation.",
		responsibilities: [
			"Budget and expense coordination",
			"Payment approval workflow",
			"Financial record keeping",
		],
		image:
			"https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for Accounts and Finance",
		focusLabel: "Finance",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Information & Communication Technology",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Supports digital tools, records systems, and technical troubleshooting for internal office workflows.",
		responsibilities: [
			"Systems and portal support",
			"Records digitization",
			"Technical troubleshooting",
		],
		image:
			"https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&q=80&w=1200",
		imageAlt:
			"Portrait placeholder for Information and Communication Technology",
		focusLabel: "Technology",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Inspection & Evaluation",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Reviews placement compliance, monitors field updates, and evaluates state-wide service delivery touchpoints.",
		responsibilities: [
			"PPA verification and visits",
			"Service compliance reviews",
			"Evaluation reports and follow-up",
		],
		image:
			"https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for Inspection and Evaluation",
		focusLabel: "Compliance",
		contactHint: "Use the contact page for the verified desk line",
	},
	{
		name: "Legal & Complaints Desk",
		headName: "Official roster pending",
		headTitle: "Department head",
		summary:
			"Handles policy questions, escalations, and official complaints routed through the state office.",
		responsibilities: [
			"Policy guidance and interpretation",
			"Complaint intake and tracking",
			"Escalation review and response",
		],
		image:
			"https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=1200",
		imageAlt: "Portrait placeholder for Legal and Complaints Desk",
		focusLabel: "Governance",
		contactHint: "Use the contact page for the verified desk line",
	},
];
