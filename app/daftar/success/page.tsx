export default function SuccessPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const paid = searchParams["billplz[paid]"] === "true";

  return (
    <main className="min-h-screen bg-navy-950 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-5xl mb-4">{paid ? "✅" : "⚠️"}</div>
        <h1 className="text-2xl font-bold mb-3">
          {paid ? "Pendaftaran Berjaya!" : "Status Pembayaran Belum Disahkan"}
        </h1>
        <p className="text-white/70 mb-6">
          {paid
            ? "Terima kasih! Resit dan link Zoom akan dihantar ke e-mel anda tidak lama lagi."
            : "Jika pembayaran anda telah selesai, sila semak e-mel anda. Jika tiada e-mel diterima dalam masa 15 minit, hubungi kami."}
        </p>
        <a
          href="/"
          className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-lg px-6 py-3 transition"
        >
          Kembali ke Laman Utama
        </a>
      </div>
    </main>
  );
}
