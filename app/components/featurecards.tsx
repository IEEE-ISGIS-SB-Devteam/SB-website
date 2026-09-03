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
    link?: string;
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
    <section className="py-10 md:py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
          {/* Left: Text & CTAs */}
          <div className="lg:w-1/2 space-y-4 sm:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[var(--foreground)]">
              {title}
            </h2>
            <p className="text-base sm:text-lg text-[var(--text-secondary)] leading-relaxed">
              {description}
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              {ctaText && ctaLink && (
                <Link
                  href={ctaLink}
                  className="bg-[var(--ieee-blue)] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:opacity-90 transition shadow-sm"
                >
                  {ctaText}
                </Link>
              )}
              {ctaSecondaryText && ctaSecondaryLink && (
                <Link
                  href={ctaSecondaryLink}
                  className="border border-[var(--card-border)] text-[var(--foreground)] px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-sm sm:text-base font-semibold hover:bg-[var(--card-border)]/20 transition"
                >
                  {ctaSecondaryText}
                </Link>
              )}
            </div>
          </div>

          {/* Right: Card Stack */}
          <div className="lg:w-1/2 flex justify-center w-full">
            {/* Desktop: CardSwap – images only, clickable */}
            <div className="hidden md:block w-full max-w-sm md:max-w-md aspect-[4/3]">
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
                {cards.map((card, idx) => {
                  const imageElement = (
                    <div className="w-full h-full overflow-hidden rounded-2xl border border-[var(--card-border)] shadow-[var(--shadow-md)] bg-[var(--card-bg)]">
                      <img
                        src={card.image}
                        alt={card.title}
                        loading="lazy"
                        className="w-full h-full object-cover hover:scale-105 transition duration-500"
                      />
                    </div>
                  );
                  return (
                    <Card
                      key={idx}
                      className="bg-[var(--card-bg)] overflow-hidden rounded-2xl border border-[var(--card-border)] shadow-[var(--shadow-md)]"
                    >
                      {card.link ? (
                        <Link href={card.link} className="block w-full h-full">
                          {imageElement}
                        </Link>
                      ) : (
                        imageElement
                      )}
                    </Card>
                  );
                })}
              </CardSwap>
            </div>

            {/* Mobile: Grid with full info */}
            <div className="md:hidden w-full grid grid-cols-1 sm:grid-cols-2 gap-3">
              {cards.map((card, idx) => (
                <div
                  key={idx}
                  className="bg-[var(--card-bg)] overflow-hidden rounded-xl border border-[var(--card-border)] shadow-sm"
                >
                  <div className="relative">
                    {card.label && (
                      <span className="absolute top-2 right-2 z-10 bg-[var(--ieee-blue)] text-white text-[8px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full">
                        {card.label}
                      </span>
                    )}
                    <img
                      src={card.image}
                      alt={card.title}
                      loading="lazy"
                      className="w-full h-28 object-cover"
                    />
                  </div>
                  <div className="p-3">
                    <h3 className="font-bold text-[var(--foreground)] text-sm">
                      {card.title}
                    </h3>
                    <p className="text-xs text-[var(--text-secondary)] mt-1 line-clamp-2">
                      {card.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}