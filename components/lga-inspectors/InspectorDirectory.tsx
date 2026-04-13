"use client";

import { useMemo, useState } from "react";

import OutboundLink from "@/components/shared/OutboundLink";
import { Input } from "@/components/ui/shadcn/input";
import { supportContacts } from "@/lib/oyo-content";

export default function InspectorDirectory() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedRole, setSelectedRole] = useState("All");

	const roles = useMemo(
		() => ["All", ...new Set(supportContacts.map((contact) => contact.role))],
		[],
	);

	const filteredContacts = useMemo(() => {
		const normalizedSearch = searchTerm.trim().toLowerCase();

		return supportContacts.filter((contact) => {
			const roleMatches =
				selectedRole === "All" || contact.role === selectedRole;

			if (!normalizedSearch) {
				return roleMatches;
			}

			const searchableText = [
				contact.name,
				contact.role,
				contact.summary,
				contact.email,
				contact.phone,
			]
				.join(" ")
				.toLowerCase();

			return roleMatches && searchableText.includes(normalizedSearch);
		});
	}, [searchTerm, selectedRole]);

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
				<div className="space-y-2">
					<label
						htmlFor="inspector-search"
						className="text-sm font-semibold text-heading"
					>
						Search contacts
					</label>
					<Input
						id="inspector-search"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
						placeholder="Search names, phones, or desk labels"
						aria-label="Search inspectors"
						className="h-12 rounded-xl bg-white"
					/>
				</div>

				<div className="flex flex-wrap gap-2 lg:justify-end">
					{roles.map((role) => {
						const isActive = role === selectedRole;

						return (
							<button
								key={role}
								type="button"
								onClick={() => setSelectedRole(role)}
								className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-brand text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-brand"}`}
							>
								{role}
							</button>
						);
					})}
				</div>
			</div>

			<div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
				{filteredContacts.map((contact) => (
					<article
						key={contact.name}
						className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
					>
						<div className="flex items-start justify-between gap-3">
							<div>
								<h2 className="text-lg font-bold text-heading">
									{contact.name}
								</h2>
								<p className="text-xs uppercase tracking-[0.18em] text-brand">
									{contact.role}
								</p>
							</div>
							<div className="size-10 rounded-xl bg-brand-50 flex items-center justify-center">
								<span className="material-icons text-brand text-[18px]">
									badge
								</span>
							</div>
						</div>

						<p className="mt-4 text-sm leading-relaxed text-slate-600">
							{contact.summary}
						</p>

						<div className="mt-5 space-y-3 text-sm font-semibold">
							<a
								href={`tel:${contact.phone.replace(/\s+/g, "")}`}
								className="block text-brand hover:underline"
							>
								{contact.phone}
							</a>
							<a
								href={`mailto:${contact.email}`}
								className="block text-brand hover:underline"
							>
								{contact.email}
							</a>
							<OutboundLink
								href={contact.mapHref}
								trackingLabel={`inspector-map-${contact.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`}
								className="inline-flex text-brand hover:underline"
							>
								Open map link
							</OutboundLink>
						</div>
					</article>
				))}
			</div>

			{filteredContacts.length === 0 && (
				<div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-500">
					No contacts match your search. Try a different desk or keyword.
				</div>
			)}
		</div>
	);
}
