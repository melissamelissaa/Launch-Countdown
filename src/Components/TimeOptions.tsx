type timeOptionsProps = {
  dayValue: Function;
  hourValue: Function;
  minValue: Function;
  secValue: Function;
  handleClick: () => void;
};

export const TimeOptions = (props: timeOptionsProps) => {
  return (
    <div className="timeOptions-div">
      <h1>X</h1>
      <label className="label">Days</label>
      <input
        className="input"
        type="number"
        placeholder="0"
        onChange={(e) => props.dayValue(e.target.value)}
      />
      <label className="label">Hours</label>
      <input
        className="input"
        type="number"
        placeholder="0"
        onChange={(e) => props.hourValue(e.target.value)}
      />
      <label className="label">Minutes</label>
      <input
        className="input"
        type="number"
        placeholder="0"
        onChange={(e) => props.minValue(e.target.value)}
      />
      <label className="label">Seconds</label>
      <input
        className="input"
        type="number"
        placeholder="0"
        onChange={(e) => props.secValue(e.target.value)}
      />
      <button className="timeOptions-btn" onClick={props.handleClick}>
        Start
      </button>
    </div>
  );
};
