import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-(--background) border-t-4 border-(--ieee-blue) mt-auto">
      <div className="container mx-auto px-4 sm:px-6 py-10">
        {/* Main footer content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1: IEEE ISGIS branding */}
          <div>
            <div className="font-bold text-lg text-(--foreground)">
              <span className="text-(--ieee-blue)">IEEE</span> ISGIS
            </div>
            <p className="text-sm mt-2 max-w-xs leading-relaxed text-(--text-secondary)">
              Student Branch of the Institut Supérieur de Gestion Industrielle de Sfax, Tunisia.
              Advancing technology for humanity.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h5 className="font-semibold text-sm uppercase tracking-wider mb-3 text-(--foreground)">
              Quick Links
            </h5>
            <ul className="space-y-1.5 text-sm">
              <li><Link href="/" className="text-(--text-secondary) hover:text-(--foreground) transition">Home</Link></li>
              <li><Link href="/about" className="text-(--text-secondary) hover:text-(--foreground) transition">About Us</Link></li>
              <li><Link href="/events" className="text-(--text-secondary) hover:text-(--foreground) transition">Events</Link></li>
              <li><Link href="/contact" className="text-(--text-secondary) hover:text-(--foreground) transition">Contact</Link></li>
            </ul>
          </div>

          {/* Column 3: Connect */}
          <div>
            <h5 className="font-semibold text-sm uppercase tracking-wider mb-3 text-(--foreground)">
              Connect
            </h5>
            <ul className="space-y-1.5 text-sm">
              <li><a href="#" className="text-(--text-secondary) hover:text-(--foreground) transition">LinkedIn</a></li>
              <li><a href="#" className="text-(--text-secondary) hover:text-(--foreground) transition">Facebook</a></li>
              <li><a href="#" className="text-(--text-secondary) hover:text-(--foreground) transition">Instagram</a></li>
              <li><a href="mailto:ieee.isgis@example.com" className="text-(--text-secondary) hover:text-(--foreground) transition">Email Us</a></li>
            </ul>
          </div>

          {/* Column 4: IEEE Administrative Links [5†L111-L135] */}
          <div>
            <h5 className="font-semibold text-sm uppercase tracking-wider mb-3 text-(--foreground)">
              IEEE Policies
            </h5>
            <ul className="space-y-1.5 text-sm">
              <li>
                <a
                  href="https://www.ieee.org/accessibility_statement.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-[#cccccc] hover:text-gray-900 dark:hover:text-white transition"
                >
                  Accessibility
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee.org/about/corporate/governance/p9-26.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-[#cccccc] hover:text-gray-900 dark:hover:text-white transition"
                >
                  Nondiscrimination Policy
                </a>
              </li>
              <li>
                <a
                  href="http://www.ieee-ethics-reporting.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-[#cccccc] hover:text-gray-900 dark:hover:text-white transition"
                >
                  IEEE Ethics Reporting
                </a>
              </li>
              <li>
                <a
                  href="https://www.ieee.org/about/help/site_terms_conditions.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-[#cccccc] hover:text-gray-900 dark:hover:text-white transition"
                >
                  Terms &amp; Disclosures
                </a>
              </li>
              <li>
                <a
                  href="https://privacy.ieee.org/policies"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 dark:text-[#cccccc] hover:text-gray-900 dark:hover:text-white transition"
                >
                  IEEE Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright & Descriptor – required by IEEE [5†L130-L133] */}
        <div className="border-t border-gray-200 dark:border-white/10 mt-8 pt-6 text-center">
          <p className="text-xs text-gray-400 dark:text-[#777]">
            &copy; {new Date().getFullYear()} IEEE – All rights reserved.
          </p>
          <p className="text-xs text-gray-400 dark:text-[#777] mt-1 max-w-2xl mx-auto">
            A public charity, IEEE is the world&apos;s largest technical professional organization dedicated to advancing technology for the benefit of humanity.
          </p>
        </div>
      </div>
    </footer>
  );
}