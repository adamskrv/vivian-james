import Link from "next/link";

export function RegistrySection() {
  return (
    <section className="relative py-32 px-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1585504411442-cc5ac6335387?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmbG93ZXIlMjB2YXNlJTIwZ3JlZW4lMjBib3RhbmljYWx8ZW58MXx8fHwxNzY1OTYyODU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`,
        }}
      >
        <div className="absolute inset-0 bg-[#5a6d4e]/60" />
      </div>

      <div className="relative z-10 max-w-2xl mx-auto text-center">
        <h2 className="text-white text-3xl tracking-[0.3em] mb-8">REGISTRY</h2>

        <p className="text-white/90 text-lg mb-8 leading-relaxed max-w-lg mx-auto">
          Your presence is the most cherished gift. Should you wish to
          contribute, we&apos;ve curated a honeymoon registry to help us embark
          on a memorable adventure together.
        </p>

        <Link
          href={"https://www.amazon.ca/wedding/guest-view/33Z3IVXU7SIWH"}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#7d7662]/80 hover:bg-[#7d7662] text-white md:w-127.75 h-17 px-12 py-3 border border-white/30 rounded-full tracking-wider transition-all duration-300"
        >
          GO TO REGISTRY
        </Link>
      </div>
    </section>
  );
}
