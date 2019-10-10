import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowUp,
  faArrowDown,
  faArrowLeft,
  faArrowRight
} from "@fortawesome/free-solid-svg-icons";
import useTimeout from "use-timeout";
import "./styles.scss";

const HIDE = -1;
const UP = 38;
const DOWN = 40;
const LEFT = 37;
const RIGHT = 39;
let keyLog = [];

const ArrowSquare = () => {
  const [currentKey, setCurrentKey] = useState(HIDE);
  const [delay, setDelay] = useState(3000); // 3 sek

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
    /* Miten rajoittaa vastaukset vain yhteen / nuoli? Aiheuttaa hirveesti sotkua *
    jos jengi painelee vahingossa ylimääräisiä responsseja*/
  });

  useTimeout(() => {
    setDelay(Math.random() * 2500 + 800); // 800 - 2500 msec
    changeArrow();
  }, delay);

  const downHandler = ({ keyCode }) => {
    keyLog.push(keyCode);
    if (keyCode === currentKey) {
      console.log("oikein");
    } else if ([UP, DOWN, LEFT, RIGHT].includes(keyCode)) {
      console.log("väärin");
    }
    console.log(keyLog);
  };

  const changeArrow = () => {
    const keys = [UP, DOWN, LEFT, RIGHT].filter(key => key !== currentKey);
    const key = keys[Math.floor(Math.random() * keys.length)];
    setCurrentKey(key);
  };

  return (
    <div className="square-container">
      <div className="square">
        {currentKey === DOWN && (
          <FontAwesomeIcon icon={faArrowDown} className="arrow" size="2x" />
        )}
        {currentKey === UP && (
          <FontAwesomeIcon icon={faArrowUp} className="arrow" size="2x" />
        )}
        {currentKey === LEFT && (
          <FontAwesomeIcon icon={faArrowLeft} className="arrow" size="2x" />
        )}
        {currentKey === RIGHT && (
          <FontAwesomeIcon icon={faArrowRight} className="arrow" size="2x" />
        )}
      </div>
    </div>
  );
};

export default ArrowSquare;
