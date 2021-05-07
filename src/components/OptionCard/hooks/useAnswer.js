import { useState } from "react";

const useAnswer = ({ correctAnswer, correct }) => {
  const [_correctAnswer, setCorrectAnswer] = useState(correctAnswer);
  const [animation, setAnimation] = useState("");

  const CorrectAnimation = `
  animation-name: ColorBlink;
  animation-duration: 0.5s;
  animation-iteration-count: 4;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  
  @keyframes ColorBlink {
    0% {
      background-color: white;
    }
    100% {
      background-color: #00FF00;
    }
  }
  `;
  const IncorrectAnimation = `
  animation-name: ColorBlink;
  animation-duration: 0.5s;
  animation-iteration-count: 4;
  animation-timing-function: linear;
  animation-fill-mode: forwards;
  
  @keyframes ColorBlink {
    0% {
      background-color: white;
    }
    100% {
      background-color: #ff0000;
    }
  }
  `;

  const selectAnswer = () => {
    if (_correctAnswer) {
      setAnimation(CorrectAnimation);
      return animation;
    } else {
      setAnimation(IncorrectAnimation);
    }
    return animation;
  };

  return {
    selectAnswer,
    animation,
    CorrectAnimation,
  };
};
export default useAnswer;
