import React, { Component } from "react";
import Search from "./components/Search";
import CurrentTemps from "./components/currentTemp";
import HurlyTemps from "./components/hourlyTenps";

/*import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";*/ 

import storm from "./img/weather-icons/mostlycloudy.svg"

import clear  from "./img/weather-icons/clear.svg"

import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Karim"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };

  render() {
    return (
      <div className="app">
      <Search/>
      <CurrentTemps/>
      <HurlyTemps/>
    </div>
    
    );
  }
}

export default App;
