import React from "react";
import { useState } from "react";

export const RandomGenerator = () => {
  // hooks
  const [number, setNumber] = useState(0);

  // generateRandom
  function generateRandom() {
    // console.log("button clicked");
    // console.log(Math.floor(Math.random() * 15) + 1);
    setNumber(Math.floor(Math.random() * 15) + 1);
  }

  return (
    <div>
      <h2 className="Random-generatorh2">Random Generator</h2>
      <button className="Random-generator-button" onClick={generateRandom}>
        Click Here
      </button>
      <br />
      <label>
        Movie Number:{" "}
        <input
          className="Random-generator-input"
          name="randomMovieInput"
          type="text"
          value={number}
          readOnly
        />
      </label>
    </div>
  );
};
