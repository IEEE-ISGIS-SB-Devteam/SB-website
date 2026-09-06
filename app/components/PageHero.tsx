"use client";

import { motion, type Variants } from "framer-motion";

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

type PageHeroProps = {
  eyebrow: string;
  kicker: string;
  title: string;
  accent: string;
  description: string;
};

export default function PageHero({ eyebrow, kicker, title, accent, description }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-(--card-border) bg-(--surface-subtle) py-14 lg:py-20">
      <div className="absolute -right-32 -top-32 h-96 w-96 rounded-full bg-(--ieee-blue) opacity-[0.03] blur-3xl" />
      <div className="container mx-auto max-w-6xl px-4 sm:px-6">
        <motion.div
          className="max-w-2xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.p
            variants={itemVariants}
            className="font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)"
          >
            {eyebrow}
          </motion.p>
          <motion.p
            variants={itemVariants}
            className="mt-2 text-sm font-medium text-(--text-muted)"
          >
            {kicker}
          </motion.p>
          <motion.h1
            variants={itemVariants}
            className="mt-3 font-open-sans text-4xl font-bold leading-tight text-(--foreground) sm:text-5xl lg:text-6xl"
          >
            {title}{" "}
            <span className="bg-linear-to-r from-(--ieee-blue) to-indigo-400 bg-clip-text text-transparent">
              {accent}
            </span>
          </motion.h1>
          <motion.p
            variants={itemVariants}
            className="mt-4 max-w-xl text-base leading-relaxed text-(--text-secondary) sm:text-lg"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}