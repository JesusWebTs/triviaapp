import { useState, useEffect } from "react";
import { sortRandomAnswerArray } from "../helpers";

import { ApiQuestions } from "../services/apiQuestions";

const conn = new ApiQuestions({
  uri: "https://opentdb.com/api.php?amount=1",
});
export const useQuestion = () => {
  const [questionData, setQuestionData] = useState({});
  const [question, setQuestion] = useState("");
  const [answers, setAnswers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    console.log(answers);
    return () => {};
  }, [answers]);

  const getQuestion = async () => {
    setLoading(true);
    conn
      .getQuestions()
      .then((res) => {
        setLoading(false);
        setQuestionData(res);
        setQuestion(res.question.replace(/&quot;/g, '"'));
        const _answers = res.incorrect_answers.map((answer) => ({
          answer: answer.replace(/&quot;/g, '"'),
          correct: false,
        }));
        _answers.push({
          answer: res.correct_answer.replace(/&quot;/g, '"'),
          correct: true,
        });
        const sortedAnswer = sortRandomAnswerArray(_answers);
        setAnswers(sortedAnswer);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return {
    questionData,
    getQuestion,
    question,
    answers,
    loading,
  };
};
