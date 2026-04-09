"use client";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

interface PlacementProp {
  name: string;
  image: string;
  color: string;
  accent: string;
  address: string;
  openings: number;
  tags: string[];
  salary: string;
  working_days: number;
}

const placements: PlacementProp[] = [
  {
    name: "MediTech",
    image: "/corps-member-pfp.png",
    color: "bg-[#ecfdf5]",
    accent: "bg-[#059669] text-white",
    address: "Beside NYSC Secretariat, Agodi, Ibadan Oyo state",
    openings: 3,
    tags: ["UI/UX", "Secretary", "Assistant"],
    salary: "25k",
    working_days: 5,
  },
  {
    name: "Agbowo Community High",
    image: "/corps-member-pfp.png",
    color: "bg-[#fff7ed]",
    accent: "bg-[#ea580c] text-white",
    address: "Beside NYSC Secretariat, Agodi, Ibadan Oyo state",
    openings: 3,
    tags: ["Teacher"],
    salary: "15k",
    working_days: 5,
  },
  {
    name: "Seun Cooking Chops",
    image: "/corps-member-pfp.png",
    color: "bg-[#f5f3ff]",
    accent: "bg-[#7c3aed] text-white",
    address: "Beside NYSC Secretariat, Agodi, Ibadan Oyo state",
    openings: 3,
    tags: ["Retailer", "Cook", "Baker"],
    salary: "25k",
    working_days: 5,
  },
  {
    name: "MediTech",
    image: "/corps-member-pfp.png",
    color: "bg-[#ecfdf5]",
    accent: "bg-[#059669] text-white",
    address: "Beside NYSC Secretariat, Agodi, Ibadan Oyo state",
    openings: 3,
    tags: ["UI/UX", "Secretary", "Assistant"],
    salary: "25k",
    working_days: 5,
  },
];

export default function JobPlacementList() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showLeftBtn, setShowLeftBtn] = useState(false);
  const [showRightBtn, setShowRightBtn] = useState(true);

  const checkScroll = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setShowLeftBtn(scrollLeft > 10);
      setShowRightBtn(scrollLeft < scrollWidth - clientWidth - 10);
    }
  }, []);

  useEffect(() => {
    const node = scrollRef.current;
    if (node) {
      checkScroll();
      const timer = setTimeout(checkScroll, 100);
      window.addEventListener("resize", checkScroll);
      node.addEventListener("scroll", checkScroll);
      return () => {
        clearTimeout(timer);
        window.removeEventListener("resize", checkScroll);
        node.removeEventListener("scroll", checkScroll);
      };
    }
  }, [checkScroll]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -400 : 400,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="group/carousel relative max-w-7xl mx-auto mt-8">
      <button
        type="button"
        onClick={() => scroll("left")}
        className={`absolute -left-3 top-1/2 z-10 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-lg hover:text-heading transition-all ${showLeftBtn ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
      >
        <ChevronLeft size={18} />
      </button>

      <div
        ref={scrollRef}
        className="flex gap-4 overflow-x-auto scroll-smooth pb-2 snap-x snap-mandatory [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {placements.map((placement, index) => (
          <PlacementCard props={placement} key={`${placement.name}-${index}`} />
        ))}
      </div>

      <button
        type="button"
        onClick={() => scroll("right")}
        className={`absolute -right-3 top-1/2 z-10 -translate-y-1/2 w-10 h-10 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full shadow-md flex items-center justify-center text-slate-600 hover:bg-white hover:shadow-lg hover:text-heading transition-all ${showRightBtn ? "opacity-100 scale-100" : "opacity-0 scale-90 pointer-events-none"}`}
      >
        <ChevronRight size={18} />
      </button>
    </div>
  );
}

export function PlacementCard({ props }: { props: PlacementProp }) {
  return (
    <div className="flex flex-col w-85 shrink-0 snap-start bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 overflow-hidden">
      <div className={`${props.color} p-5`}>
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl overflow-hidden ring-2 ring-white shadow-sm shrink-0">
            <Image
              src={props.image}
              width={40}
              height={40}
              alt={props.name}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="font-bold text-sm text-heading leading-tight">
              {props.name}
            </h3>
            <span
              className={`inline-flex items-center text-[10px] font-bold px-2 py-0.5 rounded-full mt-1 ${props.accent}`}
            >
              {props.openings} {props.openings === 1 ? "Opening" : "Openings"}
            </span>
          </div>
        </div>
        <div className="flex items-start gap-1.5 text-slate-500 text-xs leading-snug mb-4">
          <span className="material-icons text-[14px] mt-px shrink-0">
            location_on
          </span>
          <span className="line-clamp-2">{props.address}</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {props.tags.map((tag) => (
            <span
              key={tag}
              className="bg-white/70 backdrop-blur-sm border border-slate-200/60 rounded-full text-[11px] font-medium text-slate-700 px-3 py-1"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="flex items-center justify-between px-5 py-3.5 border-t border-slate-100">
        <span className="text-base font-bold text-heading">
          ₦{props.salary}
          <span className="text-xs font-normal text-slate-400">/mo</span>
        </span>
        <span className="text-xs text-slate-400 font-medium">
          {props.working_days} days/wk
        </span>
      </div>
    </div>
  );
}
