import React from "react";
import {
  CardContainer,
  QuestionContainerStyled,
  QuestionStyled,
} from "./styles";

function OptionCard({ children }) {
  return (
    <CardContainer>
      <QuestionContainerStyled>
        <QuestionStyled>{children}</QuestionStyled>
      </QuestionContainerStyled>
    </CardContainer>
  );
}

export default OptionCard;
