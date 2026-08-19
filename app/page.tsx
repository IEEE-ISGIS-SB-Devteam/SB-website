import Link from "next/link";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="py-16 px-4 text-center border-b border-black/10 dark:border-white/10">
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight max-w-3xl mx-auto">
          <span className="text-[#00629B]">IEEE</span> ISGIS<br />
          <span className="text-2xl sm:text-3xl font-normal">Student Branch</span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          The official student branch of the Institut Supérieur de Gestion Industrielle de Sfax.
          Bridging technology, engineering, and innovation.
        </p>
        <div className="w-16 h-1 bg-[#00629B] mx-auto mt-6 rounded-full"></div>
      </section>

      {/* Content */}
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h2 className="text-2xl font-bold mb-4">Welcome</h2>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
          The IEEE ISGIS Student Branch is a community of engineering and technology students dedicated to
          advancing innovation, professional development, and technical excellence. We are part of the
          world’s largest technical professional organization.
        </p>
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6">
          Whether you’re interested in AI, robotics, sustainable energy, or embedded systems —
          our branch provides a platform to learn, connect, and lead.
        </p>

        <h3 className="text-xl font-semibold mt-8 mb-4">Featured Initiatives</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="border border-black/10 dark:border-white/10 rounded-xl p-5 hover:border-[#00629B] transition">
            <h4 className="font-semibold">Tech Symposium 2026</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">March 2026 • Sfax</p>
            <p className="text-sm mt-1">Annual gathering of engineering minds with workshops, keynotes, and networking.</p>
          </div>
          <div className="border border-black/10 dark:border-white/10 rounded-xl p-5 hover:border-[#00629B] transition">
            <h4 className="font-semibold">Women in Engineering</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">Ongoing</p>
            <p className="text-sm mt-1">Empowering women in STEM through mentorship, talks, and community events.</p>
          </div>
          <div className="border border-black/10 dark:border-white/10 rounded-xl p-5 hover:border-[#00629B] transition">
            <h4 className="font-semibold">IEEExtreme 2026</h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">October 2026</p>
            <p className="text-sm mt-1">24-hour global coding competition — team up and push your limits.</p>
          </div>
        </div>

        <div className="mt-8 p-5 bg-[#f5f9fc] dark:bg-[#1a2a3a] border-l-4 border-[#00629B] rounded-r">
          <p className="font-medium">
            <span className="text-[#00629B]">✦</span> New members welcome —{' '}
            <Link href="/join" className="text-[#00629B] font-semibold hover:underline">join our community</Link>
            {' '}and shape the future of technology.
          </p>
        </div>
      </div>
    </>
  );
}