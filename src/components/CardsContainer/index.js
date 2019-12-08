import React, { useEffect, useState } from "react";
import useTimeout from "use-timeout";
import Card from "../Card";
import TransitionGroup from "react-transition-group/TransitionGroup";
import shuffle from "shuffle-array";
import {
  FADE,
  ZOOM,
  SLIDE,
  NO_ANIMATION,
  NO_ANIMATION_BLOCK,
  FADE_ANIMATION_BLOCK,
  ZOOM_ANIMATION_BLOCK,
  SLIDE_ANIMATION_BLOCK,
  RANDOM_ANIMATION_BLOCK,
  PAUSE_ANIMATION_BLOCK
} from "../../constants/animations";
import Zoom from "react-reveal/Zoom";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
import "../../animate.css";
import "./styles.scss";

const F_KEY = 70;
const SPACE_KEY = 32;

const HOW_MANY_ANIMATIONS_IN_BLOCK = 50;

const CardsContainer = props => {
  const delay = ms => new Promise(res => setTimeout(res, ms));

  const getAnimationOrder = () => {
    let arr = [];
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < HOW_MANY_ANIMATIONS_IN_BLOCK / 5; j++) {
        arr.push(i);
      }
    }
    return shuffle(arr);
  };

  const [cards, setCards] = useState([
    { title: "A", animationClass: NO_ANIMATION },
    { title: "B", animationClass: NO_ANIMATION },
    { title: "C", animationClass: NO_ANIMATION },
    { title: "D", animationClass: NO_ANIMATION },
    { title: "E", animationClass: NO_ANIMATION }
  ]);

  const [animationDelay, setAnimationDelay] = useState(
    Math.random() * 4000 + 7000
  ); // 7000 - 11000 msec

  const [scheme] = useState([
    ...shuffle([
      { block: NO_ANIMATION_BLOCK, title: "A" },
      { block: FADE_ANIMATION_BLOCK, title: "B" },
      { block: ZOOM_ANIMATION_BLOCK, title: "C" },
      { block: SLIDE_ANIMATION_BLOCK, title: "D" },
      { block: RANDOM_ANIMATION_BLOCK, title: "E" }
    ]),
    { block: PAUSE_ANIMATION_BLOCK, title: "F" }
  ]);

  const [animationOrder, setAnimationOrder] = useState(getAnimationOrder());
  const [currentAnimation, setCurrentAnimation] = useState(0);
  const [previousAnimationBlock, setPreviousAnimationBlock] = useState(-1);
  const [currentAnimationBlock, setCurrentAnimationBlock] = useState(5);

  useTimeout(() => {
    setAnimationDelay(Math.random() * 4000 + 7000); // 7000 - 11000 msec
    const block = scheme[currentAnimationBlock].block;
    if (block !== PAUSE_ANIMATION_BLOCK) {
      animateBlock();
    }
  }, animationDelay);

  useEffect(() => {
    window.addEventListener("keydown", keyboardHandler);
    return () => {
      window.removeEventListener("keydown", keyboardHandler);
    };
  });

  const animateBlock = () => {
    if (
      currentAnimation < HOW_MANY_ANIMATIONS_IN_BLOCK &&
      currentAnimationBlock < 5
    ) {
      const block = scheme[currentAnimationBlock].block;
      const currentIndex = animationOrder[currentAnimation];
      if (block === RANDOM_ANIMATION_BLOCK) {
        animate(shuffle([NO_ANIMATION, FADE, ZOOM, SLIDE])[0], currentIndex);
      } else if (block === FADE_ANIMATION_BLOCK) {
        animate(FADE, currentIndex);
      } else if (block === ZOOM_ANIMATION_BLOCK) {
        animate(ZOOM, currentIndex);
      } else if (block === SLIDE_ANIMATION_BLOCK) {
        animate(SLIDE, currentIndex);
      } else {
        animate(NO_ANIMATION, currentIndex);
      }
      setCurrentAnimation(currentAnimation + 1);
    } else if (currentAnimation >= HOW_MANY_ANIMATIONS_IN_BLOCK) {
      setPreviousAnimationBlock(currentAnimationBlock);
      setCurrentAnimationBlock(5); // pause animation block
      setCurrentAnimation(0);
    }
  };

  const addAnimationToKey = async (key, animation) => {
    const newCardList = cards.map(card => {
      if (card.title === key) {
        return { ...card, animationClass: animation };
      }
      return { ...card, animationClass: NO_ANIMATION };
    });
    setCards(newCardList);
  };

  const keyboardHandler = ({ keyCode }) => {
    if (keyCode === F_KEY) {
      props.addUserAnimationReactionTime({ date: new Date() });
    } else if (keyCode === SPACE_KEY) {
      const block = scheme[currentAnimationBlock].block;
      if (block === PAUSE_ANIMATION_BLOCK) {
        const newAnimationOrder = getAnimationOrder;
        setAnimationOrder(newAnimationOrder);
        setCurrentAnimationBlock(previousAnimationBlock + 1);
      }
    }
  };

  const getNewPosition = removed => {
    let position = Math.floor(Math.random() * Math.floor(5));
    while (removed === position) {
      position = Math.floor(Math.random() * Math.floor(5));
    }
    return { position };
  };

  const animate = async (animation, removed) => {
    const animationData = {};
    animationData.type = animation;
    animationData.startPosition = removed + 1;
    const { position } = getNewPosition(removed);
    animationData.endPosition = position + 1;
    const removedCard = cards[removed];
    await addAnimationToKey(removedCard.title, animation);
    removedCard.animationClass = animation;
    await delay(1000);
    const listWithoutRemovedCard = cards.filter(
      e => e.title !== removedCard.title
    );
    animationData.outAnimationStartTime = new Date();
    animationData.outAnimationEndTime = new Date(
      animationData.outAnimationStartTime.getTime() + 500
    );
    await setCards(listWithoutRemovedCard);
    await delay(500);
    const listWithRemovedCard = [
      ...listWithoutRemovedCard.slice(0, position),
      removedCard,
      ...listWithoutRemovedCard.slice(position, listWithoutRemovedCard.length)
    ];
    animationData.inAnimationStartTime = new Date();
    animationData.inAnimationEndTime = new Date(
      animationData.inAnimationStartTime.getTime() + 500
    );
    await setCards([...listWithRemovedCard]);
    props.addAnimations(animationData);
  };

  const currentBlock = scheme[currentAnimationBlock].block;

  return (
    <div className="animation-view-container">
      <div>
        <h4>{`${currentBlock}`}</h4>
        <h4>{`ONGOING ANIMATION: ${currentAnimation + 1}`}</h4>
        <h3>
          {currentBlock === PAUSE_ANIMATION_BLOCK &&
            "Press space to change animation block"}
        </h3>
      </div>
      <div className="animation-block-container">
        <div className="animation-keys">
          <div className="animation-key">1</div>
          <div className="animation-key">2</div>
          <div className="animation-key">3</div>
          <div className="animation-key">4</div>
          <div className="animation-key">5</div>
        </div>
        <div className="cards-container">
          <div className="cards">
            <TransitionGroup>
              {cards.map((card, i) => {
                const { animationClass, title } = card;
                if (animationClass === FADE) {
                  return (
                    <Fade key={title} collapse>
                      <Card key={card.title} text={card.title} />
                    </Fade>
                  );
                }
                if (animationClass === ZOOM) {
                  return (
                    <Zoom key={title} collapse>
                      <Card key={card.title} text={card.title} />
                    </Zoom>
                  );
                }

                if (animationClass === SLIDE) {
                  return (
                    <Slide key={title} collapse right>
                      <Card key={card.title} text={card.title} />
                    </Slide>
                  );
                }
                return <Card key={card.title} text={card.title} />;
              })}
            </TransitionGroup>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsContainer;
