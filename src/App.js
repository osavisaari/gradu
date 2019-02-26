import React, { Component } from "react";
import "./App.css";
import "././assets/ylös.svg";
import "././assets/oikea.svg";
import "././assets/vasen.svg";

var arrows = ["1", "2", "3"];

class App extends Component {
  constructor(props) {
    super(props);
  }
  handleClick(i) {
    const Square = this.state.();
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
  }
  render() {
    let status;
    return (
      <div className="App">
        <header className="App-header" />
        <body>
          <div class="square-container" width="100%" height="100%">
            <svg class="square" />
            {/*}  <div className="image" /> */}
          </div>
        </body>
      </div>
    );

}

export default App;
