import { outcomes } from "../../content";

export default function Outcomes() {
  return (
    <section className="bg-navy-900/50 border-y border-white/10 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
          Apa Yang Anda Akan Bawa Pulang
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 bg-navy-950/60 border border-white/10 rounded-xl p-5"
            >
              <span className="text-gold-400 font-bold">✓</span>
              <p className="text-white/80 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
