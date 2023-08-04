import React, {useState, useEffect} from "react";
import "../../styles/trafficlight.css";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [redOn, setRedOn] = useState (false);
    const [greenOn, setGreenOn] = useState (false);
    const [yellowOn, setYellowOn] = useState(false);

    return <>
    <div className="stick justify-content-center"></div>
        <div className="container rounded">
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-center flex-column align-items-center">
                    <div className={!redOn ? "red" : "red on"} onClick={(e) => {setRedOn(!redOn)}}>Red</div>
                    <div className={!yellowOn ? "yellow" : "yellow on"} onClick={(e) => {setYellowOn(!yellowOn)}}>Yellow</div>
                    <div className={!greenOn ? "green" : "green on"} onClick={(e) => {setGreenOn(!greenOn)}}>Green</div>
                </div>
            </div>

        </div>
    </>
}

export default TrafficLight