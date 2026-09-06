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
          </div>
          </section>

          <ContactForm />
        </div>
      </main>
    </>
  );
}