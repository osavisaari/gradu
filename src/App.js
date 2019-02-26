import React, { Component } from "react";
import "./App.css";
/*import "./assets/ylös.svg";
import "./assets/oikea.svg";
import "./assets/vasen.svg";
miten mä tuon fiksusti kaikki tarvittavat ärsykekuvat tähän?
Tarttis helpon tavan tuoda kansion sisältö yhteen arrayyn */

class App extends Component {
  state = { label: this.state };

  handleClick = () => {
    if (this.state.label === this.setState) {
      this.setState({
        state: (this.setState.label = "false")
      });
    } else {
      this.setState({
        state: (this.setState.label = "2")
      });
    }
  };

  render() {
    return (
      <div>
        <img src="A.png" width="50px" height="50px" alt="Aa" />
        <div className="square" onClick={this.handleClick} />
      </div>
    );
  }
}

export default App;
