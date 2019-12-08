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

const ArrowSquare = props => {
  const [currentKey, setCurrentKey] = useState(HIDE);
  const [delay, setDelay] = useState(3000); // 3 sek
  const [pressed, setPressed] = useState(false);

  const { addUserPress, addArrowChange } = props;

  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  });

  useTimeout(() => {
    setDelay(Math.random() * 2500 + 800); // 800 - 2500 msec
    changeArrow();
  }, delay);

  const downHandler = async ({ keyCode }) => {
    keyLog.push(keyCode);
    if (keyCode === currentKey && !pressed) {
      addUserPress({ date: new Date(), answer: true });
      setPressed(true);
    } else if ([UP, DOWN, LEFT, RIGHT].includes(keyCode) && !pressed) {
      addUserPress({ date: new Date(), answer: false });
      setPressed(true);
    }
  };

  const changeArrow = () => {
    const keys = [UP, DOWN, LEFT, RIGHT].filter(key => key !== currentKey);
    const key = keys[Math.floor(Math.random() * keys.length)];
    setCurrentKey(key);
    addArrowChange({ date: new Date(), key });
    setPressed(false);
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
