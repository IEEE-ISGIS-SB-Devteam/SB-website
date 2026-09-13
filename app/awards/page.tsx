import { generatePageMetadata } from "../lib/seo";
import PageHero from "../components/PageHero";

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
      <PageHero
        eyebrow="IEEE ISGIS Recognition"
        kicker="Celebrating excellence since 2018"
        title="Awards"
        accent="& Recognition."
        description="Celebrating the members and teams whose excellence, leadership, and service strengthen our student branch."
      />

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h2 className="font-open-sans text-2xl font-bold mb-4">Branch Awards</h2>
        <p className="text-(--text-secondary) leading-relaxed mb-6">
          Every year, we recognize members and teams who have demonstrated outstanding
          contributions to the branch, technical excellence, and community leadership.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            { title: 'Under Construction', meta: '', desc: '' },

          ].map((award, i) => (
            <div key={i} className="border border-(--card-border) rounded-xl p-5 hover:border-(--ieee-blue) transition">
              <h4 className="font-semibold">{award.title}</h4>
              <p className="text-sm text-(--text-muted)">{award.meta}</p>
              <p className="text-sm mt-1">{award.desc}</p>
            </div>
          ))}
        </div>

        <p className="mt-8 text-(--text-secondary)">
          <strong>Institutional Recognition:</strong> Our branch has been consistently recognized by
          IEEE Tunisia Section and the IEEE global body for our contributions to the engineering community.
        </p>
      </div>
    </>
  );
}