import { generatePageMetadata } from "../lib/seo";
import PageHero from "../components/PageHero";
import ContactMap from "./ContactMap";
import ContactForm from "./ContactForm";

// Page-specific metadata
export const metadata = generatePageMetadata({
  title: "Contact Us",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "Contact IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="IEEE ISGIS Community"
        kicker="We are here to help"
        title="Contact"
        accent="IEEE ISGIS."
        description="Have a question, an idea, or a collaboration in mind? The IEEE ISGIS Student Branch would love to hear from you."
      />
      <main className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-16">
          <section className="order-2 relative flex min-h-[520px] flex-col overflow-hidden pt-2 sm:min-h-[560px] lg:order-1 lg:pt-8" aria-label="Our location">
          <div className="relative z-10">
            <ContactMap />
            <div className="mt-6 space-y-4 border-t border-(--card-border) pt-5">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--text-muted)">Email</p>
                <a href="mailto:sb-isgis@ieee.org" className="mt-1 block text-sm font-medium text-(--foreground) transition hover:text-(--ieee-blue)">
                  sb-isgis@ieee.org
                </a>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--text-muted)">Address</p>
                <p className="mt-1 text-sm leading-relaxed text-(--text-secondary)">
                  Technopôle de Sfax, Route de Tunis Km 10, 3021 Sfax
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--text-muted)">Follow IEEE ISGIS</p>
                <div className="mt-3 flex items-center gap-3">
                  <a href="https://www.instagram.com/ieee_isgis_sb/" target="_blank" rel="noopener noreferrer" aria-label="IEEE ISGIS on Instagram" className="text-(--text-secondary) transition hover:text-(--ieee-blue)">
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 12 16.5 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 12 14.5 2.5 2.5 0 0 0 12 9.5ZM17.5 6a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 6Z" />
                    </svg>
                  </a>
                  <a href="https://www.facebook.com/IEEE.ISGIS.SB" target="_blank" rel="noopener noreferrer" aria-label="IEEE ISGIS on Facebook" className="text-(--text-secondary) transition hover:text-(--ieee-blue)">
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.5 22v-8h2.75l.5-3h-3.25V9.05c0-.87.24-1.55 1.62-1.55h1.73V4.82c-.3-.04-1.3-.12-2.46-.12-2.43 0-4.09 1.49-4.09 4.23V11H7.5v3h2.8v8h3.2Z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" aria-label="IEEE ISGIS on LinkedIn" className="text-(--text-secondary) transition hover:text-(--ieee-blue)">
                    <svg aria-hidden="true" className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M5.2 3.5A1.8 1.8 0 1 1 5.2 7a1.8 1.8 0 0 1 0-3.5ZM3.6 8.5h3.2V20H3.6V8.5Zm5.2 0h3.05v1.57h.04c.42-.8 1.46-1.98 3.2-1.98 3.42 0 4.05 2.25 4.05 5.18V20h-3.18v-5.96c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15V20H8.8V8.5Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
          </section>

          <ContactForm />
        </div>
      </main>
    </>
  );
}