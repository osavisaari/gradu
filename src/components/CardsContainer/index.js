import React, { useEffect, useState } from "react";
import Card from "../Card";
import TransitionGroup from "react-transition-group/TransitionGroup";
import CardContainer from "../CardContainer";
import {
  FADE_IN,
  FADE_OUT,
  ZOOM_IN,
  ZOOM_OUT,
  SLIDE_DOWN,
  SLIDE_UP
} from "../../constants/animations";

import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "../../animate.css";
import "./styles.scss";

const F_KEY = 70;

const CardsContainer = () => {
  const [cards, setCards] = useState([
    { title: "A", animationClass: FADE_OUT },
    { title: "B", animationClass: SLIDE_DOWN },
    { title: "C", animationClass: ZOOM_OUT },
    { title: "D", animationClass: FADE_OUT },
    { title: "E", animationClass: FADE_OUT }
  ]);

  useEffect(() => {
    window.addEventListener("keydown", keyboardHandler);
    return () => {
      window.removeEventListener("keydown", keyboardHandler);
    };
  });

  // useTimeout(() => {
  //   setDelay(Math.random() * 5000 + 10000); // 5 - 10 sek
  //   console.log("jep");
  //   animate();
  // }, delay);

  const keyboardHandler = ({ key }) => {
    if (key === F_KEY) {
      const milliseconds = new Date().getTime();
      console.log(milliseconds);
    }
  };

  const removeCard = title => {
    setCards(cards.filter(card => title !== card.title));
    console.log(cards);
  };

  const addCard = () => {
    const oneMore = [
      ...cards.slice(0, 2),
      { title: "U", animationClass: "" },
      ...cards.slice(2, 5)
    ];
    setCards(oneMore);
    console.log(oneMore);
  };

  const animate = () => {
    setCards([
      { title: "B", animationClass: "slideOutRight" },
      { title: "C", animationClass: "slideOutRight" },
      { title: "D", animationClass: "slideOutRight" },
      { title: "A", animationClass: "slideOutRight" },
      { title: "E", animationClass: "slideOutRight" }
    ]);

    console.log(cards);
  };

  return (
    <div className="card-container">
      <div className="cards">
        <TransitionGroup enter exit>
          {cards.map(card => {
            const { animationClass, title } = card;
            if (animationClass === FADE_OUT) {
              return (
                <Fade key={title} collapse>
                  <Card
                    key={card.title}
                    text={card.title}
                    animationClass={card.animationClass}
                    onRemove={removeCard}
                  />
                </Fade>
              );
            }
            if (animationClass === FADE_IN) {
              return (
                <Fade key={title}>
                  <Card
                    key={card.title}
                    text={card.title}
                    animationClass={card.animationClass}
                    onRemove={removeCard}
                  />
                </Fade>
              );
            }
            if (animationClass === ZOOM_IN) {
              return (
                <Zoom key={title}>
                  <Card
                    key={card.title}
                    text={card.title}
                    animationClass={card.animationClass}
                    onRemove={removeCard}
                  />
                </Zoom>
              );
            }
            if (animationClass === ZOOM_OUT) {
              return (
                <Zoom key={title} collapse>
                  <Card
                    key={card.title}
                    text={card.title}
                    animationClass={card.animationClass}
                    onRemove={removeCard}
                  />
                </Zoom>
              );
            }

            if (animationClass === SLIDE_UP) {
              return (
                <Slide key={title} collapse>
                  <Card
                    key={card.title}
                    text={card.title}
                    animationClass={card.animationClass}
                    onRemove={removeCard}
                  />
                </Slide>
              );
            }

            if (animationClass === SLIDE_DOWN) {
              return (
                <Slide key={title} collapse right>
                  <Card
                    key={card.title}
                    text={card.title}
                    animationClass={card.animationClass}
                    onRemove={removeCard}
                  />
                </Slide>
              );
            }
            return (
              <Card
                key={card.title}
                text={card.title}
                animationClass={card.animationClass}
                onRemove={removeCard}
              />
            );
          })}
        </TransitionGroup>
      </div>
    </div>
  );
};

export default CardsContainer;
