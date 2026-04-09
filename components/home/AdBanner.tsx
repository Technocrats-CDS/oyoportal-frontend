import Link from "next/link";

export default function AdBanner() {
  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-linear-to-r from-emerald-600 to-teal-500 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-lg group">
          <div className="relative z-10 flex flex-col items-start gap-3 text-white max-w-2xl">
            <span className="px-2.5 py-1 rounded-md bg-white/20 backdrop-blur-sm text-[10px] font-bold uppercase tracking-wider">
              Sponsored Content
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-tight">
              Upgrade Your Career with Professional Certifications
            </h3>
            <p className="text-emerald-50 text-sm md:text-base leading-relaxed opacity-90">
              Enroll in discounted courses curated for Corps Members. Boost your
              employability before the service year ends.
            </p>
          </div>

          <div className="relative z-10 shrink-0 w-full md:w-auto">
            <Link
              href="#"
              className="btn bg-white text-emerald-700 hover:bg-emerald-50 w-full md:w-auto px-8 rounded-xl font-bold text-sm shadow-sm transition-all hover:scale-105 active:scale-95"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
