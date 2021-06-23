import React, { Component } from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import * as api from "../api";
import LatestQuakes from "./LatestQuakes.jsx";
import ThisMonthsQuakes from "./ThisMonthsQuakes.jsx";
import TopTwentyAllTime from "./TopTwentyAllTime.jsx";
import PastYearsQuakes from "./PastYearsQuakes.jsx";
import TodaysQuakes from "./TodaysQuakes.jsx";
import BottomBar from "./BottomBar.jsx";
import { getDateForPopUp } from "../utils/utils";
import { css } from "@emotion/core";
import ScaleLoader from "react-spinners/ScaleLoader";

class QuakeMap extends Component {
  state = {
    quakeData: null,
    activeQuake: null,
    sideBar: [true, null, null, null, null],
    date: "",
    loading: true
  };

  render() {
    const { activeQuake, quakeData } = this.state;
    const override = css;

    return (
      <>
        {this.state.loading ? (
          <div className="loadingSection">
            <h1 className="loading">LOADING QUAKEDATA</h1>
            <div className="sweet-loading">
              <ScaleLoader
                css={override}
                size={150}
                height={40}
                width={10}
                radius={4}
                margin={10}
                padding={5}
                color="gray"
                loading={this.state.loading}
              />
            </div>
          </div>
        ) : (
          <div>
            <div className="mapSection">
              <Map center={[10, -66]} zoom={2.4}>
                <TileLayer
                  url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />
                {quakeData.map(quake => {
                  return (
                    <Marker
                      key={quake.id}
                      position={[
                        quake.geometry.coordinates[1],
                        quake.geometry.coordinates[0]
                      ]}
                      onClick={() => {
                        this.setActiveQuake(quake);
                      }}
                    />
                  );
                })}
                )}
                {activeQuake && (
                  <Popup
                    position={[
                      activeQuake.geometry.coordinates[1],
                      activeQuake.geometry.coordinates[0]
                    ]}
                    onClose={() => {
                      this.resetActiveQuake();
                    }}
                  >
                    <div className="popUp">
                      {console.log(activeQuake)}
                      <h2>
                        location:
                        <a href={` ${activeQuake.properties.url}`}>
                          {activeQuake.properties.place}
                        </a>
                      </h2>
                      <p>time of quake: {this.state.date}</p>
                      <p> magnitude:{activeQuake.properties.mag}</p>
                      <p>
                        tsunami: {activeQuake.properties.tsunami ? "yes" : "no"}
                      </p>
                    </div>
                  </Popup>
                )}
                )}
              </Map>
              <div className="sideBar">
                <p className="dataquake">DATAQUAKE</p>
                <LatestQuakes
                  updateloading={this.updateloading}
                  updateQuakes={this.updateQuakes}
                  updateSideBar={this.updateSideBar}
                  sideBar={this.state.sideBar}
                />
                <ThisMonthsQuakes
                  updateloading={this.updateloading}
                  updateQuakes={this.updateQuakes}
                  updateSideBar={this.updateSideBar}
                  sideBar={this.state.sideBar}
                />
                <PastYearsQuakes
                  updateloading={this.updateloading}
                  updateQuakes={this.updateQuakes}
                  updateSideBar={this.updateSideBar}
                  sideBar={this.state.sideBar}
                />
                <TodaysQuakes
                  updateloading={this.updateloading}
                  updateQuakes={this.updateQuakes}
                  updateSideBar={this.updateSideBar}
                  sideBar={this.state.sideBar}
                />
                <TopTwentyAllTime
                  updateloading={this.updateloading}
                  updateQuakes={this.updateQuakes}
                  updateSideBar={this.updateSideBar}
                  sideBar={this.state.sideBar}
                />
              </div>
            </div>
            <BottomBar
              quakeData={this.state.quakeData}
              setActiveQuake={this.setActiveQuake}
            />
          </div>
        )}
      </>
    );
  }

  componentDidMount() {
    this.setState({ loading: true });
    api.fetchTwentyMostRecent().then(quakes => this.updateQuakes(quakes));
  }

  compoenentDidUpdate(prevState) {
    if (prevState.activeQuake !== this.state.activeQuake) {
      this.setState({
        date: getDateForPopUp(this.state.activeQuake.properties.time)
      });
    }
  }
  updateSideBar = array => {
    this.setState({ sideBar: array });
  };

  updateloading = () => {
    this.setState({ loading: true });
  };
  updateQuakes = returnedQuakes => {
    this.setState({ quakeData: returnedQuakes, loading: false });
  };
  setActiveQuake = quake => {
    this.setState(currentState => {
      const dateForPopUp = getDateForPopUp(quake.properties.time);
      return { activeQuake: quake, date: dateForPopUp };
    });
  };

  resetActiveQuake = () => {
    this.setState({ activeQuake: null });
  };
}

export default QuakeMap;
