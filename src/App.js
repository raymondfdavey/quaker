import "./App.css";
import React, { Component } from "react";
import QuakeMap from "./components/QuakeMap";

class App extends Component {
  render() {
    return (
      <div className="wholePage">
        <QuakeMap />
      </div>
    );
  }
}

export default App;
