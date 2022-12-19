import React from "react";

import clear from "../img/weather-icons/clear.svg"
import storm from "../img/weather-icons/mostlycloudy.svg"

class HurlyTemps extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
        <div className="dayDetails">
        <article>
          <time>03:00</time>
          <img src={storm} alt="cloudy" />
          <span>8&deg;C</span>  
        </article>
        <article>
          <time>06:00</time>
          <img src={storm} alt="cloudy" />
          <span>9&deg;C</span>  
        </article>
        <article>
          <time>09:00</time>
          <img src={clear} alt="clear" />
          <span>14&deg;C</span>  
        </article>
        <article>
          <time>12:00</time>
          <img src={clear} alt="clear" />
          <span>17&deg;C</span>  
        </article>
        <article>
          <time>15:00</time>
          <img src={clear} alt="clear" />
          <span>18&deg;C</span>  
        </article>
        <article>
          <time>18:00</time>
          <img src={clear} alt="clear" />
          <span>16&deg;C</span>  
        </article>
        <article>
          <time>21:00</time>
          <img src={storm} alt="cloudy" />
          <span>13&deg;C</span>  
        </article>
      </div>
    );
  }
}
export default HurlyTemps;