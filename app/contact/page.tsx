import { generatePageMetadata } from "../lib/seo";

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
      <section className="py-16 px-4 text-center border-b border-(--card-border)">
        <h1 className="font-open-sans text-4xl font-bold"><span className="text-(--ieee-blue)">Contact</span> Us</h1>
        <p className="mt-2 text-(--text-secondary)">We’d love to hear from you. Reach out with questions, ideas, or collaboration proposals.</p>
        <div className="w-16 h-1 bg-(--ieee-blue) mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-open-sans text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-(--text-secondary) leading-relaxed mb-6">
              The IEEE ISGIS Student Branch is here to support students, faculty, and industry
              partners. Whether you have a question, an idea, or want to collaborate — we are just a message away.
            </p>
            <div className="mb-4">
              <strong className="block font-semibold">Email</strong>
              <a href="mailto:ieee.isgis@example.com" className="text-(--ieee-blue) hover:underline">ieee.isgis@example.com</a>
            </div>
            <div className="mb-4">
              <strong className="block font-semibold">Address</strong>
              <p className="text-(--text-secondary)">Institut Supérieur de Gestion Industrielle<br />Sfax, Tunisia</p>
            </div>
            <div>
              <strong className="block font-semibold">Follow Us</strong>
              <div className="flex gap-3 mt-1">
                <a href="#" className="text-(--ieee-blue) hover:underline">LinkedIn</a>
                <a href="#" className="text-(--ieee-blue) hover:underline">Facebook</a>
                <a href="#" className="text-(--ieee-blue) hover:underline">Instagram</a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="font-open-sans text-2xl font-bold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Name</label>
                <input type="text" id="name" placeholder="Your name" className="theme-input w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input type="email" id="email" placeholder="you@example.com" className="theme-input w-full rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)" />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea id="message" rows={4} placeholder="Your message..." className="theme-input w-full resize-y rounded-lg border px-4 py-2 focus:outline-none focus:ring-2 focus:ring-(--ieee-blue)"></textarea>
              </div>
              <button type="submit" className="bg-(--ieee-blue) text-white px-6 py-2 rounded-full font-semibold hover:bg-(--ieee-blue-hover) transition">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 p-5 bg-(--surface-subtle) rounded-lg text-center">
          <p className="text-(--text-secondary)">
            <span className="text-(--ieee-blue) font-bold">✦</span> Prefer to meet in person?
            Visit us at the ISGIS campus or connect with our student leaders during office hours.
          </p>
        </div>
      </div>
    </>
  );
}