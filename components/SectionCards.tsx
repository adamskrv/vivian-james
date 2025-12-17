import Link from "next/link";

export function SectionCards() {
  const cards = [
    {
      id: "our-story",
      title: "OUR STORY",
      url: "/Ourstory",
      image: "/images/vj7.jpg",
      bgColor: "#1a1a1a",
    },
    {
      id: "details",
      title: "THE DETAILS",
      url: "/Details",
      image: "/images/vj6.jpg",
      bgColor: "#a39268",
    },
    {
      id: "rsvp",
      title: "RSVP",
      url: "#rsvp",
      image: "/images/vj8.jpg",
      bgColor: "#6b8aa3",
    },
    {
      id: "registry",
      title: "REGISTRY",
      url: "/https://www.amazon.ca/wedding/guest-view/33Z3IVXU7SIWH",
      image: "/images/vj1.jpg",
      bgColor: "#9eafc2",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.url}
              target={card.id === "Registry" ? "_blank" : ""}
              rel="noopener noreferrer"
              className="group relative aspect-4/5 overflow-hidden cursor-pointer rounded-md"
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                style={{
                  backgroundImage: `url('${card.image}')`,
                }}
              >
                <div
                  className="absolute inset-0 opacity-40"
                  style={{ backgroundColor: card.bgColor }}
                />
              </div>

              <div className="relative h-full flex items-center justify-center">
                <h2 className="text-white text-2xl tracking-[0.3em] group-hover:tracking-[0.4em] transition-all duration-300">
                  {card.title}
                </h2>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
