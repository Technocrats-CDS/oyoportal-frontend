"use client";
import { useCdsGroups } from "@/lib/hooks/useCdsGroups";
import { useDebounce } from "@/lib/hooks/useDebounce";
import Link from "next/link";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/shadcn/select";

export default function CdsList() {
  const [searchInput, setSearchInput] = useState("");
  const [category, setCategory] = useState("all-cds-groups");

  const debouncedSearch = useDebounce(searchInput, 500);

  const { data, isLoading, isError } = useCdsGroups({
    search: debouncedSearch,
    category,
    page: 1,
    pageSize: 25,
  });

  const cdsGroups = data?.data || [];

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-2 mb-10">
          <div className="relative flex-1">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              search
            </span>
            <input
              type="text"
              placeholder="Search CDS groups by name or goal..."
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
              className="w-full h-12.5! bg-white border border-[#E2E8F0] rounded-xl pl-12 pr-4 outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-shadow text-sm text-heading placeholder:text-[#94A3B8]"
            />
          </div>
          <div className="flex gap-4 shrink-0">
            <div className="relative">
              <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className="h-12.5! appearance-none bg-white border border-[#E2E8F0] rounded-xl px-6 outline-hidden focus:border-brand focus:ring-1 focus:ring-brand transition-shadow text-sm text-heading font-medium min-w-[160px] cursor-pointer">
                  <SelectValue placeholder="All CDS Groups" />
                </SelectTrigger>
                <SelectContent position="popper">
                  <SelectGroup>
                    <SelectItem value="all-cds-groups">
                      All CDS Groups
                    </SelectItem>
                    <SelectItem value="education">Education</SelectItem>
                    <SelectItem value="ict">ICT</SelectItem>
                    <SelectItem value="foia">FOIA</SelectItem>
                    <SelectItem value="health">Health</SelectItem>
                    <SelectItem value="sanitation">Sanitation</SelectItem>
                    <SelectItem value="sports">Sports</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array(6)
              .fill(0)
              .map((_, idx) => (
                <div
                  key={idx}
                  className="card group flex flex-col min-h-[300px] animate-pulse"
                >
                  <div className="size-12 rounded-xl bg-slate-200 mb-5 shrink-0" />
                  <div className="h-6 bg-slate-200 rounded-sm w-3/4 mb-2" />
                  <div className="h-4 bg-slate-200 rounded-sm w-full mb-6" />
                  <div className="flex flex-col gap-3 mt-auto">
                    <div className="h-4 bg-slate-200 rounded-sm w-1/2" />
                    <div className="h-4 bg-slate-200 rounded-sm w-2/3" />
                  </div>
                </div>
              ))}
          </div>
        ) : isError ? (
          <div className="py-20 text-center text-red-500 font-medium">
            Failed to load CDS groups. Please try again later.
          </div>
        ) : cdsGroups.length === 0 ? (
          <div className="py-20 text-center text-gray-500 font-medium">
            No CDS groups found matching your search criteria.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cdsGroups.map((group) => (
              <div key={group.id} className="card group flex flex-col">
                <div className="size-12 rounded-xl bg-brand-100 flex items-center justify-center mb-5 shrink-0">
                  <span className="material-icons text-brand">groups</span>
                </div>

                <h3 className="text-heading font-bold text-lg mb-2 capitalize">
                  {group.name || group.title}
                </h3>
                <p className="text-sm text-[#475569] leading-relaxed mb-6 line-clamp-3">
                  {group.description}
                </p>

                <div className="flex flex-col gap-3 mt-auto">
                  {group.activities && (
                    <div className="flex items-start gap-3 text-xs text-[#64748B] font-medium">
                      <span className="material-icons shrink-0">
                        assignment
                      </span>
                      <span className="line-clamp-1">{group.activities}</span>
                    </div>
                  )}
                  {group.tag && (
                    <div className="flex items-start gap-3 text-xs text-[#64748B] font-medium">
                      <span className="material-icons shrink-0">label</span>
                      <span className="capitalize">{group.tag}</span>
                    </div>
                  )}
                </div>

                <hr className="border-[#F1F5F9] my-5" />

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="text-xs font-bold text-brand bg-brand-50 px-2 py-1 rounded-full capitalize">
                      {group.status || "Active"}
                    </div>
                  </div>

                  <Link
                    href={`/cds-groups/${group.slug || group.documentId || group.id}`}
                    className="flex items-center gap-1 text-brand font-bold text-sm hover:opacity-80 transition-opacity"
                  >
                    View Group
                    <span className="material-icons">chevron_right</span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
