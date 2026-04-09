import AdBanner from "@/components/home/AdBanner";

export const metadata = {
  title: "Social Forum",
  description: "Connect with other Corps Members in Oyo State",
};

export default function SocialForum() {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <div className="p-8 max-w-7xl mx-auto">
        <h1 className="text-2xl font-bold">Social Forum</h1>
      </div>
      <AdBanner />
    </div>
  );
}
