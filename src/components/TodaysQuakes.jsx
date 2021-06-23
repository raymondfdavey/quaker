import React from "react";
import * as api from "../api";
import { getDateString } from "../utils/utils";

function TodaysQuakes(props) {
  return (
    <p
      className={props.sideBar[4] ? "selected" : null}
      onClick={() => {
        const today = new Date();
        const todayDateString = getDateString(today);
        props.updateSideBar([null, null, null, null, true]);
        props.updateloading();

        api
          .fetchToday(todayDateString)
          .then(quakes => props.updateQuakes(quakes));
      }}
    >
      todays quakes
    </p>
  );
}

export default TodaysQuakes;
