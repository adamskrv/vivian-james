import RevealText from "./smoothui/reveal-text";

export function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center pt-10"
    >
      <div className="sticky h-[40vh] w-full flex flex-col gap-2 justify-center items-center top-0 left-0 right-0 bottom-0 bg-[#F5EFE7] px-6">
        <h1
          className="text-6xl md:text-9xl tracking-wide font-light"
          style={{
            fontFamily: "quintessential",
            fontWeight: "lighter",
          }}
        >
          <RevealText delay={0} direction="up">
            Vivian & James
          </RevealText>
        </h1>
        <p
          style={{
            fontFamily: "quintessential",
            fontWeight: "lighter",
          }}
        >
          #JV2026
        </p>
      </div>

      <div className="relative w-full h-[60vh] flex items-center justify-center">
        <div
          className="absolute inset-0 bg-cover bg-position-[70%_30%]"
          style={{
            backgroundImage: `url('/images/vj13.jpg')`,
          }}
        >
          <div className="absolute inset-0 bg-black/60 " />
        </div>

        <div className="relative z-10 text-center text-white px-6 max-w-48xl">
          <div className="space-y-4">
            <p className="text-lg tracking-wide">
              With love and gratitude, we invite you to
            </p>
            <p className="text-lg tracking-wide">
              share in the joy of our wedding day.
            </p>

            <div className="pt-8 space-y-2">
              <p className="tracking-wider">Saturday, February 7, 2026</p>
              <p className="tracking-wider"> Decency Event Centre,</p>
              <p className="tracking-wider">Zone 5, Wuse abuja, Nigeria.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
