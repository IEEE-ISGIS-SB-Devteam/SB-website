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
      <section className="py-16 px-4 text-center border-b border-(--card-border)">
        <h1 className="font-open-sans text-4xl font-bold">Join <span className="text-(--ieee-blue)">IEEE ISGIS</span></h1>
        <p className="mt-2 text-(--text-secondary)">Become part of a community that shapes the future of technology.</p>
        <div className="w-16 h-1 bg-(--ieee-blue) mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-3xl">
        <h2 className="font-open-sans text-2xl font-bold mb-4">Why Join?</h2>
        <ul className="list-disc pl-6 space-y-2 text-(--text-secondary)">
          <li>Connect with like-minded engineering and technology students.</li>
          <li>Participate in workshops, hackathons, and technical competitions.</li>
          <li>Develop leadership and professional skills.</li>
          <li>Build your network with industry experts and IEEE professionals.</li>
          <li>Access IEEE resources, publications, and global opportunities.</li>
        </ul>

        <h3 className="text-xl font-semibold mt-8 mb-3">Membership Tiers</h3>
        <ul className="list-disc pl-6 space-y-1 text-(--text-secondary)">
          <li><strong>Student Member</strong> — Full access to all branch activities and IEEE benefits.</li>
          <li><strong>Associate Member</strong> — For non-engineering students with an interest in technology.</li>
          <li><strong>Alumni Member</strong> — Stay connected after graduation.</li>
        </ul>

        <div className="mt-8 p-6 bg-(--surface-subtle) rounded-xl text-center">
          <p className="text-lg font-semibold">Ready to get started?</p>
          <a href="#" className="inline-block mt-3 bg-(--ieee-blue) text-white px-8 py-3  font-semibold hover:bg-(--ieee-blue-hover) transition">
            Apply Now
          </a>
          <p className="mt-3 text-sm text-(--text-secondary)">
            Membership is free for ISGIS students • open to all majors
          </p>
        </div>
      </div>
    </>
  );
}