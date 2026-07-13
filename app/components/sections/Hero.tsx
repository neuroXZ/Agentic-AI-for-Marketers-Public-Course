import RegisterForm from "../RegisterForm";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-20 sm:py-28 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-gold-400 font-semibold tracking-wide text-sm uppercase mb-4">
            Sesi Live Online · 2 Jam · HRD Corp Format
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Agentic AI for Marketers
          </h1>
          <p className="text-lg text-white/70 mb-4">
            Bina SATU automation AI agent (auto-reply lead) yang{" "}
            <span className="text-white font-medium">
              benar-benar berfungsi
            </span>{" "}
            — bukan sekadar teori. Tanpa pengalaman coding.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-white/60 mb-8">
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              8:30 – 10:30 malam
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
              Zoom / Google Meet
            </span>
            <span className="bg-white/5 border border-white/10 rounded-full px-4 py-1.5">
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
        <div id="daftar">
          <RegisterForm />
        </div>
      </div>
    </section>
  );
}
