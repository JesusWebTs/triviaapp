import React from "react";

import useAnswer from "./hooks/useAnswer";
import { CardContainer, AnswerContainerStyled, AnswerStyled } from "./styles";

function OptionCard({ children, onClick, correct, current, selected }) {
  const { animation, selectAnswer, CorrectAnimation } = useAnswer({
    correctAnswer: correct,
  });

  console.log({ children, onClick, correct, current, selected });
  return (
    <CardContainer>
      <AnswerContainerStyled
        onClick={() => {
          onClick();
          selectAnswer({ selectAnswer: current });
        }}
        animation={selected === current ? animation : ""}
      >
        <AnswerStyled>
          <span style={{ fontWeight: "bold" }}>{current}:</span>
          {children}
        </AnswerStyled>
      </AnswerContainerStyled>
    </CardContainer>
  );
}

export default OptionCard;
