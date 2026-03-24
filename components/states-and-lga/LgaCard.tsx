import { Contact2, MapPin } from "lucide-react";
import Image from "next/image";

interface LgaCardProps {
	title: string;
	lgiName: string;
	address: string;
	city: string;
	image: string;
}

export default function LgaCard({
	title,
	lgiName,
	address,
	city,
	image,
}: LgaCardProps) {
	return (
		<div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow">
			{/* Image container */}
			<div className="relative w-full h-48 overflow-hidden">
				<Image
					src={image}
					alt={title}
					fill
					className="object-cover group-hover:scale-105 transition-transform duration-300"
				/>
				{/* City Badge */}
				<div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-slate-800 shadow-sm">
					{city}
				</div>
			</div>

			{/* Content */}
			<div className="p-5 flex-1 flex flex-col">
				<h3 className="font-bold text-lg text-slate-900 mb-3">{title}</h3>

				<div className="space-y-2 mb-6 flex-1">
					<div className="flex items-start gap-2 text-sm text-slate-600">
						<Contact2 className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
						<span className="text-slate-600 block">LGI: {lgiName}</span>
					</div>

					<div className="flex items-start gap-2 text-sm text-slate-600">
						<MapPin className="w-4 h-4 mt-0.5 shrink-0 text-slate-400" />
						<span className="line-clamp-2">{address}</span>
					</div>
				</div>

				{/* Action Buttons */}
				<div className="flex gap-3 mt-auto">
					<button
						type="button"
						className="flex-1 py-3 bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold rounded-md transition-colors text-sm"
					>
						View
					</button>
					<button
						type="button"
						className="flex-1 flex items-center justify-center gap-2 bg-[#00A97E] text-white py-2.5 px-4 rounded-md font-semibold hover:bg-[#00A97D]/90 transition-colors text-sm"
					>
						<svg
							width="10"
							height="12"
							viewBox="0 0 14 18"
							fill="none"
							xmlns="http://www.w3.org/2000/svg"
							aria-hidden="true"
						>
							<path
								d="M7 0C3.13 0 0 3.13 0 7C0 10.5 4.5 16.5 7 18C9.5 16.5 14 10.5 14 7C14 3.13 10.87 0 7 0ZM7 9.5C5.62 9.5 4.5 8.38 4.5 7C4.5 5.62 5.62 4.5 7 4.5C8.38 4.5 9.5 5.62 9.5 7C9.5 8.38 8.38 9.5 7 9.5Z"
								fill="currentColor"
							/>
						</svg>
						Find On Map
					</button>
				</div>
			</div>
		</div>
	);
}
