export function SectionCards() {
  const cards = [
    {
      id: "our-story",
      title: "OUR STORY",
      image:
        "https://images.unsplash.com/photo-1608610026390-8f5d34765c57?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMGNvdXBsZSUyMGhhbmRzfGVufDF8fHx8MTc2NTk2Mjg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "#1a1a1a",
    },
    {
      id: "details",
      title: "THE DETAILS",
      image:
        "https://images.unsplash.com/photo-1759124650154-da57bce8d7fe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2xkJTIwcGxhdGUlMjBlbGVnYW50JTIwZGlubmVyfGVufDF8fHx8MTc2NTk2Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "#a39268",
    },
    {
      id: "rsvp",
      title: "RSVP",
      image:
        "https://images.unsplash.com/photo-1759178124741-8d3a8aaab778?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBidWlsZGluZyUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjU5NjI4NTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "#6b8aa3",
    },
    {
      id: "registry",
      title: "REGISTRY",
      image:
        "https://images.unsplash.com/photo-1738898179451-b5fc497f9f8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaW52aXRhdGlvbiUyMHBhcGVyfGVufDF8fHx8MTc2NTk2Mjg1NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      bgColor: "#9eafc2",
    },
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {cards.map((card) => (
            <a
              key={card.id}
              href={`#${card.id}`}
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
