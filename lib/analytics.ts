const analyticsConsentKey = "oyoportal.analytics-consent";

type AnalyticsConsent = "granted" | "denied" | null;

type AnalyticsWindow = Window & {
	dataLayer?: Array<Record<string, unknown>>;
	gtag?: (...args: unknown[]) => void;
};

function canUseBrowserStorage() {
	return typeof window !== "undefined";
}

export function readAnalyticsConsent(): AnalyticsConsent {
	if (!canUseBrowserStorage()) {
		return null;
	}

	const storedValue = window.localStorage.getItem(analyticsConsentKey);
	if (storedValue === "granted" || storedValue === "denied") {
		return storedValue;
	}

	return null;
}

export function hasAnalyticsConsent(): boolean {
	return readAnalyticsConsent() === "granted";
}

export function setAnalyticsConsent(consent: boolean) {
	if (!canUseBrowserStorage()) {
		return;
	}

	window.localStorage.setItem(
		analyticsConsentKey,
		consent ? "granted" : "denied",
	);
}

export function trackOutboundLink(href: string, label: string) {
	if (!canUseBrowserStorage() || !hasAnalyticsConsent()) {
		return;
	}

	const payload = {
		event: "outbound_click",
		link_url: href,
		link_label: label,
		timestamp: new Date().toISOString(),
	};

	const analyticsWindow = window as AnalyticsWindow;

	if (analyticsWindow.gtag) {
		analyticsWindow.gtag("event", "outbound_click", {
			link_url: href,
			link_label: label,
		});
	}

	if (analyticsWindow.dataLayer) {
		analyticsWindow.dataLayer.push(payload);
	}
}
