import CategoriesSection from "@/components/states-and-lga/CategoriesSection";
import DirectorySection from "@/components/states-and-lga/DirectorySection";
import StatesHero from "@/components/states-and-lga/StatesHero";
import AdBanner from "@/components/home/AdBanner";

export const metadata = {
  title: "All LGAs in Oyo State",
  description: "Local Government Areas in Oyo State",
};

export default function StatesAndLga() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <StatesHero />
      <CategoriesSection />
      <AdBanner />
      <DirectorySection />
    </div>
  );
}
