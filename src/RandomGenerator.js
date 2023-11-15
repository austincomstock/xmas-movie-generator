import React from "react";
import { useState } from "react";

export const RandomGenerator = () => {
  // hooks
  const [number, setNumber] = useState(0);

  // generateRandom
  function generateRandom() {
    console.log("button clicked");
    // console.log(Math.floor(Math.random() * 15) + 1);
    setNumber(Math.floor(Math.random() * 15) + 1);
  }

  return (
    <div>
      <h3>Random Generator</h3>
      <button onClick={generateRandom}>Generate Movie</button>
      <br />
      <label>
        Random Movie:{" "}
        <input name="randomMovieInput" type="text" value={number} readOnly />
      </label>
    </div>
  );
};
