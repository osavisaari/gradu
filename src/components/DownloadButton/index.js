import React from "react";

const DownloadButton = props => {
  const getData = () => {
    const { arrows, userPress, userAnimatonReactionTime, animations } = props;
    const data = {
      arrows,
      userPresses: userPress,
      userAnimatonReactionTime,
      animations
    };
    return (
      "text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(data))
    );
  };
  return (
    <a href={`data:'${getData()}'`} download={"data.json"}>
      download JSON
    </a>
  );
};

export default DownloadButton;
