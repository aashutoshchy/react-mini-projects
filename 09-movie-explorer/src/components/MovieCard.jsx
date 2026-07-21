export default function MovieCard({ item }) {
  return (
    <div className="w-full bg-white overflow-hidden rounded-2xl">
      <div className="aspect-[2/3] w-full">
        <img
          src={item.poster_path}
          alt=""
          className="h-full w-full object-cover"
        />
      </div>
      <div className="px-4 py-2">
        <h3 className="font-bold truncate">{item.title}</h3>
        <div className="flex justify-between text-sm">
          <span className="text-text/80">{item.release_date}</span>
          <span className="text-text/60">⭐ {item.vote_average}</span>
        </div>
      </div>
    </div>
  );
}
