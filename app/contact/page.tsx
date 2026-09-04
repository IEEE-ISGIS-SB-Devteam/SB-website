import { generatePageMetadata } from "../lib/seo";
import ContactMap from "./ContactMap";

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
    <main className="container mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 lg:py-24">
      <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-stretch lg:gap-16">
        <section className="order-2 relative flex min-h-[520px] flex-col overflow-hidden pt-2 sm:min-h-[560px] lg:order-1 lg:pt-8" aria-labelledby="contact-heading">
          <div className="relative z-10">
          
            <ContactMap />
          </div>

        </section>

                 <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-(--surface-subtle) text-(--ieee-blue) shadow-(--shadow-sm)" aria-hidden="true">
              <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="5" width="18" height="14" rx="2" />
                <path d="m3 7 9 6 9-6" />
              </svg>
            </div>
    
                <h1 id="contact-heading" className="mt-8 max-w-md font-open-sans text-4xl font-bold tracking-tight sm:text-5xl">Contact us</h1>
            <p className="mt-5 max-w-[43ch] leading-relaxed text-(--text-secondary)">
              Have a question, an idea, or a collaboration in mind? The IEEE ISGIS Student Branch would love to hear from you.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-(--text-secondary)">
              <a href="mailto:ieee.isgis@example.com" className="transition hover:text-(--ieee-blue)">ieee.isgis@example.com</a>
              <span aria-hidden="true">•</span>
              <a href="tel:+21600000000" className="transition hover:text-(--ieee-blue)">+216 00 000 000</a>
              <span aria-hidden="true">•</span>
              <a href="mailto:contact@ieee-isgis.org" className="transition hover:text-(--ieee-blue)">contact@ieee-isgis.org</a>
            </div>
        <section className="contact-card order-1 relative overflow-hidden rounded-3xl p-6 shadow-(--shadow-md) sm:p-10 lg:order-2 lg:p-12" aria-labelledby="message-heading">
          <div className="pointer-events-none absolute inset-0 opacity-75" style={{ backgroundImage: "linear-gradient(to right, color-mix(in srgb, var(--foreground) 13%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in srgb, var(--foreground) 13%, transparent) 1px, transparent 1px)", backgroundSize: "34px 34px" }} aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 z-0" aria-hidden="true">
            {[[2, 2], [9, 5], [5, 9], [12, 12]].map(([column, row]) => (
              <div key={`${column}-${row}`} className="absolute h-[34px] w-[34px] rounded-lg" style={{ left: `${column * 34}px`, top: `${row * 34}px`, backgroundColor: "color-mix(in srgb, var(--foreground) 10%, transparent)", boxShadow: "inset 0 0 14px color-mix(in srgb, var(--foreground) 16%, transparent)" }} />
            ))}
          </div>
          
          <div className="relative z-10">
            <h2 id="message-heading" className="font-open-sans text-2xl font-bold sm:text-3xl">Send us a message</h2>
            <form className="mt-8 space-y-6">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm font-semibold">Full name</label>
                <input type="text" id="name" name="name" autoComplete="name" placeholder="John Doe" className="theme-input w-full rounded-xl border px-4 py-3.5 placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm font-semibold">Email Address</label>
                <input type="email" id="email" name="email" autoComplete="email" placeholder="john@university.tn" className="theme-input w-full rounded-xl border px-4 py-3.5 placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
              </div>
              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold">Subject</label>
                <input type="text" id="subject" name="subject" placeholder="How can we help?" className="theme-input w-full rounded-xl border px-4 py-3.5 placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
              </div>
              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold">Message</label>
                <textarea id="message" name="message" rows={5} placeholder="Type your message here" className="theme-input min-h-[130px] w-full resize-y rounded-xl border px-4 py-3.5 placeholder:text-(--text-muted) focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
              </div>
              <button type="submit" className=" bg-(--foreground) px-6 py-3 font-semibold text-(--background) transition hover:opacity-80 focus:outline-none focus:ring-2 focus:ring-(--ieee-blue) focus:ring-offset-2 focus:ring-offset-(--background)">Send message</button>
            </form>
          </div>
        </section>
      </div>
    </main>
  );
}