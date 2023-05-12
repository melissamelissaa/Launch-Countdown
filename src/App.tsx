import React from "react";
import "./App.css";
import { TimeOptions } from "./Components/TimeOptions";
import { CountdownComponent } from "./Components/CountdownComponent";

import { useState, useEffect, useRef } from "react";
import { homedir } from "os";
import { waitFor } from "@testing-library/react";

function App() {
  const [dayValue, setdayValue] = useState(0);
  const [HourValue, setHourValue] = useState(0);
  const [minValue, setMinValue] = useState(0);
  const [secValue, setSecValue] = useState(0);

  const [isCLicked, setIsClicked] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecValue((secValue) => {
        if (
          dayValue === 0 &&
          HourValue === 0 &&
          minValue === 0 &&
          secValue === 0
        ) {
          return secValue;
        }

        if (secValue === 0 && minValue > 0) setMinValue(minValue - 1);

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
  }, [secValue, isCLicked]);

  const cleanUpFunc = () => {
    setIsClicked(false);
    setdayValue(0);
    setHourValue(0);
    setMinValue(0);
    setSecValue(0);
  };
  const validateAndSetHour = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (+e.target.value > 24) {
        alert("Hours can not be higher than 24");
        e.target.value = "";
        setHourValue(0);
      } else setHourValue(+e.target.value);
  };
  const validateAndSetMin = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (+e.target.value > 60) {
        alert("Minutes can not be higher than 60");
        e.target.value = "";
        setMinValue(0);
      } else setMinValue(+e.target.value);
  };
  const validateAndSetSec = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (+e.target.value > 60) {
        alert("Seconds can not be higher than 60");
        e.target.value = "";
        setSecValue(0);
      } else setSecValue(+e.target.value);
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
        hourValue={validateAndSetHour}
        minValue={validateAndSetMin}
        secValue={validateAndSetSec}
        handleClick={() => setIsClicked(true)}
        clicked={isCLicked}
      />
    </div>
  );
}

export default App;
