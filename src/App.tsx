import React from "react";
import "./App.css";
import { TimeOptions } from "./Components/TimeOptions";
import { CountdownComponent } from "./Components/CountdownComponent";

import { useState, useEffect, useRef } from "react";

function App() {
  const [dayValue, setdayValue] = useState(0);
  const [HourValue, setHourValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [secValue, setSecValue] = useState(0);

  const [isCLicked, setIsClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecValue((secValue) => {
        if (secValue === 0 && minValue > 0) setMinValue(minValue - 1);
        if (
          dayValue === 0 &&
          HourValue === 0 &&
          minValue === 0 &&
          secValue === 0
        ) {
          return secValue;
        }

        if (minValue === 0 && secValue === 0 && HourValue > 0) {
          setHourValue(HourValue - 1);
          setMinValue(59);
          setSecValue(59);
        }

        if (
          HourValue === 0 &&
          minValue === 0 &&
          secValue === 0 &&
          dayValue > 0
        ) {
          setdayValue(dayValue - 1);
          setHourValue(23);
          setMinValue(59);
          setSecValue(59);
        }

        if (secValue > 0) {
          return secValue - 1;
        } else return 59;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [secValue, dayValue, HourValue, minValue, isCLicked]);

  const cleanUpFunc = () => {
    setIsClicked(false);
    setdayValue(0);
    setHourValue(0);
    setMinValue(0);
    setSecValue(0);
  };

  return (
    <div className="App">
      <CountdownComponent
        dayNum={dayValue}
        hourNum={HourValue}
        minNum={minValue}
        secNum={secValue}
        handleClick={() => cleanUpFunc()}
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
