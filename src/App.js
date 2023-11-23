import "./App.css";
import { RandomGenerator } from "./RandomGenerator";
// import XmasBG from "./xmas-bg-img-min.jpg";
import XmasBG from "./xmas-bg-img-tiny.jpg";

function App() {
  const backgroundStyle = {
    background: `url(${XmasBG})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    height: "100vh",
  };

  return (
    <div className="App" style={backgroundStyle}>
      <header className="App-header">
        <h1>Christmas Movie Generator</h1>
      </header>
      <hr />
      <ol>
        <li>The Santa Clause</li>
        <li>The Grinch</li>
        <li>A Christmas Story</li>
        <li>Home Alone</li>
        <li>Elf</li>
        <li>Christmas Vacation</li>
        <li>Eight Crazy Nights</li>
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
