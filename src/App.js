import React, { Component } from "react";
import Search from "./components/Search";
import CurrentTemps from "./components/currentTemp";
import HurlyTemps from "./components/hourlyTenps";
import "./App.css"
import fakeWeather from "../src/fakeWeatherData.json"

class App extends Component {
  state={
    myData:fakeWeather
  }
    render() {
      function time (data){
        let hours =[];
        for(let i =5; i <= 11;i++){
          hours.push(data.list[i].dt_txt.slice(11,16))
        }
        return hours;
      }
      function temp (data){
        let temp =[];
        for(let i =5; i <= 11;i++){
          temp.push((data.list[i].main.temp -273.15).toFixed())
        }
        return temp;
      }
    return (
      <div className="app">
      <Search/>
      <CurrentTemps propsData={this.state.myData.list[6].weather[0].description}
      temp_min={(this.state.myData.list[6].main.temp_min - 273.15).toFixed()}
      temp_max={(this.state.myData.list[6].main.temp_max - 273.15).toFixed()}
      humidity={this.state.myData.list[6].main.humidity}
      pressure={this.state.myData.list[6].main.pressure}

      />
      <HurlyTemps
      time={time(this.state.myData)}
      temp={temp(this.state.myData)}
      images={fakeWeather}
      />
    </div>
    
    );
  }
}

export default App;
