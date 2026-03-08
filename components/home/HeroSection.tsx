import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 mt-4 lg:mt-6 mb-8">
      <div className="container mx-auto max-w-7xl pt-8 pb-6">
        <div className="relative w-full min-h-[460px] flex items-center justify-center px-8 md:px-12 lg:px-12 xl:px-20 py-16 lg:py-0">
          <div className="absolute inset-0 rounded-tr-[34px] rounded-tl-[194.5px] rounded-br-[194.5px] rounded-bl-[44px] overflow-hidden shadow-[0_20px_50px_-15px_rgba(2,178,144,0.3)]">
            <Image
              src="/hero-image.png"
              alt="Hero Image"
              fill
              className="object-cover object-center"
              loading="eager"
              priority
            />
            <div className="absolute inset-0 bg-linear-to-r from-[#104713]/80 to-[#0A3428]" />
          </div>

          <Image
            src="/female-corps-member.png"
            alt="Female Corps Member"
            width={460}
            height={500}
            className="hidden lg:block absolute lg:-left-8 xl:-left-2 bottom-0 z-20 w-[380px] xl:w-[460px] h-auto object-contain object-bottom -scale-x-100 drop-shadow-2xl pointer-events-none"
            loading="eager"
            priority
          />

          <div className="absolute top-6 right-6 md:top-8 md:right-10 bg-white/10 backdrop-blur-md border-none rounded-full px-4 py-1.5 flex items-center gap-2 z-10 shadow-sm">
            <span className="size-2 rounded-full bg-[#FFD700]"></span>
            <span className="text-white text-[11px] font-semibold tracking-wide">
              Service Year Active: Batch A Stream I
            </span>
          </div>

          <div className="relative z-10 w-full lg:max-w-[540px] xl:max-w-[620px] text-center lg:text-left mt-8 lg:mt-0">
            <h1 className="text-3xl md:text-5xl lg:text-[42px] font-bold text-white leading-tight tracking-tight mb-8">
              Stay informed and prepared: <br className="hidden lg:block" />
              Your one-stop source for latest <br className="hidden lg:block" />
              NYSC announcements and <br className="hidden lg:block" />
              mobilization info.
            </h1>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="https://portal.nysc.org.ng/nysc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-3.5 bg-white text-[#02B290] font-semibold rounded-[12px] shadow-[0_8px_20px_-8px_rgba(0,0,0,0.2)] hover:bg-[#02B290] hover:text-white transition-colors text-center text-lg"
              >
                Go to Your Portal
              </a>
              <Link
                href="/learn-more"
                className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-4 border-white text-white font-semibold rounded-[12px] hover:bg-white/10 transition-colors text-center text-lg"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
