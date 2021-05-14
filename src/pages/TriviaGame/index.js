import React, { useState, useEffect } from "react";
//Components
import {
  TimeLine,
  OptionCard,
  QuestionCard,
  TimeCounter,
  Spiner,
} from "../../components";

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
import { useTime } from "../../hooks/useTime";
import { useScore } from "../../hooks/useScore";

import usePlayers from "../../hooks/usePlayers";
const storage = window.localStorage;
const transitionTime = 2000;
function TriviaGame() {
  const uuid = window.localStorage.getItem("uuid");
  const name = window.localStorage.getItem("name");
  const { updatePlayerScore } = usePlayers();

  const history = useHistory();
  let timeOut;
  const { SelectedAnswerProvider } = contextSelected;
  const [selected, setSelected] = useState("");
  const { getQuestion, answers, question, loading } = useQuestion();
  const { baseTime, time, realoadInterval } = useTime({
    updateTimeWhen: [question, selected],
    baseTime: 20,
    cb: () => gameOver(score),
    isSelected: selected,
  });
  const { correctAnswer, score } = useScore();

  const optionSelected = (option) => {
    clearTimeout(timeOut);
    setSelected(option);
    realoadInterval();
    return selected;
  };

  const nextQuestion = () => {
    setTimeout(
      () =>
        getQuestion().then(() => {
          realoadInterval();
        }),
      transitionTime
    );
  };

  function gameOver(score) {
    updatePlayerScore(uuid, { name, maxScore: score });
    setTimeout(() => history.push("/score"), transitionTime);
  }

  useEffect(() => {
    if (!storage.getItem("uuid")) history.push("/");
    setSelected("");
    getQuestion();
    return () => {};
  }, []);

  useEffect(() => {
    setSelected("");
    return () => {};
  }, [answers]);

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
            <h2>Score: {score}</h2>
            <AnswerContainerStyled>
              {answers.map(({ correct, answer, option }) => (
                <OptionCard
                  key={option}
                  time={time}
                  correct={correct}
                  current={option}
                  selected={selected}
                  onClick={() => {
                    optionSelected(option);
                    if (!correct) gameOver(score);
                    else {
                      correctAnswer({ time, baseTime });
                      nextQuestion();
                    }
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
