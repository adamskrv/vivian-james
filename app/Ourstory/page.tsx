import Image from "next/image";
import { Heart } from "lucide-react";
import { Footer } from "@/components/Footer";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-linear-to-br from-peach-50 via-amber-50 to-rose-100 pt-16 px-6">
      {/* Header */}
      <section className="text-center my-16">
        <h1
          className="text-4xl md:text-6xl font-serif font-bold text-gray-800 mb-4"
          style={{
            fontFamily: "quintessential",
            fontWeight: "lighter",
          }}
        >
          Our Wedding Story
        </h1>
        <div className="flex justify-center items-center space-x-2 text-rose-500 mb-8">
          <Heart className="w-8 h-8" />
          <span
            className="text-xl font-medium"
            style={{
              fontFamily: "quintessential",
              fontWeight: "lighter",
            }}
          >
            Vivian & James
          </span>
          <Heart className="w-8 h-8" />
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
          A love story woven with laughter, adventure, and endless dreams. Join
          us as we share the journey that led to forever.
        </p>
      </section>

      {/* Bride Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Image Left on Desktop, Full on Mobile */}
          <div className="md:w-1/2 shrink-0">
            <Image
              src="/images/vj10.jpeg"
              alt="Portrait of Vivian"
              height={500}
              width={500}
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Content Right on Desktop, Below on Mobile */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
              The Bride
            </h2>
            <h3
              className="text-2xl font-semibold text-rose-600"
              style={{
                fontFamily: "quintessential",
                fontWeight: "lighter",
              }}
            >
              Vivian
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              I met James in December 2023. Earlier that year, I had gone
              through a breakup and felt it was time for a change of scenery.
              So, I decided to visit my sister in Germany, and we spent
              Christmas together.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              On December 30th, I was on a call with my mum. She prayed for me
              and said, “You will meet your husband before the year ends.” I
              laughed and asked, “Mum, how is that possible? There&apos;s only
              one day left!” She replied, “There&apos;s nothing God cannot do.”
              I believed her and said, “Amen.”
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The very next day—December 31st, 2023—James sent me a LinkedIn
              request… and the rest is history. 💫The very next day—December
              31st, 2023—James sent me a LinkedIn request… and the rest is
              history. 💫
            </p>
            <blockquote className="border-l-4 border-rose-500 pl-4 italic text-gray-600">
              &quot;In James, I found not just a partner, but my greatest
              adventure.&quot;
            </blockquote>
          </div>
        </div>
      </section>

      {/* Groom Section - Reversed Layout */}
      <section className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row-reverse items-center space-y-8 md:space-y-0 md:space-x-12 md:space-x-reverse">
          {/* Content Left on Desktop, Below on Mobile */}
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-800">
              The Groom
            </h2>
            <h3
              className="text-2xl font-semibold text-amber-600"
              style={{
                fontFamily: "quintessential",
                fontWeight: "lighter",
              }}
            >
              James
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              While browsing LinkedIn, I came across her profile as a suggested
              connection. I sent her a request, and she accepted. What started
              as simple conversations soon grew into something special. One day,
              I asked for her phone number, and when she shared it, that became
              the true beginning of our love story.
            </p>

            <blockquote className="border-l-4 border-amber-500 pl-4 italic text-gray-600">
              &quot;With Vivian, I&apos;ve discovered that home is not a place,
              but a person.&quot;
            </blockquote>
          </div>

          {/* Image Right on Desktop, Full on Mobile */}
          <div className="md:w-1/2 shrink-0">
            <Image
              src="/images/vj11.png"
              alt="Portrait of James"
              height={500}
              width={500}
              className="w-full h-80 md:h-96 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
      {/* Footer */}
      <section className="mt-16">
        <Footer />
      </section>
    </div>
  );
};

export default OurStory;
