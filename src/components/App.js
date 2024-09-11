import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name1: "",
      name2: "",
      result: "",
    };
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleResult = () => {
    const { name1, name2 } = this.state;
    if (!name1 || !name2) {
      this.setState({ result: "Please Enter valid input" });
      return;
    }

    let name1Arr = name1.split("");
    let name2Arr = name2.split("");

    name1Arr.forEach((char) => {
      const index = name2Arr.indexOf(char);
      if (index !== -1) {
        name2Arr.splice(index, 1);
        name1Arr.splice(name1Arr.indexOf(char), 1);
      }
    });

    const remainingLength = name1Arr.length + name2Arr.length;
    const flamesResult = remainingLength % 6;

    const relationshipStatus = [
      "Siblings",
      "Friends",
      "Love",
      "Affection",
      "Marriage",
      "Enemy",
    ];

    this.setState({ result: relationshipStatus[flamesResult] });
  };

  handleClear = () => {
    this.setState({
      name1: "",
      name2: "",
      result: "",
    });
  };

  render() {
    return (
      <div id="main">
        {/* Do not remove the main div */}
        <input
          type="text"
          data-testid="input1"
          name="name1"
          value={this.state.name1}
          onChange={this.handleInputChange}
          placeholder="Enter first name"
        />
        <input
          type="text"
          data-testid="input2"
          name="name2"
          value={this.state.name2}
          onChange={this.handleInputChange}
          placeholder="Enter second name"
        />
        <button
          data-testid="calculate_relationship"
          onClick={this.handleResult}
        >
          Calculate Relationship Future
        </button>
        <button data-testid="clear" onClick={this.handleClear}>
          Clear
        </button>
        <h3 data-testid="answer">{this.state.result}</h3>
      </div>
    );
  }
}

export default App;
