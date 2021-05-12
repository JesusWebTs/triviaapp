import React, { useState, useEffect, useLayoutEffect } from "react";
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
//Context
import contextSelected from "../../context/answerContext";
import { useHistory } from "react-router-dom";

const storage = window.localStorage;
function TriviaGame() {
  const history = useHistory();
  let timeOut;
  let baseTime = 10;
  const { SelectedAnswerProvider } = contextSelected;
  const [selected, setSelected] = useState("");
  const [time, setTime] = useState(baseTime);
  const { getQuestion, answers, question, loading } = useQuestion();
  const optionSelected = (option) => {
    clearTimeout(timeOut);
    setSelected(option);
    setTimeout(() => {
      getQuestion();
    }, 2000);
    return selected;
  };

  const gameOver = () => {
    history.push("/score");
  };

  useEffect(() => {
    if (!storage.getItem("uuid")) history.push("/");
    setInterval(() => {
      if (!selected) {
        setTime((prevState) => prevState - 1);
      }
    }, 1000);
    setSelected("");
    getQuestion();
    return () => {};
  }, []);

  useEffect(() => {
    if (time <= -2) gameOver();
    return () => {};
  }, [time]);

  useEffect(() => {
    setTime(baseTime);
    setSelected("");
    return () => {};
  }, [question]);

  useEffect(() => {
    console.log(selected);
    return () => {};
  }, [selected]);

  return (
    <TriviaContainerStyled>
      {loading ? (
        <Spiner />
      ) : (
        <>
          <SelectedAnswerProvider value={selected}>
            <ScoreVarTimeContainerStyled>
              <TimeLine time={baseTime}></TimeLine>
            </ScoreVarTimeContainerStyled>
            <TimeCounterContainerStyled>
              <TimeCounter time={baseTime}></TimeCounter>
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
                  onClick={() => {
                    if (!correct) setTimeout(() => gameOver(), 2000);
                    optionSelected(option);
                  }}
                >
                  {answer}
                </OptionCard>
              ))}
            </AnswerContainerStyled>
          </SelectedAnswerProvider>
        </>
      )}
    </TriviaContainerStyled>
  );
}

export default TriviaGame;
