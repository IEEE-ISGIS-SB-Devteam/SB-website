"use client";

import dynamic from "next/dynamic";

const LocationMap = dynamic(() => import("./LocationMap"), {
  ssr: false,
  loading: () => (
    <div className="flex h-[240px] w-full items-center justify-center rounded-3xl border border-(--card-border) bg-(--card)/60 text-sm text-(--text-muted) sm:h-[280px]">
      Loading map...
    </div>
  ),
});

export default function ContactMap() {
  return (
    <section className="relative flex flex-col rounded-3xl border border-(--card-border) bg-(--card)/80 p-4 shadow-(--shadow-sm) backdrop-blur-sm sm:p-5" aria-label="Our location map">
      <div className="mb-4">
        <p className="text-xs font-semibold uppercase tracking-[0.14em] text-(--text-muted)">Visit us</p>
        <h2 className="mt-2 text-2xl font-bold text-(--foreground)">Find IEEE ISGIS</h2>
      </div>
      <LocationMap />
    </section>
  );
}