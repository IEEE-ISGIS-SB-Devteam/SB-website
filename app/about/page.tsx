import { generatePageMetadata } from "../lib/seo";
import React from "react";
import Hero from "../components/hero";
import BorderGlow from "../components/BorderGlow/BorderGlow";

export const metadata = generatePageMetadata({
  title: "About Us",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});

const sections = [
  { id: "mission", label: "Our Mission" },
  { id: "vision", label: "Our Vision" },
  { id: "team", label: "Meet the Team" },
  { id: "values", label: "Values" },
  { id: "history", label: "A Brief History" },
];

// Team members with social links
const teamMembers = [
  {
    name: "Khalil Neji",
    title: "Chair",
    handle: "khalil.neji",
    status: "Active",
    avatarUrl: "https://i.postimg.cc/VLkL4My9/2-(1).png",
    linkedin: "https://www.linkedin.com/in/khalil-neji-36aaa5418/",
    github: "https://github.com/khalil",
    email: "khalilneji002@gmail.com",
    facebook: "https://www.facebook.com/khalil.nejii",
  },
  {
    name: "Melek Jrad",
    title: "Vice Chair",
    handle: "melek.jrad",
    status: "Active",
    avatarUrl: "https://i.postimg.cc/nchcT787/3-(1).png",
    linkedin: "https://www.linkedin.com/in/melek-jrad-51043933a/",
    github: "https://github.com/melek",
    email: "mailto:melek@ieee-isgis.org",
    facebook: "https://www.facebook.com/king.007.4k",
  },
  {
    name: "Rayen Baklouti",
    title: "Webmaster",
    handle: "rayen.baklouti",
    status: "Active",
    avatarUrl: "https://i.postimg.cc/bNwNLbX9/5.png",
    linkedin: "https://linkedin.com/in/rayen",
    github: "https://github.com/rayen",
    email: "mailto:rayen@ieee-isgis.org",
    facebook: "https://www.facebook.com/rayen.baklouti.806064",
  },
  {
    name: "Khadija Laadhar",
    title: "Secretary",
    handle: "khadija.laadhar",
    status: "Active",
    avatarUrl: "https://i.postimg.cc/sDgDKSFY/4-(1).png",
    linkedin: "https://www.linkedin.com/in/khadija-laadhar-02560a3aa/",
    github: "https://github.com/khadija",
    email: "mailto:khadija@ieee-isgis.org",
    facebook: "https://www.facebook.com/KadijaLaadhar",
  },
];

