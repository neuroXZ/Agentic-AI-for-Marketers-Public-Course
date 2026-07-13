import Image from "next/image";
import { trainer } from "../../content";

export default function Trainer() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">
        Jurulatih Anda
      </h2>
      <div className="bg-navy-900/60 border border-white/10 rounded-2xl p-8 grid sm:grid-cols-3 gap-6 items-center">
        <div className="sm:col-span-1 text-center">
          <Image
            src={trainer.photoUrl}
            alt={trainer.name}
            width={128}
            height={128}
            className="w-32 h-32 rounded-full object-cover mx-auto mb-3 border border-gold-500/30"
          />
          <p className="font-semibold">{trainer.name}</p>
          <p className="text-gold-400 text-sm">{trainer.title}</p>
        </div>
        <div className="sm:col-span-2 space-y-2 text-white/70 text-sm">
          <p>{trainer.bio}</p>
          <div className="grid grid-cols-3 gap-4 pt-3">
            {trainer.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-white">{stat.value}</p>
                <p className="text-white/50 text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
