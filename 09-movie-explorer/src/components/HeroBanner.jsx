import React from "react";
import { Link } from "react-router-dom";

function HeroBanner({ item }) {
  return (
    <section className="relative w-full h-[77vh] overflow-hidden">
      <img
        src={item.backdrop_path}
        alt=""
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
      <div className="absolute inset-0 flex flex-col justify-end ml-10 mb-20 gap-3">
        <h1 className="text-white font-extrabold text-3xl">{item.title}</h1>
        <p className="text-white/90 line-clamp-3">{item.overview}</p>
        <Link
          to={`/details/${item.id}`}
          className="bg-white text-sm font-bold w-fit px-4 py-2 rounded-3xl hover:bg-white/80"
        >
          See Details
        </Link>
      </div>
    </section>
  );
}

export default HeroBanner;
