"use client";
import Image from "next/image";
import { useState } from "react";

export default function CommunityNews() {
	const [activeIndex, setActiveIndex] = useState(0);

	const featuredNews = [
		{
			title:
				"NYSC COMMUNITY DEVELOPMENT SERVICE GROUPS, THEIR PURPOSES AND ACTIVITIES",
			image: "/gallery-image3.png",
			author: "Okunlola Rachael",
			authorImg:
				"https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100",
		},
		{
			title: "IKOYI MEMBERS EMBARK ON MASSIVE ROAD CLEANING EXERCISE",
			image: "/gallery-image2.png",
			author: "Chibuzor Adam",
			authorImg:
				"https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=100",
		},
		{
			title: "ICT CDS TRAINS OVER 500 STUDENTS IN RURAL SCHOOLS",
			image: "/hero-image.png",
			author: "Olaoluwa Rebecca",
			authorImg:
				"https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=100",
		},
	];

	const sideNews = [
		{
			title: "Oyo state governor gifts PCMs 1M Naira",
			date: new Date().toDateString(),
			image: "/gallery-image3.png",
		},
		{
			title: "Oyo state governor gifts PCMs 1M Naira",
			date: new Date().toDateString(),
			image: "/gallery-image4.png",
		},
		{
			title: "Oyo state governor gifts PCMs 1M Naira",
			date: new Date().toDateString(),
			image: "/gallery-image2.png",
		},
		{
			title: "Oyo state governor gifts PCMs 1M Naira",
			date: new Date().toDateString(),
			image: "/gallery-image5.png",
		},
	];

	const handleNext = () => {
		setActiveIndex((prev) => (prev + 1) % featuredNews.length);
	};

	const handlePrev = () => {
		setActiveIndex(
			(prev) => (prev - 1 + featuredNews.length) % featuredNews.length,
		);
	};

	const currentFeaturedNews = featuredNews[activeIndex];

	return (
		<section className="w-full px-4 md:px-6 lg:px-8 mt-6">
			<div className="container mx-auto max-w-7xl pt-8 pb-6">
				<h2 className="text-[22px] font-bold text-heading mb-6">
					Community News
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-75 md:h-100 lg:h-115 group shadow-sm flex flex-col justify-end">
						<Image
							key={currentFeaturedNews.image}
							src={currentFeaturedNews.image}
							alt={currentFeaturedNews.title}
							fill
							className="object-cover group-hover:scale-110 transition-transform duration-700 animate-in fade-in"
						/>
						<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/40 to-transparent pointer-events-none z-0" />

						<button
							type="button"
							onClick={handlePrev}
							className="absolute left-4 top-1/2 -translate-y-1/2 size-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
							aria-label="Previous slide"
						>
							<span className="material-icons text-xl pointer-events-none">
								chevron_left
							</span>
						</button>
						<button
							type="button"
							onClick={handleNext}
							className="absolute right-4 top-1/2 -translate-y-1/2 size-10 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 transition-colors z-20 cursor-pointer"
							aria-label="Next slide"
						>
							<span className="material-icons text-xl pointer-events-none">
								chevron_right
							</span>
						</button>

						<div className="absolute top-6 w-full flex justify-center gap-2 z-20">
							{featuredNews.map((item, idx) => (
								<button
									key={item.title}
									type="button"
									onClick={() => setActiveIndex(idx)}
									className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIndex ? "w-6 bg-white" : "w-1.5 bg-white/50"}`}
								/>
							))}
						</div>

						<div className="relative z-10 p-6 md:p-8">
							<h3 className="text-white font-bold text-2xl md:text-3xl leading-tight mb-2 max-w-xl">
								{currentFeaturedNews.title}
							</h3>
							<div className="flex items-center gap-2">
								<div className="size-6 rounded-full bg-slate-300 overflow-hidden relative">
									<Image
										src={currentFeaturedNews.authorImg}
										fill
										alt={currentFeaturedNews.author}
										className="object-cover"
									/>
								</div>
								<span className="text-white/90 text-xs font-semibold uppercase tracking-wider">
									{currentFeaturedNews.author}
								</span>
							</div>
						</div>
					</div>

					<div className="flex flex-col gap-5">
						{sideNews.map((news) => (
							<div
								key={news.title}
								className="flex gap-4 items-center p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
							>
								<div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0">
									<Image
										src={news.image}
										alt={news.title}
										fill
										className="object-cover group-hover:scale-105 transition-transform"
									/>
								</div>
								<div className="flex flex-col">
									<h4 className="text-heading font-bold text-[15px] leading-snug mb-2 group-hover:text-brand transition-colors">
										{news.title}
									</h4>
									<p className="text-[#94A3B8] text-xs font-medium">
										{news.date}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
					<button
						type="button"
						className="lg:col-span-2 w-full py-3.5 bg-brand text-white font-semibold rounded-md hover:bg-brand-600 transition-colors shadow-[0_4px_6px_-4px_rgba(20,113,25,0.25),0_10px_15px_-3px_rgba(20,113,25,0.25)] flex items-center justify-center gap-2"
					>
						<span className="material-icons text-lg">add</span>
						View All CDS Projects
					</button>
					<button
						type="button"
						className="w-full text-center py-3.5 rounded-md bg-linear-brand text-white shadow-[0_4px_6px_-4px_rgba(20,113,25,0.25),0_10px_15px_-3px_rgba(20,113,25,0.25)] font-semibold flex items-center justify-center gap-2 cursor-pointer bg-size-[200%_200%] bg-left hover:bg-right transition-all duration-500"
					>
						<span className="material-icons text-lg">add</span>
						Propose New Project
					</button>
				</div>
			</div>
		</section>
	);
}
