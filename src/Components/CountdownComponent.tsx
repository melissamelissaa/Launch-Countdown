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

// {setInterval((props.dayNum) => {}, 1000)}
export const CountdownComponent = (props: CountdownComponentProps) => {
  if (props.clicked) {
    return (
      <div>
        <FontAwesomeIcon
          icon={faCog}
          className="icon faCog"
          onClick={props.handleClick}
        />
        <div className="countdownDiv">
          <h1 className="heading">WE'RE &nbsp; LAUNCHING &nbsp;SOON!</h1>
          <div className="fourDivContainer">
            <div className="numtxt">
              <div className="dayDiv">{props.dayNum}</div>
              <div>
                <p>DAYS</p>
              </div>
            </div>
            <div className="numtxt">
              <div className="hrDiv">{props.hourNum}</div>
              <div>
                <p>HOURS</p>
              </div>
            </div>
            <div className="numtxt">
              <div className="minDiv">{props.minNum}</div>
              <div>
                <p>MINUTES</p>
              </div>
            </div>
            <div className="numtxt">
              <div className="secDiv">{props.secNum}</div>
              <div>
                <p>SECONDS</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else return null;
};
