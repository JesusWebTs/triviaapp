import React, { useState, useEffect } from "react";
//Components
import TimeLine from "../../components/TimeLine";
import OptionCard from "../../components/OptionCard";
import QuestionCard from "../../components/QuestionCard";
import TimeCounter from "../../components/TimeCounter";
import Spiner from "../../components/Spiner";
//Styless
import { TriviaContainerStyled } from "../styles";
import {
  ScoreVarTimeContainerStyled,
  QuestionConttainerStyled,
  AnswerContainerStyled,
  TimeCounterContainerStyled,
} from "./styles";
//Hooks
import { useQuestion } from "../../hooks/useQuestion";

function TriviaGame() {
  const [selected, setSelected] = useState("");
  const { getQuestion, answers, question, loading } = useQuestion();
  const optionSelected = (option) => {
    setSelected(option);
    setTimeout(() => {
      getQuestion();
    }, 2000);
  };

  const time = 10;

  useEffect(() => {
    setSelected("");
    getQuestion();
    return () => {};
  }, []);

  return (
    <TriviaContainerStyled>
      {loading ? (
        <Spiner />
      ) : (
        <>
          <ScoreVarTimeContainerStyled>
            <TimeLine time={time}></TimeLine>
          </ScoreVarTimeContainerStyled>
          <TimeCounterContainerStyled>
            <TimeCounter time={time}></TimeCounter>
          </TimeCounterContainerStyled>
          <QuestionConttainerStyled>
            <QuestionCard>{question}</QuestionCard>
          </QuestionConttainerStyled>
          <AnswerContainerStyled>
            {answers.map(({ correct, answer, option }) => (
              <OptionCard
                key={option}
                correct={correct}
                current={option}
                selected={selected}
                onClick={() => {
                  optionSelected(option);
                }}
              >
                {answer}
              </OptionCard>
            ))}
          </AnswerContainerStyled>
        </>
      )}
    </TriviaContainerStyled>
  );
}

export default TriviaGame;
