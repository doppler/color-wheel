import React, { useState } from "react";
import "./App.scss";

const App = () => {
  const [numberOfRadials, setNumberOfRadials] = useState(25);

  const handleRangeChange = event => {
    setNumberOfRadials(Number(event.target.value));
  };

  return (
    <div className="App">
      <ColorWheel numberOfRadials={numberOfRadials} />
      <ColorWheel numberOfRadials={numberOfRadials} reverse={true} />
      <a className="github-link" href="https://github.com/doppler/color-wheel">
        View Source
      </a>
      <RadialCountSlider
        numberOfRadials={numberOfRadials}
        handleRangeChange={handleRangeChange}
      />
    </div>
  );
};

export default App;

const ColorWheel = ({ numberOfRadials, reverse }) => {
  return (
    <div className={`ColorWheel ${reverse ? "reverse" : null}`}>
      {Array.from(Array(numberOfRadials)).map((_, i) => (
        <Radial key={i} rotation={(i * 360) / numberOfRadials} />
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

const RadialCountSlider = ({ numberOfRadials, handleRangeChange }) => (
  <input
    id="RadialCountSlider"
    type="range"
    value={numberOfRadials}
    min={0}
    max={360}
    onChange={handleRangeChange}
  />
);
