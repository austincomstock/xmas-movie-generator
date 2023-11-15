import "./App.css";
import { RandomGenerator } from "./RandomGenerator";

function App() {
  return (
    // <div className="App">
    //   <h1>Christmas Movie Generator</h1>
    //   <header className="App-header">
    //     <h1>Christmas Movie Generator</h1>
    //   </header>
    // </div>
    <div>
      <h1>Christmas Movie Generator</h1>
      <hr />
      <ol>
        <li>The Santa Clause</li>
        <li>The Grinch</li>
        <li>A Christmas Story</li>
        <li>Home Alone</li>
        <li>Elf</li>
        <li>Christmas Vacation</li>
        <li>8 Crazy Nights</li>
        <li>A Christmas Carol</li>
        <li>The Polar Express</li>
        <li>It's a Wonderful Life</li>
        <li>Miracle on 34th Street</li>
        <li>Jack Frost</li>
        <li>Rudolph The Red Nosed Reindeer</li>
        <li>Small Foot</li>
        <li>Klaus</li>
      </ol>
      <hr />
      <RandomGenerator />
    </div>
  );
}

export default App;
