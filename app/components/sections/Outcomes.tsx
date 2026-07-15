import { whatYouGet } from "../../content";

export default function Outcomes() {
  return (
    <section className="bg-gray-200 border-y border-gray-200 py-16">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
          Apa Anda Dapat
        </h2>
        <div className="grid sm:grid-cols-2 gap-5">
          {whatYouGet.map((item, i) => (
            <div
              key={i}
              className="flex gap-3 bg-white border border-gray-200 rounded-xl p-5"
            >
              <span className="text-gold-400 font-bold">✓</span>
              <p className="text-gray-700 text-sm">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
