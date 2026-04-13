import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const domain =
		process.env.NEXT_PUBLIC_SITE_URL ??
		(process.env.VERCEL_URL
			? `https://${process.env.VERCEL_URL}`
			: "http://localhost:4500");

	const routePaths = [
		"/",
		"/departments",
		"/faq",
		"/mobilization",
		"/guides",
		"/contact",
		"/privacy-policy",
		"/terms-of-use",
		"/cds-groups",
		"/states-and-lga",
		"/careers-and-placements",
	];

	return routePaths.map((path, index) => ({
		url: new URL(path, domain).toString(),
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: index === 0 ? 1 : 0.8,
	}));
}
