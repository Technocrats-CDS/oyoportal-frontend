import Image from "next/image";

export default function GallerySpotlight() {
	const images = [
		{
			src: "/gallery-image1.png",
			className:
				"col-span-1 md:row-span-2 relative h-64 md:h-full rounded-2xl overflow-hidden",
			alt: "Corper Portrait",
			label: "Portrait",
		},
		{
			src: "/gallery-image2.png",
			className:
				"col-span-1 row-span-1 relative h-48 md:h-64 rounded-2xl overflow-hidden",
			alt: "Group photo",
			label: "Community",
		},
		{
			src: "/gallery-image4.png",
			className:
				"col-span-1 row-span-1 relative h-48 md:h-64 rounded-2xl overflow-hidden",
			alt: "NYSC boots",
			label: "Service",
		},
		{
			src: "/gallery-image3.png",
			className:
				"col-span-1 row-span-1 relative h-48 md:h-64 rounded-2xl overflow-hidden",
			alt: "Parade",
			label: "Parade",
		},
		{
			src: "/gallery-image5.png",
			className:
				"col-span-1 row-span-1 relative h-48 md:h-64 rounded-2xl overflow-hidden",
			alt: "Marching",
			label: "Marching",
		},
	];

	return (
		<section className="w-full px-4 md:px-6 lg:px-8 py-16">
			<div className="max-w-7xl mx-auto">
				<div className="flex items-center justify-between mb-8">
					<div className="flex items-center gap-3">
						<div className="w-1 h-6 rounded-full bg-brand" />
						<h2 className="text-xl font-bold text-heading">
							Gallery Spotlight
						</h2>
					</div>
					<button
						type="button"
						className="text-sm font-semibold text-brand hover:underline"
					>
						View All Photos
					</button>
				</div>

				<div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-3 h-auto md:h-137.5">
					{images.map((img) => (
						<div key={img.src} className={`group ${img.className}`}>
							<Image
								src={img.src}
								alt={img.alt}
								fill
								className="object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
							<div className="absolute bottom-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
								<span className="text-xs font-semibold text-heading">
									{img.label}
								</span>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
