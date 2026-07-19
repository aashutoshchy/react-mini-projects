import { Clapperboard, Search, X } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted");
    const trimmed = query.trim();
    if (trimmed) {
      navigate(`/search?q=${encodeURIComponent(trimmed)}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-canvas/85 backdrop:blur-md">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <Clapperboard className="mx-2" />
          <span className="text-xl font-bold text-text shrink-0">
            Cine<span className="">Scope</span>
          </span>
        </div>
        <form onSubmit={handleSubmit} className="relative flex w-1/3 h-10">
          <Search className="absolute left-3.5 w-4 h-4 top-1/2 -translate-y-1/2" />
          <input
            value={query}
            type="text"
            placeholder="Search movies"
            className="w-full bg-white rounded-4xl py-2 pl-10 pr-10 outline-none shadow-2xl drop-shadow-primary placeholder:text-sm placeholder:font-semibold"
            onChange={(e) => setQuery(e.target.value)}
          />
          {/* if (query == true) return the button element */}
          {query && (
            <button
              type="button"
              onClick={(e) => setQuery("")}
              className="absolute right-3 text-text hover:text-text/70 transition-colors top-1/2 -translate-y-1/2"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </form>
      </div>
    </header>
  );
}

export default Navbar;
