import React from "react";

import storm from "../img/weather-icons/mostlycloudy.svg"

class CurrentTemps extends React.Component {


  render() {
    return (
        <main className="app__main">
      <figure>
          <img src={storm} alt="cloudy"></img>
          <figcaption>{this.props.propsData}</figcaption>
        </figure>
        <div className="describeTemp">
          <span>Temperature</span> {this.props.temp_min}&deg;C to {this.props.temp_max}&deg;C
        <div>
          <p>
            <span>Humidity</span> {this.props.humidity}% <span>Pressure</span> {this.props.pressure}
          </p>
        </div>
        </div>
      </main>
    );
  }
}
export default CurrentTemps;
