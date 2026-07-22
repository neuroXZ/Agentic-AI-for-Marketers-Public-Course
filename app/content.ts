// Static copy/content for the landing page sections (app/page.tsx and
// app/components/sections/*). Kept separate from markup so section
// components stay focused on layout.

export const agenda = [
  {
    time: "8:30PM – 9:00PM",
    title: "Pengenalan & Konsep: AI Agent vs Chatbot vs Automation Biasa",
    duration: "30 min",
  },
  {
    time: "9:00PM – 9:55PM",
    title: "Demo & Hands-On: Bina Automation Workflow Ringkas",
    duration: "55 min",
  },
  {
    time: "9:55PM – 10:10PM",
    title: "Showcase Hasil & Troubleshooting",
    duration: "15 min",
  },
  {
    time: "10:10PM – 10:30PM",
    title: "Sesi Soal Jawab & Penutup",
    duration: "20 min",
  },
];

export const whatYouGet = [
  "Bina SATU automation AI agent yang berfungsi — bukan sekadar teori",
  "Guna Make/Zapier tanpa coding",
  "Template automation siap import, terus boleh guna",
  "Slide sesi + rakaman untuk rujukan",
  "Akses Telegram/WhatsApp untuk soalan lanjutan",
  "Faham beza AI Agent vs Chatbot biasa — dan kenapa ni trend besar 2026",
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

// Tarikh & kekangan tempat untuk sesi akan datang.
// Kemaskini `spotsLeft` secara manual apabila pendaftaran masuk.
export const sessionInfo = {
  date: "18 August 2026",
  day: "Selasa",
  time: "8:30 – 10:30 malam",
  totalSpots: 50,
  spotsLeft: 12,
};

// Testimoni placeholder — GANTI dengan quote/gambar/review sebenar peserta
// sebaik sahaja tersedia. Struktur & field dikekalkan sama supaya senang tukar.
export const testimonials = [
  {
    name: "Ahmad Fahmi",
    role: "Pemilik Kedai Online, Shopee & TikTok",
    quote:
      "Saya ingatkan AI agent ni rumit sangat, tapi lepas 2 jam sesi ni, saya dah ada automation auto-reply lead terus ke WhatsApp. Betul-betul worth RM59!",
    rating: 5,
  },
  {
    name: "Nurul Ain",
    role: "Marketing Executive, Firma Insurans",
    quote:
      "Trainer jelaskan step-by-step, sesuai untuk yang tak reti coding macam saya. Template yang diberi terus boleh guna untuk business saya.",
    rating: 5,
  },
  {
    name: "Rizal Hakimi",
    role: "Founder, Digital Marketing Agency",
    quote:
      "Dah attend banyak webinar AI, tapi ni first time saya betul-betul siapkan satu automation working end-to-end dalam masa sesi. Recommended!",
    rating: 5,
  },
  {
    name: "Siti Farhana",
    role: "Pemilik Bisnes F&B",
    quote:
      "Non-technical macam saya pun boleh ikut. Lepas sesi terus apply kat business, respon lead jadi jauh lebih pantas.",
    rating: 5,
  },
  {
    name: "Amirul Hafiz",
    role: "Sales Manager, Kilang Perabot",
    quote:
      "Worth every ringgit. Slide dan rakaman sesi jadi rujukan team saya untuk latih staff lain pula.",
    rating: 5,
  },
  {
    name: "Farah Waheeda",
    role: "Freelance Digital Marketer",
    quote:
      "Sesi paling praktikal yang saya pernah ikut — terus buat, bukan sekadar dengar teori.",
    rating: 5,
  },
];

// Breakdown nilai untuk anchor harga. Jumlah item = nilai sebenar (RM299).
export const pricing = {
  price: 59,
  originalValue: 299,
  items: [
    { label: "Sesi Live 2 Jam bersama Trainer HRD Corp Accredited", value: 70 },
    { label: "Template Automation Siap Import (FREE)", value: 0 },
    { label: "Akses Rakaman Sesi (FREE)", value: 0 },
    { label: "Akses Group Telegram/WhatsApp Susulan (FREE)", value: 0 },
  ],
};

// Cadangan jawapan — sila semak & sahkan (terutama refund policy) sebelum publish.
export const faqs = [
  {
    q: "Kalau saya miss sesi live, ada recording?",
    a: "Ya. Sesi ini akan dirakam dan pautan rakaman akan dihantar kepada semua peserta berdaftar dalam masa 24–48 jam selepas sesi tamat, untuk rujukan bila-bila masa.",
  },
  {
    q: "Macam mana refund policy?",
    a: "Yuran penyertaan tidak boleh di kembalikan pada sesi tersebut pada masa dan waktu yang di tetapkan.",
  },
  {
    q: "Perlu laptop atau software apa untuk ikut sesi ni?",
    a: "Anda hanya perlukan laptop/komputer dengan sambungan internet yang stabil. Semua tool yang digunakan (Make/Zapier, ChatGPT) berasaskan web sepenuhnya — tiada instalasi software diperlukan. Akaun percuma (free tier) untuk platform berkaitan sudah cukup untuk ikuti sesi ini.",
  },
  {
    q: "Sesi ni sesuai untuk saya yang non-tech, level macam mana?",
    a: "Sesi ini direka khas untuk marketer dan pemilik bisnes yang TIADA pengalaman coding langsung. Selagi anda biasa guna komputer, buka website dan copy-paste, anda boleh ikuti step-by-step tanpa masalah.",
  },
 
];
