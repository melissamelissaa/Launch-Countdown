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
        <FontAwesomeIcon
          icon={faTimes}
          className="icon exit"
          onClick={props.handleClick}
        />
        <label className="label">DAYS</label>
        <input
          required
          className="input"
          type="number"
          onChange={(e) => props.dayValue(e.target.value)}
        />
        <label className="label">HOURS</label>
        <input
          required
          className="input"
          type="number"
          onChange={(e) => props.hourValue(e)}
        />
        <label className="label">MINUTES</label>
        <input
          required
          className="input"
          type="number"
          onChange={(e) => props.minValue(e)}
        />
        <label className="label">SECONDS</label>
        <input
          required
          className="input"
          type="number"
          onChange={(e) => props.secValue(e)}
        />
        <button className="timeOptions-btn" onClick={props.handleClick}>
          Start
        </button>
      </div>
    );
  } else return null;
};
