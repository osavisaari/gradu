export const FADE_IN = "FADE_IN";
export const FADE_OUT = "FADE_OUT";
export const ZOOM_IN = "ZOOM_IN";
export const ZOOM_OUT = "ZOOM_OUT";
export const SLIDE_UP = "SLIDE_UP";
export const SLIDE_DOWN = "SLIDE_DOWN";

export const randomIn = [FADE_IN, ZOOM_IN, SLIDE_UP][
  Math.floor(Math.random() * 2) + 0
];

export const randomOut = [FADE_OUT, ZOOM_OUT, SLIDE_DOWN][
  Math.floor(Math.random() * 2) + 0
];
