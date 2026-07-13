export default function FailedPage() {
  return (
    <main className="min-h-screen bg-navy-950 flex items-center justify-center px-6">
      <div className="max-w-md text-center">
        <div className="text-5xl mb-4">❌</div>
        <h1 className="text-2xl font-bold mb-3">Pembayaran Tidak Berjaya</h1>
        <p className="text-white/70 mb-6">
          Pembayaran anda tidak dapat diproses. Sila cuba lagi atau hubungi
          kami jika masalah berterusan.
        </p>
        <a
          href="/#daftar"
          className="inline-block bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-lg px-6 py-3 transition"
        >
          Cuba Lagi
        </a>
      </div>
    </main>
  );
}
