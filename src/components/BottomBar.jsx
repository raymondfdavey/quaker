import React from "react";
import QuakeChart from "./QuakeChart.jsx";
import QuakeList from "./QuakeList.jsx";

function BottomBar(props) {
  return (
    <div className="bottomBar">
      <div className="thanks">
        <p>
          all data from for earthquakes hazard programme API:
          https://earthquake.usgs.gov/
        </p>
      </div>
      <QuakeChart
        quakes={props.quakeData}
        setActiveQuake={props.setActiveQuake}
      />
      <QuakeList
        quakes={props.quakeData}
        setActiveQuake={props.setActiveQuake}
      />
    </div>
  );
}

export default BottomBar;
