"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import type { ReactNode } from "react";
import { useState } from "react";

import CookieConsentBanner from "@/components/consent/CookieConsentBanner";

function hasStatusCode(error: unknown): error is { status?: number } {
	return typeof error === "object" && error !== null && "status" in error;
}

export default function Providers({ children }: { children: ReactNode }) {
	const [queryClient] = useState(
		() =>
			new QueryClient({
				defaultOptions: {
					queries: {
						staleTime: 5 * 60 * 1000,
						retry: (failureCount, error: unknown) => {
							if (
								hasStatusCode(error) &&
								error.status &&
								error.status >= 400 &&
								error.status < 500
							) {
								return false;
							}
							return failureCount < 3;
						},
					},
					mutations: { retry: false },
				},
			}),
	);

	return (
		<QueryClientProvider client={queryClient}>
			{children}
			<CookieConsentBanner />
		</QueryClientProvider>
	);
}
