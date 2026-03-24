import QuickAccess from "@/components/home/QuickAccess";
import InfoSections from "@/components/home/InfoSections";
import EssentialGuides from "@/components/home/EssentialGuides";
import GallerySpotlight from "@/components/home/GallerySpotlight";

export default function Home() {
	return (
		<div className="flex flex-col min-h-screen w-full overflow-x-hidden">
			<QuickAccess />
			<InfoSections />
			<EssentialGuides />
			<GallerySpotlight />
		</div>
	);
}
