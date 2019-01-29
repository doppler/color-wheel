import React from "react";
import "./App.scss";

const App = () => {
  return (
    <div className="App">
      <ColorWheel />
    </div>
  );
};

export default App;

const ColorWheel = () => {
  const div = 25;
  return (
    <div className="ColorWheel">
      {Array.from(Array(div)).map((_, i) => (
        <Radial key={i} rotation={(i * 360) / div} />
      ))}
    </div>
  );
};

const Radial = ({ rotation }) => (
  <div
    className="Radial"
    style={{
      transform: `rotate(${rotation}deg)`,
      backgroundColor: `hsl(${rotation}, 100%, 50%)`
    }}
  />
);
