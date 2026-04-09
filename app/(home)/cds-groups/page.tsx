import CommunityNews from "@/components/cds-groups/CommunityNews";
import CdsList from "@/components/cds-groups/CdsList";
import AdBanner from "@/components/home/AdBanner";

export const metadata = {
  title: "CDS Groups",
  description: "CDS Groups in Oyo State",
};

export default function CdsGroups() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <CommunityNews />
      <AdBanner />
      <CdsList />
    </div>
  );
}
