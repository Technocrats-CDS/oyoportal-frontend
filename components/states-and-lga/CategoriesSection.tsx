import { CATEGORIES } from "@/lib/states-and-lga-data";

export default function CategoriesSection() {
  return (
    <section className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h2 className="text-xl font-bold mb-6 text-slate-900">
        Browse by Category
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {CATEGORIES.map((category) => {
          const Icon = category.icon;
          return (
            <div
              key={category.id}
              className="bg-white p-4 rounded-xl shadow-sm border border-slate-100 flex items-start gap-4 hover:shadow-md transition-shadow cursor-pointer"
            >
              <div className="shrink-0 flex items-center justify-center">
                <Icon />
              </div>
              <div>
                <h3 className="font-bold text-slate-800 text-base mb-1">
                  {category.title}
                </h3>
                <p className="text-sm text-slate-500 line-clamp-2">
                  {category.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
