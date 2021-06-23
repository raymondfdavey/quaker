import React from "react";

function QuakeList(props) {
  return (
    <div className="quakeListContainer">
      <ul className="quakeList">
        {props.quakes.map(quake => {
          return (
            <li key={quake.id} className="quakeListItem">
              <p
                onClick={() => {
                  props.setActiveQuake(quake);
                }}
              >
                {quake.properties.place}
              </p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default QuakeList;
