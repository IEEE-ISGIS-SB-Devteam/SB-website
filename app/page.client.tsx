"use client";


import Link from "next/link";
import FeatureCards from "./components/featurecards";

export default function HomePageClient() {
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
      image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=300&fit=crop",
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
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-[#071b2b] text-white">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&h=900&fit=crop"
          alt="Students collaborating during an IEEE activity"
          className="landing-hero-image absolute inset-0 -z-10 opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[#071b2b]/75" />
        <div className="container mx-auto px-4 py-20 sm:py-28 lg:py-36">
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#7dd3fc]">
              IEEE Student Branch
            </p>
            <h1 className="text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Learn, build, and lead with IEEE ISGIS.
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/85 sm:text-lg">
              A student community at the Higher Institute of Industrial Management of Sfax, connecting curious students with technology, mentorship, and meaningful projects.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/join" className="landing-action landing-action-primary">
                Join the branch
              </Link>
              <Link href="/about" className="landing-action landing-action-secondary">
                Discover IEEE ISGIS
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 py-8 md:py-12">
        <FeatureCards
          title="A community built around action"
          description="From technical workshops and competitions to professional development and outreach, IEEE ISGIS gives students practical ways to grow, collaborate, and make an impact."
          ctaText="Explore our chapters"
          ctaLink="/chapters"
          ctaSecondaryText="About the branch"
          ctaSecondaryLink="/about"
          cards={cards}
        />
      </div>

      <section className="border-y border-(--card-border) bg-(--card-bg)">
        <div className="container mx-auto px-4 py-12 md:py-16">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)">
              Why get involved
            </p>
            <h2 className="mt-3 text-2xl font-bold text-(--foreground) sm:text-3xl">
              Turn your interests into experience.
            </h2>
          </div>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <div>
              <h3 className="text-lg font-bold text-(--foreground)">Build practical skills</h3>
              <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                Learn through workshops, challenges, and projects that connect theory to real problems.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-(--foreground)">Meet your community</h3>
              <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                Find teammates, mentors, and friends who share your curiosity about technology.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold text-(--foreground)">Create an impact</h3>
              <p className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                Take part in outreach and initiatives that use engineering to serve our community.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#071b2b] text-white">
        <div className="container mx-auto flex flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between md:py-16">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-bold sm:text-3xl">Ready to take part?</h2>
            <p className="mt-2 text-sm leading-relaxed text-white/75 sm:text-base">
              Join IEEE ISGIS and find your next project, event, or opportunity to grow.
            </p>
          </div>
          <Link href="/join" className="landing-action landing-action-primary w-fit">
            Become a member
          </Link>
        </div>
      </section>
    </div>
  );
}