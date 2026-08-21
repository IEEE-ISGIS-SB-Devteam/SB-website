import { generatePageMetadata } from "../lib/seo";

// Page-specific metadata
export const metadata = generatePageMetadata({
  title: "About Us",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});
export default function AboutPage() {
  return (
    <>
      <section className="py-16 px-4 text-center border-b border-black/10 dark:border-white/10">
        <h1 className="text-4xl font-bold">About <span className="text-[#00629B]">Us</span></h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Who we are, what we stand for, and why we do what we do.</p>
        <div className="w-16 h-1 bg-[#00629B] mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          The IEEE ISGIS Student Branch aims to foster a vibrant community of engineering and technology
          students by providing opportunities for professional growth, technical skill development, and
          collaborative innovation. We are committed to advancing the IEEE mission of “advancing
          technology for humanity.”
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">Our Vision</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          To be a leading student branch in Tunisia that empowers future engineers and technologists
          to become global changemakers through excellence, integrity, and service.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-2">Values</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
          <li><strong>Excellence</strong> — We strive for the highest standards in everything we do.</li>
          <li><strong>Innovation</strong> — We embrace new ideas and creative problem-solving.</li>
          <li><strong>Community</strong> — We build lasting connections across disciplines and borders.</li>
          <li><strong>Integrity</strong> — We act with honesty, transparency, and respect.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-2">A Brief History</h3>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
          Founded in 2018, the IEEE ISGIS Student Branch has grown from a small group of passionate
          students to a thriving community of over 150 active members. We have organized hackathons,
          technical workshops, industry visits, and social events that have left a lasting impact on
          our campus and beyond.
        </p>

        <p className="mt-6 font-medium">
          <strong>IEEE ISGIS</strong> — part of the{' '}
          <a href="https://www.ieee.org" target="_blank" rel="noopener noreferrer" className="text-[#00629B] hover:underline">
            IEEE
          </a>{' '}
          global network.
        </p>
      </div>
    </>
  );
}