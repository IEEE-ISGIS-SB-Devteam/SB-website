import Link from "next/link";
import { generatePageMetadata } from "./lib/seo";
import Hero from "./components/hero";
import FeatureCards from "./components/featurecards";
import ChapterFolder from "./components/chapterfolder";

export const metadata = generatePageMetadata({
  title: "IEEE ISGIS Student Branch",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});

export default function HomePage() {
  const cards = [
    {
      title: "Tech Symposium",
      description: "Annual gathering of engineering minds.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      label: "Chapter",
    },
    {
      title: "Women in Engineering",
      description: "Empowering women in STEM.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963f8c?w=400&h=300&fit=crop",
      label: "WIE",
    },
    {
      title: "IEEExtreme",
      description: "24-hour global coding competition.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
      label: "Competition",
    },
    {
      title: "Robotics Workshop",
      description: "Hands-on robotics for beginners.",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=400&h=300&fit=crop",
      label: "Workshop",
    },
  ];

  const chapters = [
    {
      name: "Women in Engineering",
      description: "Empowering women in STEM through mentorship, networking, and outreach. We host regular talks, workshops, and community events.",
      logo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&h=200&fit=crop&crop=face",
      folderColor: "#E91E63",
      stats: [
        { label: "Members", value: "85" },
        { label: "Events", value: "18" },
        { label: "Awards", value: "5" },
      ],
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: "in" },
        { platform: "Twitter", url: "#", icon: "tw" },
      ],
    },
    {
      name: "Robotics & Automation",
      description: "Hands-on robotics projects, competitions, and automation research. We build robots, participate in international challenges, and collaborate with industry.",
      logo: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=200&h=200&fit=crop&crop=face",
      folderColor: "#4CAF50",
      stats: [
        { label: "Members", value: "52" },
        { label: "Projects", value: "24" },
        { label: "Awards", value: "12" },
      ],
      socialLinks: [
        { platform: "GitHub", url: "#", icon: "gh" },
        { platform: "YouTube", url: "#", icon: "yt" },
      ],
    },
    {
      name: "Power & Energy Society",
      description: "Exploring sustainable energy, power systems, and smart grid innovations. We organize seminars, site visits, and research projects focused on renewable energy.",
      logo: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=200&h=200&fit=crop&crop=face",
      folderColor: "#FF9800",
      stats: [
        { label: "Members", value: "40" },
        { label: "Events", value: "9" },
        { label: "Research", value: "7" },
      ],
      socialLinks: [
        { platform: "LinkedIn", url: "#", icon: "in" },
        { platform: "Twitter", url: "#", icon: "tw" },
      ],
    },
  ];

  return (
    <>
      <Hero
        title="IEEE ISGIS"
        subtitle="Student Branch • Institut Supérieur de Gestion Industrielle de Sfax"
        imageSrc="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/520233198_770344498840928_7646105731015414515_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x648&ctp=s1080x648&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0xKlTUJV8XIQ7kNvwHndHLT&_nc_oc=AdoZUo3vf8V8jWc1JCNeg_Qeaj8Uj0P9z_gElBnMa_MfSuDlC6WJSgLEa-n3SrG2oig&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=OnwnwiOVDaqSa_4v2yMWtQ&_nc_ss=7b2a8&oh=00_AQGK7cceaJ52SRkblVL3BOujisWvSMym6H83FS-u2BXcWw&oe=6A8D95FF"
        scrollHint="Explore"
      >
        <div className="mt-6 flex gap-4 flex-wrap justify-center">
          <Link
            href="/join"
            className="bg-[var(--ieee-blue)] text-white px-8 py-3 rounded-full text-sm font-semibold hover:opacity-90 transition"
          >
            Join Us
          </Link>
          <Link
            href="/about"
            className="border border-white/30 text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-white/10 transition"
          >
            Learn More
          </Link>
        </div>
      </Hero>

      {/* Main content – generous spacing */}
      <div className="space-y-8 md:space-y-12">
        <FeatureCards
          title="About Our Community"
          description="From hackathons to professional development, we offer a wide range of activities that bring together students, engineers, and innovators. Learn about our mission and the specialized chapters that drive innovation."
          ctaText="Explore Our Chapters"
          ctaLink="/chapters"
          ctaSecondaryText="About Us"
          ctaSecondaryLink="/about"
          cards={cards}
        />

        {chapters.map((chapter, index) => (
          <ChapterFolder
            key={chapter.name}
            {...chapter}
            reverse={index % 2 === 1}
          />
        ))}
      </div>
    </>
  );
}