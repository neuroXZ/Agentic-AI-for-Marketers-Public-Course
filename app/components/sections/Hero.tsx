import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-gray-200 bg-cover bg-center"
      style={{ backgroundImage: "url('/image/hero-bg.jpeg')" }}
    >
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(90deg, rgba(19,0,124,0.9) 0%, rgba(255,255,255,0) 100%)",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold-400 font-semibold tracking-wide text-sm uppercase mb-4">
            Sesi Live Online · 2 Jam · HRD Corp Format
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6 text-white">
            Agentic AI for Marketers
          </h1>
          <p className="text-lg text-gray-200 mb-4">
            Bina SATU automation AI agent (auto-reply lead) yang{" "}
            <span className="text-white font-medium">
              benar-benar berfungsi
            </span>{" "}
            — bukan sekadar teori. Tanpa pengalaman coding.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-200 mb-8">
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              8:30 – 10:30 malam
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              Zoom / Google Meet
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              Maksimum 25–30 peserta
            </span>
          </div>
          <a
            href="#daftar"
            className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-lg px-8 py-4 transition"
          >
            Tempah Tempat Sekarang
          </a>
        </div>
        {/* <div className="relative aspect-[4/5] w-full max-w-sm mx-auto lg:mx-0 rounded-2xl overflow-hidden">
          <Image
            src="/image/Dr. Mohd Zulkhair.png"
            alt="Dr. Mohd Zulkhair"
            fill
            className="object-contain"
            priority
          />
        </div> */}
      </div>
    </section>
  );
}
