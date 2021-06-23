import React from "react";
import * as api from "../api";

function LatestQuakes(props) {
  return (
    <p
      className={props.sideBar[0] ? "selected" : null}
      onClick={() => {
        props.updateSideBar([true, null, null, null, null]);
        props.updateloading();
        api.fetchTwentyMostRecent().then(quakes => props.updateQuakes(quakes));
      }}
    >
      latest quakes
    </p>
  );
}

export default LatestQuakes;
