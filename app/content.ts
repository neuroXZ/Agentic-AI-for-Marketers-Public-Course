// Static copy/content for the landing page sections (app/page.tsx and
// app/components/sections/*). Kept separate from markup so section
// components stay focused on layout.

export const agenda = [
  {
    time: "8:30 – 9:00",
    title: "Pengenalan & Konsep: AI Agent vs Chatbot vs Automation Biasa",
    duration: "30 min",
  },
  {
    time: "9:00 – 9:55",
    title: "Demo & Hands-On: Bina Automation Workflow Ringkas",
    duration: "55 min",
  },
  {
    time: "9:55 – 10:10",
    title: "Showcase Hasil & Troubleshooting",
    duration: "15 min",
  },
  {
    time: "10:10 – 10:30",
    title: "Sesi Soal Jawab & Penutup",
    duration: "20 min",
  },
];

export const whatYouGet = [
  "Bina SATU automation AI agent yang berfungsi — bukan sekadar teori",
  "Guna Make/Zapier tanpa coding",
  "Template automation siap import, terus boleh guna",
  "Slide sesi + rakaman (jika direkod) untuk rujukan",
  "Akses Telegram/WhatsApp untuk soalan lanjutan",
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
