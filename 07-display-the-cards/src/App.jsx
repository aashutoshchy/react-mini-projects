import Card from "./components/Card";

import { useEffect, useState } from "react";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="flex flex-wrap w-1/2 gap-6 m-4">
        {data.map((e) => {
          return <Card id={e.id} title={e.title} subTitle={e.body} />;
        })}
      </div>
    </>
  );
}

export default App;
