"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2, "Sila masukkan nama penuh"),
  email: z.string().email("E-mel tidak sah"),
  phone: z
    .string()
    .min(9, "Nombor telefon tidak sah")
    .regex(/^[0-9+ -]+$/, "Nombor telefon tidak sah"),
  business: z.string().optional(),
  jobTitle: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export default function RegisterForm() {
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/billplz/create-bill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (!res.ok || !json.url) {
        throw new Error(json.error || "Gagal mencipta bil pembayaran");
      }
      window.location.href = json.url;
    } catch (err: any) {
      setErrorMsg(err.message || "Ralat tidak dijangka. Sila cuba lagi.");
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="border border-white/10 shadow-sm rounded-2xl p-6 sm:p-8 space-y-4 w-full max-w-md mx-auto"
      style={{ backgroundColor: "#1e1b4b" }}
    >
      <h3 className="text-xl font-semibold text-white mb-2">
        Tempah Tempat Anda
      </h3>

      <div>
        <input
          {...register("name")}
          placeholder="Nama Penuh"
          className="w-full rounded-lg border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
          style={{ backgroundColor: "#14123a" }}
        />
        {errors.name && (
          <p className="text-red-400 text-xs mt-1">{errors.name.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("email")}
          placeholder="E-mel"
          className="w-full rounded-lg border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
          style={{ backgroundColor: "#14123a" }}
        />
        {errors.email && (
          <p className="text-red-400 text-xs mt-1">{errors.email.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("phone")}
          placeholder="Nombor WhatsApp (cth: 0123456789)"
          className="w-full rounded-lg border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
          style={{ backgroundColor: "#14123a" }}
        />
        {errors.phone && (
          <p className="text-red-400 text-xs mt-1">{errors.phone.message}</p>
        )}
      </div>

      <div>
        <input
          {...register("business")}
          placeholder="Syarikat"
          className="w-full rounded-lg border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
          style={{ backgroundColor: "#14123a" }}
        />
      </div>

      <div>
        <input
          {...register("jobTitle")}
          placeholder="Jawatan"
          className="w-full rounded-lg border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gold-500"
          style={{ backgroundColor: "#14123a" }}
        />
      </div>

      <div className="text-sm text-gray-300">
        Harga: <span className="text-white font-semibold">RM59</span>
      </div>

      {errorMsg && <p className="text-red-400 text-sm">{errorMsg}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-gold-500 hover:bg-gold-400 disabled:opacity-60 text-white font-semibold rounded-lg py-3 transition"
      >
        {loading ? "Memproses..." : "Teruskan ke Pembayaran"}
      </button>

      <p className="text-gray-400/70 text-xs text-center">
        Pembayaran selamat diproses melalui Billplz (FPX / Kad Kredit-Debit)
      </p>
    </form>
  );
}
