import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0a0a0a] text-[#cccccc] border-t-4 border-[#00629B] mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-10 grid grid-cols-1 sm:grid-cols-3 gap-8">
        <div>
          <div className="text-white font-bold text-lg">
            <span className="text-[#00629B]">IEEE</span> ISGIS
          </div>
          <p className="text-sm mt-2 max-w-xs leading-relaxed">
            Student Branch of the Institut Supérieur de Gestion Industrielle de Sfax, Tunisia.
            Advancing technology for humanity.
          </p>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Quick Links</h5>
          <ul className="space-y-1.5 text-sm">
            <li><Link href="/" className="hover:text-white transition">Home</Link></li>
            <li><Link href="/about" className="hover:text-white transition">About Us</Link></li>
            <li><Link href="/events" className="hover:text-white transition">Events</Link></li>
            <li><Link href="/contact" className="hover:text-white transition">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h5 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">Connect</h5>
          <ul className="space-y-1.5 text-sm">
            <li><a href="#" className="hover:text-white transition">LinkedIn</a></li>
            <li><a href="#" className="hover:text-white transition">Facebook</a></li>
            <li><a href="#" className="hover:text-white transition">Instagram</a></li>
            <li><a href="mailto:ieee.isgis@example.com" className="hover:text-white transition">Email Us</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-[#777]">
        &copy; {new Date().getFullYear()} IEEE ISGIS Student Branch &bull; All rights reserved.
      </div>
    </footer>
  );
}