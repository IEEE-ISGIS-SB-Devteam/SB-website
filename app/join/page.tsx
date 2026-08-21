import Link from "next/link";
import { generatePageMetadata } from "../lib/seo";

// Page-specific metadata
export const metadata = generatePageMetadata({
  title: "Become a Member",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});

export default function JoinPage() {
  return (
    <>
      <section className="py-16 px-4 text-center border-b border-black/10 dark:border-white/10">
        <h1 className="text-4xl font-bold">Join <span className="text-[#00629B]">IEEE ISGIS</span></h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Become part of a community that shapes the future of technology.</p>
        <div className="w-16 h-1 bg-[#00629B] mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="text-2xl font-bold mb-4">Why Join?</h2>
        <ul className="list-disc pl-6 space-y-2 text-gray-700 dark:text-gray-300">
          <li>Connect with like-minded engineering and technology students.</li>
          <li>Participate in workshops, hackathons, and technical competitions.</li>
          <li>Develop leadership and professional skills.</li>
          <li>Build your network with industry experts and IEEE professionals.</li>
          <li>Access IEEE resources, publications, and global opportunities.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">Membership Tiers</h3>
        <ul className="list-disc pl-6 space-y-1 text-gray-700 dark:text-gray-300">
          <li><strong>Student Member</strong> — Full access to all branch activities and IEEE benefits.</li>
          <li><strong>Associate Member</strong> — For non-engineering students with an interest in technology.</li>
          <li><strong>Alumni Member</strong> — Stay connected after graduation.</li>
        </ul>

        <div className="mt-8 p-6 bg-[#f5f9fc] dark:bg-[#1a2a3a] rounded-xl text-center">
          <p className="text-lg font-semibold">Ready to get started?</p>
          <a href="#" className="inline-block mt-3 bg-[#00629B] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#004b78] transition">
            Apply Now
          </a>
          <p className="mt-3 text-sm text-gray-600 dark:text-gray-400">
            Membership is free for ISGIS students • open to all majors
          </p>
        </div>
      </div>
    </>
  );
}