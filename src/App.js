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
const CTRL = 17;
const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
const cards = [A, B, C, D, E];
const animationIn = [fadeIn, slideInRight, zoomIn]; //Tässä on animaatiot, jotka tuo kortit näkyviin
const animationOut = [fadeOut, slideOutRight, zoomOut]; //Nämä animaatiot vie kortit näkyvistä

class App extends Component {
  state = {
    suunta: suunnat[Math.floor(Math.random() * suunnat.length)],
    card: cards[Math.floor(Math.random() * cards.length)],
    A: true,
    B: true,
    C: true,
    D: true,
    E: true
  };

  handleKeyDown = event => {
    // eslint-disable-next-line
    // self.keypresslog.append([system.timems(),event.keyCode])
    switch (event.keyCode) {
      case ESCAPE_KEY:
        this.animateIn();
        break;
      case CTRL:
        this.animateOut();
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
  primaryInterval = () => {
    setTimeout(this.addArrow, Math.floor(Math.random() * (2000 - 500)) + 500);
    //this.addArrow();
  };

  addArrow = () => {
    const randomIndex = Math.floor(Math.random() * 4);
    const nuoli = suunnat[randomIndex];
    this.setState({ suunta: nuoli }); // valitse randomilla
    this.chooseCard();
  };
  animateIn = () => {
    const randomIndex = Math.floor(Math.random() * this.animationIn.length);
    const AnimateIn = this.animationIn[randomIndex]; //Tän avulla on tarkoitus arpoa käytettävä animaatio, mutta miten se animaatio saadaan näkymään?
    console.log("jes");
  };
  animateOut = () => {
    const randomIndex = Math.floor(Math.random() * this.animationOut.length);
    const animationOut = this.animationOut[randomIndex]; //Tän avulla on tarkoitus arpoa käytettävä animaatio, mutta miten se animaatio saadaan näkymään?
    console.log("juu");
  };

  chooseCard = () => {
    const randomIndex = Math.floor(Math.random() * cards.length); //Tämä arpoo sen kortin, joka animoidaan
    this.setState({ card: cards[randomIndex] });
    this.updateCard();
  };
  //Tän koko osion tarkotus oli siis hallita kunkin kortin statea ja sen avulla animaatioita, mutta jäi kesken eikä varmaan toimi halutulla tavalla muutenkaan..
  updateCard = () => {
    if (this.state.card === 0 && this.state.A === true) {
      this.setState.A = false;
      this.animateOut();
    } else if (this.state.card === 0 && this.state.A === false) {
      this.setState.A = true;
      this.animateIn();
    } else if (this.state.card === 1 && this.state.B === true) {
      this.setState.B = false;
      this.animateOut();
    } else if (this.state.card === 1 && this.state.B === false) {
      this.setState.B = true;
      this.animateIn();
    } else if (this.state.card === 2 && this.state.C === true) {
      this.setState.C = false;
      this.animateOut();
    } else if (this.state.card === 2 && this.state.C === false) {
      this.setState.C = true;
      this.animateIn();
    } else if (this.state.card === 3 && this.state.D === true) {
      this.setState.D = false;
      this.animateOut();
    } else if (this.state.card === 3 && this.state.D === false) {
      this.setState.D = true;
      this.animateIn();
    } else if (this.state.card === 4 && this.state.E === true) {
      this.setState.E = false;
      this.animateOut();
    } else if (this.state.card === 4 && this.state.E === false) {
      this.setState.E = true;
      this.animateIn();
    }
  };

  render() {
    return (
      <div className="container">
        <div className="card-container">
          <div className="cards">
            <div className="card">
              <img src={A} alt="A" />
            </div>
            <div className="card">
              <img src={B} alt="B" />
            </div>
            <div className="card">
              <img src={C} alt="C" />
            </div>
            <div className="card">
              <img src={D} alt="D" />
            </div>
            <div className="card">
              <img src={E} alt="E" />
            </div>
          </div>
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
