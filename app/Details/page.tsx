import Image from "next/image";
import { Phone } from "lucide-react";
import { FAQ } from "@/components/Faq";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const DetailsPage = () => {
  return (
    <div className="min-h-screen bg-[#FAF8F5]">
      {/* Hero Section */}
      <section className="relative h-[60vh] md:h-[70vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('/images/city.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/30" />
        </div>

        <div className="relative z-10 text-center text-white">
          <h1
            className="text-4xl md:text-5xl tracking-[0.3em]"
            style={{
              fontFamily: "quintessential",
              fontWeight: "lighter",
            }}
          >
            THE DETAILS
          </h1>
        </div>
      </section>
      {/* Welcome Message */}

      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto bg-[#8B8272] text-white p-8 md:p-12 rounded-md">
          <h2 className="text-center text-base md:text-xl font-bold mb-8 leading-tight">
            You are Invited to the Wedding of
            <br />
            <span
              className="text-3xl md:text-4xl"
              style={{
                fontFamily: "quintessential",
                fontWeight: "lighter",
              }}
            >
              Vivian and James
            </span>
            <br />
            Saturday, February 7th, 2026
          </h2>

          <div className="space-y-6">
            <p className="text-center leading-relaxed mb-8">
              We are thrilled to invite you to witness the beginning of our
              journey as we exchange our vows and celebrate our love with those
              who mean the most to us. Please join us!
            </p>

            <div className="space-y-4">
              {/* Inquiries */}
              <div className="flex flex-col md:flex-row md:items-center md:space-x-6 md:space-y-0 space-y-2 pt-4 border-t border-white/20">
                <h3 className="font-semibold text-lg flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>For Inquiries</span>
                </h3>
                <div className="space-y-1 md:space-y-0 md:space-x-6 md:flex md:items-center">
                  <p>Rita Ugochukwu: +234 708 575 7483</p>
                  <p>Onyeka Nwakaeze: +234 803 136 206</p>
                </div>
              </div>
            </div>
          </div>
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
                  src="/images/church.jpg"
                  alt="church"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F5EFE7] p-8 rounded-md text-center">
                <h3
                  className="text-xl tracking-wider mb-4 text-[#5a5a5a] font-bold"
                  style={{
                    fontFamily: "quintessential",
                    // fontWeight: "lighter",
                  }}
                >
                  Wedding Ceremony
                </h3>
                <p className="text-base text-[#5a5a5a] leading-relaxed mb-4">
                  Holy Rosary Catholic Church Wuse Abuja
                </p>
                <p className="text-base text-[#5a5a5a]">Time: 11:30am prompt</p>
                <p className="text-base text-[#5a5a5a]">
                  Wedding Photo start at 1pm
                </p>
              </div>
            </div>

            {/* Accommodation 2 */}
            <div>
              <div className="aspect-4/3 rounded-md overflow-hidden mb-6">
                <Image
                  src="/images/map2.png"
                  alt="Hotel room"
                  width={500}
                  height={500}
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="bg-[#F5EFE7] p-8 rounded-md text-center">
                <h3
                  className="text-xl tracking-wider mb-4 text-[#5a5a5a] font-bold"
                  style={{
                    fontFamily: "quintessential",
                    // fontWeight: "lighter",
                  }}
                >
                  Wedding reception
                </h3>
                <p className="text-base text-[#5a5a5a] leading-relaxed mb-4">
                  Decency event centre zone 5 Wuse abuja
                </p>
                <p className="text-base text-[#5a5a5a]">
                  Immediately After Church Service
                </p>
                <p className="text-base text-[#5a5a5a]">
                  Colors of the day: Peach, brown and Gold
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ section */}
      <section className="py-16 md:py-24 px-6 flex items-center justify-center">
        <FAQ className="max-w-6xl md:min-w-7xl" />
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
          <h2
            className="text-3xl tracking-[0.3em] mb-6 text-white"
            style={{
              fontFamily: "quintessential",
              fontWeight: "lighter",
            }}
          >
            REGISTRY
          </h2>

          <p className="text-white/90 leading-relaxed mb-8 max-w-lg mx-auto">
            Your presence at our wedding is the greatest gift we could ask for.
            However, if you wish to honor us with a gift, we have registered at
            the following locations.
          </p>

          <Button
            asChild
            className="bg-white/10 hover:bg-white/20 text-white px-12 py-3 border border-white/30 tracking-wider transition-all duration-300 rounded-full h-17"
          >
            <Link
              href={"https://www.amazon.ca/wedding/guest-view/33Z3IVXU7SIWH"}
              target="_blank"
              rel="noopener noreferrer"
            >
              VIEW REGISTRY
            </Link>
          </Button>
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
