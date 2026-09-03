import { generatePageMetadata } from "../lib/seo";

// Page-specific metadata
export const metadata = generatePageMetadata({
  title: "Our Chapters & Affinity Groups",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});
export default function ChaptersPage() {
  return (
    <>
      <section className="py-16 px-4 text-center border-b border-(--card-border)">
        <h1 className="text-4xl font-bold">Chapters &amp; <span className="text-(--ieee-blue)">Affinity Groups</span></h1>
        <p className="mt-2 text-(--text-secondary)">Specialized communities within the IEEE ISGIS Student Branch.</p>
        <div className="w-16 h-1 bg-(--ieee-blue) mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">Our Chapters</h2>
        <p className="text-(--text-secondary) leading-relaxed mb-6">
          IEEE ISGIS hosts several technical chapters and affinity groups that focus on specific
          areas of engineering and technology. These groups provide a platform for deeper exploration,
          collaboration, and networking.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            { title: 'Computer Society', chair: 'Chair: Sami Zouari', desc: 'Focus on computing, software engineering, AI, and emerging technologies.' },
            { title: 'Power & Energy Society', chair: 'Chair: Nour Ayadi', desc: 'Exploring sustainable energy, power systems, and smart grid innovations.' },
            { title: 'Robotics & Automation', chair: 'Chair: Yassine Gharbi', desc: 'Hands-on robotics projects, competitions, and automation research.' },
          ].map((group, i) => (
            <div key={i} className="border border-(--card-border) rounded-xl p-5 hover:border-(--ieee-blue) transition">
              <h4 className="font-semibold">{group.title}</h4>
              <p className="text-sm text-(--text-muted)">{group.chair}</p>
              <p className="text-sm mt-1">{group.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Affinity Groups</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Women in Engineering (WIE)', lead: 'Lead: Amira Bouaziz', desc: 'Empowering women in STEM through mentorship, networking, and outreach.' },
            { title: 'Young Professionals (YP)', lead: 'Lead: Khalil Jarraya', desc: 'Career development, entrepreneurship, and professional networking for recent grads.' },
          ].map((group, i) => (
            <div key={i} className="border border-(--card-border) rounded-xl p-5 hover:border-(--ieee-blue) transition">
              <h4 className="font-semibold">{group.title}</h4>
              <p className="text-sm text-(--text-muted)">{group.lead}</p>
              <p className="text-sm mt-1">{group.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 font-medium text-(--text-secondary)">
          <strong>Join a group</strong> — all members are welcome to participate in any chapter or affinity group regardless of their major.
        </p>
      </div>
    </>
  );
}