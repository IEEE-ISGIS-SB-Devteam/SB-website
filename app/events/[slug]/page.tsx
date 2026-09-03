import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import BorderGlow from "../../components/BorderGlow/BorderGlow";
import { getEventBySlug } from "../../lib/events";
import { generatePageMetadata } from "../../lib/seo";

export function generateStaticParams() {
  return [
    "ai-robotics-workshop",
    "ieee-isgis-general-assembly",
    "career-networking-night",
    "ieee-isgis-i2i-hackathon",
    "ieeextreme-2025",
    "smart-grid-seminar",
    "freshman-welcome-day",
    "tsyp-13",
  ].map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) return generatePageMetadata({ title: "Event Not Found" });
  return generatePageMetadata({
    title: event.title,
    description: event.fullDescription,
    openGraph: { title: event.title, description: event.fullDescription, images: event.image ? [event.image] : undefined },
  });
}

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

export default async function EventDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const event = getEventBySlug(slug);
  if (!event) notFound();

  return (
    <div className="event-detail-page">
      <div className="container mx-auto px-4 py-10 md:py-16 max-w-4xl">
        <Link className="event-back-link" href="/events">← Back to Events</Link>
        <BorderGlow
          className={event.status === "Past" ? "event-detail-shell event-card-shell--past" : "event-detail-shell"}
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
          <article className="event-detail-content">
            {event.image && (
              <div className="event-detail-image">
                <img src={event.image} alt="" />
              </div>
            )}
            <div className="event-detail-body">
              <span className={`event-status-badge ${event.status === "Past" ? "event-status-badge--past" : ""}`}>
                {event.status}
              </span>
              <h1>{event.title}</h1>
              <p className="event-detail-date event-date-badge">
                <CalendarIcon />
                <span>{event.date}</span>
              </p>
              <p className="event-detail-description">{event.fullDescription}</p>
              {event.highlights && event.highlights.length > 0 && (
                <section className="event-highlights" aria-labelledby="event-highlights-heading">
                  <h2 id="event-highlights-heading">Highlights &amp; Results</h2>
                  <ul>
                    {event.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </section>
              )}
            </div>
          </article>
        </BorderGlow>
      </div>
    </div>
  );
}
