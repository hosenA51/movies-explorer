import { Link } from "react-router";

function NotFound() {
  return (
    <section className="flex min-h-[calc(100vh-64px)] items-center justify-center bg-slate-950 px-4 text-white">
      <div className="mx-auto max-w-lg text-center">

        {/* 404 */}
        <p className="text-8xl font-black tracking-tight text-orange-500 sm:text-9xl">
          404
        </p>

        {/* Title */}
        <h1 className="mt-5 text-3xl font-bold sm:text-4xl">
          Page Not Found
        </h1>

        {/* Description */}
        <p className="mt-4 leading-7 text-gray-400">
          Sorry, the page you are looking for doesn't exist
          or may have been moved.
        </p>

        {/* Buttons */}
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">

          <Link
            to="/"
            className="rounded-lg bg-orange-500 px-6 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Back to Home
          </Link>

          <Link
            to="/movies"
            className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
          >
            Explore Movies
          </Link>

        </div>
      </div>
    </section>
  );
}

export default NotFound;