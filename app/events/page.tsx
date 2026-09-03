import { generatePageMetadata } from "../lib/seo";
import BorderGlow from "../components/BorderGlow/BorderGlow";

type EventItem = {
  title: string;
  date: string;
  desc: string;
  image?: string;
};

const upcomingEvents: EventItem[] = [
  { title: 'AI & Robotics Workshop', date: '15 Dec 2026 • 14:00–17:00', desc: 'Hands-on session covering fundamentals of AI and robotic control systems.' },
  { title: 'IEEE ISGIS General Assembly', date: '10 Jan 2026 • 18:00', desc: 'Yearly general assembly — all members are invited to vote and propose new initiatives.' },
  { title: 'Career & Networking Night', date: '22 Feb 2026 • 19:00', desc: 'Connect with industry professionals, alumni, and fellow students.' },
];

const pastEvents: EventItem[] = [
  {title : 'IEEE ISGIS I2I Hackathon', date: 'March 2025 • 24 hours', desc: 'A 24-hour coding marathon where students developed innovative solutions to real-world problems.' , image: 'https://i.postimg.cc/jqWKFDvj/IMG-9730.jpg',},
  { title: 'IEEExtreme 2025', date: 'Oct 2025', desc: 'Our teams ranked among the top 10% globally in this 24-hour coding marathon.' },
  { title: 'Smart Grid Seminar', date: 'Sep 2025', desc: 'Expert talk on sustainable energy and smart grid technologies.' },
  { title: 'Freshman Welcome Day', date: 'Sep 2025', desc: 'Welcoming new engineering students with a day of fun, learning, and networking.' },
  {
    title: 'TSYP 13',
    date: '22–24 December 2025 • Medina Congress Center, Yasmine Hammamet',
    desc: 'The 13th edition of the IEEE Tunisian Student and Young Professional Congress, hosted by IEEE ENIS Student Branch in collaboration with IEEE Tunisia Section — three days of workshops, challenges, and networking bringing together IEEE members from across Tunisia.',
    image: 'https://i.postimg.cc/pTTSh2h0/IMG-9749.jpg',
  },
];

function CalendarIcon() {
  return (
    <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 2v4m8-4v4M3 10h18M5 4h14a2 2 0 0 1 2 2v13a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" />
    </svg>
  );
}

function EventCard({ event, status }: { event: EventItem; status: 'Upcoming' | 'Past' }) {
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
          <p className="event-description">{event.desc}</p>
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
      <section className="py-16 px-4 text-center border-b border-black/10 dark:border-white/10">
        <h1 className="text-4xl font-bold"><span className="text-[#00629B]">Events</span></h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Past, current, and upcoming events organized by our student branch.</p>
        <div className="w-16 h-1 bg-[#00629B] mx-auto mt-4 rounded-full"></div>
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