import Image from "next/image";

export default function GallerySpotlight() {
  const images = [
    {
      src: "/gallery-image1.png",
      className:
        "col-span-1 md:row-span-2 relative h-64 md:h-full rounded-2xl overflow-hidden",
      alt: "Corper Portrait",
    },
    {
      src: "/gallery-image2.png",
      className:
        "col-span-1 row-span-1 relative h-48 md:h-64 rounded-2xl overflow-hidden",
      alt: "Group photo",
    },
    {
      src: "/gallery-image4.png",
      className:
        "col-span-1 row-span-1 relative h-48 md:h-64 rounded-2xl overflow-hidden",
      alt: "NYSC boots",
    },
    {
      src: "/gallery-image3.png",
      className:
        "col-span-1 row-span-1 relative h-48 md:h-64 rounded-2xl overflow-hidden",
      alt: "Parade",
    },
    {
      src: "/gallery-image5.png",
      className:
        "col-span-1 row-span-1 relative h-48 md:h-64 rounded-2xl overflow-hidden",
      alt: "Marching",
    },
  ];

  return (
    <section className="w-full px-4 md:px-6 lg:px-8 py-16">
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-xl font-bold text-heading mb-8">
          Gallery Spotlight
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 grid-rows-auto md:grid-rows-2 gap-4 h-auto md:h-[550px]">
          {images.map((img, i) => (
            <div key={i} className={`group ${img.className}`}>
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
