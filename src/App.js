import "./App.css";
import XmasBG from "./xmas-bg-img-tiny-1.webp";
import { DaysUntilChristmas } from "./DaysUntilChristmas";
// import { RandomGenerator } from "./RandomGenerator";

// HOOKS
import { useEffect, useState } from "react";

// SUPABASE
import { createClient } from "@supabase/supabase-js";
const supabase = createClient(
  "https://vakcpvsepitswpivhimg.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZha2NwdnNlcGl0c3dwaXZoaW1nIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzMyNDE3MzcsImV4cCI6MjA0ODgxNzczN30.8CgPsm7bJtDeJt5DT_fXDsU_7IfFzTOKJM-Zg3IWlVM"
);

function App() {
  // Styles
  const backgroundStyle = {
    background: `url(${XmasBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };

  // State Hooks
  const [movies, setMovies] = useState([]);
  const [movieName, setMovieName] = useState("");

  useEffect(() => {
    getMovies();
  }, []);

  async function getMovies() {
    const { data } = await supabase.from("movies").select();
    // console.log("This is movies table data: ", data);
    setMovies(data);
  }

  // generateRandom
  function generateRandom() {
    const randomNum = Math.floor(Math.random() * 17);
    console.log("This is randomNum AKA index number: ", randomNum);
    // console.log("This is movies: ", movies);
    // console.log("This is movies[randomNum].name: ", movies[randomNum].name);
    // console.log("This is movies[randomNum].id: ", movies[randomNum].id);

    setMovieName(movies[randomNum].name);
  }

  return (
    <div className="App" style={backgroundStyle}>
      <header className="App-header">
        <h1>Christmas Movie Generator</h1>
      </header>
      <hr />
      <ol>
        {movies.map((movie) => (
          <li key={movie.name}>{movie.name}</li>
        ))}
      </ol>
      <hr />
      {/* MOVIE NAME START */}
      <button className="" onClick={generateRandom}>
        Click Here
      </button>
      <br />
      <label>
        Movie Name:{" "}
        <input className="Movie-name" type="text" value={movieName} readOnly />
      </label>
      {/* MOVIE NAME END */}
      <hr />
      {/* <RandomGenerator /> */}
      {/* <hr /> */}
      <DaysUntilChristmas />
    </div>
  );
}

export default App;
