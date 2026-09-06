import { generatePageMetadata } from "../lib/seo";
import PageHero from "../components/PageHero";

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
      <PageHero
        eyebrow="IEEE ISGIS Membership"
        kicker="Build your future with us"
        title="Join"
        accent="IEEE ISGIS."
        description="Become part of a community that shapes the future of technology."
      />

      <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
        <section className="border-t border-(--card-border) bg-(--surface-subtle) -mx-4 px-4 py-12 sm:-mx-6 sm:px-6 lg:py-16">
          <div className="mb-8">
            <p className="font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)">
              Why get involved?
            </p>
            <h2 className="mt-2 font-open-sans text-2xl font-bold text-(--foreground) sm:text-3xl">Why Join?</h2>
          </div>
          <div className="space-y-3">
            {[
              ["Connect with your community", "Connect with like-minded engineering and technology students."],
              ["Learn by doing", "Participate in workshops, hackathons, and technical competitions."],
              ["Grow your leadership", "Develop leadership and professional skills."],
              ["Build your network", "Build your network with industry experts and IEEE professionals."],
              ["Access global opportunities", "Access IEEE resources, publications, and global opportunities."],
            ].map(([title, answer]) => (
              <details key={title} className="group border border-(--card-border) bg-(--card-bg) transition-colors hover:border-(--ieee-blue)">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-(--foreground) transition-colors hover:text-(--ieee-blue) sm:p-6">
                  <span>{title}</span>
                  <span className="ml-4 text-(--text-muted) transition-transform duration-200 group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-(--text-secondary) sm:px-6 sm:pb-6">{answer}</div>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-12" aria-labelledby="membership-tiers-heading">
          <div className="mb-8">
            <p className="font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)">Choose your path</p>
            <h2 id="membership-tiers-heading" className="mt-2 font-open-sans text-2xl font-bold text-(--foreground) sm:text-3xl">Membership Tiers</h2>
          </div>
          <div className="space-y-3">
            {[
              ["Student Member", "Full access to all branch activities and IEEE benefits."],
              ["Associate Member", "For non-engineering students with an interest in technology."],
              ["Alumni Member", "Stay connected after graduation."],
            ].map(([title, answer]) => (
              <details key={title} className="group border border-(--card-border) bg-(--card-bg) transition-colors hover:border-(--ieee-blue)">
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-(--foreground) transition-colors hover:text-(--ieee-blue) sm:p-6">
                  <span>{title}</span>
                  <span className="ml-4 text-(--text-muted) transition-transform duration-200 group-open:rotate-180">
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 9-7 7-7-7" /></svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-(--text-secondary) sm:px-6 sm:pb-6">{answer}</div>
              </details>
            ))}
          </div>
        </section>

        <div className="mt-12 rounded-xl bg-(--surface-subtle) p-6 text-center">
          <p className="text-lg font-semibold text-(--foreground)">Ready to get started?</p>
          <a href="#" className="mt-3 inline-block bg-(--ieee-blue) px-8 py-3 font-semibold text-white transition hover:bg-(--ieee-blue-hover)">Apply Now</a>
          <p className="mt-3 text-sm text-(--text-secondary)">Membership is open to all majors</p>
        </div>
      </div>
    </>
  );
}