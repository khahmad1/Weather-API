import React from "react";

import clear from "../img/weather-icons/clear.svg";

class Search extends React.Component {
  state = {
    input: ""
  };

  render() {
    return (
      <header>
      <form action="">
        <input className="search" type="text" name="search2" placeholder="Type in a city name"/>
          <button type="submit">Find Weather</button>
      </form>
    </header>
    );
  }
}
export default Search;
