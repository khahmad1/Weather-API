import React from "react";

import clear from "../img/weather-icons/clear.svg"
import storm from "../img/weather-icons/mostlycloudy.svg"
import drizzle from "../img/weather-icons/drizzle.svg"

class HurlyTemps extends React.Component {
  

  render() {


  console.log(this.props.images.list);
  console.log(this.props.images.list[14].weather[0].description);

  const switchImages = (i) => {
  for(let i =5; i <= 11; i++){
      if (this.props.images.list[i].weather[0].description === "clear sky")
          return <img src={clear} alt={"clear sky"} />
      else if (this.props.images.list[i].weather[0].description === "broken clouds")
          return <img src={storm} alt={"broken clouds"} />
      else if (this.props.images.list[i].weather[0].description === "light rain")
          return <img src={drizzle} alt={"light rain"} />
      else if (this.props.images.list[i].weather[0].description === "moderate rain")
          return <img src={drizzle} alt={"moderate rain"} />
      else if (this.props.images.list[i].weather[0].description === "few clouds")
          return <img src={storm} alt={"few clouds"} />

  }}
return (
        <div className="dayDetails">
        <article>
          <time>{this.props.time[0]}</time>
         {switchImages()}
          <span>{this.props.temp[0]}&deg;C</span>  
        </article>
        <article>
          <time>{this.props.time[1]}</time>
          {switchImages()}
          <span>{this.props.temp[1]}&deg;C</span>  
        </article>
        <article>
          <time>{this.props.time[2]}</time>
          {switchImages()}
          <span>{this.props.temp[2]}&deg;C</span>  
        </article>
        <article>
          <time>{this.props.time[3]}</time>
          {switchImages()}
          <span>{this.props.temp[3]}&deg;C</span>  
        </article>
        <article>
          <time>{this.props.time[4]}</time>
          {switchImages()}
          <span>{this.props.temp[4]}&deg;C</span>  
        </article>
        <article>
          <time>{this.props.time[5]}</time>
          {switchImages()}
          <span>{this.props.temp[5]}&deg;C</span>  
        </article>
        <article>
          <time>{this.props.time[6]}</time>
          {switchImages()}
          <span>{this.props.temp[6]}&deg;C</span>  
        </article>
      </div>
    );
  }
}


export default HurlyTemps;