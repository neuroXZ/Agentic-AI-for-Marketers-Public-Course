// Static copy/content for the landing page sections (app/page.tsx and
// app/components/sections/*). Kept separate from markup so section
// components stay focused on layout.

export const agenda = [
  { time: "8:30 – 8:40", title: "Pembukaan & Pengenalan", duration: "10 min" },
  {
    time: "8:40 – 9:00",
    title: "AI Agent vs Chatbot vs Automation Biasa",
    duration: "20 min",
  },
  {
    time: "9:00 – 9:15",
    title: "Demo Langsung: AI Agent Automation Sebenar",
    duration: "15 min",
  },
  {
    time: "9:15 – 9:55",
    title: "Hands-On: Bina Automation Workflow Ringkas",
    duration: "40 min",
  },
  {
    time: "9:55 – 10:10",
    title: "Showcase Hasil & Troubleshooting",
    duration: "15 min",
  },
  { time: "10:10 – 10:25", title: "Sesi Soal Jawab (Q&A)", duration: "15 min" },
  {
    time: "10:25 – 10:30",
    title: "Penutup & Langkah Seterusnya",
    duration: "5 min",
  },
];

export const outcomes = [
  "Membezakan AI agent, chatbot, dan automation biasa — dan kenapa ia trend penting untuk marketer 2026",
  "Mengenal pasti SATU use-case automation yang sesuai untuk perniagaan anda sendiri",
  "Membina workflow automation (trigger → logik → tindakan) menggunakan Make atau Zapier — tanpa coding",
  "Membawa pulang template automation siap untuk digunakan terus selepas sesi",
];

export const included = [
  "Slide ringkas sesi (10–15 slaid, fokus visual)",
  "Template automation workflow siap import/clone",
  "Link rakaman sesi (jika direkod) untuk rujukan semula",
  "Satu halaman 'Langkah Seterusnya' — sumber percuma",
  "Akses saluran Telegram/WhatsApp untuk soal jawab lanjutan",
];

export const demoWorkflowSteps = [
  {
    step: "1. TRIGGER",
    description: "Borang lead baharu diterima",
  },
  {
    step: "2. AI AGENT",
    description: "ChatGPT/Claude menganalisis data & menjana mesej respon",
  },
  {
    step: "3. TINDAKAN",
    description: "Mesej dihantar terus ke WhatsApp/e-mel pelanggan",
  },
];

export const trainer = {
  name: "Dr. Mohd Zulkhair Abu Kassim",
  title: "DBA · HRD Corp Accredited Trainer",
  bio: "CEO, Nusareka Digital Sdn. Bhd. & PTDOTCOM Media Digital. 10+ tahun pengalaman dalam latihan dan transformasi digital.",
  photoUrl: "/image/Dr. Mohd Zulkhair.png",
  stats: [
    { value: "1000+", label: "Peserta Dilatih" },
    { value: "200+", label: "Organisasi" },
    { value: "10+", label: "Tahun Pengalaman" },
  ],
};
