import Image from "next/image";

const images = [
  {
    url: "/images/vj7.jpg",
    alt: "Wedding couple",
    className: "md:col-span-2 md:row-span-2",
    position: "",
  },
  {
    url: "/images/vj5.jpg",
    alt: "Wedding bouquet",
    className: "",
    position: "object-[75%_25%]",
  },
  {
    url: "/images/vj4.jpg",
    alt: "Wedding rings",
    className: "",
    position: "object-[75%_25%]",
  },
  {
    url: "/images/vj1.jpg",
    alt: "Wedding table decoration",
    className: "md:hidden",
  },
  {
    url: "/images/vj9.jpg",
    alt: "Wedding venue",
    className: "md:col-span-2 md:row-span-2",
    position: "object-[75%_25%]",
  },
  {
    url: "/images/vj3.jpg",
    alt: "Wedding cake",
    className: "md:col-span-2",
    position: "object-[75%_25%]",
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
                className={`object-cover transition-transform duration-500 group-hover:scale-110 ${image.position}`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
