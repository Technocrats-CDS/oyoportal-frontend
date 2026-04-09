"use client";
import { useAnnouncements } from "@/lib/hooks/useAnnouncements";
import { useArticles } from "@/lib/hooks/useArticles";
import dayjs from "dayjs";
import Image from "next/image";
import { useState } from "react";

export default function CommunityNews() {
	const [activeIndex, setActiveIndex] = useState(0);

	const { data: featuredNewsData } = useAnnouncements({
		page: 1,
		pageSize: 3,
	});

	const { data: sideNewsData } = useArticles({
		page: 1,
		pageSize: 4,
	});

	const featuredNews = featuredNewsData?.data || [];
	const sideNews = sideNewsData?.data || [];

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
			<div className="max-w-7xl mx-auto pt-8 pb-6">
				<h2 className="text-[22px] font-bold text-heading mb-6">
					Community News
				</h2>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
					<div className="lg:col-span-2 relative rounded-2xl overflow-hidden h-75 md:h-100 lg:h-115 group shadow-sm flex flex-col justify-end">
						{currentFeaturedNews && (
							<Image
								key={currentFeaturedNews.id}
								src={
									["/gallery-image1.png", "/gallery-image2.png", "/gallery-image3.png", "/gallery-image4.png", "/gallery-image5.png"][
										activeIndex
									]
								}
								alt={currentFeaturedNews.title || "Featured News"}
								fill
								className="object-cover group-hover:scale-110 transition-transform duration-700 animate-in fade-in"
							/>
						)}
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
								{currentFeaturedNews?.title}
							</h3>
						</div>
					</div>

					<div className="flex flex-col gap-5">
						{sideNews.map((news) => (
							<div
								key={news.id}
								className="flex gap-4 items-center p-2 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer group"
							>
								<div className="relative w-28 h-20 rounded-xl overflow-hidden shrink-0 bg-slate-100">
									<Image
										src={news?.cover?.url || news?.author?.avatar?.url || "/gallery-image1.png"}
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
										{dayjs(news.createdAt).format("ddd MMM D YYYY")}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mt-6">
					<button
						type="button"
						className="lg:col-span-2 btn btn--brand btn--size-lg w-full rounded-xl font-semibold text-sm"
					>
						<span className="material-icons text-lg">add</span>
						View All CDS Projects
					</button>
					<button
						type="button"
						className="btn btn--outline-brand btn--size-lg w-full rounded-xl font-semibold text-sm"
					>
						<span className="material-icons text-lg">add</span>
						Propose New Project
					</button>
				</div>
			</div>
		</section>
	);
}
