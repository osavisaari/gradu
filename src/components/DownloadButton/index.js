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
    <button
      style={{
        backgroundColor: "lightgray",
        WebkitTextStrokeColor: "black",
        width: "100px",
        position: "absolute",
        right: "50px",
        bottom: "100px"
      }}
      download
    >
      <a
        href={`data:'${getData()}'`}
        download={"data.json"}
        style={{ color: "black" }}
      >
        Download JSON
      </a>
    </button>
  );
};

export default DownloadButton;
