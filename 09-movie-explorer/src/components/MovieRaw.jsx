import MovieCard from "./MovieCard";

export default function MovieRow({ title, items }) {
  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-text mb-3 px-8">{title}</h2>

      <div className="flex gap-4 overflow-x-auto  no-scrollbar px-8 pb-2">
        {items.map((item) => (
          <div key={item.id} className="box1 flex-shrink-0 w-40">
            <MovieCard item={item} />
          </div>
        ))}
      </div>
    </section>
  );
}
