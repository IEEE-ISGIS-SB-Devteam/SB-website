import { generatePageMetadata } from "../lib/seo";

// Page-specific metadata
export const metadata = generatePageMetadata({
  title: "Owar Awards & Recognition",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});
export default function AwardsPage() {
  return (
    <>
      <section className="py-16 px-4 text-center border-b border-black/10 dark:border-white/10">
        <h1 className="text-4xl font-bold"><span className="text-[#00629B]">Awards</span> &amp; Recognition</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Celebrating excellence and achievement within our student branch.</p>
        <div className="w-16 h-1 bg-[#00629B] mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h2 className="text-2xl font-bold mb-4">Branch Awards</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Every year, we recognize members and teams who have demonstrated outstanding
          contributions to the branch, technical excellence, and community leadership.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Outstanding Student Leader', meta: '2025 • Ahmed Ben Salem', desc: 'Recognized for exceptional leadership in organizing the IEEExtreme 2025 event.' },
            { title: 'Best Technical Project', meta: '2025 • Smart Irrigation Team', desc: 'IoT-based irrigation system that won the regional innovation competition.' },
            { title: 'Volunteer of the Year', meta: '2025 • Mariam Kammoun', desc: 'Dedicated over 100 hours to branch activities, workshops, and outreach.' },
            { title: 'IEEE Best Chapter Award', meta: '2024 • IEEE ISGIS', desc: 'Recognized as the best student branch chapter in the Tunisia section.' },
          ].map((award, i) => (
            <div key={i} className="border border-black/10 dark:border-white/10 rounded-xl p-5 hover:border-[#00629B] transition">
              <h4 className="font-semibold">{award.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{award.meta}</p>
              <p className="text-sm mt-1">{award.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-gray-700 dark:text-gray-300">
          <strong>Institutional Recognition:</strong> Our branch has been consistently recognized by
          IEEE Tunisia Section and the IEEE global body for our contributions to the engineering community.
        </p>
      </div>
    </>
  );
}