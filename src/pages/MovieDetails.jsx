import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";

function MovieDetails() {
  const { id } = useParams();

  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(
          `https://api.tvmaze.com/shows/${id}`
        );

        if (!response.ok) {
          throw new Error("Failed to fetch movie details");
        }

        const data = await response.json();

        setMovie(data);
      } catch (error) {
        console.error(error);
        setError("Unable to load movie details.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);

  if (loading) {
    return (
      <section className="min-h-screen bg-slate-950 px-4 py-20 text-white">
        <div className="flex flex-col items-center justify-center">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-white/10 border-t-orange-500" />

          <p className="mt-4 text-gray-400">
            Loading movie details...
          </p>
        </div>
      </section>
    );
  }

  if (error || !movie) {
    return (
      <section className="min-h-screen bg-slate-950 px-4 py-20 text-white">
        <div className="mx-auto max-w-xl rounded-2xl border border-red-500/20 bg-red-500/5 p-8 text-center">
          <div className="text-4xl">⚠️</div>

          <h1 className="mt-4 text-2xl font-bold">
            Movie not found
          </h1>

          <p className="mt-2 text-gray-400">
            {error || "The requested movie could not be found."}
          </p>

          <Link
            to="/movies"
            className="mt-6 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
          >
            Back to Movies
          </Link>
        </div>
      </section>
    );
  }

  const image =
    movie.image?.original ||
    movie.image?.medium;

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const rating = movie.rating?.average || "N/A";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available.";

  return (
    <section className="min-h-screen bg-slate-950 px-4 py-12 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <Link
          to="/movies"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-400 transition hover:text-orange-500"
        >
          ← Back to Movies
        </Link>

        {/* Details Card */}
        <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
          <div className="grid lg:grid-cols-[320px_1fr]">

            {/* Poster */}
            <div className="bg-slate-900 h-full">
              {image ? (
                <img
                  src={image}
                  alt={`${movie.name} poster`}
                  className="h-full w-full object-cover"
                />
              ) : (
                <div className="flex h-[520px] items-center justify-center text-gray-500">
                  No Image
                </div>
              )}
            </div>

            {/* Content */}
            <div className="p-6 sm:p-8 lg:p-10">

              {/* Type */}
              <span className="inline-block rounded-md bg-orange-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-orange-400">
                {movie.type || "TV Show"}
              </span>

              {/* Title */}
              <h1 className="mt-4 text-3xl font-extrabold sm:text-4xl">
                {movie.name}
              </h1>

              {/* Meta */}
              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                  ⭐ {rating}
                </span>

                <span className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                  📅 {year}
                </span>

                {movie.runtime && (
                  <span className="rounded-lg bg-white/5 px-3 py-2 text-sm text-gray-300">
                    ⏱️ {movie.runtime} min
                  </span>
                )}
              </div>

              {/* Genres */}
              {movie.genres?.length > 0 && (
                <div className="mt-5 flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span
                      key={genre}
                      className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-400"
                    >
                      {genre}
                    </span>
                  ))}
                </div>
              )}

              {/* Summary */}
              <div className="mt-8">
                <h2 className="text-xl font-bold">
                  Overview
                </h2>

                <p className="mt-3 max-w-3xl leading-7 text-gray-400">
                  {summary}
                </p>
              </div>

              {/* Additional Information */}
              <div className="mt-8 grid gap-4 border-t border-white/10 pt-6 sm:grid-cols-2">

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Language
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    {movie.language || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Status
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    {movie.status || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Network
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    {movie.network?.name || "N/A"}
                  </p>
                </div>

                <div>
                  <p className="text-xs uppercase tracking-wider text-gray-600">
                    Premiered
                  </p>

                  <p className="mt-1 text-sm text-gray-300">
                    {movie.premiered || "N/A"}
                  </p>
                </div>
              </div>

              {/* Official Website */}
              {movie.officialSite && (
                <a
                  href={movie.officialSite}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-8 inline-block rounded-lg bg-orange-500 px-5 py-3 font-semibold text-white transition hover:bg-orange-600"
                >
                  Visit Official Site ↗
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MovieDetails;