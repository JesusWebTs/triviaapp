import React, { useContext } from "react";
import "./styles.css";
import { CardContainer, AnswerContainerStyled, AnswerStyled } from "./styles";

import SelectedContext from "../../context/answerContext";
function OptionCard({ children, onClick, correct, current, time }) {
  const { SelectedAnswerContext } = SelectedContext;
  const selected = useContext(SelectedAnswerContext);

  return (
    <CardContainer>
      <AnswerContainerStyled
        onClick={() => {
          onClick();
        }}
        className={`answer-card 
        ${
          (correct && selected) || current === selected
            ? "answer-card--correct"
            : ""
        }
        ${!correct && current === selected ? "answer-card--incorrect" : ""}
        ${selected || time <= 0 ? "disabled" : ""}
        `}
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
