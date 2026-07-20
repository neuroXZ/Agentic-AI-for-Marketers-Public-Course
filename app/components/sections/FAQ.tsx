"use client";

import { useState } from "react";
import { faqs } from "../../content";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="bg-gray-50 border-y border-gray-200 py-16">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center text-gray-900">
          Soalan Lazim
        </h2>
        <div className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left px-5 py-4"
                  aria-expanded={isOpen}
                >
                  <span className="font-semibold text-gray-900 text-sm sm:text-base">
                    {item.q}
                  </span>
                  <span className="text-gold-500 text-xl shrink-0">
                    {isOpen ? "−" : "+"}
                  </span>
                </button>
                {isOpen && (
                  <p className="px-5 pb-4 text-gray-600 text-sm">{item.a}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
