import React from "react";
import * as api from "../api";

function TopTwentyAllTime(props) {
  return (
    <p
      className={props.sideBar[2] ? "selected" : null}
      onClick={() => {
        props.updateSideBar([null, null, true, null, null]);
        props.updateloading();
        api.fetchTopTwentyAllTime().then(quakes => props.updateQuakes(quakes));
      }}
    >
      top twenty since 1900
    </p>
  );
}

export default TopTwentyAllTime;
