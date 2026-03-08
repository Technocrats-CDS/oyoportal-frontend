import { ALPHABETS, MOCK_LGAS } from "@/lib/states-and-lga-data";
import { ChevronDown, Search, SlidersHorizontal } from "lucide-react";
import LgaCard from "./LgaCard";

export default function DirectorySection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Search and Filter Bar */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search className="h-5 w-5 text-slate-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-3 border border-slate-200 rounded-xl leading-5 bg-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#00A97E]/30 focus:border-[#00A97E] sm:text-sm transition-colors"
            placeholder="Search Lga or Public facility name..."
          />
        </div>

        <div className="flex flex-row items-center gap-3">
          <div className="relative group min-w-[240px]">
            <button className="w-full bg-white border border-slate-200 text-slate-600 py-3 px-4 rounded-xl flex items-center justify-between hover:border-slate-300 transition-colors text-sm">
              <span className="truncate mr-2">
                Sort By...{" "}
                <span className=" text-slate-800">local government areas</span>
              </span>
              <ChevronDown className="h-4 w-4 text-slate-500" />
            </button>
          </div>
          <button className="bg-white border border-slate-200 p-3 rounded-xl hover:bg-slate-50 transition-colors text-slate-600">
            <SlidersHorizontal className="w-5 h-5 text-slate-600" />
          </button>
        </div>
      </div>

      {/* Alphabet Filter Links */}
      <div className="flex flex-wrap gap-2 mb-10">
        {ALPHABETS.map((letter) => (
          <button
            key={letter}
            className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#EAF4FD] text-[#02B290] font-medium hover:bg-[#dbeafe] transition-colors text-lg border-2 border-[#dbeafe]"
          >
            {letter}
          </button>
        ))}
      </div>

      {/* Grid of Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
        {MOCK_LGAS.map((lga) => (
          <LgaCard key={lga.id} {...lga} />
        ))}
      </div>

      {/* View All Button */}
      <div className="flex justify-center mt-20 mb-8 pt-8 border-t border-slate-100">
        <button className="bg-cyan-100 hover:bg-cyan-200 text-cyan-800 font-semibold py-3 px-8 rounded-full transition-colors text-sm">
          View all 33 LGAs
        </button>
      </div>
    </section>
  );
}
