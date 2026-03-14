import { SlidersHorizontal } from "lucide-react";
import { Checkbox } from "@/components/ui/shadcn/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/shadcn/select";

export type FilterState = {
  schedule: string[];
  location: string;
  search: string;
  category: string;
};

interface FilterProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
}

export default function SideFilterBar({ filters, setFilters }: FilterProps) {
  const handleScheduleChange = (type: string) => {
    setFilters((prev: FilterState) => ({
      ...prev,
      schedule: prev.schedule.includes(type)
        ? prev.schedule.filter((s: string) => s !== type)
        : [...prev.schedule, type],
    }));
  };

  return (
    <section className="flex flex-col gap-6 w-[240px] shrink-0 h-[333px] rounded-xl bg-white border border-slate-200 p-5 shadow-sm text-[#000000]">
      <div className="flex justify-between items-center border-b pb-4 border-slate-100">
        <h1 className="font-bold text-lg">Filters</h1>
        <div className="flex items-center justify-center w-10 h-10 bg-slate-50 rounded-lg text-slate-600">
          <SlidersHorizontal size={20} />
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <p className="font-semibold text-sm text-slate-900">Working schedule</p>
        {["Full time", "Part time", "Internship"].map((type) => (
          <div
            key={type}
            className="flex gap-3 items-center cursor-pointer group"
          >
            <Checkbox
              id={type}
              checked={filters.schedule.includes(type)}
              onCheckedChange={() => handleScheduleChange(type)}
              className="border-slate-300 data-[state=checked]:bg-[#02B290] data-[state=checked]:border-[#02B290]"
            />
            <label
              htmlFor={type}
              className="text-sm text-slate-600 group-hover:text-slate-900 cursor-pointer transition-colors"
            >
              {type}
            </label>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <p className="text-[#94A3B8] text-[10px] font-bold tracking-wider uppercase">
          Location (LGA)
        </p>
        <Select
          value={filters.location}
          onValueChange={(val) =>
            setFilters((prev: FilterState) => ({ ...prev, location: val }))
          }
        >
          <SelectTrigger className="w-full border-slate-200 focus:ring-[#02B290]">
            <SelectValue placeholder="All Locations" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="north">Ibadan North</SelectItem>
            <SelectItem value="west">Ibadan West</SelectItem>
            <SelectItem value="south">Ibadan South</SelectItem>
            <SelectItem value="east">Ibadan East</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </section>
  );
}
