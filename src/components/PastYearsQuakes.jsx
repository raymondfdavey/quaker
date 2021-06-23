import React from "react";
import * as api from "../api";

function PastYearsQuakes(props) {
  return (
    <p
      className={props.sideBar[3] ? "selected" : null}
      onClick={() => {
        props.updateSideBar([null, null, null, true, null]);
        props.updateloading();
        api.fetchTopTwentyThisYear().then(quakes => props.updateQuakes(quakes));
      }}
    >
      top 50 this year
    </p>
  );
}

export default PastYearsQuakes;
