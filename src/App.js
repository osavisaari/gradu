import React, { useState } from "react";
import "./App.css";
import "./animate.css";
import ArrowSquare from "./components/ArrowSquare";
import CardsContainer from "./components/CardsContainer";
import DownloadButton from "./components/DownloadButton";

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
        <CardsContainer
          addUserAnimationReactionTime={addUserAnimationReactionTime}
          addAnimations={addAnimations}
        />
        <ArrowSquare
          addUserPress={addUserPress}
          addArrowChange={addArrowChange}
        />
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
