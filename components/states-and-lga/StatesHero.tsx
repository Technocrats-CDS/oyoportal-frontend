import Image from "next/image";

export default function StatesHero() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[300px] sm:h-[400px]">
        <div className="relative w-full h-full col-span-1 md:col-span-2 rounded-2xl overflow-hidden">
          <Image
            src="/states-and-lga-img/hero-1.png"
            alt="NYSC members holding flag"
            fill
            className="object-cover"
            priority
          />
        </div>
        <div className="relative w-full h-full col-span-1 rounded-2xl overflow-hidden hidden md:block">
          <Image
            src="/states-and-lga-img/hero-2.png"
            alt="NYSC boots in a circle"
            fill
            className="object-cover"
            priority
          />
        </div>
      </div>
    </div>
  );
}
