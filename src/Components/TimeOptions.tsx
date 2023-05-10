import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type timeOptionsProps = {
  dayValue: Function;
  hourValue: Function;
  minValue: Function;
  secValue: Function;
  handleClick: () => void;
  clicked: boolean;
  
};

export const TimeOptions = (props: timeOptionsProps) => {
  if (!props.clicked) {
    return (
      <div className="timeOptions-div">
        <FontAwesomeIcon icon={faTimes} className="icon" onClick={props.handleClick}/>
        <label className="label">Days</label>
        <input
          required
          className="input"
          type="number"
          placeholder="0"
          onChange={(e) => props.dayValue(e.target.value)}
        />
        <label className="label">Hours</label>
        <input
          required
          className="input"
          type="number"
          placeholder="0"
          onChange={(e) => props.hourValue(e.target.value)}
        />
        <label className="label">Minutes</label>
        <input
          required
          className="input"
          type="number"
          placeholder="0"
          onChange={(e) => props.minValue(e.target.value)}
        />
        <label className="label">Seconds</label>
        <input
          required
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
  } else return null;
};
