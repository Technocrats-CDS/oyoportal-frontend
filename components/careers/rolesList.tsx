import Image from "next/image";
import {
  MapPin,
  Clock,
  History,
  BadgeCheck,
  ChevronLeft,
  ChevronRight,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/shadcn/button";

interface RoleInterface {
  id: number;
  name: string;
  image: string;
  institution: string;
  isVerified: boolean;
  salary: string;
  description: string;
  location: string;
  duration: string;
  posted_at: string;
  perk: string | null;
  perkColor?: string | null;
}

export default function RolesList() {
  const roles: RoleInterface[] = [
    {
      id: 1,
      name: "Junior Web Developer Internship",
      image: "/company_logo.png",
      institution: "Ibadan Tech Hub",
      isVerified: true,
      salary: "₦45,000 / mo",
      description:
        "We are looking for a passionate NYSC Corps member with basic knowledge of HTML, CSS, and React to join our development team in Ibadan North LGA.",
      location: "Ibadan North",
      duration: "6 Months",
      posted_at: "2 days ago",
      perk: "Remote Friendly",
      perkColor: "bg-[#E0F2FE] text-[#0369A1]",
    },
    {
      id: 2,
      name: "Part-time STEM Tutor",
      image: "/academy_logo.png",
      institution: "Ibadan Academy",
      isVerified: false,
      salary: "₦2,500 / hr",
      description:
        "Tutoring opportunity for Mathematics and Physics at a leading secondary school in Oyo town. Weekend slots available.",
      location: "Oyo Town",
      duration: "Part-time",
      posted_at: "1 day ago",
      perk: null,
    },
    {
      id: 3,
      name: "Agro-Export Management Intern",
      image: "/company_logo.png",
      institution: "Ogbomosho Farms Ltd",
      isVerified: false,
      salary: "₦35,000 / mo",
      description:
        "Learn the end-to-end process of agricultural exports. This role is perfect for corps members interested in supply chain and agriculture.",
      location: "Ogbomosho South",
      duration: "1 Year",
      posted_at: "5 hours ago",
      perk: "Housing Provided",
      perkColor: "bg-[#FFEDD5] text-[#9A3412]",
    },
  ];

  return (
    <div className="flex flex-col gap-4 w-full">
      {roles.map((role) => (
        <RoleCard key={role.id} data={role} />
      ))}

      <div className="flex justify-center items-center gap-2 mt-8 pb-18">
        <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50">
          <ChevronLeft size={20} />
        </button>
        <button className="w-10 h-10 rounded-lg bg-[#02B290] text-white font-bold">
          1
        </button>
        <button className="w-10 h-10 rounded-lg text-slate-600 border-1 border-[#E2E8F0] font-bold">
          2
        </button>
        <button className="w-10 h-10 rounded-lg text-slate-600 border-1 border-[#E2E8F0] font-bold">
          3
        </button>
        <MoreHorizontal className="text-slate-400" />
        <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50">
          <ChevronRight size={20} />
        </button>
      </div>
    </div>
  );
}

export function RoleCard({ data }: { data: RoleInterface }) {
  return (
    <div className="flex flex-col md:flex-row gap-5 bg-white border border-slate-200 rounded-2xl p-5 hover:shadow-md transition-shadow">
      <div className="shrink-0">
        <div className="w-16 h-16 rounded-xl flex items-center justify-center overflow-hidden">
          <Image
            src={data.image}
            alt="logo"
            width={100}
            height={100}
            className="object-contain rounded-xl"
          />
        </div>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <div className="flex flex-col gap-1">
          <div className="flex flex-wrap justify-between items-start gap-2">
            <h3 className="font-bold text-lg text-slate-900 leading-tight">
              {data.name}
            </h3>
            <div className="flex gap-2">
              <span className="bg-[#DCFCE7] py-1 px-3 rounded-full font-bold text-[11px] text-[#15803D]">
                {data.salary}
              </span>
              {data.perk && (
                <span
                  className={`${data.perkColor || "bg-slate-100 text-slate-600"} py-1 px-3 rounded-full font-bold text-[11px]`}
                >
                  {data.perk}
                </span>
              )}
            </div>
          </div>

          <div className="flex gap-1 items-center">
            <span className="text-sm text-slate-500 font-medium">
              {data.institution}
            </span>
            {data.isVerified && (
              <BadgeCheck
                className="text-blue-500 fill-blue-500 text-white"
                size={14}
              />
            )}
          </div>
        </div>

        <p className="text-sm text-slate-600 leading-relaxed line-clamp-2 lg:max-w-[85%]">
          {data.description}
        </p>

        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-2">
          <div className="flex flex-wrap gap-x-5 gap-y-2 text-slate-500 text-xs font-medium">
            <div className="flex gap-1.5 items-center">
              <MapPin size={16} className="text-slate-400" />
              <span>{data.location}</span>
            </div>
            <div className="flex gap-1.5 items-center">
              <Clock size={16} className="text-slate-400" />
              <span>{data.duration}</span>
            </div>
            <div className="flex gap-1.5 items-center">
              <History size={16} className="text-slate-400" />
              <span>{data.posted_at}</span>
            </div>
          </div>

          <div className="flex items-center gap-5 w-full sm:w-auto">
            <button className="text-[#02B290] text-sm font-bold hover:underline">
              Details
            </button>
            <Button className="bg-[#02B290] hover:bg-[#029a7c] text-white font-bold h-10 px-6 rounded-xl">
              Apply Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
