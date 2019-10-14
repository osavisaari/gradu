import React from "react";

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

const CardContainer = ({ children, animationClass, text }) => {
  if (animationClass === FADE_OUT) {
    return (
      <Fade key={text} collapse bottom>
        {children}
      </Fade>
    );
  } else if (animationClass === FADE_IN) {
    return <Fade key={text}>{children}</Fade>;
  } else if (animationClass === ZOOM_IN || animationClass === ZOOM_OUT) {
    return <Zoom key={text}>{children}</Zoom>;
  } else if (animationClass === SLIDE_DOWN) {
    return <Slide key={text}>{children}</Slide>;
  } else if (animationClass === SLIDE_UP) {
    return <Slide key={text}>{children}</Slide>;
  }
  return { children };
};

export default CardContainer;
