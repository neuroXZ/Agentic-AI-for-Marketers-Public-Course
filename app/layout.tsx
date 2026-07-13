import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Agentic AI for Marketers | Sesi Taster 2 Jam - PTDOTCOM Media Digital",
  description:
    "Bina SATU automation AI agent (auto-reply lead) yang benar-benar berfungsi dalam masa 2 jam. Tanpa coding. Sesuai untuk marketer & pemilik bisnes.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ms">
      <body className="antialiased text-white">{children}</body>
    </html>
  );
}
