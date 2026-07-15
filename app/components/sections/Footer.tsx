export default function Footer() {
  return (
    <footer
      className="border-t border-gray-200 py-8 text-center text-gray-400 text-sm"
      style={{ backgroundColor: "#0A0A23" }}
    >
      Multimedia Consulting Sdn. Bhd © {new Date().getFullYear()}
    </footer>
  );
}
