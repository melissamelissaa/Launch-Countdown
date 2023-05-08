import React from "react";
import "./App.css";
import { TimeOptions } from "./Components/TimeOptions";
import { CountdownComponent } from "./Components/CountdownComponent";

import { useState } from "react";

function App() {
  const [dayValue, setdayValue] = useState(0);
  const [HourValue, setHourValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [secValue, setSecValue] = useState(0);
  const [isCLicked, setIsClicked] = useState(false);

  return (
    <div className="App">
      <CountdownComponent
        dayNum={dayValue}
        hourNum={HourValue}
        minNum={minValue}
        secNum={secValue}
        handleClick={() => setIsClicked(false)}
        clicked={isCLicked}
      />
      <TimeOptions
        dayValue={setdayValue}
        hourValue={setHourValue}
        minValue={setMinValue}
        secValue={setSecValue}
        handleClick={() => setIsClicked(true)}
        clicked={isCLicked}
      />
    </div>
  );
}

export default App;
