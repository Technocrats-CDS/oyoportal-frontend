"use client";

import type { AnchorHTMLAttributes, ReactNode } from "react";

import { trackOutboundLink } from "@/lib/analytics";
import { cn } from "@/lib/utils";

interface OutboundLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
	href: string;
	trackingLabel: string;
	children: ReactNode;
}

export default function OutboundLink({
	href,
	trackingLabel,
	children,
	className,
	onClick,
	target,
	rel,
	...props
}: OutboundLinkProps) {
	return (
		<a
			href={href}
			target={target ?? "_blank"}
			rel={rel ?? "noopener noreferrer"}
			onClick={(event) => {
				onClick?.(event);

				if (!event.defaultPrevented) {
					trackOutboundLink(href, trackingLabel);
				}
			}}
			className={cn(className)}
			{...props}
		>
			{children}
		</a>
	);
}
