import React, { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import { searchMulti } from "../api/tmdb"
import MovieCard from "../components/MovieCard"

function Search() {

  const [searchParams] = useSearchParams()
  const query = searchParams.get("q")
  const [results, setResults] = useState([])

  useEffect(() => {
    searchMulti(query).then((data) => {
      const filtered = data.filter((item) => item.media_type !== "person");
      setResults(filtered);
    }).catch((err) => {
      console.log(err)
    })
  }, [query])

  return <div>
    <div className="px-8 py-8">
      <h1 className="text-xl font-bold text-text mb-4">
        Results for "{query}"
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 px-6 py-8">
        {results.map((item) => (
          <MovieCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  </div>;
}

export default Search;
