import React, { Component } from "react";
import { createGraphData } from "../utils/utils";
import { HorizontalBar } from "react-chartjs-2";

class QuakeChart extends Component {
  state = { formattedQuakeData: {} };
  render() {
    return (
      <div className="quakeChartContainer">
        <HorizontalBar
          data={this.state.formattedQuakeData}
          width={800}
          height={200}
          options={{
            maintainAspectRatio: false
          }}
        />
      </div>
    );
  }

  componentDidMount() {
    const dataForGraphing = createGraphData(this.props.quakes);
    this.setState({ formattedQuakeData: dataForGraphing });
  }
  componentDidUpdate(prevProps) {
    if (prevProps.quakes !== this.props.quakes) {
      const dataForGraphing = createGraphData(this.props.quakes);
      this.setState({ formattedQuakeData: dataForGraphing });
    }
  }
}

export default QuakeChart;
