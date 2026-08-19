export default function EventsPage() {
  return (
    <>
      <section className="py-16 px-4 text-center border-b border-black/10 dark:border-white/10">
        <h1 className="text-4xl font-bold"><span className="text-[#00629B]">Events</span></h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400">Past, current, and upcoming events organized by our student branch.</p>
        <div className="w-16 h-1 bg-[#00629B] mx-auto mt-4 rounded-full"></div>
      </section>

      <div className="container mx-auto px-4 py-12 max-w-5xl">
        <h2 className="text-2xl font-bold mb-6">Upcoming Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'AI & Robotics Workshop', date: '15 Dec 2026 • 14:00–17:00', desc: 'Hands-on session covering fundamentals of AI and robotic control systems.' },
            { title: 'IEEE ISGIS General Assembly', date: '10 Jan 2026 • 18:00', desc: 'Yearly general assembly — all members are invited to vote and propose new initiatives.' },
            { title: 'Career & Networking Night', date: '22 Feb 2026 • 19:00', desc: 'Connect with industry professionals, alumni, and fellow students.' },
          ].map((event, i) => (
            <div key={i} className="border border-black/10 dark:border-white/10 rounded-xl p-5 hover:border-[#00629B] transition">
              <h4 className="font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
              <p className="text-sm mt-1">{event.desc}</p>
            </div>
          ))}
        </div>

        <h2 className="text-2xl font-bold mt-12 mb-6">Past Events</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'IEEExtreme 2025', date: 'Oct 2025', desc: 'Our teams ranked among the top 10% globally in this 24-hour coding marathon.' },
            { title: 'Smart Grid Seminar', date: 'Sep 2025', desc: 'Expert talk on sustainable energy and smart grid technologies.' },
            { title: 'Freshman Welcome Day', date: 'Sep 2025', desc: 'Welcoming new engineering students with a day of fun, learning, and networking.' },
          ].map((event, i) => (
            <div key={i} className="border border-black/10 dark:border-white/10 rounded-xl p-5 hover:border-[#00629B] transition">
              <h4 className="font-semibold">{event.title}</h4>
              <p className="text-sm text-gray-500 dark:text-gray-400">{event.date}</p>
              <p className="text-sm mt-1">{event.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}