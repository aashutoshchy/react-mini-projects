const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";

export async function getTrending() {
  const url = `${BASE_URL}/trending/all/week?api_key=${API_KEY}`;
  try {
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`TMDB request failed: ${res.status}`);
    }
    const data = await res.json();
    return data.results;
  } catch (e) {
    console.log(e);
    return [];
  }
}
