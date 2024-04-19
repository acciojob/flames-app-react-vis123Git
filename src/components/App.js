import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <input type="text" data-testid="input1" placeholder="Enter first name" />
        <input type="text" data-testid="input2" placeholder="Enter second name" />
        <button data-testid="calculate_relationship">Calculate Relationship Future</button>
        <button data-testid="clear">Clear</button>
        <h3 data-testid="answer"></h3>
      </div>
    );
  }
}

export default App;
