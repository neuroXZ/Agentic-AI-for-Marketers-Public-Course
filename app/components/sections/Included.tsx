import { included } from "../../content";

export default function Included() {
  return (
    <section className="bg-gray-50 border-y border-gray-200 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
          Apa Yang Disertakan
        </h2>
        <ul className="space-y-3">
          {included.map((item, i) => (
            <li key={i} className="flex gap-3 text-gray-700">
              <span className="text-gold-400">•</span>
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
