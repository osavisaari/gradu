import React from "react";
import "./card.scss";

const Card = ({ text, onRemove }) => {
  return (
    <div className="card" onClick={() => onRemove(text)}>
      <p>{text}</p>
    </div>
  );
};

export default Card;
