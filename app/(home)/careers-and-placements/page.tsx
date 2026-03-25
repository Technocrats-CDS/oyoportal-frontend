"use client";
import JobPlacementList from "@/components/careers/jobPlacementList";
import SideFilterBar from "@/components/careers/filterSidebar";
import RolesList from "@/components/careers/rolesList";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/shadcn/select";
import { useState } from "react";

// export const metadata = {
//   title: "Careers and Placements",
//   description: "Careers and Placements for Corps Members within Oyo State",
// };

export default function CareersAndPlacements() {
	const [filters, setFilters] = useState({
		schedule: ["Full time"],
		location: "all",
		search: "",
		category: "institutions",
	});
	return (
		<div className="flex flex-col min-h-screen w-full overflow-x-hidden">
			<section className="w-full px-4 md:px-6 lg:px-8 mt-6 max-w-7xl mx-auto">
				<h1 className="text-[#0F172A] text-xl font-bold text-leading">
					Available Job Placements
				</h1>
				<div className="flex flex-col gap-6">
					<JobPlacementList />
					<div className="flex flex-col lg:flex-row gap-8 w-full">
						<SideFilterBar filters={filters} setFilters={setFilters} />
						<div className="flex flex-col gap-6 w-full">
							<div className="flex flex-col md:flex-row gap-3 w-full">
								<div className="relative flex-1">
									<span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-[20px]">
										search
									</span>

									<input
										type="text"
										placeholder="Search company or institution name..."
										className="w-full h-12.5 bg-white border border-slate-200 rounded-xl pl-12 pr-4 text-sm text-gray-800 placeholder:text-slate-400 outline-none focus:border-brand focus:ring-brand transition"
									/>
								</div>

								<div className="flex gap-3 shrink-0">
									<Select defaultValue="institutions">
										<SelectTrigger className="h-12.5! bg-white border border-slate-200 rounded-xl px-5 text-sm font-medium text-gray-800 outline-none focus:border-brand focus:ring-brand min-w-42.5">
											<SelectValue placeholder="Select category" />
										</SelectTrigger>

										<SelectContent position="popper" className="rounded-lg">
											<SelectGroup>
												<SelectItem value="institutions">
													Institutions
												</SelectItem>
												<SelectItem value="education">Education</SelectItem>
												<SelectItem value="ict">ICT</SelectItem>
												<SelectItem value="foia">FOIA</SelectItem>
												<SelectItem value="health">Health</SelectItem>
												<SelectItem value="sports">Sports</SelectItem>
											</SelectGroup>
										</SelectContent>
									</Select>
								</div>
							</div>
							<div className="flex justify-between text-sm">
								<p>
									Showing <span className="font-bold text-[#000000]">248</span>{" "}
									roles available
								</p>
								<div className="flex gap-2">
									<div className="bg-white h-8 w-8 border border-slate-200 p-1 rounded-lg">
										<span className="material-icons-outlined h-2.5 w-2.5 font-bold">
											grid_view
										</span>
									</div>
									<div className="bg-brand h-8 w-8 border border-[#E2E8F0] p-1 rounded-lg">
										<span className="material-icons-outlined text-white h-2.5 w-2.5">
											view_list
										</span>
									</div>
								</div>
							</div>
							<RolesList />
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
