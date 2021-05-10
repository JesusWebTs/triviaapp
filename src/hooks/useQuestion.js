import { useState, useEffect } from "react";
import { sortRandomAnswerArray, textFormatter } from "../helpers";

//Services
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
  useEffect(() => {
    console.log(question);
    return () => {};
  }, [question]);

  const getQuestion = async () => {
    setLoading(true);
    conn
      .getQuestions()
      .then((res) => {
        setLoading(false);
        setQuestionData(res);
        setQuestion(textFormatter(res.question));
        const _answers = res.incorrect_answers.map((answer) => ({
          answer: textFormatter(answer),
          correct: false,
        }));
        _answers.push({
          answer: textFormatter(res.correct_answer),
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
