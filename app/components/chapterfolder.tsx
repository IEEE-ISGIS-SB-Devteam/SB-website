"use client";

import Folder from "./Folder";

interface ChapterFolderProps {
  name: string;
  description: string;
  logo: string;
  stats: { label: string; value: string | number }[];
  socialLinks?: { platform: string; url: string; icon?: string }[];
  reverse?: boolean;
  folderColor?: string;
  className?: string;
}

export default function ChapterFolder({
  name,
  description,
  logo,
  stats,
  socialLinks = [],
  reverse = false,
  folderColor = "#00629B",
  className = "",
}: ChapterFolderProps) {
  const folderItems = stats.slice(0, 3).map((stat) => (
    <div key={stat.label} className="text-center">
      <div className="text-sm sm:text-base font-bold text-[var(--foreground)]">{stat.value}</div>
      <div className="text-[10px] uppercase tracking-wider text-[var(--text-muted)]">
        {stat.label}
      </div>
    </div>
  ));

  return (
    <section className={`py-12 md:py-20 ${className}`}>
      <div className="container mx-auto px-4">
        <div
          className={`flex flex-col lg:flex-row ${
            reverse ? "lg:flex-row-reverse" : ""
          } items-center gap-10 lg:gap-20`}
        >
          {/* Text */}
          <div className="lg:w-1/2 space-y-4">
            <div className="flex items-center gap-3 sm:gap-4">
              {logo && (
                <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-full overflow-hidden border-2 border-[var(--ieee-blue)] flex-shrink-0 shadow-sm">
                  <img src={logo} alt={name} className="w-full h-full object-cover" />
                </div>
              )}
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-[var(--foreground)]">
                {name}
              </h2>
            </div>
            <p className="text-sm sm:text-base md:text-lg text-[var(--text-secondary)] leading-relaxed">
              {description}
            </p>
            {socialLinks.length > 0 && (
              <div className="flex flex-wrap gap-3 pt-1">
                {socialLinks.map((link, idx) => (
                  <a
                    key={idx}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[var(--text-secondary)] hover:text-[var(--ieee-blue)] transition"
                  >
                    {link.icon || link.platform}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Folder */}
          <div className="lg:w-1/2 flex justify-center">
            <div className="w-full max-w-[140px] sm:max-w-[180px] md:max-w-[200px] aspect-square flex items-center justify-center">
              <Folder
                color={folderColor}
                size={1.5}
                items={folderItems}
                className="scale-75 sm:scale-90 md:scale-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}