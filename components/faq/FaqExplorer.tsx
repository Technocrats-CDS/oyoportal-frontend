"use client";

import { useMemo, useState } from "react";

import { Input } from "@/components/ui/shadcn/input";
import { faqSections } from "@/lib/oyo-content";

export default function FaqExplorer() {
	const [searchTerm, setSearchTerm] = useState("");
	const [selectedSection, setSelectedSection] = useState("All");

	const sectionOptions = useMemo(
		() => ["All", ...faqSections.map((section) => section.title)],
		[],
	);

	const filteredSections = useMemo(() => {
		const normalizedSearch = searchTerm.trim().toLowerCase();

		return faqSections
			.map((section) => ({
				...section,
				items: section.items.filter((item) => {
					const sectionMatches =
						selectedSection === "All" || section.title === selectedSection;

					if (!sectionMatches) {
						return false;
					}

					if (!normalizedSearch) {
						return true;
					}

					const searchableText = [
						section.title,
						section.description,
						item.question,
						item.answer,
					]
						.join(" ")
						.toLowerCase();

					return searchableText.includes(normalizedSearch);
				}),
			}))
			.filter((section) => section.items.length > 0);
	}, [searchTerm, selectedSection]);

	return (
		<div className="space-y-6">
			<div className="grid grid-cols-1 gap-4 lg:grid-cols-[1.5fr_0.5fr] lg:items-end">
				<div className="space-y-2">
					<label
						htmlFor="faq-search"
						className="text-sm font-semibold text-heading"
					>
						Search questions
					</label>
					<Input
						id="faq-search"
						value={searchTerm}
						onChange={(event) => setSearchTerm(event.target.value)}
						placeholder="Search arrival, clearance, or registration questions"
						aria-label="Search FAQ"
						className="h-12 rounded-xl bg-white"
					/>
				</div>

				<div className="flex flex-wrap gap-2 lg:justify-end">
					{sectionOptions.map((section) => {
						const isActive = section === selectedSection;

						return (
							<button
								key={section}
								type="button"
								onClick={() => setSelectedSection(section)}
								className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${isActive ? "bg-brand text-white" : "bg-white text-slate-600 border border-slate-200 hover:border-brand hover:text-brand"}`}
							>
								{section}
							</button>
						);
					})}
				</div>
			</div>

			<div className="space-y-4">
				{filteredSections.map((section) => (
					<section
						key={section.title}
						className="rounded-2xl border border-slate-100 bg-white p-5 shadow-sm"
					>
						<div className="mb-4 flex flex-col gap-1">
							<h2 className="text-lg font-bold text-heading">
								{section.title}
							</h2>
							<p className="text-sm leading-relaxed text-slate-500">
								{section.description}
							</p>
						</div>

						<div className="space-y-3">
							{section.items.map((item) => (
								<details
									key={item.question}
									className="group rounded-xl border border-slate-100 bg-slate-50/60 p-4 open:bg-white open:border-brand/20"
								>
									<summary className="flex cursor-pointer items-center justify-between gap-4 list-none text-sm font-semibold text-heading">
										<span>{item.question}</span>
										<span className="material-icons text-slate-400 transition-transform group-open:rotate-180">
											expand_more
										</span>
									</summary>
									<p className="mt-3 text-sm leading-relaxed text-slate-600">
										{item.answer}
									</p>
								</details>
							))}
						</div>
					</section>
				))}
			</div>

			{filteredSections.length === 0 && (
				<div className="rounded-2xl border border-dashed border-slate-200 bg-white px-6 py-10 text-center text-sm text-slate-500">
					No questions match your search. Try a different keyword or section.
				</div>
			)}
		</div>
	);
}
