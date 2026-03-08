import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/shadcn/select";

export default function CdsList() {
  const cdsGroups = Array(9)
    .fill({})
    .map((_, i) => ({
      id: i,
      title: i === 0 ? "Education CDS" : "ICT CDS",
      desc: "Focused on digital literacy and vocational skill training for public school teachers and students.",
      time: "Wednesdays, 09:00 AM",
      location:
        i === 0 ? "Iwo Road Living Grace Chapel" : "NYSC Secretariat Agodi",
      icon: "school",
      members: Math.round(Math.random() * 100),
    }));

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-16">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row gap-2 mb-10">
          <div className="relative flex-1">
            <span className="material-icons absolute left-4 top-1/2 -translate-y-1/2 text-[#94A3B8]">
              search
            </span>
            <input
              type="text"
              placeholder="Search CDS groups by name or goal..."
              className="w-full h-[50px]! bg-white border border-[#E2E8F0] rounded-xl pl-12 pr-4 outline-hidden focus:border-[#02B290] focus:ring-1 focus:ring-[#02B290] transition-shadow text-sm text-heading placeholder:text-[#94A3B8]"
            />
          </div>
          <div className="flex gap-4 shrink-0">
            <div className="relative">
              <Select defaultValue="all-cds-groups">
                <SelectTrigger className="h-[50px]! appearance-none bg-white border border-[#E2E8F0] rounded-xl px-6 outline-hidden focus:border-[#02B290] focus:ring-1 focus:ring-[#02B290] transition-shadow text-sm text-heading font-medium min-w-[160px] cursor-pointer">
                  <SelectValue />
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cdsGroups.map((group, idx) => (
            <div
              key={idx}
              className="bg-white rounded-[16px] p-6 shadow-xs border border-[#E2E8F0] hover:shadow-md transition-shadow group flex flex-col"
            >
              <div className="size-12 rounded-xl bg-[#02B290]/10 flex items-center justify-center mb-5 shrink-0">
                <span className="material-icons text-[#02B290]">
                  {group.icon}
                </span>
              </div>

              <h3 className="text-heading font-bold text-lg mb-2">
                {group.title}
              </h3>
              <p className="text-sm text-[#475569] leading-relaxed mb-6">
                {group.desc}
              </p>

              <div className="flex flex-col gap-3 mt-auto">
                <div className="flex items-start gap-3 text-xs text-[#64748B] font-medium">
                  <span className="material-icons shrink-0">
                    calendar_today
                  </span>
                  <span>{group.time}</span>
                </div>
                <div className="flex items-start gap-3 text-xs text-[#64748B] font-medium">
                  <span className="material-icons shrink-0">location_on</span>
                  <span>{group.location}</span>
                </div>
              </div>

              <hr className="border-[#F1F5F9] my-5" />

              <div className="flex items-center justify-between">
                <div className="flex items-center -space-x-3">
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#F1F5F9] z-0">
                    <Image
                      src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop"
                      width={32}
                      height={32}
                      alt="Avatar"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-[#F1F5F9] z-10">
                    <Image
                      src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop"
                      width={32}
                      height={32}
                      alt="Avatar"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-white bg-[#F1F5F9] flex items-center justify-center text-[10px] font-bold text-heading z-20">
                    {group.members}
                  </div>
                </div>

                <Link
                  href="#"
                  className="flex items-center gap-1 text-transparent bg-clip-text bg-linear-to-r from-[#02B290] to-[#0FDF46] font-bold text-sm bg-size-[200%_200%] bg-left hover:bg-right transition-all duration-500 group-hover:cursor-pointer"
                >
                  View Group
                  <span className="material-icons">chevron_right</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
