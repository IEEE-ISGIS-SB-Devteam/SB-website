"use client";


import { useState, useEffect } from "react";
import Link from "next/link";
import Hero from "./components/hero";
import FeatureCards from "./components/featurecards";
import ChapterFolder from "./components/chapterfolder";

export default function HomePageClient() {
  const [contentVisible, setContentVisible] = useState(false);

  // On desktop, show content immediately
  useEffect(() => {
    const checkMobile = () => {
      if (window.innerWidth >= 768) {
        setContentVisible(true);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // On mobile, we wait for hero to finish
  const handleHeroComplete = () => {
    setContentVisible(true);
  };

  const cards = [
    {
      title: "Tech Symposium",
      description: "Annual gathering of engineering minds with workshops, keynotes, and networking.",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=400&h=300&fit=crop",
      label: "Chapter",
      link: "/events/tech-symposium",
    },
    {
      title: "Women in Engineering",
      description: "Empowering women in STEM through mentorship, talks, and community events.",
      image: "https://images.unsplash.com/photo-1573164713988-8665fc963f8c?w=400&h=300&fit=crop",
      label: "WIE",
      link: "/events/women-in-engineering",
    },
    {
      title: "IEEExtreme",
      description: "24-hour global coding competition — team up and push your limits.",
      image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&h=300&fit=crop",
      label: "Competition",
      link: "/events/ieeextreme",
    },
    {
      title: "Robotics Workshop",
      description: "Hands-on robotics for beginners, with practical projects and expert guidance.",
      image: "https://images.unsplash.com/photo-1527430253228-e93688616381?w=400&h=300&fit=crop",
      label: "Workshop",
      link: "/events/robotics-workshop",
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
      {/* Mobile: absolute hero */}
      <div className="relative min-h-screen">
        <Hero
          title="IEEE ISGIS"
          subtitle="Student Branch • Institut Supérieur de Gestion Industrielle de Sfax"
          imageSrc="https://scontent.ftun8-1.fna.fbcdn.net/v/t39.30808-6/520233198_770344498840928_7646105731015414515_n.jpg?stp=dst-jpg_tt6&cstp=mx1080x648&ctp=s1080x648&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=0xKlTUJV8XIQ7kNvwHndHLT&_nc_oc=AdoZUo3vf8V8jWc1JCNeg_Qeaj8Uj0P9z_gElBnMa_MfSuDlC6WJSgLEa-n3SrG2oig&_nc_zt=23&_nc_ht=scontent.ftun8-1.fna&_nc_gid=OnwnwiOVDaqSa_4v2yMWtQ&_nc_ss=7b2a8&oh=00_AQGK7cceaJ52SRkblVL3BOujisWvSMym6H83FS-u2BXcWw&oe=6A8D95FF"
          scrollHint="Explore"
          onMobileComplete={handleHeroComplete}
        >
          <div className="mt-4 sm:mt-6 flex gap-3 sm:gap-4 flex-wrap justify-center px-4">
            <Link
              href="/join"
              className="bg-[var(--ieee-blue)] text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:opacity-90 transition"
            >
              Join Us
            </Link>
            <Link
              href="/about"
              className="border border-white/30 text-white px-5 sm:px-8 py-2 sm:py-3 rounded-full text-xs sm:text-sm font-semibold hover:bg-white/10 transition"
            >
              Learn More
            </Link>
          </div>
        </Hero>

        {/* Content – slides up after hero fades */}
        <div
          className={`
            transition-all duration-700 ease-in-out
            ${contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"}
          `}
          style={{ marginTop: contentVisible ? "0" : "100vh" }}
        >
          <div className="container mx-auto px-4 py-8 md:py-12 space-y-12 md:space-y-20">
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
        </div>
      </div>
    </>
  );
}