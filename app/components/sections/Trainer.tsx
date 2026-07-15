import Image from "next/image";
import { trainer } from "../../content";

export default function Trainer() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
        Jurulatih Anda
      </h2>
      <div
        className="border rounded-2xl p-8 grid sm:grid-cols-3 gap-6 items-center"
        style={{ borderColor: "#13007C", backgroundColor: "#13007C" }}
      >
        <div className="sm:col-span-1 flex justify-center">
          <Image
            src={trainer.photoUrl}
            alt={trainer.name}
            width={128}
            height={128}
            // className="w-32 h-32 rounded-full object-cover mx-auto mb-3 border border-gold-500/30"
          />

        </div>
        <div className="sm:col-span-2 space-y-2 text-gray-600 text-sm">
          <p className="font-bold  text-white text-3xl ">{trainer.name}</p>
          <p className="text-gold-400 text-sm font-semibold">{trainer.title}</p>
          <p className="text-white">{trainer.bio}</p>
          
          <div className="grid grid-cols-3 gap-4 pt-3">
            {trainer.stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-xl font-bold text-gold-500">{stat.value}</p>
                <p className="text-white text-xs">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
