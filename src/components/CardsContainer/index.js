import React, { useEffect, useState } from "react";
import Card from "../Card";
import useTimeout from "use-timeout";
import "../../animate.css";
import animations from "../Card/card.scss";

const F_KEY = 70;

const CardsContainer = () => {
  const [delay, setDelay] = useState(10000); // 10 sek
  const [cards, setCards] = useState([
    { title: "A", animationClass: "slideOutRight" },
    { title: "B", animationClass: "slideOutRight" },
    { title: "C", animationClass: "slideOutRight" },
    { title: "D", animationClass: "slideOutRight" },
    { title: "E", animationClass: "slideOutRight" }
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
      <div className="testi">testi</div>
      <div className="cards">
        {cards.map(card => (
          <Card
            key={card.title}
            text={card.title}
            animationClass={card.animationClass}
            toggle={() => animate()}
          />
        ))}
      </div>
    </div>
  );
};

export default CardsContainer;
