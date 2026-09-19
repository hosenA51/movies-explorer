import { Link } from "react-router";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950 text-gray-400">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3 lg:px-8">

        {/* Brand */}
        <div>
          <Link
            to="/"
            className="flex items-center gap-2 text-xl font-bold text-white"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-500">
              🎬
            </span>

            <span>
              Movie<span className="text-orange-500">Explorer</span>
            </span>
          </Link>

          <p className="mt-4 max-w-sm text-sm leading-6 text-gray-500">
            Discover movies and TV shows, explore ratings, genres,
            release dates and more with Movie Explorer.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            Quick Links
          </h3>

          <div className="flex flex-col gap-3 text-sm">
            <Link
              to="/"
              className="transition hover:text-orange-500"
            >
              Home
            </Link>

            <Link
              to="/movies"
              className="transition hover:text-orange-500"
            >
              Movies
            </Link>
          </div>
        </div>

        {/* About */}
        <div>
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
            About
          </h3>

          <p className="text-sm leading-6 text-gray-500">
            Movie Explorer is a React-based movie discovery
            application powered by the TVMaze API.
          </p>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl items-center justify-center px-4 py-6 text-sm sm:px-6 lg:px-8">
          <p className="text-center">
            © 2026 MovieExplorer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;