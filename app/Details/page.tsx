import Image from "next/image";

const DetailsPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1761515712160-63a16d64ceac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5c2lkZSUyMGhvdXNlJTIwcGF0aHxlbnwxfHx8fDE3NjU5NzE3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white">
          <h1 className="text-4xl md:text-5xl tracking-[0.3em]">THE DETAILS</h1>
        </div>
      </section>

      {/* Welcome Message */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-2xl mx-auto bg-[#8B8272] text-white p-8 md:p-12 rounded-md">
          <p className="text-center leading-relaxed mb-6">
            We are thrilled to invite you to witness the beginning of our
            journey as we exchange our vows and celebrate our love with those
            who mean the most to us. Please join us!
          </p>
          <div className="flex justify-center">
            <button className="bg-[#7d7662]/80 hover:bg-[#7d7662] text-white md:w-127.75 h-17 px-12 py-3 border border-white/30 rounded-full tracking-wider transition-all duration-300">
              RSVP
            </button>
          </div>
        </div>
      </section>

      {/* Church Image Section */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="aspect-4/3 rounded-md overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1661721098019-0a0e9e406768?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjB0b3dlciUyMGFyY2hpdGVjdHVyZXxlbnwxfHx8fDE3NjU5NzE3MDl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Church"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-sm tracking-wider text-[#5a5a5a] mb-2">
              Saturday,
            </p>
            <p className="text-2xl tracking-wide text-[#5a5a5a]">
              September 20, 2025
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Ceremony */}
            <div className="text-center">
              <h3 className="text-xl tracking-wider mb-6 text-[#5a5a5a]">
                Ceremony
              </h3>
              <div className="space-y-3 text-[#5a5a5a]">
                <p className="tracking-wide">The Sundew Church</p>
                <p className="text-sm">123 Main Street</p>
                <p className="text-sm">St. Augustine, New York</p>
                <p className="text-sm mt-6">4:00 PM - 5:00 PM</p>
              </div>
            </div>

            {/* Reception */}
            <div className="text-center">
              <h3 className="text-xl tracking-wider mb-6 text-[#5a5a5a]">
                Reception
              </h3>
              <div className="space-y-3 text-[#5a5a5a]">
                <p className="tracking-wide">The Golden Film Manor</p>
                <p className="text-sm">456 Garden Avenue</p>
                <p className="text-sm">St. Augustine, New York</p>
                <p className="text-sm mt-6">6:00 PM - 11:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plan A Stay Section */}
      <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1670240157655-d54885414ea5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGhpbGxzJTIwbGFuZHNjYXBlfGVufDF8fHx8MTc2NTk3MTcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center text-white">
          <h2 className="text-3xl md:text-4xl tracking-[0.3em]">PLAN A STAY</h2>
        </div>
      </section>

      {/* Accommodations */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            {/* Accommodation 1 */}
            <div>
              <div className="aspect-4/3 rounded-md overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1650770028842-d9bd0fbc94f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkcmllZCUyMGZsb3dlcnMlMjBib3RhbmljYWx8ZW58MXx8fHwxNzY1OTcxNzEwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Botanical decoration"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F5EFE7] p-8 rounded-md text-center">
                <h3 className="text-lg tracking-wider mb-4 text-[#5a5a5a]">
                  Golden Elm Manor Boutique
                </h3>
                <p className="text-sm text-[#5a5a5a] leading-relaxed mb-4">
                  Indulge in the charm of our historic boutique hotel, where
                  modern comfort meets timeless elegance. Nestled near all
                  ceremony and reception venues.
                </p>
                <p className="text-sm text-[#5a5a5a]">123 Oak Street</p>
                <p className="text-sm text-[#5a5a5a]">St. Augustine, NY</p>
              </div>
            </div>

            {/* Accommodation 2 */}
            <div>
              <div className="aspect-4/3 rounded-md overflow-hidden mb-6">
                <Image
                  src="https://images.unsplash.com/photo-1652881389205-9f85f82888c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwaG90ZWwlMjByb29tfGVufDF8fHx8MTc2NTk3MTcxMHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Hotel room"
                  width={100}
                  height={100}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F5EFE7] p-8 rounded-md text-center">
                <h3 className="text-lg tracking-wider mb-4 text-[#5a5a5a]">
                  The Refined Retreat Inn
                </h3>
                <p className="text-sm text-[#5a5a5a] leading-relaxed mb-4">
                  Experience luxurious comfort in our contemporary inn, offering
                  spacious suites and exceptional amenities. A perfect base for
                  your celebration.
                </p>
                <p className="text-sm text-[#5a5a5a]">789 Maple Drive</p>
                <p className="text-sm text-[#5a5a5a]">St. Augustine, NY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Registry Section */}
      <section className="relative py-24 px-6">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1585653374230-0d828919677f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3aWxkZmxvd2VyJTIwdmFzZSUyMG5hdHVyYWx8ZW58MXx8fHwxNzY1OTcxNzExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
          }}
        >
          <div className="absolute inset-0 bg-[#6b7a5e]/70" />
        </div>

        <div className="relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-3xl tracking-[0.3em] mb-6 text-white">
            REGISTRY
          </h2>

          <p className="text-white/90 leading-relaxed mb-8 max-w-lg mx-auto">
            Your presence at our wedding is the greatest gift we could ask for.
            However, if you wish to honor us with a gift, we have registered at
            the following locations.
          </p>

          <button className="bg-white/10 hover:bg-white/20 text-white px-12 py-3 border border-white/30 tracking-wider transition-all duration-300">
            VIEW REGISTRY
          </button>
        </div>
      </section>

      {/* Footer */}
      <section className="bg-[#F5EFE7] py-16 px-6 text-center">
        <div className="mb-4" style={{ fontFamily: "serif" }}>
          <span className="text-3xl">V&J</span>
        </div>
        <div className="space-y-1 text-[#5a5a5a]">
          <p className="tracking-wider text-sm">WE CANNOT WAIT TO</p>
          <p className="tracking-wider text-sm">CELEBRATE WITH YOU</p>
        </div>
      </section>
    </div>
  );
};

export default DetailsPage;
