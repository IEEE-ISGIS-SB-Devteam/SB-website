export default function ContactPage() {
  return (
    <>
      <section className="py-16 px-4 text-center border-b border-black/10 dark:border-white/10">
        <h1 className="text-4xl font-bold"><span className="text-[#00629B]">Contact</span> Us</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">We’d love to hear from you. Reach out with questions, ideas, or collaboration proposals.</p>
        <div className="w-16 h-1 bg-[#00629B] mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="text-2xl font-bold mb-4">Get in Touch</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
              The IEEE ISGIS Student Branch is here to support students, faculty, and industry
              partners. Whether you have a question, an idea, or want to collaborate — we are just a message away.
            </p>
            <div className="mb-4">
              <strong className="block font-semibold">Email</strong>
              <a href="mailto:ieee.isgis@example.com" className="text-[#00629B] hover:underline">ieee.isgis@example.com</a>
            </div>
            <div className="mb-4">
              <strong className="block font-semibold">Address</strong>
              <p className="text-gray-600 dark:text-gray-400">Institut Supérieur de Gestion Industrielle<br />Sfax, Tunisia</p>
            </div>
            <div>
              <strong className="block font-semibold">Follow Us</strong>
              <div className="flex gap-3 mt-1">
                <a href="#" className="text-[#00629B] hover:underline">LinkedIn</a>
                <a href="#" className="text-[#00629B] hover:underline">Facebook</a>
                <a href="#" className="text-[#00629B] hover:underline">Instagram</a>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block font-medium mb-1">Name</label>
                <input type="text" id="name" placeholder="Your name" className="w-full px-4 py-2 border border-black/20 dark:border-white/20 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#00629B]" />
              </div>
              <div>
                <label htmlFor="email" className="block font-medium mb-1">Email</label>
                <input type="email" id="email" placeholder="you@example.com" className="w-full px-4 py-2 border border-black/20 dark:border-white/20 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#00629B]" />
              </div>
              <div>
                <label htmlFor="message" className="block font-medium mb-1">Message</label>
                <textarea id="message" rows={4} placeholder="Your message..." className="w-full px-4 py-2 border border-black/20 dark:border-white/20 rounded-lg bg-gray-50 dark:bg-[#1a1a1a] focus:outline-none focus:ring-2 focus:ring-[#00629B] resize-y"></textarea>
              </div>
              <button type="submit" className="bg-[#00629B] text-white px-6 py-2 rounded-full font-semibold hover:bg-[#004b78] transition">
                Send
              </button>
            </form>
          </div>
        </div>

        <div className="mt-10 p-5 bg-[#f5f9fc] dark:bg-[#1a2a3a] rounded-lg text-center">
          <p className="text-gray-700 dark:text-gray-300">
            <span className="text-[#00629B] font-bold">✦</span> Prefer to meet in person?
            Visit us at the ISGIS campus or connect with our student leaders during office hours.
          </p>
        </div>
      </div>
    </>
  );
}