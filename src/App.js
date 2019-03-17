import React, { Component } from "react";
import "./App.css";
import "./animate.css";
import A from "./assets/A.svg";
import B from "./assets/B.svg";
import C from "./assets/C.svg";
import D from "./assets/D.svg";
import E from "./assets/E.svg";
import oikea from "./assets/oikea.svg";
import vasen from "./assets/vasen.svg";
import ylös from "./assets/ylös.svg";
import alas from "./assets/alas.svg";
import { fadeIn } from "react-animations";
import { fadeOut } from "react-animations";
import { slideInRight } from "react-animations";
import { slideOutRight } from "react-animations";
import { zoomIn } from "react-animations";
import { zoomOut } from "react-animations";
/*miten mä tuon fiksusti kaikki tarvittavat ärsykekuvat tähän?*/

const suunnat = [vasen, oikea, ylös, alas];
const ESCAPE_KEY = 27;
const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const cards = [A, B, C, D, E];
const animations = [
  fadeIn,
  fadeOut,
  slideInRight,
  slideOutRight,
  zoomIn,
  zoomOut
];

class App extends Component {
  state = {
    suunta: suunnat[Math.floor(Math.random() * suunnat.length)],
    kortti: cards[Math.floor(Math.random() * cards.length)]
  };

  handleKeyDown = event => {
    // eslint-disable-next-line
    // self.keypresslog.append([system.timems(),event.keyCode])
    switch (event.keyCode) {
      case ESCAPE_KEY:
        this.animateCard();
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
      this.primaryInterval();
    }
  };
  handleRight = () => {
    if (this.state.suunta === oikea) {
      this.setState({ suunta: null });
      this.primaryInterval();
    }
  };
  handleDown = () => {
    if (this.state.suunta === alas) {
      this.setState({ suunta: null });
      this.primaryInterval();
    }
  };
  handleLeft = () => {
    if (this.state.suunta === vasen) {
      this.setState({ suunta: null });
      this.primaryInterval();
    }
  };
  animateCard = () => {
    const randomIndex = Math.floor(Math.random() * 5);
    const nextCard = cards[randomIndex];
    this.setState({ kortti: nextCard });
    console.log("jes");
    console.log(this.state.kortti);
  };

  primaryInterval = () => {
    setTimeout(this.addArrow, Math.floor(Math.random() * (2000 - 500)) + 500);
    //this.addArrow();
  };
  /* secondaryInterval = () => {
    setTimeout(this.addArrow, Math.floor(Math.random() * (3000 - 500)) + 500); */

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
          <div className="square">
            {this.state.suunta && <img src={this.state.suunta} alt="arrow" />}
          </div>
        </div>
      </div>
    );
  }
}
console.log();
export default App;
