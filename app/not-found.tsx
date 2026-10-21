import Link from "next/link";

export default function NotFound() {
  return (
    <section className="flex flex-1 items-center justify-center bg-(--background) px-4 py-24 text-(--foreground)">
      <div className="max-w-xl text-center">
        <p className="font-open-sans text-sm font-semibold uppercase tracking-[0.16em] text-(--ieee-blue)">
          404
        </p>
        <h1 className="mt-3 font-open-sans text-4xl font-bold sm:text-5xl">
          Page not found
        </h1>
        <p className="mt-4 text-base leading-relaxed text-(--text-secondary) sm:text-lg">
          The page you are looking for does not exist or may have moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex bg-(--ieee-blue) px-6 py-3 font-semibold text-white transition hover:opacity-90"
        >
          Return home
        </Link>
      </div>
    </section>
  );
}
