import React, { useState, useEffect } from "react";
import "../../styles/trafficlight.css";

const TrafficLight = () => {
    const [color, setColor] = useState("red");
    const [redOn, setRedOn] = useState(false);
    const [greenOn, setGreenOn] = useState(false);
    const [yellowOn, setYellowOn] = useState(false);

    return <>
        <div className="stick justify-content-center"></div>
        <div className="container rounded">
            <div className="row d-flex justify-content-center">
                <div className="col d-flex justify-content-center flex-column align-items-center">
                    <div className={redOn == false ? "red" : "red on"} onClick={(e) => {
                        setRedOn(!redOn)
                        setYellowOn(false)
                        setGreenOn(false)
                    }}>Red</div>
                    <div className={yellowOn == false ? "yellow" : "yellow on"} onClick={(e) => {
                        setRedOn(false)
                        setYellowOn(!yellowOn)
                        setGreenOn(false)
                    }}>Yellow</div>
                    <div className={greenOn == false ? "green" : "green on"} onClick={(e) => {
                        setRedOn(false)
                        setYellowOn(false)
                        setGreenOn(!greenOn)
                    }}>Green</div>
                </div>
            </div>

        </div>
    </>
}

export default TrafficLight