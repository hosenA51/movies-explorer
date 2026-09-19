import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";

function Movies() {
  const [movies, setMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        setError("");

        let url = "https://api.tvmaze.com/shows";

        if (searchText.trim()) {
          url = `https://api.tvmaze.com/search/shows?q=${encodeURIComponent(
            searchText
          )}`;
        }

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error("Failed to fetch movies");
        }

        const data = await response.json();

        if (searchText.trim()) {
          const searchResults = data.map((item) => item.show);
          setMovies(searchResults);
        } else {
          setMovies(data);
        }
      } catch (error) {
        console.error(error);
        setError("Something went wrong. Please try again.");
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [searchText]);

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-orange-500">
            Movie Library
          </p>

          <h1 className="text-3xl font-extrabold sm:text-4xl lg:text-5xl">
            Explore Movies & TV Shows
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-gray-400">
            Browse thousands of movies and TV shows or search for
            something specific.
          </p>
        </div>

        {/* Search */}
        <div className="mx-auto mb-10 max-w-2xl">
          <div className="flex items-center rounded-xl border border-white/10 bg-white/5 px-4 py-3 shadow-lg backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="mr-3 h-5 w-5 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="m21 21-4.35-4.35m1.35-5.65a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              />
            </svg>

            <input
              type="text"
              value={searchText}
              onChange={(event) => setSearchText(event.target.value)}
              placeholder="Search for a movie or TV show..."
              className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
            />
          </div>
        </div>

        {/* Loading */}
        {loading && (
          <div className="flex min-h-60 flex-col items-center justify-center">
            <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-orange-500" />

            <p className="mt-4 text-gray-400">
              Loading movies...
            </p>
          </div>
        )}

        {/* Error */}
        {!loading && error && (
          <div className="mx-auto flex max-w-xl flex-col items-center rounded-2xl border border-red-500/20 bg-red-500/5 px-6 py-10 text-center">
            <div className="mb-4 text-4xl">⚠️</div>

            <h2 className="text-xl font-bold text-white">
              Something went wrong
            </h2>

            <p className="mt-2 text-gray-400">
              {error}
            </p>
          </div>
        )}

        {/* Empty Result */}
        {!loading && !error && movies.length === 0 && (
          <div className="flex min-h-60 flex-col items-center justify-center text-center">
            <div className="mb-4 text-5xl">🎬</div>

            <h2 className="text-xl font-bold">
              No movies found
            </h2>

            <p className="mt-2 text-gray-500">
              Try searching with a different title.
            </p>
          </div>
        )}

        {/* Results */}
        {!loading && !error && movies.length > 0 && (
          <>
            <div className="mb-5 flex items-center justify-between">
              <p className="text-sm text-gray-500">
                {movies.length} result
                {movies.length !== 1 ? "s" : ""}
              </p>

              {searchText && (
                <p className="text-sm text-gray-500">
                  Search:{" "}
                  <span className="font-medium text-orange-500">
                    "{searchText}"
                  </span>
                </p>
              )}
            </div>

            {/* Movie Grid */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.id}
                  movie={movie}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default Movies;