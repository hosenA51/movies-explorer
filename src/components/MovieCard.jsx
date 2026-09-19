import { Link } from "react-router";

function MovieCard({ movie }) {
  const image =
    movie.image?.medium ||
    movie.image?.original ||
    "https://via.placeholder.com/300x450?text=No+Image";

  const rating = movie.rating?.average || "N/A";

  const year = movie.premiered
    ? new Date(movie.premiered).getFullYear()
    : "N/A";

  const genres =
    movie.genres?.length > 0
      ? movie.genres.join(", ")
      : "N/A";

  const summary = movie.summary
    ? movie.summary.replace(/<[^>]*>/g, "")
    : "No description available for this title.";

  return (
    <article className="flex flex-col justify-between group overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-lg backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-orange-500/30 hover:shadow-orange-500/10">
      
      {/* Poster */}
      <div className="relative h-64 overflow-hidden bg-slate-900 ">
        <img
          src={image}
          alt={`${movie.name} poster`}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          loading="lazy"
        />

        {/* Image Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

        {/* Rating */}
        <div className="absolute right-3 top-3 flex items-center gap-1 rounded-lg bg-black/70 px-2.5 py-1.5 text-sm font-semibold text-yellow-400 backdrop-blur-sm">
          <span>★</span>
          <span>{rating}</span>
        </div>

        {/* Type */}
        {movie.type && (
          <span className="absolute bottom-3 left-3 rounded-md bg-orange-500 px-2.5 py-1 text-xs font-semibold text-white">
            {movie.type}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Title */}
        <h2
          className="truncate text-lg font-bold text-white"
          title={movie.name}
        >
          {movie.name}
        </h2>

        {/* Year & Genre */}
        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-gray-500">
          <span>{year}</span>

          <span className="h-1 w-1 rounded-full bg-gray-600" />

          <span className="truncate">
            {genres}
          </span>
        </div>

        {/* Summary */}
        <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-400">
          {summary}
        </p>

        {/* Details Button */}
        <Link
  to={`/movies/${movie.id}`}
  className="mt-4 block w-full rounded-lg bg-orange-500 px-3 py-2.5 text-center text-sm font-semibold text-white transition hover:bg-orange-600"
>
  See Details
</Link>
      </div>
    </article>
  );
}

export default MovieCard;