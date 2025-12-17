import Image from "next/image";

const images = [
  {
    url: "https://images.unsplash.com/photo-1726694064556-c9565e8e81c9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcm9tYW50aWN8ZW58MXx8fHwxNzY1OTY1MzkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Wedding couple",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1692167900605-e02666cadb6d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwYm91cXVldCUyMGZsb3dlcnN8ZW58MXx8fHwxNzY1ODkwMDA5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Wedding bouquet",
    className: "",
  },
  {
    url: "https://images.unsplash.com/photo-1738694242379-ef21044985bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwcmluZ3MlMjBlbGVnYW50fGVufDF8fHx8MTc2NTkzOTQzMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Wedding rings",
    className: "",
  },
  {
    url: "https://images.unsplash.com/photo-1646075514021-398d0925d4a9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZGVjb3JhdGlvbiUyMHRhYmxlfGVufDF8fHx8MTc2NTkxNTEwNHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Wedding table decoration",
    className: "md:hidden",
  },
  {
    url: "https://images.unsplash.com/photo-1578730169862-749bbdc763a8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjBvdXRkb29yfGVufDF8fHx8MTc2NTk2MTYxMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Wedding venue",
    className: "md:col-span-2 md:row-span-2",
  },
  {
    url: "https://images.unsplash.com/photo-1584158531319-96912adae663?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY2FrZSUyMGVsZWdhbnR8ZW58MXx8fHwxNzY1OTI0NzY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    alt: "Wedding cake",
    className: "md:col-span-2",
  },
];

export function Gallery() {
  return (
    <section className="py-20 px-4 sm:px-6 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl tracking-[0.3em] mb-16 text-[#5a5a5a] uppercase">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 lg:gap-6 auto-rows-[200px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`relative h-full w-full overflow-hidden group cursor-pointer rounded-md ${image.className}`}
            >
              <Image
                src={image.url}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
