import { generatePageMetadata } from "../lib/seo";
import PageHero from "../components/PageHero";

// Page-specific metadata
export const metadata = generatePageMetadata({
  title: "Our Awards & Recognition",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});

const awards = [
  { tier: "silver", rank: "2nd", title: "PES TGM", meta: "" },
  { tier: "bronze", rank: "3rd", title: "TSYP", meta: "Agriculture Domain" },
  { tier: "honor", rank: "SB", title: "Small Outstanding Student Branch", meta: "2024" },
  { tier: "silver", rank: "2nd", title: "IEEE Tajmaana", meta: "" },
  { tier: "gold", rank: "1st", title: "i2i 2.0", meta: "" },
] as const;

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

        <div className="awards-section relative">
          <div className="awards-grid-backdrop" aria-hidden="true" />
          <div className="relative grid grid-cols-1 sm:grid-cols-2 gap-5">
            {awards.map((award, i) => (
              <div key={i} className="award-plaque" data-tier={award.tier}>
                <div className={`award-badge${award.tier === "honor" ? " award-badge--honor" : ""}`}>
                  {award.rank}
                </div>
                <div>
                  <p className="award-title">{award.title}</p>
                  {award.meta && <p className="award-meta">{award.meta}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>

        <p className="mt-8 text-(--text-secondary)">
          <strong>Institutional Recognition:</strong> Our branch has been consistently recognized by
          IEEE Tunisia Section and the IEEE global body for our contributions to the engineering community.
        </p>
      </div>
    </>
  );
}