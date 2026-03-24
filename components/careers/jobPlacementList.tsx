"use client";
import Image from "next/image";
import { Button } from "@/components/ui/shadcn/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState, useEffect, useCallback } from "react";

interface PlacementProp {
	name: string;
	image: string;
	color: string;
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
		color: "bg-[#D3F7ED]",
		address: "Beside NYSC Secretariat, Agodi, Ibadan Oyo state",
		openings: 3,
		tags: ["UI/UX", "Secretary", "Assistant"],
		salary: "25k",
		working_days: 5,
	},
	{
		name: "Agbowo Community High",
		image: "/corps-member-pfp.png",
		color: "bg-[#FFE0CC]",
		address: "Beside NYSC Secretariat, Agodi, Ibadan Oyo state",
		openings: 3,
		tags: ["Teacher"],
		salary: "15k",
		working_days: 5,
	},
	{
		name: "Seun Cooking Chops",
		image: "/corps-member-pfp.png",
		color: "bg-[#E2DBFA]",
		address: "Beside NYSC Secretariat, Agodi, Ibadan Oyo state",
		openings: 3,
		tags: ["Retailer", "Cook", "Baker"],
		salary: "25k",
		working_days: 5,
	},
	{
		name: "MediTech",
		image: "/corps-member-pfp.png",
		color: "bg-[#D3F7ED]",
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
			const scrollAmount = 420;
			scrollRef.current.scrollBy({
				left: direction === "left" ? -scrollAmount : scrollAmount,
				behavior: "smooth",
			});
		}
	};

	return (
		<div className="group relative w-full mt-8">
			{showLeftBtn && (
				<button
					type="button"
					onClick={() => scroll("left")}
					className="absolute -left-5 top-1/2 z-10 -translate-y-1/2  bg-black/20 text-[#000000] border border-black-200 p-2 rounded-full shadow-lg hover:bg-slate-50 transition-all"
				>
					<ChevronLeft size={24} />
				</button>
			)}

			<div
				ref={scrollRef}
				className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth pb-4 px-2"
				style={{
					scrollbarWidth: "none",
					msOverflowStyle: "none",
					display: "flex",
					flexWrap: "nowrap",
				}}
			>
				{placements.map((placement) => (
					<PlacementCard props={placement} key={placement.name} />
				))}
			</div>

			{showRightBtn && (
				<button
					type="button"
					onClick={() => scroll("right")}
					className="absolute -right-5 top-1/2 z-10 -translate-y-1/2 bg-black/20 text-[#000000] border border-black-200 p-2 rounded-full shadow-lg hover:bg-slate-50 transition-all"
				>
					<ChevronRight size={24} />
				</button>
			)}
		</div>
	);
}

export function PlacementCard({ props }: { props: PlacementProp }) {
	return (
		<div className="flex flex-col min-w-100 min-h-65 p-2.5 bg-[#FFFFFF] border border-[#E2E8F0] rounded-xl">
			<div className={`flex flex-col gap-3.5 ${props.color} p-2.5 rounded-xl`}>
				<div className="flex gap-2.5 items-center">
					<div className="w-9.75 h-9.75">
						<Image
							style={{ objectFit: "contain" }}
							src={props.image}
							width={100}
							height={100}
							alt="Company Image"
							className="rounded-full"
						/>
					</div>
					<h1 className="text-lg text-center text-[#0F172A]">{props.name}</h1>
				</div>
				<div className="flex gap-2 text-[#64748B] text-sm w-[70%]">
					<span
						className="material-icons mt-2"
						style={{ fontSize: "16px", lineHeight: "5px" }}
					>
						location_on
					</span>
					<span>{props.address}</span>
				</div>
				<Button className="font-bold">{props.openings} Openings</Button>

				<div className="flex gap-8 px-2.5">
					{props.tags.map((tag) => (
						<span
							key={tag}
							className="border border-[#000000] rounded-4xl text-[10px] text-[#0F172A] leading-5 py-1 px-6 h-8 text-center"
						>
							{tag}
						</span>
					))}
				</div>
			</div>
			<div className="flex justify-between p-2 items-center text-[#0F172A]">
				<span className="text-xl font-semibold">N{props.salary}/ Month</span>
				<span className="text-xs">{props.working_days} days/wk</span>
			</div>
		</div>
	);
}
