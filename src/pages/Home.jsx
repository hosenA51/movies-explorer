import { Link } from "react-router";

function Home() {
  return (
    <section className="relative min-h-[calc(100vh-64px)] overflow-hidden bg-slate-950 text-white">
      
      <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-orange-500/20 blur-3xl" />

      <div className="absolute -right-32 bottom-10 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />

      <div className="relative mx-auto grid min-h-[calc(100vh-64px)] max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        
        {/* Hero Content */}
        <div>
          <span className="mb-5 inline-flex rounded-full border border-orange-500/20 bg-orange-500/10 px-4 py-2 text-sm font-medium text-orange-400">
            🎬 Your Movie Discovery Platform
          </span>

          <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Discover Your Next
            <span className="block text-orange-500">
              Favorite Movie
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-gray-400 sm:text-lg">
            Explore thousands of movies and TV shows, discover new
            favorites, and get detailed information about the titles
            you want to watch.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/movies"
              className="rounded-xl bg-orange-500 px-6 py-3.5 font-semibold text-white shadow-lg shadow-orange-500/20 transition hover:-translate-y-0.5 hover:bg-orange-600"
            >
              Explore Movies →
            </Link>

            <Link
              to="/movies"
              className="rounded-xl border border-white/10 bg-white/5 px-6 py-3.5 font-semibold text-gray-200 backdrop-blur-sm transition hover:bg-white/10"
            >
              Browse Library
            </Link>
          </div>

          <div className="mt-10 flex flex-wrap gap-8 border-t border-white/10 pt-7">
            <div>
              <p className="text-2xl font-bold text-white">10K+</p>
              <p className="text-sm text-gray-500">Titles</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">24/7</p>
              <p className="text-sm text-gray-500">Discovery</p>
            </div>

            <div>
              <p className="text-2xl font-bold text-white">Free</p>
              <p className="text-sm text-gray-500">To Explore</p>
            </div>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-md lg:block">
          
          <div className="absolute inset-0 rounded-3xl bg-orange-500/20 blur-3xl" />

          {/* Main Card */}
          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-4 shadow-2xl backdrop-blur-xl">
            <div className="flex aspect-[3/4] items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 via-red-500 to-purple-700">
              <div className="text-center">
                <div className="text-7xl">🎬</div>

                <h2 className="mt-5 text-3xl font-bold">
                  Movie
                </h2>

                <p className="text-lg font-medium text-white/70">
                  Explorer
                </p>
              </div>
            </div>

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl border border-white/10 bg-slate-950/80 p-4 backdrop-blur-xl">
              <p className="text-xs uppercase tracking-widest text-orange-400">
                Featured
              </p>

              <h3 className="mt-1 text-lg font-bold">
                Find something worth watching.
              </h3>

              <p className="mt-1 text-sm text-gray-400">
                Search. Discover. Enjoy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;