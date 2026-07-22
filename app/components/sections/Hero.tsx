import Image from "next/image";
import { sessionInfo } from "../../content";


export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-gray-200 bg-cover bg-center"
      style={{ backgroundImage: "url('/image/hero-bg.jpg')" }}
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
          <div className="flex items-center gap-3 mb-6">
            <Image
              src="/image/mmcsb-playbutton.png"
              alt="Play Video"
              width={40}
              height={40}
            />
            <Image
              src="/image/mmcsb logo white.png"
              alt="MMCSB Logo"
              width={160}
              height={160}
              className="w-40 h-auto"
              style={{ height: "auto" }}
              priority
            />
          </div>
          <p className="text-yellow-400 font-semibold tracking-wide text-sm uppercase mb-4">
            Sesi Live Online · 2 Jam
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-4 text-white">
            Bina AI Agent Yang Auto-Reply Lead Anda — Dalam 2 Jam, Tanpa Coding
          </h1>
          <p className="text-yellow-400 font-semibold mb-6">
            📅 {sessionInfo.day}, {sessionInfo.date} · {sessionInfo.time}
          </p>
          <p className="text-lg text-gray-200 mb-4">
            Lead masuk jam 11 malam, anda tengah tidur? Lepas sesi ni, AI Agent anda yang reply — bukan anda. Bina SATU automation sebenar dalam 2 jam, tanpa coding.
          </p>
          <div className="flex flex-wrap gap-3 text-sm text-gray-200 mb-8">
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              8:30 – 10:30 malam
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              Zoom / Google Meet
            </span>
            <span className="bg-white/10 border border-white/20 rounded-full px-4 py-1.5">
              Maksimum 50 peserta
            </span>
          </div>
          {/* <p className="text-yellow-400 text-sm font-semibold mb-4">
            🔥 Baki {sessionInfo.spotsLeft} tempat sahaja daripada {sessionInfo.totalSpots}
          </p> */}
          <a
            href="#daftar"
            className="hidden lg:inline-block bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-lg px-8 py-4 transition"
          >
            Tempah Sekarang!
          </a>
        </div>
        <div className="hidden lg:flex justify-center">
          {/* <Image
            src="/image/mmcsb-playbutton.png"
            alt="Play Video"
            width={300}
            height={300}
            className="w-48 h-auto"
          /> */}
        </div>
      </div>
    </section>
  );
}
