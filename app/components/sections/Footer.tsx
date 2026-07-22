export default function Footer() {
  return (
    <footer
      className="border-t border-gray-200 py-8 text-center text-gray-400 text-sm"
      style={{ backgroundColor: "#0A0A23" }}
    >
      <p className="font-bold text-yellow-400">Contact Us</p>
      <p>
        <span className="inline-flex items-center gap-1.5" style={{ marginRight: "20px" }}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="4" width="20" height="16" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
          <a href="mailto:reachus@mmcsb.com.my">reachus@mmcsb.com.my</a>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="red" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10Z" />
          </svg>
          <a href="https://mmcsb.com.my">mmcsb.com.my</a>
        </span>
        </p>
      
      Multimedia Consulting Sdn. Bhd © {new Date().getFullYear()} 
    </footer>
  );
}
