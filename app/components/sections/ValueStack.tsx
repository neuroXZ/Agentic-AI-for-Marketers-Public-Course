import { pricing } from "../../content";

export default function ValueStack() {
  const savings = pricing.originalValue - pricing.price;
  const savingsPct = Math.round((savings / pricing.originalValue) * 100);

  return (
    <section className="py-16 px-6" style={{ backgroundColor: "#13007C" }}>
      <div className="max-w-2xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-white">
          Apa Yang Anda Dapat — Dan Kenapa RM59 Sangat Berbaloi
        </h2>
        <div className="bg-white rounded-2xl p-6 sm:p-8">
          <div className="space-y-4 mb-6">
            {pricing.items.map((item, i) => (
              <div key={i} className="flex items-center justify-between gap-4">
                <div className="flex gap-3 items-start">
                  <span className="text-gold-500 font-bold shrink-0">✓</span>
                  <p className="text-gray-700 text-sm">{item.label}</p>
                </div>
                <span className="text-gray-400 text-sm shrink-0">
                  RM{item.value}
                </span>
              </div>
            ))}
          </div>
          <div className="border-t border-gray-200 pt-6 flex items-center justify-between">
            <span className="text-gray-500 font-medium">Nilai Sebenar</span>
            <span className="text-gray-400 line-through text-lg">
              RM{pricing.originalValue}
            </span>
          </div>
          <div className="flex items-center justify-between mt-2">
            <span className="text-gray-900 font-semibold">Anda Bayar Hari Ini</span>
            <span className="text-3xl font-bold text-gray-900">
              RM{pricing.price}
            </span>
          </div>
          <div
            className="mt-4 text-center text-sm font-semibold rounded-lg py-2"
            style={{ backgroundColor: "#FF4D4D22", color: "#B30000" }}
          >
            Jimat RM{savings} ({savingsPct}% Off) — Potongan Terhad
          </div>
        </div>
      </div>
    </section>
  );
}
