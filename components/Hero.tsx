export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen flex items-center justify-center"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1765854638779-61ef9f185342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyb21hbnRpYyUyMHdlZGRpbmclMjBmbG93ZXJzJTIwbmF0dXJlfGVufDF8fHx8MTc2NTk2Mjg1M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center text-white px-6 max-w-48xl">
        <h1
          className="text-6xl md:text-8xl mb-12 tracking-wide"
          style={{ fontFamily: "serif" }}
        >
          VIVIAN & JAMES
        </h1>

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
            <p className="tracking-wider">Zone 5, Wuse Abuja, Nigeria.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
