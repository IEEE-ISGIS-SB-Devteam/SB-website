"use client";


import Link from "next/link";
import { FormEvent, useState } from "react";
import { motion, type Variants } from "framer-motion";
import FeatureCards from "./components/featurecards";

const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: "easeOut" } },
};

const textGroupVariants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function HomePageClient() {
  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [captchaAnswer, setCaptchaAnswer] = useState("");
  const [newsletterStatus, setNewsletterStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

  const handleNewsletterSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (captchaAnswer.trim() !== "11") {
      setNewsletterStatus("error");
      return;
    }

    const scriptUrl = process.env.NEXT_PUBLIC_NEWSLETTER_SCRIPT_URL;
    if (!scriptUrl) {
      setNewsletterStatus("error");
      return;
    }

    setNewsletterStatus("submitting");
    try {
      await fetch(scriptUrl, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "text/plain;charset=utf-8" },
        body: JSON.stringify({ email: newsletterEmail, source: "home-newsletter" }),
      });
      setNewsletterStatus("success");
      setNewsletterEmail("");
      setCaptchaAnswer("");
    } catch {
      setNewsletterStatus("error");
    }
  };

  const cards = [
    {
      title: "Computer Society",
      description: "The IEEE Computer Society is the world's largest professional organization for computer scientists, engineers, and technology workers",
      image: "https://i.postimg.cc/XYdpLwPs/Capture-d-ecran-2026-08-25-205149.png",
      label: "Chapter",
      link: "/events/tech-symposium",
    },
    {
      title: "Women in Engineering",
      description: "Empowering women in STEM through mentorship, talks, and community events.",
      image: "https://i.postimg.cc/R0FsPH9s/white-Photoroom-Photoroom-(2).png",
      label: "WIE",
      link: "/events/women-in-engineering",
    },
    {
      title: "Industrial Applications Society",
      description: "The IEEE Industry Applications Society (IAS) is a specialized global organization within the Institute of Electrical and Electronics Engineers (IEEE) that bridges the gap between engineering theory and practical industrial applications.",
      image: "https://i.postimg.cc/0Qww6WhL/Copie-de-ias.png",
      label: "Competition",
      link: "/events/ieeextreme",
    },
    {
      title: "IEEE ISGIS SB",
      description: "The IEEE ISGIS Student Branch is a vibrant community of students at the Higher Institute of Industrial Management of Sfax, dedicated to fostering innovation, collaboration, and professional growth in the field of technology.",
      image: "https://i.postimg.cc/VLHTtgXM/Copie-de-Posts.png",
      label: "Branch",
      link: "/events/",
    },
  ];
  return (
    <div>
      <section className="relative isolate overflow-hidden bg-(--surface-subtle) text-(--foreground)">
        <img
          src="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=1600&h=900&fit=crop"
          alt="Students collaborating during an IEEE activity"
          className="landing-hero-image absolute inset-0 -z-10 opacity-15"
        />
        <div className="absolute inset-0 -z-10 bg-(--landing-hero-overlay)" />
        <div className="container mx-auto px-4 py-20 sm:py-28 lg:py-36">
          <motion.div
            className="max-w-3xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textGroupVariants}
          >
            <motion.p variants={textRevealVariants} className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-(--ieee-blue)">
              IEEE Student Branch
            </motion.p>
            <motion.h1 variants={textRevealVariants} className="font-open-sans text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Learn, build, and lead with{" "}
              <span className="bg-linear-to-r from-(--ieee-blue) to-indigo-400 bg-clip-text text-transparent">
                IEEE ISGIS.
              </span>
            </motion.h1>
            <motion.p variants={textRevealVariants} className="mt-6 max-w-2xl text-base leading-relaxed text-(--text-secondary) sm:text-lg">
              A student community at the Higher Institute of Industrial Management of Sfax, connecting curious students with technology, mentorship, and meaningful projects.
            </motion.p>
            <motion.div variants={textRevealVariants} className="mt-8 flex flex-wrap gap-3">
              <Link href="/join" className="landing-action landing-action-primary">
                Join the branch
              </Link>
              <Link href="/about" className="landing-action landing-action-secondary">
                Discover IEEE ISGIS
              </Link>
            </motion.div>
          </motion.div>
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
          <motion.div
            className="max-w-2xl"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={textGroupVariants}
          >
            <motion.p variants={textRevealVariants} className="text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)">
              Why get involved
            </motion.p>
            <motion.h2 variants={textRevealVariants} className="font-open-sans mt-3 text-2xl font-bold text-(--foreground) sm:text-3xl">
              Turn your interests into experience.
            </motion.h2>
          </motion.div>
          <div className="mt-8 grid gap-8 sm:grid-cols-3">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={textGroupVariants}>
              <motion.h3 variants={textRevealVariants} className="text-lg font-bold text-(--foreground)">Build practical skills</motion.h3>
              <motion.p variants={textRevealVariants} className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                Learn through workshops, challenges, and projects that connect theory to real problems.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={textGroupVariants}>
              <motion.h3 variants={textRevealVariants} className="text-lg font-bold text-(--foreground)">Meet your community</motion.h3>
              <motion.p variants={textRevealVariants} className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                Find teammates, mentors, and friends who share your curiosity about technology.
              </motion.p>
            </motion.div>
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={textGroupVariants}>
              <motion.h3 variants={textRevealVariants} className="text-lg font-bold text-(--foreground)">Create an impact</motion.h3>
              <motion.p variants={textRevealVariants} className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
                Take part in outreach and initiatives that use engineering to serve our community.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="landing-dark-band">
        <div className="container mx-auto flex flex-col gap-6 px-4 py-12 sm:flex-row sm:items-center sm:justify-between md:py-16">
          <motion.div className="max-w-2xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={textGroupVariants}>
            <motion.h2 variants={textRevealVariants} className="font-open-sans text-2xl font-bold sm:text-3xl">Ready to take part?</motion.h2>
            <motion.p variants={textRevealVariants} className="mt-2 text-sm leading-relaxed text-(--landing-hero-muted) sm:text-base">
              Join IEEE ISGIS and find your next project, event, or opportunity to grow.
            </motion.p>
          </motion.div>
          <Link href="/join" className="landing-action landing-action-primary w-fit">
            Become a member
          </Link>
        </div>
      </section>

      <section className="border-t border-(--card-border) bg-(--surface-subtle)">
        <div className="container mx-auto flex flex-col gap-6 px-4 py-12 md:flex-row md:items-center md:justify-between md:py-16">
          <motion.div className="max-w-xl" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={textGroupVariants}>
            <motion.p variants={textRevealVariants} className="text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)">
              Stay in the loop
            </motion.p>
            <motion.h2 variants={textRevealVariants} className="font-open-sans mt-2 text-2xl font-bold text-(--foreground) sm:text-3xl">
              Workshop and event updates, in your inbox.
            </motion.h2>
            <motion.p variants={textRevealVariants} className="mt-2 text-sm leading-relaxed text-(--text-secondary)">
              Get practical news about workshops, competitions, chapter activities, and other IEEE ISGIS opportunities.
            </motion.p>
          </motion.div>
          <div className="w-full max-w-md">
            {newsletterStatus === "success" ? (
              <p className="border border-(--card-border) bg-(--card-bg) px-4 py-3 text-sm font-semibold text-(--foreground)">
                You are subscribed. Check your inbox for confirmation.
              </p>
            ) : (
              <form className="space-y-3" onSubmit={handleNewsletterSubmit}>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <label htmlFor="newsletter-email" className="sr-only">Email address</label>
                  <input
                    id="newsletter-email"
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(event) => setNewsletterEmail(event.target.value)}
                    placeholder="you@example.com"
                    className="theme-input min-w-0 flex-1 rounded-none border px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-(--ieee-blue)"
                  />
                  <button type="submit" disabled={newsletterStatus === "submitting"} className="landing-action landing-action-primary shrink-0 disabled:cursor-wait disabled:opacity-60">
                    {newsletterStatus === "submitting" ? "Sending" : "Subscribe"}
                  </button>
                </div>
                <div className="flex items-center gap-3 text-sm text-(--text-secondary)">
                  <label htmlFor="newsletter-captcha" className="whitespace-nowrap">Quick check: 7 + 4 =</label>
                  <input
                    id="newsletter-captcha"
                    type="text"
                    inputMode="numeric"
                    required
                    value={captchaAnswer}
                    onChange={(event) => setCaptchaAnswer(event.target.value)}
                    className="theme-input w-20 rounded-none border px-3 py-2 text-center outline-none focus:ring-2 focus:ring-(--ieee-blue)"
                    aria-label="Answer to 7 plus 4"
                  />
                </div>
                {newsletterStatus === "error" && (
                  <p className="text-sm font-semibold text-red-600 dark:text-red-400">
                    Check the answer and make sure the newsletter endpoint is configured.
                  </p>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}