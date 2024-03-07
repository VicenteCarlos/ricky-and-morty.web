import "./style.css";
import { Card } from "./components/Card";
import { useState, useEffect } from "react";

function App() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetch(`https://rickandmortyapi.com/api/character/?page=${page}`)
      .then((res) => res.json())
      .then((json) => setData(json.results))
      .catch((err) => console.log("error", err));
  }, [page]);

  const handleNext = () => setPage(page + 1)
  const handlePrevious = () => {
    if (page < 1) {
      return setPage(1)
    }
    return setPage(page - 1)
  }

  return (
    <>
      <header>
        <button className="left" onClick={handlePrevious}>Anterior</button>
        <img src="../public/assets/img/logo.png" alt="logo-ricky-and-mory" />
        <button className="right" onClick={handleNext}>Próximo</button>
      </header>
      <main>
        <div id="container">
          {data.map((item, i) =>
            item.status === "unknown" ? <></> : <Card key={i} char={item} />
          )}
        </div>
      </main>
    </>
  );
}

export default App;
