"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUpRightFromSquare,
  faCalendar,
  faClock,
  faEnvelope,
  faGlobe,
  faLocationDot,
  faUsers,
} from "@fortawesome/free-solid-svg-icons";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { motion, type Variants } from "framer-motion";

const units = [
  {
    type: "Technical Chapter",
    since: "Since 2021",
    title: "IEEE Computer Society ISGIS",
    description:
      "A practical community for software engineering, artificial intelligence, cybersecurity, and emerging computing technologies.",
    logo: "/logos/computer-society.svg",
    members: "32 members",
    website: "https://www.ieee.org/societies/computer.html",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "mailto:ieee.isgis@example.com",
  },
  {
    type: "Technical Chapter",
    since: "Since 2022",
    title: "IEEE Robotics & Automation ISGIS",
    description:
      "Hands-on projects, competitions, and workshops for students who want to turn automation ideas into working prototypes.",
    logo: "/logos/robotics.svg",
    members: "28 members",
    website: "https://www.ieee.org/societies/robotics.html",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "mailto:ieee.isgis@example.com",
  },
  {
    type: "Technical Chapter",
    since: "Since 2023",
    title: "IEEE Power & Energy ISGIS",
    description:
      "A space to explore renewable energy, smart grids, power systems, and the technologies shaping a sustainable future.",
    logo: "/logos/power-energy.svg",
    members: "24 members",
    website: "https://www.ieee-pes.org/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "mailto:ieee.isgis@example.com",
  },
  {
    type: "Affinity Group",
    since: "Since 2022",
    title: "Women in Engineering ISGIS",
    description:
      "Mentorship, leadership, outreach, and professional development for women and allies in engineering and technology.",
    logo: "/logos/wie.svg",
    members: "36 members",
    website: "https://wie.ieee.org/",
    linkedin: "https://www.linkedin.com/",
    instagram: "https://www.instagram.com/",
    email: "mailto:ieee.isgis@example.com",
  },
];

type Unit = (typeof units)[number];

function UnitCard({ unit }: { unit: Unit }) {
  return (
    <article className="group border border-(--card-border) bg-(--card-bg) p-5 transition-colors hover:border-(--ieee-blue) sm:p-6">
      <div className="flex items-start justify-between gap-4">
        <img
          src={unit.logo}
          alt={`${unit.title} logo`}
          className="h-14 w-14 shrink-0 object-contain"
        />
        <span className="text-right text-xs font-semibold uppercase tracking-[0.12em] text-(--text-muted)">
          {unit.type}
        </span>
      </div>
      <div className="mt-6 space-y-2">
        <p className="text-sm font-medium text-(--text-muted)">{unit.since}</p>
        <h2 className="font-open-sans text-xl font-bold leading-tight text-(--foreground)">
          {unit.title}
        </h2>
        <p className="text-sm leading-relaxed text-(--text-secondary)">
          {unit.description}
        </p>
      </div>
      <div className="mt-6 flex items-center justify-between gap-3 border-t border-(--card-border) pt-4 text-xs font-semibold text-(--text-muted)">
        <span className="inline-flex items-center gap-2">
          <FontAwesomeIcon icon={faUsers} className="h-3.5 w-3.5" />
          {unit.members}
        </span>
        <div className="flex items-center gap-3">
          <a
            href={unit.website}
            target="_blank"
            rel="noreferrer"
            aria-label={`Visit ${unit.title} website`}
            className="text-(--ieee-blue) hover:text-(--ieee-blue-hover)"
          >
            <FontAwesomeIcon icon={faGlobe} className="h-3.5 w-3.5" />
          </a>
          <a
            href={unit.linkedin}
            target="_blank"
            rel="noreferrer"
            aria-label={`${unit.title} LinkedIn`}
            className="text-(--text-secondary) hover:text-(--ieee-blue)"
          >
            <FontAwesomeIcon icon={faLinkedinIn} className="h-3.5 w-3.5" />
          </a>
          <a
            href={unit.instagram}
            target="_blank"
            rel="noreferrer"
            aria-label={`${unit.title} Instagram`}
            className="text-(--text-secondary) hover:text-(--ieee-blue)"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-3.5 w-3.5" />
          </a>
          <a
            href={unit.email}
            aria-label={`Email ${unit.title}`}
            className="text-(--text-secondary) hover:text-(--ieee-blue)"
          >
            <FontAwesomeIcon icon={faEnvelope} className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </article>
  );
}

const containerVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.15, ease: "easeOut" },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export default function ChaptersClient() {
  return (
    <main>
      {/* ===== HERO SECTION ===== */}
      <section className="relative overflow-hidden border-b border-(--card-border) bg-(--surface-subtle) py-14 lg:py-20">
        <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-(--ieee-blue) opacity-[0.03] blur-3xl" />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6">
          <motion.div
            className="grid items-center gap-10 md:grid-cols-[1fr_auto]"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
          >
            <div className="max-w-2xl">
              <motion.p
                variants={itemVariants}
                className="font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)"
              >
                IEEE ISGIS Units
              </motion.p>
              <motion.p
                variants={itemVariants}
                className="mt-2 text-sm font-medium text-(--text-muted)"
              >
                Technical communities since 2018
              </motion.p>
              <motion.h1
                variants={itemVariants}
                className="mt-3 font-open-sans text-4xl font-bold leading-tight text-(--foreground) sm:text-5xl lg:text-6xl"
              >
                Find your people.{" "}
                <span className="bg-linear-to-r from-(--ieee-blue) to-indigo-400 bg-clip-text text-transparent">
                  Build your field.
                </span>
              </motion.h1>
              <motion.p
                variants={itemVariants}
                className="mt-4 max-w-xl text-base leading-relaxed text-(--text-secondary) sm:text-lg"
              >
                Chapters and affinity groups are where IEEE ISGIS becomes hands-on: a place to
                learn together, meet mentors, and turn curiosity into projects.
              </motion.p>
              <motion.div
                variants={itemVariants}
                className="mt-6 flex flex-wrap items-center gap-6 text-sm"
              >
                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-(--ieee-blue)">12+</span> chapters
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-(--ieee-blue)">850+</span> members
                </span>
                <span className="flex items-center gap-1.5">
                  <span className="font-bold text-(--ieee-blue)">35+</span> events/year
                </span>
              </motion.div>
              <motion.div
                variants={itemVariants}
                className="mt-6 flex flex-wrap gap-3 text-sm font-semibold"
              >
                <a
                  href="#units"
                  className="inline-flex items-center gap-2 rounded-lg bg-(--ieee-blue) px-6 py-3 text-white shadow-lg shadow-(--ieee-blue)/30 transition-all duration-200 hover:scale-[1.02] hover:bg-(--ieee-blue-hover) hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ieee-blue)"
                  aria-label="Explore all IEEE ISGIS units"
                >
                  Explore units{" "}
                  <FontAwesomeIcon
                    icon={faArrowUpRightFromSquare}
                    className="h-3.5 w-3.5"
                  />
                </a>
                <a
                  href="/join"
                  className="inline-flex items-center gap-2 rounded-lg border border-(--card-border) px-6 py-3 text-(--foreground) transition-all duration-200 hover:border-(--ieee-blue) hover:text-(--ieee-blue) focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--ieee-blue)"
                >
                  Join IEEE ISGIS
                </a>
              </motion.div>
            </div>
            <motion.div
              variants={itemVariants}
              className="flex h-40 w-40 shrink-0 items-center justify-center overflow-hidden rounded-2xl border border-(--card-border) bg-(--card-bg)/80 shadow-2xl backdrop-blur-sm sm:h-44 sm:w-44 lg:h-52 lg:w-52"
            >
              <img
                src="https://media.tenor.com/rNM-wiabQUMAAAAi/benjammins-communties-niche.gif"
                alt="IEEE ISGIS community"
                className="h-full w-full object-cover"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== UNITS GRID ===== */}
      <section
        id="units"
        className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16"
      >
        <div className="mb-8 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)">
              Our communities
            </p>
            <h2 className="mt-2 font-open-sans text-2xl font-bold text-(--foreground) sm:text-3xl">
              Choose a unit to grow with
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-(--text-secondary)">
            All IEEE ISGIS members are welcome to participate across chapters and affinity
            groups.
          </p>
        </div>
        <div className="grid gap-5 sm:grid-cols-2">
          {units.map((unit) => (
            <UnitCard key={unit.title} unit={unit} />
          ))}
        </div>
      </section>

      {/* ===== COMING EVENTS – TIMELINE WITH FONT AWESOME ===== */}
      <section className="landing-dark-band border-t border-white/10">
        <div className="container mx-auto max-w-4xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="mb-8">
            <p className="font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-(--landing-hero-accent)">
              Upcoming
            </p>
            <h2 className="mt-2 font-open-sans text-2xl font-bold text-(--landing-hero-text) sm:text-3xl">
              Events to look forward to
            </h2>
            <p className="mt-2 max-w-xl text-sm text-(--landing-hero-muted)">
              Mark your calendar – these are our next community gatherings.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "AI & Ethics Workshop",
                unit: "Computer Society",
                date: "Oct 28, 2026",
                time: "5:30 PM GMT+1",
                location: "Online",
                registerLink: "/register/ai-ethics-workshop",
              },
              {
                title: "Robotics Hackathon",
                unit: "Robotics & Automation",
                date: "Nov 5, 2026",
                time: "9:00 AM – 6:00 PM",
                location: "ISGIS Campus Lab",
                registerLink: "/register/robotics-hackathon",
              },
              {
                title: "Renewable Energy Panel",
                unit: "Power & Energy",
                date: "Nov 12, 2026",
                time: "4:00 PM GMT+1",
                location: "Hybrid (Room 201 & Zoom)",
                registerLink: "/register/renewable-energy-panel",
              },
              {
                title: "Women in Tech Mentorship",
                unit: "Women in Engineering",
                date: "Nov 19, 2026",
                time: "6:00 PM GMT+1",
                location: "Online",
                registerLink: "/register/women-in-tech-mentorship",
              },
            ].map((event, idx) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group relative flex flex-col gap-2 border-l-4 border-(--landing-hero-accent) pl-5 transition-all hover:border-(--landing-hero-accent)/80 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <h3 className="font-open-sans text-lg font-bold text-(--landing-hero-text) group-hover:text-(--landing-hero-accent)">
                    {event.title}
                  </h3>
                  <p className="mt-0.5 text-sm font-medium text-(--landing-hero-accent)">
                    {event.unit}
                  </p>
                  <div className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-(--landing-hero-muted)">
                    <span className="inline-flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faCalendar} className="h-3.5 w-3.5" />
                      {event.date}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faClock} className="h-3.5 w-3.5" />
                      {event.time}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <FontAwesomeIcon icon={faLocationDot} className="h-3.5 w-3.5" />
                      {event.location}
                    </span>
                  </div>
                </div>
                <a
                  href={event.registerLink}
                  className="shrink-0 self-start rounded-lg border border-(--landing-hero-accent) px-4 py-1.5 text-sm font-semibold text-(--landing-hero-accent) transition-all hover:bg-(--landing-hero-accent) hover:text-(--landing-hero-bg) sm:self-center"
                  aria-label={`Register for ${event.title}`}
                >
                  Register →
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FAQ ACCORDION ===== */}
      <section className="border-t border-(--card-border) bg-(--surface-subtle)">
        <div className="container mx-auto max-w-5xl px-4 py-12 sm:px-6 lg:py-16">
          <div className="mb-8">
            <p className="font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)">
              Got questions?
            </p>
            <h2 className="mt-2 font-open-sans text-2xl font-bold text-(--foreground) sm:text-3xl">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "Can I join more than one unit?",
                a: "Absolutely! You're welcome to participate in as many chapters and affinity groups as you like. Each unit has its own activities, so you can mix and match based on your interests.",
              },
              {
                q: "Do I need to be an IEEE member to join?",
                a: "Yes, you need an active IEEE membership to join any IEEE unit. However, you can join IEEE ISGIS as a student member first – we'll help you get started.",
              },
              {
                q: "How much time commitment is expected?",
                a: "It's entirely up to you. Some members attend every weekly meeting; others drop in for special events. We encourage consistent involvement to get the most out of it, but there's no minimum.",
              },
              {
                q: "How do I start a new chapter or affinity group?",
                a: "If you have 10+ interested members and a faculty advisor, you can apply to start a new unit. Contact us at ieee.isgis@example.com and we'll guide you through the process.",
              },
              {
                q: "Are events open to non‑members?",
                a: "Most internal events are for members only, but we occasionally host public workshops and panels. Check our social media or the events list above for details.",
              },
            ].map((faq, idx) => (
              <motion.details
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="group border border-(--card-border) bg-(--card-bg) transition-colors hover:border-(--ieee-blue)"
              >
                <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-(--foreground) transition-colors hover:text-(--ieee-blue) sm:p-6">
                  <span>{faq.q}</span>
                  <span className="ml-4 text-(--text-muted) group-open:rotate-180 transition-transform duration-200">
                    <svg
                      className="h-5 w-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </span>
                </summary>
                <div className="px-5 pb-5 text-sm leading-relaxed text-(--text-secondary) sm:px-6 sm:pb-6">
                  {faq.a}
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}