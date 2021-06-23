import React from "react";
import * as api from "../api";

function ThisMonthsQuakes(props) {
  return (
    <p
      className={props.sideBar[1] ? "selected" : null}
      onClick={() => {
        props.updateSideBar([null, true, null, null, null]);
        props.updateloading();

        api.fetchAllThisMonth().then(quakes => props.updateQuakes(quakes));
      }}
    >
      This Months Quakes (moderate+)
    </p>
  );
}

export default ThisMonthsQuakes;
