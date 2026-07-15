import { agenda } from "../../content";

export default function Agenda() {
  return (
    <section className="border-y border-gray-200 py-16" style={{ backgroundColor: "#13007C" }}>
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
          Jadual Sesi (2 Jam)
        </h2>
        <div className="space-y-3">
          {agenda.map((item, i) => (
            <div
              key={i}
              className="flex items-center gap-4 bg-white/10 border border-white/20 rounded-lg px-5 py-4"
            >
              <span className="text-gold-400 text-sm font-mono font-bold w-28 shrink-0">
                {item.time}
              </span>
              <span className="text-white flex-1">{item.title}</span>
              <span className="text-gray-300 text-sm font-bold shrink-0">
                {item.duration}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
