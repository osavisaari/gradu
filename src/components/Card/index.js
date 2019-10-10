import React, { useState } from "react";
import "./card.scss";
import "../../animate.css";

const Card = ({ text, animationClass, toggle }) => {
  // const [toggle, setToggle] = useState(false);
  const className = toggle ? `card ${animationClass}` : "card";

  return (
    <div className={className} onClick={toggle}>
      <p>{text}</p>
    </div>
  );
};

export default Card;
