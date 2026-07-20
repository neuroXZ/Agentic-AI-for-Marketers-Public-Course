export default function StickyMobileCta() {
  return (
    <div
      className="lg:hidden fixed bottom-0 inset-x-0 z-50 border-t border-white/10 px-4 py-3"
      style={{
        backgroundColor: "#0a0a23",
        paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom))",
      }}
    >
      <a
        href="#daftar"
        className="block text-center bg-gold-500 hover:bg-gold-400 text-white font-semibold rounded-lg py-3 transition"
      >
        Tempah Tempat Sekarang
      </a>
    </div>
  );
}
