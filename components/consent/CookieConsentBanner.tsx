"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/shadcn/button";
import { readAnalyticsConsent, setAnalyticsConsent } from "@/lib/analytics";

export default function CookieConsentBanner() {
	const [isVisible, setIsVisible] = useState(false);

	useEffect(() => {
		setIsVisible(readAnalyticsConsent() === null);
	}, []);

	if (!isVisible) {
		return null;
	}

	return (
		<div className="fixed inset-x-0 bottom-4 z-50 px-4 pointer-events-none">
			<div className="mx-auto flex w-full max-w-4xl flex-col gap-4 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl pointer-events-auto md:flex-row md:items-center md:justify-between">
				<div className="max-w-2xl space-y-2">
					<div className="inline-flex items-center gap-2 rounded-full bg-brand-50 px-3 py-1 text-xs font-semibold text-brand">
						<span className="material-icons text-[16px]">cookie</span>
						Cookie preferences
					</div>
					<div>
						<h2 className="text-base font-bold text-heading">
							Help us keep OyoPortal useful
						</h2>
						<p className="text-sm text-slate-600 leading-relaxed">
							We use optional analytics cookies to learn which Oyo resources are
							helpful. You can accept or decline and still keep using the site.
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-2 sm:flex-row">
					<Button
						type="button"
						className="rounded-xl px-4 text-sm font-semibold"
						onClick={() => {
							setAnalyticsConsent(true);
							setIsVisible(false);
						}}
					>
						Allow analytics
					</Button>
					<Button
						type="button"
						variant="outline"
						className="rounded-xl px-4 text-sm font-semibold"
						onClick={() => {
							setAnalyticsConsent(false);
							setIsVisible(false);
						}}
					>
						Decline
					</Button>
				</div>
			</div>
		</div>
	);
}
