import { Link } from "react-router-dom";

export default function MovieCard({ item }) {
  const mediaType = item.media_type || "movie";

  return (
    <Link
      to={`/details/${mediaType}/${item.id}`}
      className="w-full bg-white overflow-hidden rounded-2xl"
    >
      <div className="aspect-[2/3] w-full">
        <img
          src={`https://image.tmdb.org/t/p/w342/${item.poster_path}`}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-4 py-2">
        <h3 className="font-bold truncate">{item.title || item.name}</h3>
        <div className="flex justify-between text-sm">
          <span className="text-text/80">{item.release_date}</span>
          <span className="text-text/60">⭐ {item.vote_average}</span>
        </div>
      </div>
    </Link>
  );
}
