import { faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

type CountdownComponentProps = {
  dayNum: number;
  hourNum: number;
  minNum: number;
  secNum: number;
  clicked: boolean;
  handleClick: () => void;
};

export const CountdownComponent = (props: CountdownComponentProps) => {
  if (props.clicked) {
    return (
      <div className="countdownDiv">
        <FontAwesomeIcon
          icon={faCog}
          className="icon"
          onClick={props.handleClick}
        />
        <h1 className="heading">We're Launching Soon</h1>
        <div className="fourDivContainer">
          <div className="dayDiv">
            <div>{props.dayNum}</div>
            <p>Days</p>
          </div>
          <div className="hrDiv">
            <div>{props.hourNum}</div>
            <p>Hours</p>
          </div>
          <div className="minDiv">
            <div>{props.minNum}</div>
            <p>Minutes</p>
          </div>
          <div className="secDiv">
            <div>{props.secNum}</div>
            <p>Seconds</p>
          </div>
        </div>
      </div>
    );
  } else return null;
};
