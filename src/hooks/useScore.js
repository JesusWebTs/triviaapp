import { useState, useEffect } from "react";

export const useScore = () => {
  useEffect(() => {
    setScore(0);
    return () => {};
  }, []);
  const [score, setScore] = useState(0);
  const correctAnswer = ({ time, baseTime }) => {
    const percentaje = (time * 100) / baseTime;
    let point = 0;
    const points = [
      {
        percentaje: 33.333,
        point: 10,
      },
      {
        percentaje: 66.666,
        point: 20,
      },
      {
        percentaje: 100,
        point: 30,
      },
    ];
    point = points.find((el) =>
      el.percentaje >= percentaje ? el.percentaje : null
    );

    setScore((prevScore) => prevScore + point.point);
  };
  return { score, correctAnswer };
};
