"use client";

import CardSwap, { Card } from "./CardSwap";
import Link from "next/link";

interface FeatureCardsProps {
  title: string;
  description: string;
  ctaText?: string;
  ctaLink?: string;
  ctaSecondaryText?: string;
  ctaSecondaryLink?: string;
  cards: {
    title: string;
    description: string;
    image: string;
    label?: string;
  }[];
}

export default function FeatureCards({
  title,
  description,
  ctaText,
  ctaLink,
  ctaSecondaryText,
  ctaSecondaryLink,
  cards,
}: FeatureCardsProps) {
  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Left: Content */}
          <div className="lg:w-1/2 space-y-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[var(--foreground)]">
              {title}
            </h2>
            <p className="text-lg text-[var(--text-secondary)] leading-relaxed max-w-lg">
              {description}
            </p>
            <div className="flex flex-wrap gap-4 pt-2">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="bg-[var(--ieee-blue)] text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition shadow-sm"
                >
                  {ctaText}
                </Link>
              )}
              {ctaSecondaryText && ctaSecondaryLink && (
                <Link
                  href={ctaSecondaryLink}
                  className="border border-[var(--card-border)] text-[var(--foreground)] px-8 py-3 rounded-full font-semibold hover:bg-[var(--card-border)]/20 transition"
                >
                  {ctaSecondaryText}
                </Link>
              )}
            </div>
          </div>

          {/* Right: Card Stack */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-sm md:max-w-md aspect-[4/3]">
              <CardSwap
                width={380}
                height={285}
                cardDistance={40}
                verticalDistance={50}
                delay={4000}
                pauseOnHover
                skewAmount={3}
                easing="elastic"
                className="w-full h-full"
              >
                {cards.map((card, idx) => (
                  <Card
                    key={idx}
                    className="bg-[var(--card-bg)] overflow-hidden rounded-2xl border border-[var(--card-border)] shadow-[var(--shadow-md)]"
                  >
                    <div className="w-full h-full flex flex-col p-5 relative">
                      {card.label && (
                        <span className="absolute top-3 right-3 z-10 bg-[var(--ieee-blue)] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                          {card.label}
                        </span>
                      )}
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-36 object-cover rounded-xl mb-3"
                      />
                      <h3 className="font-bold text-[var(--foreground)] text-base">
                        {card.title}
                      </h3>
                      <p className="text-sm text-[var(--text-secondary)] mt-1">
                        {card.description}
                      </p>
                    </div>
                  </Card>
                ))}
              </CardSwap>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}