// ---- Social Icons (SVG) ----
const SocialIcons = {
  LinkedIn: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
    </svg>
  ),
  GitHub: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.123-.3-.535-1.52.117-3.16 0 0 1.008-.322 3.3 1.23.96-.267 1.98-.399 3-.399s2.04.132 3 .399c2.292-1.552 3.3-1.23 3.3-1.23.653 1.64.24 2.86.118 3.16.768.84 1.233 1.91 1.233 3.22 0 4.61-2.804 5.62-5.476 5.92.43.37.824 1.102.824 2.22 0 1.602-.015 2.894-.015 3.287 0 .322.216.694.825.577C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
    </svg>
  ),
  Email: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  ),
  Facebook: ({ className = "w-4 h-4" }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  ),
};
const TeamCard = ({
  name,
  title,
  handle,
  status,
  avatarUrl,
  linkedin,
  github,
  email,
  facebook,
}: {
  name: string;
  title: string;
  handle: string;
  status: string;
  avatarUrl: string;
  linkedin?: string;
  github?: string;
  email?: string;
  facebook?: string;
}) => {
  const socialLinks = [
    { key: "linkedin", url: linkedin, icon: <SocialIcons.LinkedIn />, label: "LinkedIn" },
    { key: "github", url: github, icon: <SocialIcons.GitHub />, label: "GitHub" },
    { key: "email", url: email, icon: <SocialIcons.Email />, label: "Email" },
    { key: "facebook", url: facebook, icon: <SocialIcons.Facebook />, label: "Facebook" },
  ].filter((item) => item.url);

  return (
    <BorderGlow
      backgroundColor="var(--surface-card)"
      borderRadius={16}
      colors={["#3b82f6", "#60a5fa", "#1d4ed8"]}
      glowColor="217 91% 60%"
      animated={false}
      glowIntensity={1.0}
      edgeSensitivity={30}
      coneSpread={25}
      glowRadius={30}
    >
      <div className="team-card-content group relative overflow-hidden">
      {/* Hover gradient overlay */}
      <div className="team-card-overlay absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      {/* Avatar */}
      <div className="relative aspect-[4/3] overflow-hidden rounded-t-2xl border-b border-[var(--surface-card-image-border)] bg-gray-100 dark:bg-gray-800">
        <img
          src={avatarUrl}
          alt={name}
          className="w-full h-full object-cover object-center"
          loading="lazy"
        />
        <div className="team-status-badge absolute top-2 right-2 flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] sm:text-xs">
          <span className="inline-block w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
          {status}
        </div>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5 space-y-2 sm:space-y-3 relative z-10">
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-[var(--foreground)] leading-tight break-words">
            {name}
          </h3>
          <p className="text-xs sm:text-sm font-medium text-[var(--surface-card-blue)] break-words">
            {title}
          </p>
        </div>

        <div className="flex items-center justify-between gap-2">
          {/* Handle – truncate if too long */}
          <span className="text-xs sm:text-sm text-[var(--text-secondary)] truncate min-w-0 flex-1">
            @{handle}
          </span>

          {/* Social icons – never shrink */}
          <div className="flex items-center gap-1.5 sm:gap-2 flex-shrink-0">
            {socialLinks.map(({ key, url, icon, label }) => (
              <a
                key={key}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="team-card-social p-1.5 rounded-full text-[var(--text-secondary)] transition-colors duration-200"
                aria-label={label}
              >
                {React.cloneElement(icon, { className: "w-4 h-4 sm:w-5 sm:h-5" })}
              </a>
            ))}
          </div>
        </div>
      </div>
      </div>
    </BorderGlow>
  );
};

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About Us"
        subtitle="Who we are, what we stand for, and why we do what we do."
        imageSrc="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1600&h=900&fit=crop"
        scrollHint="Learn more"
      />

      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row gap-8 md:gap-12 lg:gap-16">
          <aside className="md:w-1/4 lg:w-1/5">
            <nav className="sticky top-24 space-y-1 border-l-2 border-[#00629B] pl-4">
              {sections.map((section) => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block py-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-[#00629B] dark:hover:text-[#00629B] transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </nav>
          </aside>

          <div className="md:w-3/4 lg:w-4/5 space-y-12">
            <section id="mission" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
                Our Mission
              </h2>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                The IEEE ISGIS Student Branch aims to foster a vibrant community of engineering and technology
                students by providing opportunities for professional growth, technical skill development, and
                collaborative innovation. We are committed to advancing the IEEE mission of “advancing
                technology for humanity.”
              </p>
            </section>

            <section id="vision" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
                Our Vision
              </h2>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                To be a leading student branch in Tunisia that empowers future engineers and technologists
                to become global changemakers through excellence, integrity, and service.
              </p>
            </section>

            <section id="team" className="scroll-mt-20 pt-8 border-t border-[var(--card-border)]">
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-[var(--foreground)]">
                Meet the Team
              </h2>
              <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-4">
                {teamMembers.map((member, index) => (
                  <TeamCard
                    key={index}
                    name={member.name}
                    title={member.title}
                    handle={member.handle}
                    status={member.status}
                    avatarUrl={member.avatarUrl}
                    linkedin={member.linkedin}
                    github={member.github}
                    email={member.email}
                    facebook={member.facebook}
                  />
                ))}
              </div>
            </section>

            <section id="values" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
                Values
              </h2>
              <ul className="list-disc pl-6 space-y-2 text-base md:text-lg text-[var(--text-secondary)]">
                <li><strong className="text-[var(--foreground)]">Excellence</strong> — We strive for the highest standards in everything we do.</li>
                <li><strong className="text-[var(--foreground)]">Innovation</strong> — We embrace new ideas and creative problem-solving.</li>
                <li><strong className="text-[var(--foreground)]">Community</strong> — We build lasting connections across disciplines and borders.</li>
                <li><strong className="text-[var(--foreground)]">Integrity</strong> — We act with honesty, transparency, and respect.</li>
              </ul>
            </section>

            <section id="history" className="scroll-mt-20">
              <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[var(--foreground)]">
                A Brief History
              </h2>
              <p className="text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                Founded in 2018, the IEEE ISGIS Student Branch has grown from a small group of passionate
                students to a thriving community of over 150 active members. We have organized hackathons,
                technical workshops, industry visits, and social events that have left a lasting impact on
                our campus and beyond.
              </p>
              <p className="mt-6 text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
                <strong className="text-[var(--foreground)]">IEEE ISGIS</strong> — part of the{' '}
                <a
                  href="https://www.ieee.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#00629B] hover:underline"
                >
                  IEEE
                </a>{' '}
                global network.
              </p>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}