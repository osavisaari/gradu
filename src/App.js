import React, { useState } from "react";
import "./App.css";
import "./animate.css";
import ArrowSquare from "./components/ArrowSquare";
import CardsContainer from "./components/CardsContainer";
import DownloadButton from "./components/DownloadButton";
import arrowsX from "./components/markers/arrowsX.png";
import arrowsY from "./components/markers/arrowsY.png";
import cardsX from "./components/markers/cardsX.png";
import cardsY from "./components/markers/cardsY.png";
import topRight from "./components/markers/top-right.png";
import bottomLeft from "./components/markers/bottom-left.png";
function App() {
  const [arrows, setArrows] = useState([]);
  const [userPress, setUserPress] = useState([]);
  const [userAnimatonReactionTime, setUserAnimationReactionTime] = useState([]);
  const [animations, setAnimations] = useState([]);

  const addUserAnimationReactionTime = reactionTime => {
    setUserAnimationReactionTime([...userAnimatonReactionTime, reactionTime]);
  };

  const addArrowChange = arrow => {
    setArrows([...arrows, arrow]);
  };

  const addUserPress = press => {
    setUserPress([...userPress, press]);
  };

  const addAnimations = animation => {
    setAnimations([...animations, animation]);
  };

  return (
    <>
      <div className="container">
        <div className="topRight">
          <img src={topRight} width="60px" alt="" />
        </div>
        <div className="cardsX">
          <img src={cardsX} width="60px" alt="" />
        </div>
        <CardsContainer
          addUserAnimationReactionTime={addUserAnimationReactionTime}
          addAnimations={addAnimations}
        />
        <div className="cardsY">
          <img src={cardsY} width="60px" alt="" />
        </div>
        <div className="arrowsY">
          <img src={arrowsY} width="60px" alt="" />
        </div>

        <ArrowSquare
          addUserPress={addUserPress}
          addArrowChange={addArrowChange}
        />
        <div className="bottomLeft">
          <img src={bottomLeft} width="60px" alt="" />
        </div>

        <div className="arrowsX">
          <img src={arrowsX} width="60px" alt="" />
        </div>
      </div>
      <DownloadButton
        arrows={arrows}
        userPress={userPress}
        userAnimatonReactionTime={userAnimatonReactionTime}
        animations={animations}
      />
    </>
  );
}

export default App;
