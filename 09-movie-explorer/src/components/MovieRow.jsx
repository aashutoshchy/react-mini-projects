import MovieCard from "./MovieCard";
import { useRef } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

export default function MovieRow({ title, items }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.8 * (direction === "left" ? -1 : 1);
    el.scrollBy({ left: amount, behavior: "smooth" });
  };

  return (
    <section className="mb-8">
      <h2 className="text-lg font-bold text-text mb-3 px-8">{title}</h2>
      <div className="relative group">
        <button
          onClick={() => scroll("left")}
          className="absolute left-1 top-1/2 -translate-y-1/2 hidden group-hover:block bg-white rounded-full p-4 mx-2"
        >
          <ArrowLeft />
        </button>
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto no-scrollbar px-8 pb-2"
        >
          {items.map((item) => (
            <div key={item.id} className="box1 flex-shrink-0 w-40">
              <MovieCard item={item} />
            </div>
          ))}
        </div>
        <button
          onClick={() => scroll("right")}
          className="absolute right-1 top-1/2 -translate-y-1/2  hidden group-hover:block bg-white rounded-full p-4 mx-2"
        >
          <ArrowRight />
        </button>
      </div>
    </section>
  );
}
