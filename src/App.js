import React, { Component } from "react";
import "./App.css";
import A from "./assets/A.svg";
import B from "./assets/B.svg";
import C from "./assets/C.svg";
import D from "./assets/D.svg";
import E from "./assets/E.svg";
import oikea from "./assets/oikea.svg";
import vasen from "./assets/vasen.svg";
import ylös from "./assets/ylös.svg";
import alas from "./assets/alas.svg";
/*miten mä tuon fiksusti kaikki tarvittavat ärsykekuvat tähän?
Tarttis helpon tavan tuoda kansion sisältö yhteen arrayyn */

const suunnat = [oikea, vasen, ylös, alas];
const ESCAPE_KEY = 27;
const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;

class App extends Component {
  state = {
    suunta: oikea
  };

  handleKeyDown = event => {
    switch (event.keyCode) {
      case ESCAPE_KEY:
        this.addArrow();
        break;
      case UP:
        this.handleUp();
        break;
      case DOWN:
        this.handleDown();
        break;
      case LEFT:
        this.handleLeft();
        break;
      case RIGHT:
        this.handleRight();
        break;
    }
  };

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyDown);
  }

  handleUp = () => {
    if (this.state.suunta === ylös) {
      this.setState({ suunta: null });
    }
  };

  handleClick = () => {
    this.setState({ suunta: null });
  };

  addArrow = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    const nuoli = suunnat[randomIndex];
    this.setState({ suunta: nuoli }); // valitse randomilla
  };

  render() {
    return (
      <div className="container">
        <div className="cards">
          <img src={A} className="card" alt="A" />
          <img src={B} className="card" alt="B" />
          <img src={C} className="card" alt="C" />
          <img src={D} className="card" alt="D" />
          <img src={E} className="card" alt="E" />
        </div>
        <div className="square-container">
          <div className="square" onClick={this.handleClick}>
            {this.state.suunta && <img src={this.state.suunta} alt="arrow" />}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
