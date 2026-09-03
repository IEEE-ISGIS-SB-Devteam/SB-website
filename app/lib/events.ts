export type EventStatus = "Upcoming" | "Past";

export type EventItem = {
  slug: string;
  title: string;
  status: EventStatus;
  date: string;
  description: string;
  fullDescription: string;
  image?: string;
  highlights?: string[];
};

export const upcomingEvents: EventItem[] = [
  {
    slug: "ai-robotics-workshop",
    title: "AI & Robotics Workshop",
    status: "Upcoming",
    date: "15 Dec 2026 • 14:00–17:00",
    description: "Hands-on session covering fundamentals of AI and robotic control systems.",
    fullDescription: "Hands-on session covering fundamentals of AI and robotic control systems.",
  },
  {
    slug: "ieee-isgis-general-assembly",
    title: "IEEE ISGIS General Assembly",
    status: "Upcoming",
    date: "10 Jan 2026 • 18:00",
    description: "Yearly general assembly — all members are invited to vote and propose new initiatives.",
    fullDescription: "Yearly general assembly — all members are invited to vote and propose new initiatives.",
  },
  {
    slug: "career-networking-night",
    title: "Career & Networking Night",
    status: "Upcoming",
    date: "22 Feb 2026 • 19:00",
    description: "Connect with industry professionals, alumni, and fellow students.",
    fullDescription: "Connect with industry professionals, alumni, and fellow students.",
  },
];

export const pastEvents: EventItem[] = [
  {
    slug: "ieee-isgis-i2i-hackathon",
    title: "IEEE ISGIS I2I Hackathon",
    status: "Past",
    date: "March 2025 • 24 hours",
    description: "A 24-hour coding marathon where students developed innovative solutions to real-world problems.",
    fullDescription: "A 24-hour coding marathon where students developed innovative solutions to real-world problems.",
    image: "https://i.postimg.cc/jqWKFDvj/IMG-9730.jpg",
  },
  {
    slug: "ieeextreme-2025",
    title: "IEEExtreme 2025",
    status: "Past",
    date: "Oct 2025",
    description: "Our teams ranked among the top 10% globally in this 24-hour coding marathon.",
    fullDescription: "Our teams ranked among the top 10% globally in this 24-hour coding marathon.",
  },
  {
    slug: "smart-grid-seminar",
    title: "Smart Grid Seminar",
    status: "Past",
    date: "Sep 2025",
    description: "Expert talk on sustainable energy and smart grid technologies.",
    fullDescription: "Expert talk on sustainable energy and smart grid technologies.",
  },
  {
    slug: "freshman-welcome-day",
    title: "Freshman Welcome Day",
    status: "Past",
    date: "Sep 2025",
    description: "Welcoming new engineering students with a day of fun, learning, and networking.",
    fullDescription: "Welcoming new engineering students with a day of fun, learning, and networking.",
  },
  {
    slug: "tsyp-13",
    title: "TSYP 13",
    status: "Past",
    date: "22–24 December 2025 • Medina Congress Center, Yasmine Hammamet",
    description: "The 13th edition of the IEEE Tunisian Student and Young Professional Congress, hosted by IEEE ENIS Student Branch in collaboration with IEEE Tunisia Section.",
    fullDescription: "The 13th edition of the IEEE Tunisian Student and Young Professional Congress, hosted by IEEE ENIS Student Branch in collaboration with IEEE Tunisia Section — three days of workshops, challenges, and networking bringing together IEEE members from across Tunisia.",
    image: "https://i.postimg.cc/pTTSh2h0/IMG-9749.jpg",
    highlights: ["Won 3rd place in an agricultural challenge."],
  },
];

export const events = [...upcomingEvents, ...pastEvents];

export function getEventBySlug(slug: string) {
  return events.find((event) => event.slug === slug);
}
