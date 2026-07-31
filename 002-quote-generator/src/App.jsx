import { useState } from "react";
import { quotes } from "./quotes";

function App() {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const generateQuote = (e) => {
    e.preventDefault();
    let randomNumber = Math.floor(Math.random() * quotes.length) + 1;
    quotes.map((q) => {
      if (q.id === randomNumber) {
        setQuote(q.text);
        setAuthor(q.author);
      }
    });
  };
  return (
    <>
      <div className="bg-violet-100 h-screen w-full">
        <h1 className="text-center py-10 text-3xl font-bold text-violet-950">
          Quote Generator
        </h1>
        <form
          onSubmit={generateQuote}
          className="h-1/3 bg-violet-200 w-1/2 m-auto rounded-2xl py-5 flex items-center justify-between flex-col gap-2"
        >
          <p className="px-5 py-3 h-auto">
            {quote}
            <span className="italic text-sm text-black/70"> - {author}</span>
          </p>
          <button className="bg-violet-900 text-white px-5 py-2 text-sm font-semibold rounded-2xl hover:bg-violet-800">
            Generate
          </button>
        </form>
      </div>
    </>
  );
}

export default App;
