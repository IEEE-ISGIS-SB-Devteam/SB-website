import { generatePageMetadata } from "../lib/seo";
import BorderGlow from "../components/BorderGlow/BorderGlow";
import Link from "next/link";
import { pastEvents, upcomingEvents, type EventItem, type EventStatus } from "../lib/events";

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function EventCard({ event, status }: { event: EventItem; status: EventStatus }) {
  return (
    <BorderGlow
      className={`event-card-shell ${status === 'Past' ? 'event-card-shell--past' : ''}`}
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
      <article className="event-card-content">
        {event.image && (
          <div className="event-card-image">
            <img src={event.image} alt="" loading="lazy" />
          </div>
        )}
        <div className="event-card-body">
          <span className={`event-status-badge ${status === 'Past' ? 'event-status-badge--past' : ''}`}>
            {status}
          </span>
          <h3>{event.title}</h3>
          <p className="event-date-badge">
            <CalendarIcon />
            <span>{event.date}</span>
          </p>
          <p className="event-description">{event.description}</p>
          <Link className="event-learn-more" href={`/events/${event.slug}`}>
            Learn More <span aria-hidden="true">→</span>
          </Link>
        </div>
      </article>
    </BorderGlow>
  );
}

// Page-specific metadata
export const metadata = generatePageMetadata({
  title: "Events & Activities",
  description: "Learn about the IEEE ISGIS Student Branch – our mission, vision, and values.",
  openGraph: {
    title: "About IEEE ISGIS Student Branch",
    description: "Learn about our community, history, and commitment to excellence.",
  },
});
export default function EventsPage() {
  return (
    <>
      <section className="py-16 px-4 text-center border-b border-(--card-border)">
        <h1 className="text-4xl font-bold"><span className="text-(--ieee-blue)">Events</span></h1>
        <p className="mt-2 text-(--text-secondary)">Past, current, and upcoming events organized by our student branch.</p>
        <div className="w-16 h-1 bg-(--ieee-blue) mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <section aria-labelledby="upcoming-events-heading" className="events-section">
          <h2 id="upcoming-events-heading" className="events-section-heading">Upcoming Events</h2>
          <div className="events-grid">
            {upcomingEvents.map((event) => <EventCard key={event.title} event={event} status="Upcoming" />)}
          </div>
        </section>

        <section aria-labelledby="past-events-heading" className="events-section events-section--past">
          <h2 id="past-events-heading" className="events-section-heading">Past Events</h2>
          <div className="events-grid">
            {pastEvents.map((event) => <EventCard key={event.title} event={event} status="Past" />)}
          </div>
        </section>
      </div>
    </>
  );
}