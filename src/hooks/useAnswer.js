import { useState } from "react";

const useAnswer = ({ correctAnswer }) => {
  const [_correctAnswer, setCorrectAnswer] = useState(correctAnswer);
  const [animation, setAnimation] = useState("");
  const selectAnswer = ({ selectAnswer }) => {
    if (_correctAnswer === selectAnswer) {
      setAnimation(`
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
      `);
      return animation;
    } else {
      setAnimation(`
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
      `);
    }
    return animation;
  };

  return {
    selectAnswer,
    animation,
  };
};
export default useAnswer;
